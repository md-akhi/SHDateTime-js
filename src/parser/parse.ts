/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package shdate - Date and Time Related Extensions SH{Shamsi Hijri, Solar Hijri, Iranian Hijri}
 * @link http://git.akhi.ir/js/SHDate | https://github.com/md-akhi/SHDateTime-js#readme
 */
import SHLexer from "./lexer.js";

/**
 * SHParser
 */
export default class SHParser {
	/**
	 * Lexer
	 *
	 * @var object
	 */
	public Lexer;
	time: any;
	data: any = {};
	Date: any;

	/**
	 * __construct
	 *
	 * @param  string srt
	 * @param  int time
	 * @return array
	 */
	constructor(srt: any) {
		this.Lexer = new SHLexer(srt);
		do {
			this.CompoundFormats() || this.DateFormats() || this.TimeFormats();
			// ||this.RelativeFormats();
		} while (this.nextToken());
		return this.data;
	}

	/**
	 * Compound Formats
	 * Localized Notations
	 * YY "-" MM "-" DD "T" HH ":" II ":" SS frac tzcorrection?
	 * YY-MM-DD HH:II:SS
	 * dd/M/Y:HH:II:SS tspace tzcorrection
	 * YY-?"W"W-?[0-7]
	 * YY .? doy
	 * "@" "-"? [0-9]+ // time
	 *
	 * @return bool
	 */
	public CompoundFormats(): boolean {
		return this.standardsFormats() || this.compoundLocalizedNotations();
	}
	// https://www.php.net/manual/en/datetime.formats.php

	// "70/01/01" // 0 in all implementations
	// "1970,1,1" // 0 in Chrome and Firefox, NaN in Safari
	// "Jan 1, 1970" // 0 in all implementations
	// "0" //(Sat Jan 01 2000 00:00:00 GMT+0000) || (Sat Jan 01 0000 00:00:00 GMT+0000)
	// YYYY = four-digit year or six digit year as +YYYYYY or -YYYYYY
	// YYYY-MM (eg 1997-07)
	// YYYY-MM-DD (eg 1997-07-16)
	// "1970-1-1"   "1970-01-01"

	// dd-MMM-yyyy
	// dd-MMM-yy
	// yy-MMM-dd
	// "ddd, MMM dd, yyyy H:mm:ss tt",
	// "ddd MMM d yyyy HH:mm:ss zzz",
	// "Thu, 01 Jan 1970 00:00:00 GMT+0300"
	// Thu Jan 01 1970 00:00:00 GMT+0000
	// "Thu, 01 Jan 1970 00:00:00" // 0 in all implementations
	/* Tue Oct 31 2000 09:41:40 GMT-0800 */
	/* Tue Oct 31 2000 */
	// 11.03.22 or 11Mar22

	// "MMddyyyy",
	// "ddMMyyyy",
	// "Mddyyyy",
	// "ddMyyyy",
	// "Mdyyyy",
	// "dMyyyy",
	// "Mdyy",
	// "dMyy",
	// "d"

	// TZD  = time zone designator (Z or +hh:mm or -hh:mm or missing for local)
	// UT +00:19:32.13, from 1909 to 1937
	// THH:mm
	// Thh:mm TZD (eg T19:20+01:00)
	// THH:mm:ss
	// Thh:mm:ss TZD (eg T19:20:30+01:00)
	// "01:00:00 GMT-0800 (PST)"
	// "03:00:00 GMT-0700 (PDT)"
	/* 09:41:40 GMT-0800 */
	// "T19:00:00Z" default to 1970-01-01
	// "T19:00:00+0700"   "T19:00:00+07:00".
	// THH:mm:ss.sss
	// Thh:mm:ss.s TZD (eg T19:20:30.45+01:00)
	// 271821-04-20T00:00:00Z	271822 B.C.
	// -000001-01-01T00:00:00Z	2 B.C.
	// +000000-01-01T00:00:00Z	1 B.C.
	// +000001-01-01T00:00:00Z	1 A.D.
	// +001970-01-01T00:00:00Z	1970 A.D.
	// +002009-12-15T00:00:00Z	2009 A.D.
	// +275760-09-13T00:00:00Z	275760 A.D.
	standardsFormats() {
		return this.dateTimeTZ() || this.dateWithAbbrTimeTZ();
	}

	/**
	 * ISO8601	"2022-06-02T16:58:35+0000"
	 * Atom, RFC 3339, W3C	"2022-06-02T16:58:35+00:00"
	 * RFC 3339 Extended	"2022-06-02T16:58:35.698+00:00"
	 * @returns
	 */
	dateTimeTZ() {
		if (this.dateWithDash(true) && this.time24Notation(true, true, true, true))
			return true;
		return false;
	}

	compoundLocalizedNotations() {
		return (
			this.CommonLogFormat() || // Common Log Format	dd "/" M "/" YY : HH ":" II ":" SS space tzcorrection	"10/Oct/2000:13:55:36 -0700" // EXIF	YY ":" MM ":" DD " " HH ":" II ":" SS	"2008:08:07 18:11:31"// MySQL	YY "-" MM "-" DD " " HH ":" II ":" SS	"2008-08-07 18:11:31"
			this.isoYearWeekDay() || // ISO year with ISO week and day	YY "-"? "W" W "-"? [0-7]	"2008W273", "2008-W28-3"
			this.postgreSQL() || // PostgreSQL: Year with day-of-year	YY "."? doy	"2008.197", "2008197"
			this.unixTimestamp() // Unix Timestamp	"@" "-"? [0-9]+	"@1215282385" // Unix Timestamp with microseconds	"@" "-"? [0-9]+ "." [0-9]{0,6}	"@1607974647.503686"
			// SOAP	YY "-" MM "-" DD "T" HH ":" II ":" SS frac tzcorrection?	"2008-07-01T22:35:17.02", "2008-07-01T22:35:17.03+08:00"
		);
		// ||this.MSSQL()
		// XMLRPC	YY MM DD "T" hh ":" II ":" SS	"20080701T22:38:07", "20080701T9:38:07"
		// XMLRPC (Compact)	YY MM DD 't' hh II SS	"20080701t223807", "20080701T093807"
	}

	/**
	 * Date Formats
	 *
	 * @return bool
	 */
	DateFormats() {
		// Localized Notations
		return this.ISO8601Notations() || this.dateLocalizedNotations();
	}

	ISO8601Notations() {
		return (
			this.dateWithSlash(true) || // YY "/" MM "/" DD
			this.dateWithDash(true) || // [+-]? YY "-" MM "-" DD
			//this.dateWithDash(false, true) || // YY "-" MM "-" DD
			this.dateWithDash(false) || // YY "-" MM Day reset to 1
			this.dateWithSlash(false) || // YY "/" MM Day reset to 1
			this.dateWithOut() // ISO  YY  MM  DD
		);
	}

	dateLocalizedNotations() {
		return (
			// this.dedateWithSlash() || // dd "/" mm "/" YY
			this.Date1Abbr(true) || // y "-" M "-" DD
			// this.dayMonth4Year() || // Day, month and four digit year, with dots, tabs or dashes
			this.dayTextualMonthYear() || // Day, textual month and year
			// this.textualMonth4Year() || // Day and textual month
			this.year4TextualMonth() || // YY ([ \t.])* m    Day reset to 1
			this.textualMonthYear4() ||
			this.textualMonthDayYear() ||
			// this.monthAbbrDayYear()||
			this.dateyear4MandatoryPrefix() ||
			this.dateMonthTextual()
		);
	}

	/**
	 * TimeFormats
	 *
	 * @return bool
	 */
	TimeFormats() {
		return (
			this.time24Notation(true, true, true, true) ||
			this.time12Notation(true, true, true, true)
		);
	}

	/**
	 * Common Log Format (YYYY/MM/DDT:HH:II:SS)
	 * YY "/" MM "/" DD "T" HH ":" II ":" SS frac tzcorrection?
	 *
	 * @return bool
	 */
	CommonLogFormat() {
		const pos = this.getPosition();
		if (this.dateWithSlash(true) && this.time24Notation(true, true, true, true))
			return true;
		this.resetPosition(pos);
		return false;
	}

