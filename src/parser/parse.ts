import { Export_SHDate } from "../base.js";

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
	data: any = {
		// YEAR: "",
		// MONTH: "",
		// DAY: "",
		// HOURS: "",
		// MINUTES: "",
		// SECONDS: "",
		// DAY_OF_YEAR: "",
		// DAY_OF_WEEK: "",
		// TIMESTAMP: "",
		// Sign_Timestamp: "",
		// RTDAY: "",
		// RYDAY: "",
		// FRAC: "",
		// PM: "",
		// AM: "",
		// NOW: "",
		// TODAY_MIDNIGHT: "",
		// NOON: "",
		// YESTERDAY: "",
		// TOMORROW: "",
		// AGO: "",
		// NEXT_DAY_OF_NAME: "",
		// MINUTES_15_PAST_SPECIFIED_HOUR: "",
		// MINUTES_15_BEFORE_SPECIFIED_HOUR: "",
		// FIRST_DAY_CURRENT_MONTH: "",
		// LAST_DAY_CURRENT_MONTH: "",
		// LAST_WEEK_DAY_CURRENT_MONTH: "",
		// TH_WEEK_DAY_CURRENT_MONTH: "",
		// SIGN_DATE: "",
		// TZ_SIGN_PLUS: "",
		// TZ_SIGN_DASH: "",
		// TZ_HOURS: "",
		// TZ_MINUTES: "",
		// TZ_NAME: ""
	};
	Date: any;
	/**
	 * __construct
	 *
	 * @param  string srt
	 * @param  int time
	 * @return array
	 */
	constructor(srt: any, time: any = Date.now()) {
		//this.time = time;
		this.Lexer = new SHLexer(srt);
		this.Date = new Export_SHDate();
		do {
			//this.DateFormats() ||
			this.TimeFormats() || this.CompoundFormats();
			//||	this.RelativeFormats();
		} while (this.nextToken());
		return this.data;
	}

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

	isTKColon() {
		if (this.isToken("COLON")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	isTKDot() {
		if (this.isToken("DOT")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	isTKDash() {
		if (this.isToken("DASH")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	isTKPlus() {
		if (this.isToken("PLUS")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	isTKComma() {
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
	isTKSpace() {
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

	isTKSignTime() {
		if (this.isToken("SIGN_TIME")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	isTKWeek() {
		if (this.isToken("WEEK")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	isTKSlash() {
		if (this.isToken("SLASH")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * Compound Formats
	 *
	 * @return bool
	 */
	public CompoundFormats(): boolean {
		// Localized Notations
		// dd/M/Y:HH:II:SS tspace tzcorrection
		//  YY-?"W"W-?[0-7]
		//  YY-MM-DD HH:II:SS
		// YY .? doy
		//  YY "-" MM "-" DD "T" HH ":" II ":" SS frac tzcorrection?
		// "@" "-"? [0-9]+
		// YY "-" mm "-" dd "T" hh ":" ii ":" ss
		// time

		return this.standardsFormats(); //||
		// this.compoundLocalizedNotations() ||
		// this.CommonLogFormat() ||
		// this.isoYearWeekDay() ||
		// this.dateWithSpaceTime() ||
		// this.postgreSQL() ||
		// this.unixTimestamp() ||
		// this.WDDX() ||
		// this.MSSQL()
	}
	// https://www.php.net/manual/en/datetime.formats.time.php
	// https://www.php.net/manual/en/datetime.formats.date.php
	// https://www.php.net/manual/en/datetime.formats.compound.php
	// https://www.php.net/manual/en/datetime.formats.relative.php

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
	 */

	// Atom	"2022-06-02T16:58:35+00:00"
	// ISO8601	"2022-06-02T16:58:35+0000"
	// RFC 3339	"2022-06-02T16:58:35+00:00"
	// W3C	"2022-06-02T16:58:35+00:00"
	// RFC 3339 Extended	"2022-06-02T16:58:35.698+00:00"
	dateTimeTZ() {
		if (this.dateWithDash()) if (this.time24Notation()) return true;
		return false;
	}

	compoundLocalizedNotations() {
		return false;
		// Common Log Format	dd "/" M "/" YY : HH ":" II ":" SS space tzcorrection	"10/Oct/2000:13:55:36 -0700"
		// EXIF	YY ":" MM ":" DD " " HH ":" II ":" SS	"2008:08:07 18:11:31"
		// MySQL	YY "-" MM "-" DD " " HH ":" II ":" SS	"2008-08-07 18:11:31"
		// WDDX	YY "-" mm "-" dd "T" hh ":" ii ":" ss	"2008-7-1T9:3:37"
		// SOAP	YY "-" MM "-" DD "T" HH ":" II ":" SS frac tzcorrection?	"2008-07-01T22:35:17.02", "2008-07-01T22:35:17.03+08:00"
		// Unix Timestamp	"@" "-"? [0-9]+	"@1215282385"
		// Unix Timestamp with microseconds	"@" "-"? [0-9]+ "." [0-9]{0,6}	"@1607974647.503686"
		// XMLRPC	YY MM DD "T" hh ":" II ":" SS	"20080701T22:38:07", "20080701T9:38:07"
		// XMLRPC (Compact)	YY MM DD 't' hh II SS	"20080701t223807", "20080701T093807"
		// ISO year with ISO week and day	YY "-"? "W" W "-"? [0-7]	"2008W273", "2008-W28-3"
		// PostgreSQL: Year with day-of-year	YY "."? doy	"2008.197", "2008197"
	}

	/**
	 * Common Log Format (YYYY-MM-DDT:HH:II:SS)
	 * YYYY-MM-DDTHH:mm:ss.sssZ
	 * YY "-" MM "-" DD "T" HH ":" II ":" SS frac tzcorrection?
	 * "yyyy-MM-ddTHH:mm"
	 * "yyyy-MM-ddTHH:mmZ"
	 *
	 * @return bool
	 */
	CommonLogFormat() {
		let pos, year, month, day, h24, min, sec, frac, tz;
		pos = this.getPosition();
		year = this.year4MandatoryPrefix();
		if (year && this.isTKDash()) {
			month = this.monthMandatoryPrefix();
			if (month && this.isTKDash()) {
				day = this.dayMandatoryPrefix();
				if (day) {
					if (this.time24Notation()) {
						this.data["YEAR"] = year;
						this.data["MONTH"] = month;
						this.data["DAY"] = day;
						return true;
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * ISO year with ISO week (YYYY-Ww)
	 * ISO year with ISO week and day (YYYY - Ww -? D?) {W=[1-5][0-9], D=[0-7]}
	 *
	 * @return bool
	 */
	isoYearWeekDay() {
		let dow,
			week,
			year,
			pos = this.getPosition();
		if ((year = this.year4MandatoryPrefix())) {
			if (this.isTKDash() && this.isToken("SIGN_WEEK")) {
				if ((week = this.weekOfYear())) {
					this.isTKDash();
					if ((dow = this.int1To7() || this.int0())) {
						this.data["DAY_OF_WEEK"] = dow;
					}
					this.data["WEEK_OF_YEAR"] = week;
					this.data["YEAR"] = year;
					return true;
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * dateWithSpaceTime (YYYY-MM-DD HH:II:SS)
	 *
	 * @return bool
	 */
	dateWithSpaceTime() {
		let pos = this.getPosition();
		if (this.dateWithDash())
			if (this.isTKSpace()) if (this.time24Notation()) return true;
		this.resetPosition(pos);
		return false;
	}

	/**
	 * PostgreSQL: Year with day-of-year (YYYY.doy)
	 *
	 * @return bool
	 */
	postgreSQL() {
		let year,
			doy,
			pos = this.getPosition();
		if (
			(year = this.year4MandatoryPrefix()) &&
			this.isTKDot() &&
			(doy = this.dayOfYear())
		) {
			this.data["YEAR"] = year;
			this.data["DAY_OF_YEAR"] = doy;
			return true;
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Unix Timestamp (@ -+ts)
	 *
	 * @return bool
	 */
	unixTimestamp() {
		let int,
			pos = this.getPosition();
		if (this.isToken("AT")) {
			this.nextToken();
			//this.data["Sign_Timestamp"] = this.signNumber() || "";
			int = this.number();
			if (int) {
				this.data["Timestamp"] = int;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * WDDX (YYYY-mm-ddTh12:ii:ss)
	 *
	 * @return bool
	 */
	WDDX() {
		let pos = this.getPosition();
		if (this.dateWithDash()) if (this.time12Notation()) return true;
		this.resetPosition(pos);
		return false;
	}

	/**
	 * MS SQL (Hour, minutes, seconds and fraction with meridian)
	 * (hh ":" II ":" SS [.:] [0-9]+ meridian)
	 *
	 * @return bool
	 */
	// MSSQL() {
	// 	//
	// 	let h12,
	// 		min,
	// 		sec,
	// 		frac,
	// 		meridian,
	// 		pos = this.getPosition();
	// 	if (this.time12Notation()) {
	//		return true;
	// 	}
	// 	this.resetPosition(pos);
	// 	return false;
	// }

	/**
	 * Relative Formats
	 * DayBasedNotations
	 *
	 * @return bool
	 */
	RelativeFormats() {
		let dow: any;
		//Day-based Notations
		if (this.isToken("NOW")) {
			// Now - this is simply ignored
			this.data["NOW"] = true;
			return true;
		} else if (this.isToken("TODAY") || this.isToken("MIDNIGHT")) {
			// The time is set to 00:00:00
			this.data["TODAY_MIDNIGHT"] = true;
			this.restTime();
			return true;
		} else if (this.isToken("NOON")) {
			// The time is set to 12:00:00
			this.restTime(12);
			return true;
		} else if (this.isToken("YESTERDAY")) {
			// Midnight of yesterday
			this.data["YESTERDAY"] = true;
			this.restTime();
			return true;
		} else if (this.isToken("TOMORROW")) {
			// Midnight of tomorrow
			this.data["TOMORROW"] = true;
			this.restTime();
			return true;
		} else if (
			this.minutes15Hour() ||
			this.firstCurrentMonthLast() ||
			this.XWeekCurrentMonthLast() ||
			this.handleRelTimeNumber() ||
			this.handleRelTimeText()
		) {
			return true;
		} else if (this.isToken("AGO")) {
			// Negates all the values of previously found relative time items.
			this.data["AGO"] = true;
			this.nextToken();
			return true;
		} else if ((dow = this.dayNeme())) {
			// Moves to the next day of this name.
			// let diffdow,
			// 	dowmonth = this.Date.getDayOfWeek(
			// 		this.data["YEAR"],
			// 		this.data["MONTH"],
			// 		this.data["DAY"]
			// 	);
			// if (dow < dowmonth) {
			// 	diffdow = 7 - dowmonth - dow;
			// } else if (dow > dowmonth) {
			// 	diffdow = dow - dowmonth;
			// } else {
			// 	diffdow = 0;
			// }
			// [this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
			// 	this.Date.getDaysOfDay(
			// 		this.data["YEAR"],
			// 		this.Date.getDayOfYear(false, this.data["MONTH"], 1) + diffdow
			// 	);
			this.data["NEXT_DAY_OF_NAME"] = dow;
			return true;
		} else if (this.handleRelTimeFormat()) {
			return true;
		}
		return false;
	}

	/**
	 * 15 minutes past the specified hour
	 * 15 minutes before the specified hour
	 *
	 * @return bool
	 */
	minutes15Hour() {
		let h24: any,
			pos = this.getPosition();
		if (this.isToken("BACK")) {
			// 15 minutes past the specified hour
			this.nextToken();
			if (this.isTKSpace() && this.isToken("OF")) {
				this.nextToken();
				if (
					this.isTKSpace() &&
					(this.time12Notation() || (h24 = this.hour24()))
				) {
					if (!h24) {
						h24 = this.data["HOURS"];
					}
					this.data["HOURS"] = h24;
					this.data["MINUTES"] = 15;
					this.data["SECONDS"] = 0;
					this.data["MINUTES_15_PAST_SPECIFIED_HOUR"] = +15;
					return true;
				}
			}
		} else if (this.isToken("FRONT")) {
			// 15 minutes before the specified hour
			h24 = false;
			this.nextToken();
			if (this.isTKSpace() && this.isToken("OF")) {
				this.nextToken();
				if (
					this.isTKSpace() &&
					(this.time12Notation() || (h24 = this.hour24()))
				) {
					if (!h24) {
						h24 = this.data["HOURS"];
					}
					this.data["MINUTES_15_BEFORE_SPECIFIED_HOUR"] = -15;
					this.data["HOURS"] = h24 - 1;
					this.data["MINUTES"] = 45;
					this.data["SECONDS"] = 0;
					if (!this.Date.checktime(h24 - 1, 45, 0)) {
						this.data["HOURS"] = this.Date.revTime(h24 - 1, 45, 0)[0];
					}
					return true;
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * day Of Year
	 *
	 * @param  int $int
	 * @return bool
	 */
	dayOfYear() {
		let doy1: any,
			doy2,
			pos = this.getPosition();
		doy1 = this.int00To99();
		doy2 = this.int0() || this.int1To9();
		if (doy1) {
			if (doy2) return parseInt(doy1 + "" + doy2);
			return parseInt(doy1);
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Sets the day of the first of the current month.		=>
	 * Sets the day to the last day of the current month.	=>
	 * 		=> This phrase is best used together with a month name following it.
	 *
	 * @return bool
	 */
	firstCurrentMonthLast() {
		let pos = this.getPosition();
		if (this.isToken("FIRST")) {
			// Sets the day of the first of the current month. This phrase is best used together with a month name following it.
			this.nextToken();
			if (this.isTKSpace() && this.isToken("DAY")) {
				this.nextToken();
				if (this.isTKSpace() && this.isToken("OF")) {
					this.nextToken();
					if (
						this.isTKSpace() &&
						(this.RelativeFormats() || this.DateFormats())
					) {
						this.data["FIRST_DAY_CURRENT_MONTH"] = true;
						this.data["DAY"] = 1;
						this.data["HOURS"] = 0;
						this.data["MINUTES"] = 0;
						this.data["SECONDS"] = 0;
						return true;
					}
				}
			}
		} else if (this.isToken("LAST")) {
			// Sets the day to the last day of the current month. This phrase is best used together with a month name following it.
			this.nextToken();
			if (this.isTKSpace() && this.isToken("DAY")) {
				this.nextToken();
				if (this.isTKSpace() && this.isToken("OF")) {
					this.nextToken();
					if (
						this.isTKSpace() &&
						(this.RelativeFormats() || this.DateFormats())
					) {
						this.data["LAST_DAY_CURRENT_MONTH"] = true;
						// this.data["DAY"] = this.Date.getDaysInMonth(
						// 	this.data["YEAR"],
						// 	this.data["MONTH"]
						// );
						// console.log(
						// 	this.Date.getDaysInMonth(
						// 		this.data["YEAR"],
						// 		this.data["MONTH"]
						// 	)
						// );
						this.data["HOURS"] = 0;
						this.data["MINUTES"] = 0;
						this.data["SECONDS"] = 0;
						return true;
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Calculates the x-th week day of the current month.
	 * Calculates the last week day of the current month.
	 *
	 * @return bool
	 */
	XWeekCurrentMonthLast() {
		let dow: any,
			dow29month,
			diffdow,
			int: any,
			dow1month,
			pos = this.getPosition();
		if (this.isToken("LAST")) {
			// Calculates the last week day of the current month.
			this.nextToken();
			if (this.isTKSpace()) {
				dow = this.dayNeme();
				if (dow && this.isTKSpace() && this.isToken("OF")) {
					this.nextToken();
					if (
						this.isTKSpace() &&
						(this.RelativeFormats() || this.DateFormats())
					) {
						// dow29month = this.Date.getDayOfWeek(
						// 	this.data["YEAR"],
						// 	this.data["MONTH"],
						// 	this.Date.getDaysInMonth(
						// 		this.data["YEAR"],
						// 		this.data["MONTH"]
						// 	)
						// );
						// if (dow < dow29month) {
						// 	diffdow = dow29month - dow;
						// } else if (dow > dow29month) {
						// 	diffdow = 7 - dow - dow29month;
						// } else {
						// 	diffdow = 0;
						// }
						// [this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
						// 	this.Date.getDaysOfDay(
						// 		this.data["YEAR"],
						// 		this.Date.getDayOfYear(false, this.data["MONTH"], 1) -
						// 			diffdow
						// 	);
						this.data["LAST_WEEK_DAY_CURRENT_MONTH"] = true;
						this.data["HOURS"] = 0;
						this.data["MINUTES"] = 0;
						this.data["SECONDS"] = 0;
						return true;
					}
				}
			}
		} else if ((int = this.ordinal())) {
			// Calculates the x-th week day of the current month.
			if (this.isTKSpace()) {
				dow = this.dayNeme();
				if (dow && this.isTKSpace() && this.isToken("OF")) {
					this.nextToken();
					if (
						this.isTKSpace() &&
						(this.RelativeFormats() || this.DateFormats())
					) {
						if (int > 0) {
							// dow1month = this.Date.getDayOfWeek(
							// 	this.data["YEAR"],
							// 	this.data["MONTH"],
							// 	1
							// );
							// if (dow < dow1month) {
							// 	diffdow = dow1month - dow;
							// } else if (dow > dow1month) {
							// 	diffdow = 7 - dow - dow1month;
							// } else {
							// 	diffdow = 0;
							// }
							// [this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
							// 	this.Date.getDaysOfDay(
							// 		this.data["YEAR"],
							// 		this.Date.getDayOfYear(false, this.data["MONTH"], 1) +
							// 			diffdow +
							// 			(int - 1) * 7
							// 	);
							return true;
						} else if (int == 0) {
						} else if (int == -1) {
						} else if (int == -2) {
						} else if (int == -3) {
						}
						this.data["X-TH_WEEK_DAY_CURRENT_MONTH"] = dow;
						this.data["HOURS"] = 0;
						this.data["MINUTES"] = 0;
						this.data["SECONDS"] = 0;
						return true;
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Handles relative time items where the value is a number.
	 *
	 * @return bool
	 */
	handleRelTimeNumber() {
		let int: any,
			rel,
			diffdow,
			pos = this.getPosition();
		if ((int = this.number())) {
			// Handles relative time items where the value is a number.
			if (this.isTKSpace()) {
			}
			if ((rel = this.unit() || this.isTKWeek())) {
				if (this.isTKWeek() || rel == 53) {
					diffdow = int * 7;
				} else if (rel == 59) {
					// SECONDS
					[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
						this.Date.revTime(this.data["HOURS"], this.data["MINUTES"], int);
				} else if (rel == 60) {
					// MINUTES
					[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
						this.Date.revTime(this.data["HOURS"], int, this.data["SECONDS"]);
				} else if (rel == 24) {
					// todo add with date
					[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
						this.Date.revTime(int, this.data["MINUTES"], this.data["SECONDS"]);
				} else if (rel == 31) {
					// DAY
					diffdow = int;
				} else if (rel == 12) {
					// todo calc with month with year
					diffdow = int * 30.5;
				} else if (rel == 100) {
					// YEAR
					if (int < 0) this.data["YEAR"] -= int;
					if (int > 0) this.data["YEAR"] += int;
				} else if (rel == 7) {
					// todo day of week		weekday
				} else if (rel == 14) {
					// FORTNIGHT
					diffdow = int * 14;
				}
				[this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
					this.Date.getDaysOfDay(
						this.data["YEAR"],
						this.Date.getDayOfYear(
							this.data["YEAR"],
							this.data["MONTH"],
							this.data["DAY"]
						) + diffdow
					);
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Handles relative time items where the value is text.
	 *
	 * @return bool
	 */
	handleRelTimeText() {
		let rel,
			int: any,
			diffdoy,
			pos = this.getPosition();
		if ((int = this.ordinal()) && this.isTKSpace() && (rel = this.unit())) {
			// Handles relative time items where the value is text.
			if (this.isTKWeek() || rel == 53) {
				diffdoy = int * 7;
			} else if (rel == 59) {
				// SECONDS
				[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
					this.Date.revTime(this.data["HOURS"], this.data["MINUTES"], int);
			} else if (rel == 60) {
				// MINUTES
				[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
					this.Date.revTime(this.data["HOURS"], int, this.data["SECONDS"]);
			} else if (rel == 24) {
				// todo add with date
				[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
					this.Date.revTime(int, this.data["MINUTES"], this.data["SECONDS"]);
			} else if (rel == 31) {
				// DAY
				diffdoy = int;
			} else if (rel == 12) {
				// todo calc with month with year
				diffdoy = int * 30.5;
			} else if (rel == 100) {
				// YEAR
				if (int < 0) this.data["YEAR"] -= int;
				if (int > 0) this.data["YEAR"] += int;
			} else if (rel == 7) {
				// todo day of week		weekday
			} else if (rel == 14) {
				// FORTNIGHT
				diffdoy = int * 14;
			}
			[this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
				this.Date.getDaysOfDay(
					this.data["YEAR"],
					this.Date.getDayOfYear(
						this.data["YEAR"],
						this.data["MONTH"],
						this.data["DAY"]
					) + diffdoy
				);
			return true;
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Handles the special format "weekday + last/this/next week".
	 *
	 * @return bool
	 */
	handleRelTimeFormat() {
		let pos = this.getPosition();
		// Handles the special format "weekday + last/this/next week".
		if (this.relText() && this.isTKSpace() && this.isTKWeek()) {
			return true;
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * TimeFormats
	 *
	 * @return bool
	 */
	TimeFormats() {
		return this.time24Notation() || this.time12Notation();
	}

	/**
	 * Hour, optional minutes and seconds, with meridian
	 * T? hh [.:]? MM? [.:]? II? frac? space? meridian
	 *
	 * @return bool
	 */
	time12Notation() {
		let pos, h12, min, sec, frac, meridian;
		pos = this.getPosition();
		this.isTKSignTime();
		if ((h12 = this.hour12())) {
			this.isTKColon() || this.isTKDot();
			if ((min = this.minutesMandatoryPrefix())) {
				this.data["MINUTES"] = min;
				this.isTKColon() || this.isTKDot();
				if ((sec = this.secondsMandatoryPrefix())) {
					this.data["SECONDS"] = sec;
					if ((frac = this.fraction())) {
						this.data["FRAC"] = frac;
					}
				}
			}
			this.isTKSpace();
			if ((meridian = this.meridian())) {
				if ((this.data["MERIDIAN"] = "AM")) {
					this.data["HOURS"] = h12;
					this.data["AM"] = true;
				} else {
					this.data["HOURS"] = h12 + 12;
					this.data["PM"] = true;
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
	time24Notation() {
		let pos, h24, min, sec, frac;
		pos = this.getPosition();
		this.isTKSignTime();
		if ((h24 = this.hour24())) {
			this.isTKColon() || this.isTKDot();
			if ((min = this.minutesMandatoryPrefix())) {
				this.isTKColon() || this.isTKDot();
				if ((sec = this.secondsMandatoryPrefix())) {
					this.data["SECONDS"] = sec;
					if ((frac = this.fraction())) {
						this.data["FRAC"] = frac;
					}
					this.isTKSpace();
					this.TZCorrection() || this.timeZone();
				}
				this.data["HOURS"] = h24;
				this.data["MINUTES"] = min;
				return true;
			}
		} else if (this.TZCorrection() || this.timeZone()) {
			return true;
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
		let PLUS_DASH, h12, min;
		switch (this.nameToken()) {
			case "UTC":
				this.nextToken();
				this.data["TZ_SIGN_PLUS"] = true;
				this.data["TZ_HOURS"] = "00";
				this.data["TZ_MINUTES"] = "00";
				return true;
			case "EDT":
				this.nextToken();
				this.data["TZ_SIGN_PLUS"] = true;
				this.data["TZ_HOURS"] = "04";
				this.data["TZ_MINUTES"] = "00";
				return true;
			case "EST":
				this.nextToken();
				this.data["TZ_SIGN_PLUS"] = true;
				this.data["TZ_HOURS"] = "05";
				this.data["TZ_MINUTES"] = "00";
				return true;
			case "CDT":
				this.nextToken();
				this.data["TZ_SIGN_PLUS"] = true;
				this.data["TZ_HOURS"] = "05";
				this.data["TZ_MINUTES"] = "00";
				return true;
			case "CST":
				this.nextToken();
				this.data["TZ_SIGN_PLUS"] = true;
				this.data["TZ_HOURS"] = "06";
				this.data["TZ_MINUTES"] = "00";
				return true;
			case "MDT":
				this.nextToken();
				this.data["TZ_SIGN_PLUS"] = true;
				this.data["TZ_HOURS"] = "06";
				this.data["TZ_MINUTES"] = "00";
				return true;
			case "MST":
				this.nextToken();
				this.data["TZ_SIGN_PLUS"] = true;
				this.data["TZ_HOURS"] = "07";
				this.data["TZ_MINUTES"] = "00";
				return true;
			case "PDT":
				this.nextToken();
				this.data["TZ_SIGN_PLUS"] = true;
				this.data["TZ_HOURS"] = "07";
				this.data["TZ_MINUTES"] = "00";
				return true;
			case "PST":
				this.nextToken();
				this.data["TZ_SIGN_PLUS"] = true;
				this.data["TZ_HOURS"] = "08";
				this.data["TZ_MINUTES"] = "00";
				return true;
		}
		PLUS_DASH = false;
		if (this.isTKPlus()) {
			this.data["TZ_SIGN"] = "+";
			PLUS_DASH = true;
		} else if (this.isTKDash()) {
			this.data["TZ_SIGN"] = "-";
			PLUS_DASH = true;
		}
		if (PLUS_DASH && (h12 = this.hour12())) {
			this.data["TZ_HOURS"] = h12;
			this.isTKColon();
			if ((min = this.minutesMandatoryPrefix())) {
				this.data["TZ_MINUTES"] = min;
				return true;
			}
		}
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
	number() {
		let sign,
			isInt,
			int,
			num: any,
			pos = this.getPosition();
		sign = this.signNumber() || "";
		isInt = true;
		do {
			int = this.int00To99() || this.int1To9() || this.int0();
			if (int) num += "" + int; //sprintf('%s%s',$num,int);
			else isInt = false;
		} while (isInt);
		console.log(int, num);
		return sign + num;

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
	 * a number between 1 and 12 inclusive, with a optional 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	hour12() {
		return this.int10To12() || this.int1To9() || this.int01To09();
	}

	/**
	 * hours (HH) {[01][0-9] | "2"[0-4]}
	 * a number between 01 and 24 inclusive, with a mandatory 0 prefix before numbers 0-9
	 *
	 *
	 * @param  int int
	 * @return bool
	 */
	hour24() {
		return this.int10To24() || this.int01To09();
	}

	/** //todo transform to dir base
	 * todo change name to changeTime
	 * rest Time
	 *
	 * @param  int h Hours
	 * @param  int m Minutes
	 * @param  int s Seconds
	 * @return bool
	 */
	restTime(h = 0, m = 0, s = 0) {
		this.data["HOURS"] = h;
		this.data["MINUTES"] = m;
		this.data["SECONDS"] = s;
		return true;
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
			this.data["MERIDIAN"] = "AM";
			this.nextToken();
			return true;
		} else if (this.isToken("PM")) {
			//12:00-23:59
			this.nextToken();
			this.data["MERIDIAN"] = "PM";
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
	minutesMandatoryPrefix() {
		return this.int10To59() || this.int01To09() || this.int00();
	}

	/**
	 * minutes (ii) {	[0-5]?[0-9]}
	 * a number between 1 and 59 inclusive, with an optional 0 prefix before numbers 0-9
	 * [0-9]{1,2}
	 *
	 * @param  int int
	 * @return bool
	 */
	minutesOptionalPrefix() {
		return (
			this.int10To59() ||
			this.int01To09() ||
			this.int1To9() ||
			this.int00() ||
			this.int0()
		);
	}

	/**
	 * seconds (SS) {[0-5][0-9]}
	 * a number between 01 and 59 inclusive, with a mandatory 0 prefix before numbers 0-9
	 * [0-9]{2}
	 *
	 * @param  int int
	 * @return bool
	 */
	secondsMandatoryPrefix() {
		return this.int10To59() || this.int01To09() || this.int00();
	}

	/**
	 * seconds (ss) {([0-5]?[0-9])|60}
	 * a number between 1 and 59 inclusive, with an optional 0 prefix before numbers 0-9
	 * [0-9]{1,2}
	 *
	 * @param  int int
	 * @return bool
	 */
	secondsOptionalPrefix() {
		return (
			this.int10To59() ||
			this.int01To09() ||
			this.int1To9() ||
			this.int00() ||
			this.int0()
		);
	}

	/**
	 * fraction (frac) {.[0-9]+}
	 *
	 * @param  int num
	 * @return bool
	 */
	fraction() {
		if (this.isTKDot()) {
			let int,
				isFrac = false;
			while (
				(int =
					this.int10To99() ||
					this.int01To09() ||
					this.int1To9() ||
					this.int00() ||
					this.int0())
			) {
				this.data["FRACTION"] += "" + int; //sprintf('%s%s',num,int);
				isFrac = true;
			}
			return true && isFrac;
		}
		return false;
	}

	/**
	 * Date Formats
	 *
	 * @return bool
	 */
	DateFormats() {
		// Localized Notations

		// dateLocalizedNotations() {}
		// ISO8601Notations() {}
		return (
			this.dateWithSlash() || // YY "/" mm "/" dd
			this.dedateWithSlash() || // dd "/" mm "/" YY
			this.dateWithOutSlash() || // ISO  YY "/"? MM "/"? DD
			this.dateWithDash() || // YY "-" mm		Day reset to 1
			this.year4TextualMonth() || // YY ([ \t.-])* m    Day reset to 1
			this.DateWithSignDash() || // [+-]? YY "-" MM "-" DD
			this.Date1Dash() || // y "-" mm "-" dd
			this.Date1Abbr() || // y "-" M "-" DD
			this.deDate1Abbr() || // DD "-" M "-" y
			this.dateYear2WithDash() ||
			this.dayMonth4Year() || // Day, month and four digit year, with dots, tabs or dashes
			this.dayMonth2Year() || // Day, month and two digit year, with dots or tabs
			this.dayTextualMonthYear() || // Day, textual month and year
			this.textualMonth4Year() || // Day and textual month
			this.textualMonth4Year2() ||
			this.textualMonthDayYear1() ||
			this.monthAbbrDayYear() ||
			this.year4MandatoryPrefix() ||
			this.dateMonthTextual()
		);
	}

	/**
	 * Four digit year, month and day with slashes
	 * YY "/" mm "/" dd
	 * Four digit year, month and day
	 * YY "/" MM "/" DD
	 *
	 * @return bool
	 */
	dateWithSlash() {
		let pos, year, month, day;
		pos = this.getPosition();
		year = this.year4MandatoryPrefix();
		if (year && this.isTKSlash()) {
			month = this.monthMandatoryPrefix() || this.monthOptionalPrefix();
			if (month && this.isTKSlash()) {
				if ((day = this.dayMandatoryPrefix() || this.dayOptionalPrefix())) {
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
	 * day, month and Four digit year with slashes
	 * dd "/" mm "/" YY
	 * day, month and Four digit year
	 * DD "/" MM "/" YY
	 *
	 * @return bool
	 */
	dedateWithSlash() {
		let pos, year, month, day;
		pos = this.getPosition();
		day = this.dayMandatoryPrefix() || this.dayOptionalPrefix();
		if (day && this.isTKSlash()) {
			month = this.monthMandatoryPrefix() || this.monthOptionalPrefix();
			if (month && this.isTKSlash()) {
				year = this.year4MandatoryPrefix();
				if (year) {
					this.data["DAY"] = day;
					this.data["MONTH"] = month;
					this.data["YEAR"] = year;
					return true;
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}
	/**
	 * Four digit year and month (GNU)
	 * ISO  YY "/"? MM "/"? DD
	 *
	 * @return bool
	 */
	dateWithOutSlash() {
		let pos, year, month, day;
		pos = this.getPosition();
		year = this.year4MandatoryPrefix();
		if (year) {
			this.isTKSlash();
			month = this.monthMandatoryPrefix();
			if (month) {
				this.isTKSlash();
				if ((day = this.dayMandatoryPrefix())) {
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
	 * Four digit year, month and day with Dash
	 * YY "-" mm "-" dd
	 * Four digit year, month and day
	 * YY "-" MM "-" DD
	 * Four digit year and month (GNU)
		// YY "-" mm
	 *
	 * @return bool
	 */
	dateWithDash() {
		let pos, year, month, day;
		pos = this.getPosition();
		year = this.year4MandatoryPrefix();
		if (year && this.isTKDash()) {
			month = this.monthMandatoryPrefix() || this.monthOptionalPrefix();
			if (month && this.isTKDash()) {
				if ((day = this.dayMandatoryPrefix() || this.dayOptionalPrefix())) {
					this.data["DAY"] = day;
				}
				this.data["YEAR"] = year;
				this.data["MONTH"] = month;
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
		let pos, year, month;
		pos = this.getPosition();
		year = this.year4MandatoryPrefix();
		if (year) {
			while (this.isTKSpace() || this.isTKDot() || this.isTKDash());
			month = this.monthTextual();
			if (month) {
				this.data["YEAR"] = year;
				this.data["MONTH"] = month;
				this.data["DAY"] = 1;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
		 * Four digit year with optional sign, month and day
			// [+-]? YY "-" MM "-" DD
		 *
		 * @return bool
		 */
	DateWithSignDash() {
		let pos = this.getPosition();
		this.data["SIGN_DATE"] = this.signNumber();
		if (this.dateWithDash()) return true;
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Year, month and day with dashes
		// y "-" mm "-" dd
	 *
	 * @return bool
	 */
	Date1Dash() {
		let pos, year, month, day;
		pos = this.getPosition();
		year = this.yearOptionalPrefix();
		if (year && this.isTKDash()) {
			month = this.monthOptionalPrefix();
			if (month && this.isTKDash()) {
				if ((day = this.dayOptionalPrefix())) {
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
		 * Year, month abbreviation and day
			// y "-" M "-" DD
		 *
		 * @return bool
		 */
	Date1Abbr() {
		let year,
			month,
			day,
			pos = this.getPosition();
		year = this.yearOptionalPrefix();
		if (year && this.isTKDash()) {
			month = this.monthTextual();
			if (month && this.isTKDash()) {
				if ((day = this.dayMandatoryPrefix())) {
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
		 * day, month abbreviation and Year
			// DD "-" M "-" y
		 *
		 * @return bool
		 */
	deDate1Abbr() {
		let year,
			month,
			day,
			pos = this.getPosition();
		day = this.dayMandatoryPrefix();
		if (day && this.isTKDash()) {
			month = this.monthTextual();
			if (month && this.isTKDash()) {
				year = this.yearOptionalPrefix();
				if (year) {
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

	// COOKIE	"Thursday, 02-Jun-2022 16:58:35 UTC"
	// RFC 850	"Thursday, 02-Jun-22 16:58:35 UTC"
	// RFC 7231	"Thu, 02 Jun 2022 16:58:35 GMT"
	// RFC 822	"Thu, 02 Jun 22 16:58:35 +0000"
	// RFC 1036	"Thu, 02 Jun 22 16:58:35 +0000"
	// RFC 1123	"Thu, 02 Jun 2022 16:58:35 +0000"
	// RFC 2822	"Thu, 02 Jun 2022 16:58:35 +0000"
	// RSS	"Thu, 02 Jun 2022 16:58:35 +0000"

	dateWithAbbrTimeTZ() {
		let year,
			month,
			day,
			pos = this.getPosition();
		if (this.dayNeme()) {
			this.isTKComma();
			this.isTKSpace();
			day = this.dayMandatoryPrefix();
			if (day) {
				this.isTKDash() || this.isTKSpace();
				month = this.monthTextual();
				if (month) {
					this.isTKDash() || this.isTKSpace();
					year = this.year4MandatoryPrefix() || this.year2MandatoryPrefix();
					if (year && this.isTKSpace() && this.time24Notation()) {
						this.data["YEAR"] = year;
						this.data["MONTH"] = month;
						this.data["DAY"] = day;
						return true;
					}
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
	 * @param  int $int
	 * @return bool
	 */
	year4MandatoryPrefix() {
		let y1,
			y2,
			pos = this.getPosition();
		y1 = this.year2MandatoryPrefix();
		if (y1) {
			y2 = this.year2MandatoryPrefix();
			if (y2) return parseInt(y1 + "" + y2);
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 *	a number with exactly two digits (YY)
	 *
	 * @param  {int} int
	 * @return bool
	 */
	year2MandatoryPrefix(): number | false {
		return this.int00To99();
	}

	/**
	 * year
	 *  a number between 1 and 9999 inclusive, with an optional 0 prefix before numbers 0-9
	 * 0?[0-9]{1,4}
	 * @param  int int
	 * @return bool
	 */
	yearOptionalPrefix() {
		let y1: any,
			y2,
			pos = this.getPosition();
		y1 = this.int00To99() || this.int1To9() || this.int0();
		if (y1) {
			y2 = this.int00To99() || this.int1To9() || this.int0();
			if (y2) {
				return parseInt(y1 + "" + y2);
			}
			return y1;
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * day (dd) {([0-2]?[0-9] | "3"[01]) daysuf?}
	 * a number between 1 and 31 inclusive, with an optional 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	dayOptionalPrefix() {
		let int;
		int = this.dayMandatoryPrefix() || this.int1To9() || this.int0();
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
	 * @param  int int
	 * @return bool
	 */
	dayMandatoryPrefix() {
		return this.int00() || this.int01To09() || this.int10To31();
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
	 * Two digit year, month and day with dashes
	 * yy "-" MM "-" DD
	 *
	 * @return bool
	 */
	dateYear2WithDash() {
		let year,
			month,
			day,
			pos = this.getPosition();
		year = this.year2MandatoryPrefix();
		if (year && this.isTKDash()) {
			month = this.monthMandatoryPrefix();
			if (month && this.isTKDash()) {
				day = this.dayMandatoryPrefix();
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
	 * Day, month and four digit year, with dots, tabs or dashes
		// dd [.\t-] mm [.-] YY
	 *
	 * @return bool
	 */
	dayMonth4Year() {
		let year,
			month,
			day,
			pos = this.getPosition();
		day = this.dayOptionalPrefix();
		if (day && (this.isTKSpace() || this.isTKDot() || this.isTKDash())) {
			month = this.monthOptionalPrefix();
			if (month && (this.isTKDot() || this.isTKDash())) {
				if ((year = this.year4MandatoryPrefix())) {
					this.data["DAY"] = day;
					this.data["MONTH"] = month;
					this.data["YEAR"] = year;
					return true;
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Day, month and two digit year, with dots or tabs
		//  dd [.\t] mm "." yy
	 *
	 * @return bool
	 */
	dayMonth2Year() {
		let year,
			month,
			day,
			pos = this.getPosition();
		day = this.dayOptionalPrefix();
		if (day && (this.isTKSpace() || this.isTKDot())) {
			month = this.monthOptionalPrefix();
			if (month && this.isTKDot()) {
				year = this.year2MandatoryPrefix();
				if (year) {
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
	 * Day, textual month and year
			// dd ([ \t.-])* m ([ \t.-])* y
				// d ([ .\t-])* m
	 *
	 * @return bool
	 */
	dayTextualMonthYear() {
		let year,
			month,
			day,
			pos = this.getPosition();
		day = this.dayOptionalPrefix();
		if (day) {
			while (this.isTKSpace() || this.isTKDot() || this.isTKDash());
			month = this.monthTextual();
			if (month) {
				while (this.isTKSpace() || this.isTKDot() || this.isTKDash());
				year = this.yearOptionalPrefix();
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
	 * Textual month and four digit year (Day reset to 1)
	 * m ([ \t.-])* YY         Day reset to 1
	 *
	 * @return bool
	 */
	textualMonth4Year() {
		let year,
			month,
			day,
			pos = this.getPosition();
		month = this.monthTextual();
		if (month) {
			while (this.isTKSpace() || this.isTKDot() || this.isTKDash());
			year = this.year4MandatoryPrefix();
			if (year) {
				this.data["YEAR"] = year;
				this.data["MONTH"] = month;
				this.data["DAY"] = 1;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}
	textualMonth4Year2() {
		let year,
			month,
			day,
			pos = this.getPosition();
		year = this.year4MandatoryPrefix();
		if (year) {
			while (this.isTKSpace() || this.isTKDot() || this.isTKDash());
			month = this.monthTextual();
			if (month) {
				this.data["YEAR"] = year;
				this.data["MONTH"] = month;
				this.data["DAY"] = 1;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}
	/**
	 * Textual month and year
	 * m ([ .\t-])* dd [,.stndrh\t ]+? y?
	 *
	 * @return bool
	 */
	textualMonthDayYear1() {
		let year,
			month,
			day,
			pos = this.getPosition();
		month = this.monthTextual();
		if (month) {
			while (this.isTKSpace() || this.isTKDot() || this.isTKDash());
			day = this.dayOptionalPrefix();
			if (day) {
				do {
					if (
						!(
							this.isTKSpace() ||
							this.daySuffixTextual() ||
							this.isTKComma() ||
							this.isTKDot()
						)
					) {
						this.data["MONTH"] = month;
						this.data["DAY"] = day;
						return true;
					}
				} while (
					this.isTKSpace() ||
					this.daySuffixTextual() ||
					this.isTKComma() ||
					this.isTKDot()
				);
				year = this.yearOptionalPrefix();
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
		// M "-" DD "-" y
	 *
	 * @return bool
	 */
	monthAbbrDayYear() {
		let year,
			month,
			day,
			pos = this.getPosition();
		month = this.monthTextual();
		if (month && this.isTKDash()) {
			day = this.dayMandatoryPrefix();
			if (day && this.isTKDash()) {
				year = this.yearOptionalPrefix();
				if (year) {
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
	dateMonthTextual() {
		let month,
			pos = this.getPosition();
		month = this.monthTextual();
		if (month) {
			this.data["MONTH"] = month;
			return true;
		}
		this.resetPosition(pos);
		return false;
	}
	/**
	 * Textual abbreviation month (M)  (and just the month)
	 *
	 * Textual month (and just the month) (m)
	 *
	 * @param  int int
	 * @return bool
	 */
	monthTextual() {
		var int;
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
	 * @param  int int
	 * @return bool
	 */
	monthOptionalPrefix(): number | false {
		return this.monthMandatoryPrefix() || this.int1To9() || this.int0();
	}

	/**
	 * month (MM) {	"0" [0-9] | "1"[0-2]}
	 * a number between 1 and 12 inclusive, with an mandatory 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	monthMandatoryPrefix(): number | false {
		return this.int10To12() || this.int01To09() || this.int00();
	}

	/**
	 * week of year (W)
	 *
	 * @param  int int
	 * @return bool
	 */
	weekOfYear(): number | false {
		return this.int10To53() || this.int01To09() || this.int00();
	}

	// Relative

	/**
	 * day neme
	 *
	 * @param  int dow
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
	 * @param  string sign
	 * @return bool
	 */
	signNumber(): string | false {
		if (this.isTKPlus()) {
			return "+";
		} else if (this.isTKDash()) {
			return "-";
		}
		return false;
	}

	/**
	 * Ordinal number
	 *
	 * @param  int int
	 * @return bool
	 */
	ordinal(): number | false {
		return this.firstToThirtyFirstTextual() || this.relText();
	}

	/** //todo
	 * relative text
	 *
	 * @param  int int
	 * @return bool
	 */
	relText(): number | false {
		switch (this.nameToken()) {
			case "THIS":
				this.nextToken();
				return 0;
			case "NEXT":
				this.nextToken();
				return 1;
			case "PREVIOUS":
				this.nextToken();
				return -1;
			case "LAST":
				this.nextToken();
				return 2;
			default:
				return false;
		}
	}

	/**
	 * unit {'ms' | 'µs' | (( 'msec' | 'millisecond' | 'µsec' | 'microsecond' | 'usec' | 'sec' | 'second' | 'min' | 'minute' | 'hour' | 'day' | 'fortnight' | 'forthnight' | 'month' | 'year') 's'?) | 'weeks' | daytext}
	 *
	 * @param  int int
	 * @return bool
	 */
	unit(): number | false {
		switch (this.nameToken()) {
			case "MICROSECOND":
				this.nextToken();
				return false; // todo
			case "MILLISECOND":
				this.nextToken();
				return false; // todo
			case "SECOND":
				this.nextToken();
				return 59;
			case "MINUTE":
				this.nextToken();
				return 60;
			case "HOUR":
				this.nextToken();
				return 24;
			case "DAY":
				this.nextToken();
				return 31;
			case "MONTH":
				this.nextToken();
				return 12;
			case "YEAR":
				this.nextToken();
				return 100;
			case "WEEKS":
				this.nextToken();
				return 53;
			case "WEEKDAY":
				this.nextToken();
				return 7;
			case "FORTNIGHT":
				this.nextToken();
				return 14;
			default:
				return false;
		}
	}

	// =================================================================================
	// ==================================   numeric   ==================================
	// =================================================================================

	/**
	 * a spelled number between one and thirty-one (one, two, etc.)
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
	 * a spelled number in sequence between first and thirty-first
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
	 * a number between zero and ninety nine
	 *
	 * @param  int int
	 * @return bool
	 */
	int00To99() {
		return this.int10To99() || this.int01To09() || this.int00();
	}
	/**
	 * a number between ten and ninety nine
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To99(): number | false {
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
	 * a number between ten and fifty nine
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To59(): number | false {
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
	 * a number between ten and fifty three
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To53(): number | false {
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
	 * a number between ten and thirty six
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To36(): number | false {
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
	 * a number between ten and thirty one
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To31(): number | false {
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
	 * a number between ten and twenty four
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To24(): number | false {
		if (this.isToken("INT_24")) {
			const int = this.valueToken();
			this.nextToken();
			return int;
		}
		return this.int10To23();
	}

	/**
	 * a number between ten and twenty three
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To23(): number | false {
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
	 * a number between ten and twelfth
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To12(): number | false {
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
	 * a number between one and nine - two digits
	 *
	 * @param  int int
	 * @return bool
	 */
	int01To09(): number | false {
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
	 * a number between one and nine - single digits
	 *
	 * @param  int int
	 * @return bool
	 */
	int1To9(): number | false {
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
	 * a number between one and seven - single digits
	 *
	 * @param  int int
	 * @return bool
	 */
	int1To7(): number | false {
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
	 * a zero number - two digit
	 *
	 * @param  int int
	 * @return bool
	 */
	int00(): number | false {
		if (this.isToken("INT_00")) {
			const int = this.valueToken();
			this.nextToken();
			return int;
		}
		return false;
	}

	/**
	 * a zero number - single-digit
	 *
	 * @param  int int
	 * @return bool
	 */
	int0(): number | false {
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