	/**
	 * ISO year with ISO week (YYYY-?Ww)
	 * ISO year with ISO week and day (YYYY - Ww -? D?) {W=0-53, D=0-7}
	 *
	 * @return bool
	 */
	isoYearWeekDay() {
		const pos = this.getPosition();
		const year = this.year4();
		if (year) {
			this.isTKDash();
			if (this.isTKSignWeek()) {
				const week = this.int10To53() || this.int00To09(); // week of year (W)
				if (week) {
					this.data["YEAR"] = year;
					this.data["WEEK_OF_YEAR"] = week;
					this.isTKDash();
					const dow = this.int0To7();
					if (dow) {
						this.data["DAY_OF_WEEK"] = dow;
					}
					return true;
				}
				throw new Error("week between 00 - 53 - ex 1402W01-5 || 1402W015");
			}
		}
		this.resetPosition(pos);
		return false;
	}

	// /**
	//  * dateWithSpaceTime (YYYY-MM-DD HH:II:SS)
	//  *
	//  * @return bool
	//  */
	// dateWithSpaceTime() {
	// 	let pos = this.getPosition();
	// 	if (this.dateWithDash() && this.isTKSpace() && this.time24Notation())
	// 		return true;
	// 	this.resetPosition(pos);
	// 	return false;
	// }

	/**
	 * PostgreSQL: Year with day-of-year (YYYY.doy)
	 *
	 * @return bool
	 */
	postgreSQL() {
		const pos = this.getPosition();
		const year = this.year4();
		if (year && this.isTKDot()) {
			const doy = `${this.int10To36() || this.int00To09()}${this.int0To9()}`; // day Of Year (000-366)
			if (doy) {
				this.data["YEAR"] = year;
				this.data["DAY_OF_YEAR"] = doy;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Unix Timestamp (@[-+][0-9]+)
	 *
	 * @return bool
	 */
	unixTimestamp() {
		const pos = this.getPosition();
		if (this.isTKAT()) {
			const [sign, num] = this.number();
			if (num) {
				if (typeof sign == "number") this.data["SIGN_TIMESTAMP"] = sign;
				this.data["TIMESTAMP"] = num;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Hour, optional minutes and seconds, with meridian
	 * T? hh [.:]? MM? [.:]? II? frac? space? meridian
	 * MS SQL (Hour, minutes, seconds and fraction with meridian)
	 * hh ":" II ":" SS [.:] [0-9]+ meridian
	 *
	 * @return bool
	 */
	time12Notation(
		issign = false,
		issec = false,
		isfrac = false,
		ismeridian = false
	) {
		const pos = this.getPosition();
		if (issign) this.isTKSignTime();
		const h12 = this.H12();
		if (h12 && this.isTKColon()) {
			const min = this.minutes();
			if (min) {
				this.data["HOURS"] = h12;
				this.data["MINUTES"] = min;
				if (issec) {
					this.isTKColon();
					const sec = this.seconds();
					if (sec) {
						this.data["SECONDS"] = sec;
						if (isfrac) {
							const frac = this.fractionalSecond();
							if (frac) {
								this.data["FRACTION"] = frac;
							}
						}
					}
				}
				if (ismeridian) {
					this.isTKSpace();
					this.meridian();
				}
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Hour, minutes and optional seconds, optional colon and dot
	 * Hour, minutes, seconds and timezone
	 * Hour, minutes, seconds and fraction
		// 't'? HH [.:] MM [.:]? II? (frac | (space? ( tzcorrection | tz )))
	 * Time zone information
	 *
	 * @return bool
	 */
	time24Notation(issign = false, issec = true, isfrac = false, istz = true) {
		const pos = this.getPosition();
		if (issign) this.isTKSignTime();
		const h24 = this.H24();
		if (h24 && this.isTKColon()) {
			const min = this.minutes(false);
			if (min) {
				this.data["HOURS"] = h24;
				this.data["MINUTES"] = min;
				const pos2 = this.getPosition();
				if (issec) {
					this.isTKColon();
					const sec = this.seconds(false);
					if (sec) {
						this.data["SECONDS"] = sec;
						if (isfrac) {
							const frac = this.fractionalSecond();
							if (frac) {
								this.data["FRACTION"] = frac;
							}
						}
					}
				} else this.resetPosition(pos2);
				if (istz) {
					this.isTKSpace();
					this.TZCorrection() || this.timeZone();
				}
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Time Zone Correction {"GMT"? [+-] hh ":"? MM?}
	 *
	 * @return bool
	 */
	TZCorrection() {
		let isTZ: boolean = false;
		const name = this.nameToken();
		const setTZ = (name: any, time: any) => {
			this.data["TZ_NAME"] = name;
			this.data["TZ_TIME"] = time;
		};
		switch (name) {
			case "UTC": // 0 H
				setTZ("GMT", 0);
				isTZ = true;
				this.nextToken();
				break;
			case "IRST": // 3.5 H
				setTZ("IRST", 210 * 60000); // min to ms
				isTZ = true;
				this.nextToken();
				break;
			case "EDT": // 4 H
				setTZ("EDT", 240 * 60000); // min to ms
				isTZ = true;
				this.nextToken();
				break;
			case "EST": // 5 H
			case "CDT": // 5 H
				setTZ(name, 300 * 60000); // min to ms
				isTZ = true;
				this.nextToken();
				break;
			case "CST": // 6 H
			case "MDT": // 6 H
				setTZ(name, 360 * 60000); // min to ms
				isTZ = true;
				this.nextToken();
				break;
			case "MST": // 7 H
			case "PDT": // 7 H
				setTZ(name, 420 * 60000); // min to ms
				isTZ = true;
				this.nextToken();
				break;
			case "PST": // 8 H
				setTZ("PST", 480 * 60000); // min to ms
				isTZ = true;
				this.nextToken();
				break;
			default:
				isTZ = this.timeZone();
				break;
		}
		let PLUS_DASH: boolean = false,
			time: number = 0,
			sign: number = 1; // default plus
		PLUS_DASH = false;
		if (this.isTKPlus()) {
			sign = 1; // default plus
			PLUS_DASH = true;
		} else if (this.isTKDash()) {
			sign = -1;
			PLUS_DASH = true;
		}
		if (PLUS_DASH) {
			const h12 = this.H12();
			if (h12) {
				time += h12 * 60;
				this.isTKColon();
				const min = this.minutes();
				if (min) {
					time += min * 1; // min to ms
					setTZ(name, sign * time * 60 * 1000); // min to ms
					return true;
				}
			}
		} else if (isTZ) return true;
		return false;
	}

	/**
	 * timeZone {"("? [A-Za-z]{1,6} ")"? | [A-Z][a-z]+([_/][A-Z][a-z]+)+}
	 *
	 * @return bool
	 */
	timeZone() {
		if (this.isToken("TZ")) {
			this.data["TZ_NAME"] = this.valueToken();
			return true;
		}
		return false;
	}

	// Relative

	/**
	 * number {[+-]?[0-9]+}
	 *
	 * @param  int $num
	 * @param  string sign
	 * @return bool
	 */
	number(issign = false, count = false): any {
		let int,
			num: string = "",
			isInt = false;
		const pos = this.getPosition();
		const sign = this.signNumber() || 1;
		while ((int = this.int00To99() || this.int0To9())) {
			num += int; //sprintf('%s%s',$num,int);
			isInt = true;
		}
		if (isInt) {
			return [sign, num];
		}
		this.resetPosition(pos);
		return false;
	}

	// /**
	//  * set Date/Time
	//  *
	//  * @param  int time
	//  * @return void
	//  */
	// setDateTime(time: any) {
	// 	//let date = this.Date.getDates(time);
	// 	// console.log(date);
	// 	// this.data["DATE"] = date;
	// 	// this.data["YEAR"] = date["year"];
	// 	// this.data["MONTH"] = date["mon"];
	// 	// this.data["DAY"] = date["mday"];
	// 	// this.data["HOURS"] = date["hours"];
	// 	// this.data["MINUTES"] = date["minutes"];
	// 	// this.data["SECONDS"] = date["seconds"];
	// 	// this.data["TIMESTAMP"] = time;
	// 	//this.data["GDATE"] = this.getdate(time);
	// }

	// ======================================================================================
	// ==================================   Used Symbols   ==================================
	// ======================================================================================

	/**
	 * hours (hh) {"0"?[1-9] | "1"[0-2]}
	 * a number between 1 and 12 inclusive, with a optional 0 prefix before numbers (1-12)
	 *
	 * @param  int int
	 * @return bool
	 */
	H12(isMandatoryPrefix = true): any {
		if (isMandatoryPrefix) return this.int10To12() || this.int01To09();
		return this.H12(true) || this.int1To9();
	}

	/**
	 * hours (HH) {[01][0-9] | "2"[0-4]}
	 * a number between 01 and 24 inclusive, with a mandatory 0 prefix before numbers (01-24)
	 *
	 * @param  int int
	 * @return bool
	 */
	H24(isMandatoryPrefix = true): any {
		if (isMandatoryPrefix) return this.int10To24() || this.int00To09();
		return this.H24(true) || this.int0To9();
	}

	/**
	 * meridian am/pm indicator [AaPp] .? [Mm] .?
	 *
	 * @param  int str
	 * @return bool
	 */
	meridian() {
		if (this.isToken("AM")) {
			//00:00-11:59
			this.data["MERIDIAN"] = false;
			this.nextToken();
			return true;
		} else if (this.isToken("PM")) {
			//12:00-23:59
			this.nextToken();
			this.data["MERIDIAN"] = true;
			return true;
		}
		return false;
	}

	/**
	 * minutes (II) [0-5][0-9]
	 * a number between 01 and 59 inclusive, with a mandatory 0 prefix before numbers 0-9
	 * [0-9]{2}
	 *
	 * @param  int int
	 * @return bool
	 */
	/**
	 * minutes (ii) {	[0-5]?[0-9]}
	 * a number between 1 and 59 inclusive, with an optional 0 prefix before numbers 0-9
	 * [0-9]{1,2}
	 *
	 * @param  int int
	 * @return bool
	 */
	minutes(isMandatoryPrefix = true): any {
		if (isMandatoryPrefix) return this.int10To59() || this.int00To09();
		return this.minutes(true) || this.int0To9();
	}

	/**
	 * seconds (SS) {[0-5][0-9]}
	 * a number between 01 and 59 inclusive, with a mandatory 0 prefix before numbers 0-9
	 * [0-9]{2}
	 *
	 * @param  int int
	 * @return bool
	 */
	/**
	 * seconds (ss) {([0-5]?[0-9])|60}
	 * a number between 1 and 59 inclusive, with an optional 0 prefix before numbers 0-9
	 * [0-9]{1,2}
	 *
	 * @param  int int
	 * @return bool
	 */
	seconds(isMandatoryPrefix = true): any {
		if (isMandatoryPrefix) return this.int10To59() || this.int00To09();
		return this.seconds(true) || this.int0To9();
	}

	/**
	 * fractional second (frac) {.[0-9]+}
	 *
	 * @param  int num
	 * @return bool
	 */
	fractionalSecond() {
		if (this.isTKDot()) {
			let int,
				isFrac = false;
			while ((int = this.int00To99() || this.int0To9())) {
				//this.number()
				this.data["FRACTION"] += int; //sprintf('%s%s',num,int);
				isFrac = true;
			}
			return true && isFrac;
		}
		return false;
	}

	dateyear4MandatoryPrefix() {
		const pos = this.getPosition();
		const year = this.year4();
		if (year) {
			this.data["YEAR"] = year;
			return true;
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Four digit year, month and day with slashes
	 * YY "/" mm "/" dd
	 * Four digit year, month and day
	 * YY "/" MM "/" DD
	 *
	 * @return bool
	 */
	dateWithSlash(isday = false) {
		const pos = this.getPosition();
		const year = this.year4();
		if (year && this.isTKSlash()) {
			const month = this.month(true) || this.monthTextual();
			if (month) {
				this.data["YEAR"] = year;
				this.data["MONTH"] = month;
				const pos2 = this.getPosition();
				if (isday && this.isTKSlash()) {
					const day = this.day(true);
					if (day) {
						this.data["DAY"] = day;
					} else this.resetPosition(pos2);
				}
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * day, month and Four digit year with slashes
	 * dd "/" mm "/" YY
	 * day, month and Four digit year
	 * DD "/" MM "/" YY
	 *
	 * @return bool
	 */
	// dedateWithSlash() {
	// 	let pos, year, month, day;
	// 	pos = this.getPosition();
	// 	day = this.dayWithSuffix();
	// 	if (day && this.isTKSlash()) {
	// 		month = this.month(false);
	// 		if (month && this.isTKSlash()) {
	// 			year = this.year4();
	// 			if (year) {
	// 				this.data["DAY"] = day;
	// 				this.data["MONTH"] = month;
	// 				this.data["YEAR"] = year;
	// 				return true;
	// 			}
	// 		}
	// 	}
	// 	this.resetPosition(pos);
	// 	return false;
	// }

	/**
	 * Four digit year and month (GNU)
	 * ISO  YY  MM  DD
	 *
	 * @return bool
	 */
	dateWithOut() {
		const pos = this.getPosition();
		const year = this.year4();
		if (year) {
			const month = this.month(true) || this.monthTextual();
			if (month) {
				const day = this.day(true);
				if (day) {
					this.data["YEAR"] = year;
					this.data["MONTH"] = month;
					this.data["DAY"] = day;
					return true;
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Four digit year with optional sign, month and day
	 * [+-]? YY "-" MM "-" DD
	 * Four digit year, month and day with Dash
	 * YY "-" mm "-" dd
	 * Four digit year, month and day
	 * YY "-" MM "-" DD
	 * Four digit year and month (GNU)
	 * YY "-" mm
	 * Two digit year, month and day with dashes
	 * yy "-" MM "-" DD
	 *
	 * @return bool
	 */
	dateWithDash(isday = false) {
		let sign;
		const pos = this.getPosition();
		//if (issign) sign = this.signNumber();
		const year = this.year4();
		if (year && this.isTKDash()) {
			const month = this.month(true) || this.monthTextual();
			if (month) {
				//if (issign) this.data["SIGN_DATE"] = sign;
				this.data["YEAR"] = year;
				this.data["MONTH"] = month;
				const pos2 = this.getPosition();
				if (isday && this.isTKDash()) {
					const day = this.day(true);
					if (day) this.data["DAY"] = day;
					else this.resetPosition(pos2);
				}
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Four digit year and textual month (Day reset to 1)
		// YY ([ \t.-])* m    Day reset to 1
	 *
	 * @return bool
	 */
	year4TextualMonth() {
		const pos = this.getPosition();
		const year = this.year4();
		if (year && (this.isTKSpace() || this.isTKDot())) {
			const month = this.monthTextual();
			if (month) {
				this.data["YEAR"] = year;
				this.data["MONTH"] = month;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
		 * Year, month abbreviation and day
			// YY "-" M "-" DD
		 *
		 * @return bool
		 */
	Date1Abbr(isday = false) {
		const pos = this.getPosition();
		const year = this.year4();
		if (year && this.isTKDash()) {
			const month = this.monthTextual();
			if (month) {
				this.data["YEAR"] = year;
				this.data["MONTH"] = month;
				const pos2 = this.getPosition();
				if (isday && this.isTKDash()) {
					const day = this.day(true);
					if (day) {
						this.data["DAY"] = day;
						return true;
					}
				} else this.resetPosition(pos2);
			}
		}
		this.resetPosition(pos);
		return false;
	}

	// COOKIE	"Thursday, 02-Jun-2022 16:58:35 UTC"
	// RFC 7231	"Thu, 02 Jun 2022 16:58:35 GMT"
	// RFC 850	"Thursday, 02-Jun-22 16:58:35 UTC"
	// RFC 822, RFC 1036	"Thu, 02 Jun 22 16:58:35 +0000"
	// RFC 1123, RFC 2822, RSS	"Thu, 02 Jun 2022 16:58:35 +0000"

	dateWithAbbrTimeTZ(isdname = false) {
		const pos = this.getPosition();
		if (this.dayNeme()) {
			this.isTKComma();
			this.isTKSpace();
			this.isTKComma();
		}
		const day = this.day(true);
		if (day) {
			this.isTKDash() || this.isTKSpace();
			const month = this.monthTextual();
			if (month) {
				this.isTKDash() || this.isTKSpace();
				const year = this.year4() || this.year2(true);
				if (
					year &&
					this.isTKSpace() &&
					this.time24Notation(true, true, true, true)
				) {
					this.data["YEAR"] = year;
					this.data["MONTH"] = month;
					this.data["DAY"] = day;
					return true;
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * year
	 * a number with exactly four digits
	 * [0-9]{4}
	 *
	 * @return bool
	 */
	year4() {
		const y1 = this.year2(true);
		const y2 = this.year2(true);
		if (y1 && y2) return y1 + y2;
		return false;
	}

	/**
	 *	a number with exactly two digits (YY)
	 *	[0-9]{2}
	 *
	 * @return false|number
	 */
	year2(isMandatoryPrefix = true): string | false {
		if (isMandatoryPrefix) return this.int00To99();
		return this.year2(true) || this.int0To9();
	}

	/**
	 * year
	 * a number between 01 and 9999 inclusive, with an optional 0 prefix before numbers 0-9
	 * 0?[0-9]{2,4}
	 *
	 * @return false|string
	 */
	// year1or4() {
	// 	const y1 = this.year2(false);
	// 	if (y1) {
	// 		const y2 = this.year2(false);
	// 		if (y2) return y1 + y2;
	// 		return y1;
	// 	}
	// 	return false;
	// }

	/**
	 * day (dd) {([0-2]?[0-9] | "3"[01]) daysuf?}
	 * a number between 1 and 31 inclusive, with an optional 0 prefix before numbers 0-9
	 *
	 * @return bool
	 */
	dayWithSuffix() {
		const int = this.day(true);
		if (int) {
			this.daySuffixTextual();
			return int;
		}
		return false;
	}

	/**
	 * day (DD) {"0" [0-9] | [1-2][0-9] | "3" [01]}
	 * a number between 01 and 31 inclusive, with a mandatory 0 prefix before numbers 0-9
	 *
	 * @return bool
	 */
	day(isMandatoryPrefix = true): any {
		if (isMandatoryPrefix) return this.int10To31() || this.int00To09();
		return this.day(true) || this.int0To9();
	}

	/**
	 * daySuffixTextual (daysuf) {"st" | "nd" | "rd" | "th"}
	 *
	 * @return bool
	 */
	daySuffixTextual() {
		if (this.isToken("SUFFIXES")) {
			this.data["SUFFIXES"] = this.valueToken();
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * Day, month and four digit year, with dots, tabs or dashes
	 * dd [\t-] mm [-] YY
	 *
	 * @return bool
	//  */
	// dayMonth4Year() {
	// 	let year,
	// 		month,
	// 		day,
	// 		pos = this.getPosition();
	// 	day = this.dayWithSuffix();
	// 	if (day && (this.isTKSpace() || this.isTKDash())) {
	// 		month = this.month(false);
	// 		if (month && this.isTKDash()) {
	// 			year = this.year4();
	// 			if (year) {
	// 				this.data["DAY"] = day;
	// 				this.data["MONTH"] = month;
	// 				this.data["YEAR"] = year;
	// 				return true;
	// 			}
	// 		}
	// 	}
	// 	this.resetPosition(pos);
	// 	return false;
	// }

	/**
	 * Day, textual month and year
	 * dd ([ \t-]) m ([ \t-]) YY
	 * d ([ \t-]) m
	 *
	 * @return bool
	 */
	dayTextualMonthYear() {
		let year,
			month,
			day,
			pos = this.getPosition();
		day = this.dayWithSuffix();
		if (day) {
			// console.log(this.nameToken());
			this.isTKSpace() || this.isTKDash();
			month = this.monthTextual();
			if (month) {
				this.data["DAY"] = day;
				this.data["MONTH"] = month;
				this.isTKSpace() || this.isTKDash();
				year = this.year4();
				if (year) {
					this.data["YEAR"] = year;
				}
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Textual month and four digit year (Day reset to 1)
	 * m ([ \t.-])* YY         Day reset to 1
	 *
	 * @return bool
	//  */
	// textualMonth4Year() {
	// 	let year,
	// 		month,
	// 		day,
	// 		pos = this.getPosition();
	// 	month = this.monthTextual();
	// 	if (month) {
	// 		while (this.isTKSpace() || this.isTKDot() || this.isTKDash());
	// 		year = this.year4();
	// 		if (year) {
	// 			this.data["YEAR"] = year;
	// 			this.data["MONTH"] = month;
	// 			this.data["DAY"] = 1;
	// 			return true;
	// 		}
	// 	}
	// 	this.resetPosition(pos);
	// 	return false;
	// }

	textualMonthYear4() {
		const pos = this.getPosition();
		const month = this.monthTextual();
		if (month) {
			this.isTKSpace() || this.isTKDash();
			const year = this.year4();
			if (year) {
				this.data["YEAR"] = year;
				this.data["MONTH"] = month;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Textual month and year
	 * m ([ .\t-])? dd [,.stndrh\t ]? y?
	 *
	 * @return bool
	 */
	textualMonthDayYear() {
		let year,
			month,
			day,
			pos = this.getPosition();
		month = this.monthTextual();
		if (month) {
			this.isTKSpace() || this.isTKDot() || this.isTKDash();
			day = this.dayWithSuffix();
			if (day) {
				this.daySuffixTextual();
				this.isTKSpace() || this.isTKComma() || this.isTKDot();
				year = this.year4();
				if (year) {
					this.data["YEAR"] = year;
				}
				this.data["MONTH"] = month;
				this.data["DAY"] = day;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Month abbreviation, day and year
	 * M "-" DD "-" y
	 *
	 * @return bool
	//  */
	// monthAbbrDayYear() {
	// 	let year,
	// 		month,
	// 		day,
	// 		pos = this.getPosition();
	// 	month = this.monthTextual();
	// 	if (month && this.isTKDash()) {
	// 		day = this.day(true);
	// 		if (day && this.isTKDash()) {
	// 			year = this.year1or4();
	// 			if (year) {
	// 				this.data["YEAR"] = year;
	// 				this.data["MONTH"] = month;
	// 				this.data["DAY"] = day;
	// 				return true;
	// 			}
	// 		}
	// 	}
	// 	this.resetPosition(pos);
	// 	return false;
	// }

	dateMonthTextual() {
		const pos = this.getPosition();
		const month = this.monthTextual();
		if (month) {
			this.data["MONTH"] = month;
			return true;
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Textual abbreviation month (M)  (and just the month)
	 * Textual month (and just the month) (m)
	 *
	 * @return false|number
	 */
	monthTextual() {
		switch (this.nameToken()) {
			case "FARVARDIN":
			case "INT_I":
				this.nextToken();
				return 1;
			case "ORDIBEHESHT":
			case "INT_II":
				this.nextToken();
				return 2;
			case "KHORDAD":
			case "INT_III":
				this.nextToken();
				return 3;
			case "TIR":
			case "INT_IV":
				this.nextToken();
				return 4;
			case "AMORDAD":
			case "INT_V":
				this.nextToken();
				return 5;
			case "SHAHRIVAR":
			case "INT_VI":
				this.nextToken();
				return 6;
			case "MEHR":
			case "INT_VII":
				this.nextToken();
				return 7;
			case "ABAN":
			case "INT_VIII":
				this.nextToken();
				return 8;
			case "AZAR":
			case "INT_IX":
				this.nextToken();
				return 9;
			case "DEY":
			case "INT_X":
				this.nextToken();
				return 10;
			case "BAHMAN":
			case "INT_XI":
				this.nextToken();
				return 11;
			case "ESFAND":
			case "INT_XII":
				this.nextToken();
				return 12;
			default:
				return false;
		}
	}

	/**
	 * month (mm) {	"0"? [0-9] | "1"[0-2]}
	 * a number between 1 and 12 inclusive, with an optional 0 prefix before numbers 0-9
	 *
	 * @return bool
	 */
	/**
	 * month (MM) {	"0" [0-9] | "1"[0-2]}
	 * a number between 1 and 12 inclusive, with an mandatory 0 prefix before numbers 0-9
	 *
	 * @return bool
	 */
	month(isMandatoryPrefix = true): string | false {
		if (isMandatoryPrefix) return this.int10To12() || this.int00To09();
		return this.month(true) || this.int0To9();
	}

	// Relative

	/**
	 * day neme
	 *
	 * @return bool
	 */
	dayNeme(): number | false {
		switch (this.nameToken()) {
			case "SATURDAY":
				this.nextToken();
				return 0;
			case "SUNDAY":
				this.nextToken();
				return 1;
			case "MONDAY":
				this.nextToken();
				return 2;
			case "TUESDAY":
				this.nextToken();
				return 3;
			case "WEDNESDAY":
				this.nextToken();
				return 4;
			case "THURSDAY":
				this.nextToken();
				return 5;
			case "FRIDAY":
				this.nextToken();
				return 6;
			default:
				return false;
		}
	}

	/**
	 * day text
	 *
	 * @return bool
	 */
	daytext(): boolean {
		if (this.isToken("WEEKDAY")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * number sign
	 *
	 * @return bool
	 */
	signNumber(): number | false {
		if (this.isTKPlus()) {
			this.nextToken();
			return 1;
		} else if (this.isTKDash()) {
			this.nextToken();
			return -1;
		}
		return false;
	}

	/**
	 * Ordinal number
	 *
	 * @param  int int
	 * @return bool
	 */
	// ordinal(): string | false {
	// 	return this.firstToThirtyFirstTextual() || this.relText();
	// }

	/** //todo
	 * relative text
	 *
	 * @return bool
	 */
	// relText(): number | false {
	// 	switch (this.nameToken()) {
	// 		case "THIS":
	// 			this.nextToken();
	// 			return 0;
	// 		case "NEXT":
	// 			this.nextToken();
	// 			return 1;
	// 		case "PREVIOUS":
	// 			this.nextToken();
	// 			return -1;
	// 		case "LAST":
	// 			this.nextToken();
	// 			return 2;
	// 		default:
	// 			return false;
	// 	}
	// }

	/**
	 * unit {'ms' | 'µs' | (( 'msec' | 'millisecond' | 'µsec' | 'microsecond' | 'usec' | 'sec' | 'second' | 'min' | 'minute' | 'hour' | 'day' | 'fortnight' | 'forthnight' | 'month' | 'year') 's'?) | 'weeks' | daytext}
	 *
	 * @return bool
	 */
	// unit(): number | false {
	// 	switch (this.nameToken()) {
	// 		case "MICROSECOND":
	// 			this.nextToken();
	// 			return false; // todo
	// 		case "MILLISECOND":
	// 			this.nextToken();
	// 			return false; // todo
	// 		case "SECOND":
	// 			this.nextToken();
	// 			return 59;
	// 		case "MINUTE":
	// 			this.nextToken();
	// 			return 60;
	// 		case "HOUR":
	// 			this.nextToken();
	// 			return 24;
	// 		case "DAY":
	// 			this.nextToken();
	// 			return 31;
	// 		case "MONTH":
	// 			this.nextToken();
	// 			return 12;
	// 		case "YEAR":
	// 			this.nextToken();
	// 			return 100;
	// 		case "WEEKS":
	// 			this.nextToken();
	// 			return 53;
	// 		case "WEEKDAY":
	// 			this.nextToken();
	// 			return 7;
	// 		case "FORTNIGHT":
	// 			this.nextToken();
	// 			return 14;
	// 		default:
	// 			return false;
	// 	}
	// }

	/**
	 * Relative Formats
	 * DayBasedNotations
	 *
	 * @return bool
	 */
	// RelativeFormats() {
	// 	let dow: any;
	// 	//Day-based Notations
	// 	if (this.isToken("NOW")) {
	// 		// Now - this is simply ignored
	// 		this.data["NOW"] = true;
	// 		return true;
	// 	} else if (this.isToken("TODAY") || this.isToken("MIDNIGHT")) {
	// 		// The time is set to 00:00:00
	// 		this.data["TODAY_MIDNIGHT"] = true;
	// 		return true;
	// 	} else if (this.isToken("NOON")) {
	// 		// The time is set to 12:00:00
	// 		return true;
	// 	} else if (this.isToken("YESTERDAY")) {
	// 		// Midnight of yesterday
	// 		this.data["YESTERDAY"] = true;
	// 		return true;
	// 	} else if (this.isToken("TOMORROW")) {
	// 		// Midnight of tomorrow
	// 		this.data["TOMORROW"] = true;
	// 		return true;
	// 	} else if (
	// 		this.minutes15Hour() ||
	// 		this.firstCurrentMonthLast() ||
	// 		this.XWeekCurrentMonthLast() ||
	// 		this.handleRelTimeNumber() ||
	// 		this.handleRelTimeText()
	// 	) {
	// 		return true;
	// 	} else if (this.isToken("AGO")) {
	// 		// Negates all the values of previously found relative time items.
	// 		this.data["AGO"] = true;
	// 		this.nextToken();
	// 		return true;
	// 	} else if ((dow = this.dayNeme())) {
	// 		// Moves to the next day of this name.
	// 		// let diffdow,
	// 		// 	dowmonth = this.Date.getDayOfWeek(
	// 		// 		this.data["YEAR"],
	// 		// 		this.data["MONTH"],
	// 		// 		this.data["DAY"]
	// 		// 	);
	// 		// if (dow < dowmonth) {
	// 		// 	diffdow = 7 - dowmonth - dow;
	// 		// } else if (dow > dowmonth) {
	// 		// 	diffdow = dow - dowmonth;
	// 		// } else {
	// 		// 	diffdow = 0;
	// 		// }
	// 		// [this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
	// 		// 	this.Date.getDaysOfDay(
	// 		// 		this.data["YEAR"],
	// 		// 		this.Date.getDayOfYear(false, this.data["MONTH"], 1) + diffdow
	// 		// 	);
	// 		this.data["NEXT_DAY_OF_NAME"] = dow;
	// 		return true;
	// 	} else if (this.handleRelTimeFormat()) {
	// 		return true;
	// 	}
	// 	return false;
	// }

	/**
	 * 15 minutes past the specified hour
	 * 15 minutes before the specified hour
	 *
	 * @return bool
	 */
	// minutes15Hour() {
	// 	let h24: any,
	// 		pos = this.getPosition();
	// 	if (this.isToken("BACK")) {
	// 		// 15 minutes past the specified hour
	// 		this.nextToken();
	// 		if (this.isTKSpace() && this.isToken("OF")) {
	// 			this.nextToken();
	// 			if (this.isTKSpace() && (this.time12Notation() || (h24 = this.H24()))) {
	// 				if (!h24) {
	// 					h24 = this.data["HOURS"];
	// 				}
	// 				this.data["HOURS"] = h24;
	// 				this.data["MINUTES"] = 15;
	// 				this.data["SECONDS"] = 0;
	// 				this.data["MINUTES_15_PAST_SPECIFIED_HOUR"] = +15;
	// 				return true;
	// 			}
	// 		}
	// 	} else if (this.isToken("FRONT")) {
	// 		// 15 minutes before the specified hour
	// 		h24 = false;
	// 		this.nextToken();
	// 		if (this.isTKSpace() && this.isToken("OF")) {
	// 			this.nextToken();
	// 			if (this.isTKSpace() && (this.time12Notation() || (h24 = this.H24()))) {
	// 				if (!h24) {
	// 					h24 = this.data["HOURS"];
	// 				}
	// 				this.data["MINUTES_15_BEFORE_SPECIFIED_HOUR"] = -15;
	// 				this.data["HOURS"] = h24 - 1;
	// 				this.data["MINUTES"] = 45;
	// 				this.data["SECONDS"] = 0;
	// 				if (!this.Date.checktime(h24 - 1, 45, 0)) {
	// 					this.data["HOURS"] = this.Date.revTime(h24 - 1, 45, 0)[0];
	// 				}
	// 				return true;
	// 			}
	// 		}
	// 	}
	// 	this.resetPosition(pos);
	// 	return false;
	// }

	/**
	 * Sets the day of the first of the current month.		=>
	 * Sets the day to the last day of the current month.	=>
	 * 		=> This phrase is best used together with a month name following it.
	 *
	 * @return bool
	 */
	// firstCurrentMonthLast() {
	// 	let pos = this.getPosition();
	// 	if (this.isToken("FIRST")) {
	// 		// Sets the day of the first of the current month. This phrase is best used together with a month name following it.
	// 		this.nextToken();
	// 		if (this.isTKSpace() && this.isToken("DAY")) {
	// 			this.nextToken();
	// 			if (this.isTKSpace() && this.isToken("OF")) {
	// 				this.nextToken();
	// 				if (
	// 					this.isTKSpace() &&
	// 					(this.RelativeFormats() || this.DateFormats())
	// 				) {
	// 					this.data["FIRST_DAY_CURRENT_MONTH"] = true;
	// 					this.data["DAY"] = 1;
	// 					this.data["HOURS"] = 0;
	// 					this.data["MINUTES"] = 0;
	// 					this.data["SECONDS"] = 0;
	// 					return true;
	// 				}
	// 			}
	// 		}
	// 	} else if (this.isToken("LAST")) {
	// 		// Sets the day to the last day of the current month. This phrase is best used together with a month name following it.
	// 		this.nextToken();
	// 		if (this.isTKSpace() && this.isToken("DAY")) {
	// 			this.nextToken();
	// 			if (this.isTKSpace() && this.isToken("OF")) {
	// 				this.nextToken();
	// 				if (
	// 					this.isTKSpace() &&
	// 					(this.RelativeFormats() || this.DateFormats())
	// 				) {
	// 					this.data["LAST_DAY_CURRENT_MONTH"] = true;
	// 					// this.data["DAY"] = this.Date.getDaysInMonth(
	// 					// 	this.data["YEAR"],
	// 					// 	this.data["MONTH"]
	// 					// );
	// 					// console.log(
	// 					// 	this.Date.getDaysInMonth(
	// 					// 		this.data["YEAR"],
	// 					// 		this.data["MONTH"]
	// 					// 	)
	// 					// );
	// 					this.data["HOURS"] = 0;
	// 					this.data["MINUTES"] = 0;
	// 					this.data["SECONDS"] = 0;
	// 					return true;
	// 				}
	// 			}
	// 		}
	// 	}
	// 	this.resetPosition(pos);
	// 	return false;
	// }

	/**
	 * Calculates the x-th week day of the current month.
	 * Calculates the last week day of the current month.
	 *
	 * @return bool
	 */
	// XWeekCurrentMonthLast() {
	// 	let dow: any,
	// 		dow29month,
	// 		diffdow,
	// 		int: any,
	// 		dow1month,
	// 		pos = this.getPosition();
	// 	if (this.isToken("LAST")) {
	// 		// Calculates the last week day of the current month.
	// 		this.nextToken();
	// 		if (this.isTKSpace()) {
	// 			dow = this.dayNeme();
	// 			if (dow && this.isTKSpace() && this.isToken("OF")) {
	// 				this.nextToken();
	// 				if (
	// 					this.isTKSpace() &&
	// 					(this.RelativeFormats() || this.DateFormats())
	// 				) {
	// 					// dow29month = this.Date.getDayOfWeek(
	// 					// 	this.data["YEAR"],
	// 					// 	this.data["MONTH"],
	// 					// 	this.Date.getDaysInMonth(
	// 					// 		this.data["YEAR"],
	// 					// 		this.data["MONTH"]
	// 					// 	)
	// 					// );
	// 					// if (dow < dow29month) {
	// 					// 	diffdow = dow29month - dow;
	// 					// } else if (dow > dow29month) {
	// 					// 	diffdow = 7 - dow - dow29month;
	// 					// } else {
	// 					// 	diffdow = 0;
	// 					// }
	// 					// [this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
	// 					// 	this.Date.getDaysOfDay(
	// 					// 		this.data["YEAR"],
	// 					// 		this.Date.getDayOfYear(false, this.data["MONTH"], 1) -
	// 					// 			diffdow
	// 					// 	);
	// 					this.data["LAST_WEEK_DAY_CURRENT_MONTH"] = true;
	// 					this.data["HOURS"] = 0;
	// 					this.data["MINUTES"] = 0;
	// 					this.data["SECONDS"] = 0;
	// 					return true;
	// 				}
	// 			}
	// 		}
	// 	} else if ((int = this.ordinal())) {
	// 		// Calculates the x-th week day of the current month.
	// 		if (this.isTKSpace()) {
	// 			dow = this.dayNeme();
	// 			if (dow && this.isTKSpace() && this.isToken("OF")) {
	// 				this.nextToken();
	// 				if (
	// 					this.isTKSpace() &&
	// 					(this.RelativeFormats() || this.DateFormats())
	// 				) {
	// 					if (int > 0) {
	// 						// dow1month = this.Date.getDayOfWeek(
	// 						// 	this.data["YEAR"],
	// 						// 	this.data["MONTH"],
	// 						// 	1
	// 						// );
	// 						// if (dow < dow1month) {
	// 						// 	diffdow = dow1month - dow;
	// 						// } else if (dow > dow1month) {
	// 						// 	diffdow = 7 - dow - dow1month;
	// 						// } else {
	// 						// 	diffdow = 0;
	// 						// }
	// 						// [this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
	// 						// 	this.Date.getDaysOfDay(
	// 						// 		this.data["YEAR"],
	// 						// 		this.Date.getDayOfYear(false, this.data["MONTH"], 1) +
	// 						// 			diffdow +
	// 						// 			(int - 1) * 7
	// 						// 	);
	// 						return true;
	// 					} else if (int == 0) {
	// 					} else if (int == -1) {
	// 					} else if (int == -2) {
	// 					} else if (int == -3) {
	// 					}
	// 					this.data["X-TH_WEEK_DAY_CURRENT_MONTH"] = dow;
	// 					this.data["HOURS"] = 0;
	// 					this.data["MINUTES"] = 0;
	// 					this.data["SECONDS"] = 0;
	// 					return true;
	// 				}
	// 			}
	// 		}
	// 	}
	// 	this.resetPosition(pos);
	// 	return false;
	// }

	/**
	 * Handles relative time items where the value is a number.
	 *
	 * @return bool
	 */
	// handleRelTimeNumber() {
	// 	let int,
	// 		sign,
	// 		rel: any,
	// 		diffdow,
	// 		pos = this.getPosition();
	// 	[sign, int] = this.number();
	// 	if (int) {
	// 		// Handles relative time items where the value is a number.
	// 		if (this.isTKSpace()) {
	// 		}
	// 		if ((rel = this.unit() || this.isTKWeek())) {
	// 			if (this.isTKWeek() || rel == 53) {
	// 				diffdow = int * 7;
	// 			} else if (rel == 59) {
	// 				// SECONDS
	// 				[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
	// 					this.Date.revTime(this.data["HOURS"], this.data["MINUTES"], int);
	// 			} else if (rel == 60) {
	// 				// MINUTES
	// 				[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
	// 					this.Date.revTime(this.data["HOURS"], int, this.data["SECONDS"]);
	// 			} else if (rel == 24) {
	// 				// todo add with date
	// 				[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
	// 					this.Date.revTime(int, this.data["MINUTES"], this.data["SECONDS"]);
	// 			} else if (rel == 31) {
	// 				// DAY
	// 				diffdow = int;
	// 			} else if (rel == 12) {
	// 				// todo calc with month with year
	// 				diffdow = int * 30.5;
	// 			} else if (rel == 100) {
	// 				// YEAR
	// 				if (int < 0) this.data["YEAR"] -= int;
	// 				if (int > 0) this.data["YEAR"] += int;
	// 			} else if (rel == 7) {
	// 				// todo day of week		weekday
	// 			} else if (rel == 14) {
	// 				// FORTNIGHT
	// 				diffdow = int * 14;
	// 			}
	// 			[this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
	// 				this.Date.getDaysOfDay(
	// 					this.data["YEAR"],
	// 					this.Date.getDayOfYear(
	// 						this.data["YEAR"],
	// 						this.data["MONTH"],
	// 						this.data["DAY"]
	// 					) + diffdow
	// 				);
	// 			return true;
	// 		}
	// 	}
	// 	this.resetPosition(pos);
	// 	return false;
	// }

	/**
	 * Handles relative time items where the value is text.
	 *
	 * @return bool
	 */
	// handleRelTimeText() {
	// 	let rel: any,
	// 		int: any,
	// 		diffdoy,
	// 		pos = this.getPosition();
	// 	if ((int = this.ordinal()) && this.isTKSpace() && (rel = this.unit())) {
	// 		// Handles relative time items where the value is text.
	// 		if (this.isTKWeek() || rel == 53) {
	// 			diffdoy = int * 7;
	// 		} else if (rel == 59) {
	// 			// SECONDS
	// 			[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
	// 				this.Date.revTime(this.data["HOURS"], this.data["MINUTES"], int);
	// 		} else if (rel == 60) {
	// 			// MINUTES
	// 			[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
	// 				this.Date.revTime(this.data["HOURS"], int, this.data["SECONDS"]);
	// 		} else if (rel == 24) {
	// 			// todo add with date
	// 			[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
	// 				this.Date.revTime(int, this.data["MINUTES"], this.data["SECONDS"]);
	// 		} else if (rel == 31) {
	// 			// DAY
	// 			diffdoy = int;
	// 		} else if (rel == 12) {
	// 			// todo calc with month with year
	// 			diffdoy = int * 30.5;
	// 		} else if (rel == 100) {
	// 			// YEAR
	// 			if (int < 0) this.data["YEAR"] -= int;
	// 			if (int > 0) this.data["YEAR"] += int;
	// 		} else if (rel == 7) {
	// 			// todo day of week		weekday
	// 		} else if (rel == 14) {
	// 			// FORTNIGHT
	// 			diffdoy = int * 14;
	// 		}
	// 		[this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
	// 			this.Date.getDaysOfDay(
	// 				this.data["YEAR"],
	// 				this.Date.getDayOfYear(
	// 					this.data["YEAR"],
	// 					this.data["MONTH"],
	// 					this.data["DAY"]
	// 				) + diffdoy
	// 			);
	// 		return true;
	// 	}
	// 	this.resetPosition(pos);
	// 	return false;
	// }

	/**
	 * Handles the special format "weekday + last/this/next week".
	 *
	 * @return bool
	 */
	// handleRelTimeFormat() {
	// 	let pos = this.getPosition();
	// 	// Handles the special format "weekday + last/this/next week".
	// 	if (this.relText() && this.isTKSpace() && this.isTKWeek()) {
	// 		return true;
	// 	}
	// 	this.resetPosition(pos);
	// 	return false;
	// }

	/**
	 * is Token
	 *
	 * @param  string token
	 * @return bool
	 */
	isToken(token: any) {
		if (this.Lexer.getLookahead() !== false)
			return this.Lexer.getLookahead().is(token);
	}

	/**
	 * name Token
	 *
	 * @return bool
	 */
	nameToken() {
		if (this.Lexer.getLookahead() !== false) {
			return this.Lexer.getLookahead().getName();
		}
		return false;
	}

	/**
	 * value Token
	 *
	 * @return bool
	 */
	valueToken() {
		return this.Lexer.getLookahead().getValue();
	}

	/**
	 * next Token
	 *
	 * @return bool
	 */
	nextToken() {
		return this.Lexer.moveNext();
	}

	/**
	 * get Position
	 *
	 * @return bool
	 */
	getPosition() {
		return this.Lexer.getPosition();
	}

	/**
	 * reset Position
	 *
	 * @param  int pos Position
	 * @return bool
	 */
	resetPosition(pos: any) {
		return this.Lexer.resetPosition(pos);
	}

	/**
	 * Colon
	 *
	 * @return bool
	 */
	isTKColon(): boolean {
		if (this.isToken("COLON")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * Dot (.)
	 *
	 * @return bool
	 */
	isTKDot(): boolean {
		if (this.isToken("DOT")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * Dash (-)
	 *
	 * @return bool
	 */
	isTKDash(): boolean {
		if (this.isToken("DASH")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * Plus (+)
	 *
	 * @return bool
	 */
	isTKPlus(): boolean {
		if (this.isToken("PLUS")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * Comma (,)
	 *
	 * @return bool
	 */
	isTKComma(): boolean {
		if (this.isToken("COMMA")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * white Space {[ \t]}
	 *
	 * @return bool
	 */
	isTKSpace(): boolean {
		if (this.isToken("SPACE")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * white Space More {[ \t]+}
	 *
	 * @return bool
	 */
	isTKSpaceMore(): boolean {
		let space = false;
		while (this.isTKSpace()) {
			space = true;
		}
		if (space) {
			return true;
		}
		return false;
	}

	/**
	 * Sign Time (T)
	 *
	 * @return bool
	 */
	isTKSignTime(): boolean {
		if (this.isToken("SIGN_TIME")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * String Week (weeks?)
	 *
	 * @return bool
	 */
	isTKWeek(): boolean {
		if (this.isToken("WEEK")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * Slash (/)
	 *
	 * @return bool
	 */
	isTKSlash(): boolean {
		if (this.isToken("SLASH")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * Sign Week (W)
	 *
	 * @return bool
	 */
	isTKSignWeek(): boolean {
		if (this.isToken("SIGN_WEEK")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * AT (@)
	 *
	 * @return bool
	 */
	isTKAT(): boolean {
		if (this.isToken("AT")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	// =================================================================================
	// ==================================   numeric   ==================================
	// =================================================================================

	/**
	 * a spelled number between one and thirty-one (one, two, etc.) (1-31_)
	 *
	 * @param  int int
	 * @return bool
	 */
	oneToThirtyOneTextual(): number | false {
		switch (this.nameToken()) {
			case "ONE":
				this.nextToken();
				return 1;
			case "TWO":
				this.nextToken();
				return 2;
			case "THREE":
				this.nextToken();
				return 3;
			case "FOUR":
				this.nextToken();
				return 4;
			case "FIVE":
				this.nextToken();
				return 5;
			case "SIX":
				this.nextToken();
				return 6;
			case "SEVEN":
				this.nextToken();
				return 7;
			case "EIGH":
				this.nextToken();
				return 8;
			case "NINE":
				this.nextToken();
				return 9;
			case "TEN":
				this.nextToken();
				return 10;
			case "ELEVEN":
				this.nextToken();
				return 11;
			case "TWELVE":
				this.nextToken();
				return 12;
			case "THIRTEEN":
				this.nextToken();
				return 13;
			case "FOURTEEN":
				this.nextToken();
				return 14;
			case "FIFTEEN":
				this.nextToken();
				return 15;
			case "SIXTEEN":
				this.nextToken();
				return 16;
			case "SEVENTEEN":
				this.nextToken();
				return 17;
			case "EIGHTEEN":
				this.nextToken();
				return 18;
			case "NINETEEN":
				this.nextToken();
				return 19;
			case "TWENTY":
				this.nextToken();
				this.isTKDash() || this.isTKSpace();
				switch (this.nameToken()) {
					case "ONE":
						this.nextToken();
						return 21;
					case "TWO":
						this.nextToken();
						return 22;
					case "THREE":
						this.nextToken();
						return 23;
					case "FOUR":
						this.nextToken();
						return 24;
					case "FIVE":
						this.nextToken();
						return 25;
					case "SIX":
						this.nextToken();
						return 26;
					case "SEVEN":
						this.nextToken();
						return 27;
					case "EIGH":
						this.nextToken();
						return 28;
					case "NINE":
						this.nextToken();
						return 29;
					default:
						this.nextToken();
						return 20;
				}
			case "THIRTY":
				this.isTKDash() || this.isTKSpace();

				if (this.isToken("ONE")) {
					this.nextToken();
					return 31;
				}
				this.nextToken();
				return 30;
			default:
				return false;
		}
	}

	/**
	 * a spelled number in sequence between first and thirty-first (first, second, etc.)(1-31)
	 *
	 * @param  int int
	 * @return bool
	 */
	firstToThirtyFirstTextual(): any {
		switch (this.nameToken()) {
			case "FIRST":
				this.nextToken();
				return 1;
			case "SECOND":
				this.nextToken();
				return 2;
			case "THIRD":
				this.nextToken();
				return 3;
			case "FOURTH":
				this.nextToken();
				return 4;
			case "FIFTH":
				this.nextToken();
				return 5;
			case "SIXTH":
				this.nextToken();
				return 6;
			case "SEVENTH":
				this.nextToken();
				return 7;
			case "EIGHTH":
				this.nextToken();
				return 8;
			case "NINTH":
				this.nextToken();
				return 9;
			case "TENTH":
				this.nextToken();
				return 10;
			case "ELEVENTH":
				this.nextToken();
				return 11;
			case "TWELFTH":
				this.nextToken();
				return 12;
			case "THIRTEENTH":
				this.nextToken();
				return 13;
			case "FOURTEENTH":
				this.nextToken();
				return 14;
			case "FIFTEENTH":
				this.nextToken();
				return 15;
			case "SIXTEENTH":
				this.nextToken();
				return 16;
			case "SEVENTEENTH":
				this.nextToken();
				return 17;
			case "EIGHTEENTH":
				this.nextToken();
				return 18;
			case "NINETEENTH":
				this.nextToken();
				return 19;
			case "TWENTIETH":
				this.nextToken();
				return 20;
			case "TWENTY": {
				this.nextToken();
				this.isTKDash() || this.isTKSpace();
				switch (this.nameToken()) {
					case "FIRST":
						this.nextToken();
						return 21;
					case "SECOND":
						this.nextToken();
						return 22;
					case "THIRD":
						this.nextToken();
						return 23;
					case "FOURTH":
						this.nextToken();
						return 24;
					case "FIFTH":
						this.nextToken();
						return 25;
					case "SIXTH":
						this.nextToken();
						return 26;
					case "SEVENTH":
						this.nextToken();
						return 27;
					case "EIGHTH":
						this.nextToken();
						return 28;
					case "NINTH":
						this.nextToken();
						return 29;
				}
				break;
			}
			case "THIRTIETH":
				this.nextToken();
				return 30;
			case "THIRTY":
				this.isTKDash() || this.isTKSpace();
				if (this.isToken("FIRST")) {
					this.nextToken();
					return 31;
				}
				return false;
			default:
				return false;
		}
	}

	/**
	 * a number between zero and ninety nine (00-99)
	 *
	 * @param  int int
	 * @return bool
	 */
	int00To99() {
		return this.int10To99() || this.int00To09();
	}

	/**
	 * a number between ten and ninety nine (10-99)
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To99(): string | false {
		switch (this.nameToken()) {
			case "INT_60":
			case "INT_61":
			case "INT_62":
			case "INT_63":
			case "INT_64":
			case "INT_65":
			case "INT_66":
			case "INT_67":
			case "INT_68":
			case "INT_69":
			case "INT_70":
			case "INT_71":
			case "INT_72":
			case "INT_73":
			case "INT_74":
			case "INT_75":
			case "INT_76":
			case "INT_77":
			case "INT_78":
			case "INT_79":
			case "INT_80":
			case "INT_81":
			case "INT_82":
			case "INT_83":
			case "INT_84":
			case "INT_85":
			case "INT_86":
			case "INT_87":
			case "INT_88":
			case "INT_89":
			case "INT_90":
			case "INT_91":
			case "INT_92":
			case "INT_93":
			case "INT_94":
			case "INT_95":
			case "INT_96":
			case "INT_97":
			case "INT_98":
			case "INT_99":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int10To59();
		}
	}

	/**
	 * a number between ten and fifty nine (10-59)
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To59(): string | false {
		switch (this.nameToken()) {
			case "INT_54":
			case "INT_55":
			case "INT_56":
			case "INT_57":
			case "INT_58":
			case "INT_59":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int10To53();
		}
	}

	/**
	 * a number between ten and fifty three (10-53)
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To53(): string | false {
		switch (this.nameToken()) {
			case "INT_37":
			case "INT_38":
			case "INT_39":
			case "INT_40":
			case "INT_41":
			case "INT_42":
			case "INT_43":
			case "INT_44":
			case "INT_45":
			case "INT_46":
			case "INT_47":
			case "INT_48":
			case "INT_49":
			case "INT_50":
			case "INT_51":
			case "INT_52":
			case "INT_53":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int10To36();
		}
	}

	/**
	 * a number between ten and thirty six (10-36)
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To36(): string | false {
		switch (this.nameToken()) {
			case "INT_32":
			case "INT_33":
			case "INT_34":
			case "INT_35":
			case "INT_36":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int10To31();
		}
	}

	/**
	 * a number between ten and thirty one (10-31)
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To31(): string | false {
		switch (this.nameToken()) {
			case "INT_25":
			case "INT_26":
			case "INT_27":
			case "INT_28":
			case "INT_29":
			case "INT_30":
			case "INT_31":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int10To24();
		}
	}

	/**
	 * a number between ten and twenty four (10-24)
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To24(): string | false {
		if (this.isToken("INT_24")) {
			const int = this.valueToken();
			this.nextToken();
			return int;
		}
		return this.int10To23();
	}

	/**
	 * a number between ten and twenty three (10-23)
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To23(): string | false {
		switch (this.nameToken()) {
			case "INT_13":
			case "INT_14":
			case "INT_15":
			case "INT_16":
			case "INT_17":
			case "INT_18":
			case "INT_19":
			case "INT_20":
			case "INT_21":
			case "INT_22":
			case "INT_23":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int10To12();
		}
	}

	/**
	 * a number between ten and twelfth (10-12)
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To12(): string | false {
		switch (this.nameToken()) {
			case "INT_10":
			case "INT_11":
			case "INT_12":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return false;
		}
	}

	/**
	 * a number between zero and nine - two digits (00-09)
	 *
	 * @param  int int
	 * @return bool
	 */
	int00To09(): string | false {
		return this.int01To09() || this.int00();
	}
	/**
	 * a number between one and nine - two digits (01-09)
	 *
	 * @param  int int
	 * @return bool
	 */
	int01To09(): string | false {
		switch (this.nameToken()) {
			case "INT_01":
			case "INT_02":
			case "INT_03":
			case "INT_04":
			case "INT_05":
			case "INT_06":
			case "INT_07":
			case "INT_08":
			case "INT_09":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return false;
		}
	}

	/**
	 * a number between zero and nine - single digits (0-9)
	 *
	 * @param  int int
	 * @return bool
	 */
	int0To9() {
		return this.int1To9() || this.int0();
	}

	/**
	 * a number between one and nine - single digits (1-9)
	 *
	 * @param  int int
	 * @return bool
	 */
	int1To9(): string | false {
		switch (this.nameToken()) {
			case "INT_8":
			case "INT_9":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int1To7();
		}
	}

	/**
	 * a number between zero and seven - single digits (0-7)
	 *
	 * @param  int int
	 * @return bool
	 */
	int0To7() {
		return this.int1To7() || this.int0();
	}

	/**
	 * a number between one and seven - single digits (1-7)
	 *
	 * @param  int int
	 * @return bool
	 */
	int1To7(): string | false {
		switch (this.nameToken()) {
			case "INT_1":
			case "INT_2":
			case "INT_3":
			case "INT_4":
			case "INT_5":
			case "INT_6":
			case "INT_7":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return false;
		}
	}

	/**
	 * a zero number - two digit (00)
	 *
	 * @param  int int
	 * @return bool
	 */
	int00(): string | false {
		if (this.isToken("INT_00")) {
			const int = this.valueToken();
			this.nextToken();
			return int;
		}
		return false;
	}

	/**
	 * a zero number - single-digit (0)
	 *
	 * @param  int int
	 * @return bool
	 */
	int0(): string | false {
		if (this.isToken("INT_0")) {
			const int = this.valueToken();
			this.nextToken();
			return int;
		}
		return false;
	}
}

/**
 * ToDo:
 * add match type input and format
 * ex:
 * 13971110T15:00:00 -> [int2, int2, int2, int2, strTime, int2, strColon, int2, strColon, int2] === [13, 97, 11, 10, T, 15, :, 00, :, 00] === formatDefualt
 *
 *
 *
 *
 */
