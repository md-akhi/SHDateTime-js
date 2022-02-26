/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package Date and Time Related Extensions SH{ Shamsi Hijri, Solar Hijri, Iranian Hijri }
 * @author Mohammad Amanalikhani
 * @link http://docs.akhi.ir/js/SHDateTime
 * @copyright Copyright (C) 2015 - 2022 Open Source Matters,Inc. All right reserved.
 * @license https://www.gnu.org/licenses/agpl-3.0.en.html AGPL-3.0 License
 * @version Release: 1.0.0
 */

import SHDateWord, { Config as SHDateConfig } from "./Word";

/**
 * class SHDate
 * @since   1.0.0
 */
export default class SHDate {
	public static version: string = SHDateConfig.version;
	private date: Date;
	private shDate: number[] = [];
	private shUTCDate: number[] = [];
	/**
	 * Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format.Date objects contain a Number that represents milliseconds since 11 Day 1348 UTC.
	 * @param {object} dateObject Date object
	 * @param {string} datastring Timestamp string
	 * @param {number} value Time value or timestamp number
	 * @param {number} year
	 * @param {number} month beginning with 0 for January to 11 for December.
	 * @param {number} date the day of the month. The default is 1.
	 * @param {number} hour between 0 and 23 representing the hour of the day. Defaults to 0.
	 * @param {number} minute the minute segment of a time. The default is 0 minutes past the hour.
	 * @param {number} second the second segment of a time. The default is 0 seconds past the minute.
	 * @param {number} millisecond the millisecond segment of a time. The default is 0 milliseconds past the second.
	 * @returns {string} a Date object whose toString() method returns the literal string Invalid Date.
	 * @since 1.0.0
	 */
	constructor(data: number | string | object, ...args: number[]) {
		if (!new.target || !this) {
			// if you run me without new
			throw new Error("You must use new to create a instance of this class");
			//return new SHDate().toString();
		}
		this.date = new Date();
		if (typeof data == "number")
			if (data.toString().length == 4 && (data >= 1200 || data < 1700)) {
				const [
					month = this.getMonth(),
					date = 1,
					hours = 0,
					minute = 0,
					second = 0,
					millisecond = 0
				] = args;
				// year
				this.setFullYear(data || this.getFullYear());
				this.setMonth(month);
				this.setDate(date);
				this.setHours(hours);
				this.setMinutes(minute);
				this.setSeconds(second);
				this.setMilliseconds(millisecond);
			}
			// value
			else this.setTime(data);
		else if (typeof data == "string")
			// dateString
			throw new Error("Not Implemented dateString");
		else if (data instanceof SHDate)
			// dateObject
			this.date.setTime(data.getTime());
		else throw new Error("Invalid data");
	}

	/**
	 * update date
	 * @param {boolean} isUTC
	 * @returns {null}
	 * @since 1.0.0
	 */
	private UpDate(isUTC: boolean = false): void {
		if (isUTC) {
			this.shUTCDate = this.GregorianToSolar(
				this.date.getUTCFullYear(),
				this.date.getUTCMonth() + 1,
				this.date.getUTCDate()
			);
			return;
		}
		this.shDate = this.GregorianToSolar(
			this.date.getFullYear(),
			this.date.getMonth() + 1,
			this.date.getDate()
		);
		return;
	}

	/**
	 *  Convert gregorian date to solar hijri date
	 * @param {number} gyear - gregorian year
	 * @param {number} gmonth - gregorian month
	 * @param {number} gdate - gregorian date
	 * @param {boolean} julian - julian date
	 * @returns {array} - solar hijri date
	 * @since 1.0.0
	 */
	private GregorianToSolar(
		gyear: number,
		gmonth: number,
		gdate: number,
		julian: boolean = false
	): Array<any> {
		// 0622/03/22 = 0001/01/01
		let gdoy: number, doy: number, year: number;
		gdoy =
			(gyear - 1) * 365 +
			([0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][gmonth] +
				gdate) -
			226745; //226745 = 621*365+80
		if (this.GIsLeap(gyear) && gmonth > 2) gdoy++;
		year = parseInt((gdoy / 365).toString()) + 1;
		doy = (gdoy % 365) + this.GIsLeap(gyear, true) - this.IsLeap(year, true);
		return this.DaysOfDay(year, doy - 1);
	}

	/**
	 * Convert solar hijri date to gregorian date
	 * @param {number} year - solar hijri year
	 * @param {number} month - solar hijri month
	 * @param {number} date - solar hijri date
	 * @param {boolean} julian - julian date
	 * @returns {array} - gregorian date
	 * @since 1.0.0
	 */
	private SolarToGregorian(
		year: number,
		month: number,
		date: number,
		julian: boolean = false
	): number[] {
		// 0001/01/01 = 0622/03/22
		let doy: number, gdoy: number, gyear: number;
		doy =
			(year - 1) * 365 +
			this.DayOfYear(year, month, date) +
			226745 /*621*365+80*/;
		gyear = parseInt((doy / 365).toString()) + 1;
		gdoy = (doy % 365) + this.IsLeap(year, true) - this.GIsLeap(gyear, true);
		return this.GDaysOfDay(gyear, gdoy);
	}
	private GDaysOfDay(gyear: number, gdoy: number): number[] {
		let gdiy: number,
			gleap: number,
			gmonth: number = 0;
		gdiy = this.GDaysInYear(gyear);
		if (gdoy < 1)
			do {
				gyear--;
				gdiy = this.GDaysInYear(gyear);
				gdoy += gdiy;
			} while (gdoy < 1);
		else if (gdoy > gdiy)
			do {
				gdoy -= gdiy;
				gyear++;
				gdiy = this.GDaysInYear(gyear);
			} while (gdoy > gdiy);
		gleap = this.GIsLeap(gyear) ? 29 : 28;
		[0, 31, gleap, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].forEach(
			(gdim, gmiy) => {
				if (gdoy <= gdim) return [gyear, gmonth, parseInt(gdoy.toString())];
				gdoy -= gdim;
				gmonth = gmiy;
			}
		);
		return [gyear, gmonth, parseInt(gdoy.toString())];
	}
	private GDaysInYear(year: number): number {
		return this.GIsLeap(year) ? 366 : 365;
	}
	private GDOWToDOW(gdow: number): number {
		// 7+(gdow+1)-SHDateConfig.FIRST_DAY_OF_WEEK%7
		return (8 + gdow - SHDateConfig.FIRST_DAY_OF_WEEK) % 7; // shdow
	}
	/**
	 * Get gregorian leap year
	 * @param {number} gyear - gregorian year
	 * @param {boolean} all - all leap year
	 * @returns {boolean} - leap year
	 * @since 1.0.0
	 */
	private GIsLeap(gyear: number, all: boolean = false): number {
		if (all)
			return (
				Math.ceil(
					parseInt((--gyear / 4).toString()) -
						parseInt((gyear / 100).toString()) +
						parseInt((gyear / 400).toString())
				) - 150
			);
		return parseInt(
			(gyear % 4 == 0 && !(gyear % 100 == 0 && gyear % 400 != 0)).toString()
		);
	}

	/**
	 * Get leap year
	 * @param {number} year - solar hijri year
	 * @param {boolean} all - all leap year
	 * @returns {boolean} - leap year
	 * @since 1.0.0
	 */
	private IsLeap(year: number, all: boolean = false): number {
		if (all)
			return parseInt(
				(Math.ceil((year += 1127) * 365.2422 - year * 365) - 274).toString()
			);
		return (
			parseInt(((year += 1128) * 365.2422).toString()) -
			parseInt((--year * 365.2422).toString()) -
			365
		);
	}

	/**
	 * Get leap year
	 * @param {number} year - solar hijri year
	 * @returns {boolean} - leap year
	 * @since 1.0.0
	 */
	public isLeap(year: number = this.getFullYear()): boolean {
		return this.IsLeap(year) ? true : false;
	}

	/**
	 * Get day of week (dow)
	 * @param {number} year - solar hijri year
	 * @param {number} month - solar hijri month
	 * @param {number} date - solar hijri date
	 * @returns {number} - day of week
	 * @since 1.0.0
	 */
	private DayOfWeek(
		year: number,
		month: number,
		date: number,
		FDOW: number = SHDateConfig.FIRST_DAY_OF_WEEK
	): number {
		//return (year+this.IsLeaps(year,1)+this::DayOfYear(year,month,date)+5)%7;
		//new and best version
		return (
			(5 +
				year +
				this.IsLeap(year, true) +
				this.DayOfYear(year, month, date) -
				FDOW) %
			7
		);
	}

	/**
	 * Get day of year (doy)
	 * @param {number} month - solar hijri month
	 * @param {number} date - solar hijri date
	 * @param {number} year - solar hijri year
	 * @returns {number} - day of year
	 * @since 1.0.0
	 */
	private DayOfYear(year: number, month: number, date: number): number {
		let doy: number;
		if (month < 7) doy = (month - 1) * 31;
		else doy = (month - 7) * 30 + 186;
		return (doy + date - 1) % (this.DaysInYear(year) - 1);
	}

	/**
	 * Get week of year (woy)
	 * @param {number} year - solar hijri year
	 * @param {number} month - solar hijri month
	 * @param {number} date - solar hijri date
	 * @returns {number} - week of year
	 * @since 1.0.0
	 */
	private WeekOfYear(year: number, month: number, date: number): number[] {
		var iw: number,
			iy: number,
			doy: number,
			far1weekday: number,
			weekday: number;
		/* Find if Y M D falls in YearNumber --Y, WeekNumber 52 or 53 */
		if (
			(doy = this.DayOfYear(year, month, date) + 1) <=
				8 - (far1weekday = this.DayOfWeek(year, 1, 1) + 1) &&
			far1weekday > 4
		) {
			iy = --year;
			iw = far1weekday == 5 || (far1weekday == 6 && this.IsLeap(iy)) ? 53 : 52;
			return [iw, iy];
		}
		/* Find if Y M D falls in YearNumber ++Y, WeekNumber 1 */
		if (
			365 - doy + this.IsLeap(year) <
			4 - (weekday = this.DayOfWeek(year, month, date) + 1)
		) {
			iy = ++year;
			iw = 1;
			return [iw, iy];
		}
		/* Find if Y M D falls in YearNumber Y, WeekNumber 1 through 52|53 */
		iy = year;
		iw = (doy + 6 - weekday + far1weekday) / 7;
		if (far1weekday > 4) return [--iw, iy];
		return [iw, iy];
	}

	/**
	 * Get weeks in year (wiy)
	 * @param {number} year - solar hijri year
	 * @returns {number} - weeks in year
	 * @since 1.0.0
	 */
	private WeeksInYear(year: number): number {
		const far1dow: number = this.DayOfWeek(year, 1, 1) + 1;
		if (far1dow == 4 || (far1dow == 3 && this.IsLeap(year))) return 53;
		return 52;
	}

	/**
	 * Get week of day (wod)
	 * @param year  - solar hijri year
	 * @param week - solar hijri week
	 * @param date - solar hijri date
	 * @returns {number} - week of day
	 */
	private WeekOfDay(year: number, week: number, date: number = 1): number[] {
		const doy = (week - 1) * 7 + date - this.DayOfWeek(year, 1, 4) + 2;
		return this.DaysOfDay(year, doy);
	}

	/**
	 * Get days of days of year
	 * @param year - solar hijri year
	 * @param doy  - solar hijri day of year
	 * @returns {array} - days of day
	 * @since 1.0.0
	 */
	private DaysOfDay(year: number, doy: number): number[] {
		let diy, month, date;
		doy++;
		diy = this.DaysInYear(year);
		if (doy < 1)
			do {
				year--;
				doy += this.DaysInYear(year);
			} while (doy < 1);
		else if (doy > diy)
			do {
				doy -= diy;
				year++;
				diy = this.DaysInYear(year);
			} while (doy > diy);
		if (doy < 187) {
			month = parseInt(((doy - 1) / 31).toString()) + 1;
			date = doy % 31 || 31;
		} else {
			doy -= 186;
			month = parseInt(((doy - 1) / 30).toString()) + 7;
			date = doy % 30 || 30;
		}
		return [year, month, date];
	}

	/**
	 * Get days in month (dim)
	 * @param {number} year - solar hijri year
	 * @param {number} month - solar hijri month
	 * @returns {number} - days in month
	 * @since 1.0.0
	 */
	private DaysInMonth(year: number, month: number): number {
		return month < 7 ? 31 : month < 12 ? 30 : this.IsLeap(year) + 29;
		if (month < 7) return 31;
		else if (month < 12) return 30;
		return this.IsLeap(year) + 29;
	}

	/**
	 * Get days in year (diy)
	 * @param {number} year - solar hijri year
	 * @returns {number} - days in year
	 * @since 1.0.0
	 */
	private DaysInYear(year: number): number {
		return this.IsLeap(year) + 365;
	}

	/**
	 * Get private data of solar hijri date
	 * @param {string} format - format of data
	 * @returns {array}
	 */
	public format(format: string, isUtc = false): string[] {
		const year = isUtc ? this.getUTCFullYear() : this.getFullYear(),
			month = isUtc ? this.getUTCMonth() + 1 : this.getMonth() + 1,
			date = isUtc ? this.getUTCDate() : this.getDate(),
			hours = isUtc ? this.getUTCHours() : this.getHours(),
			minute = isUtc ? this.getUTCMinutes() : this.getHours(),
			second = isUtc ? this.getUTCSeconds() : this.getMinutes(),
			millisecond = isUtc ? this.getUTCMilliseconds() : this.getMilliseconds(),
			weekday = isUtc ? this.getDay() + 1 : this.getUTCDay() + 1;
		let result: string[] = [];
		format.split(/\s*(?:=|$)\s*/).forEach((f) => {
			switch (f) {
				case "YY":
					result.push(year.toString());
					break;
				case "yy":
					result.push(year.toString().padStart(4, "0"));
					break;
				case "MM":
					result.push(month.toString());
					break;
				case "mm":
					result.push(month.toString().padStart(2, "0"));
					break;
				case "DD":
					result.push(date.toString());
					break;
				case "dd":
					result.push(date.toString().padStart(2, "0"));
					break;
				case "HH":
					result.push(hours.toString());
					break;
				case "hh":
					result.push(hours.toString().padStart(2, "0"));
					break;
				case "II":
					result.push(minute.toString());
					break;
				case "ii":
					result.push(minute.toString().padStart(2, "0"));
					break;
				case "SS":
					result.push(second.toString());
					break;
				case "ss":
					result.push(second.toString().padStart(2, "0"));
					break;
				case "MS":
					result.push(millisecond.toString());
					break;
				case "ms":
					result.push(millisecond.toString().padStart(2, "0"));
					break;
				case "Diy":
					result.push(this.DaysInYear(year).toString());
					break;
				case "diy":
					result.push(this.DaysInYear(year).toString().padStart(3, "0"));
					break;
				case "Dim":
					result.push(this.DaysInMonth(year, month).toString());
					break;
				case "dim":
					result.push(
						this.DaysInMonth(year, month).toString().padStart(2, "0")
					);
					break;
				case "Wod":
					result.push(this.WeekOfDay(year, month, date).toString());
					break;
				case "wod":
					result.push(
						this.WeekOfDay(year, month, date).toString().padStart(2, "0")
					);
					break;
				case "Wiy":
					result.push(this.WeeksInYear(year).toString());
					break;
				case "wiy":
					result.push(this.WeeksInYear(year).toString().padStart(2, "0"));
					break;
				case "Woy":
					result.push(this.WeekOfYear(year, month, date).toString());
					break;
				case "woy":
					result.push(
						this.WeekOfYear(year, month, date).toString().padStart(2, "0")
					);
					break;
				case "Dow":
					result.push(weekday.toString());
					break;
				case "dow":
					result.push(weekday.toString().padStart(2, "0"));
					break;
				case "Doy":
					result.push(this.DayOfYear(year, month, date).toString());
					break;
				case "doy":
					result.push(
						this.DayOfYear(year, month, date).toString().padStart(3, "0")
					);
					break;
				case "dsn":
					result.push(SHDateWord.getDayShortNames(weekday));
					break;
				case "dfn":
					result.push(SHDateWord.getDayFullNames(weekday));
					break;
				case "efn":
					result.push(SHDateWord.getMeridienFullNames(hours));
					break;
				case "esn":
					result.push(SHDateWord.getMeridienShortNames(hours));
					break;
				case "mfn":
					result.push(SHDateWord.getMonthFullNames(month - 1));
					break;
				case "msn":
					result.push(SHDateWord.getMonthShortNames(month - 1));
					break;
				case "asn":
					result.push(SHDateWord.getAnimalsFullNames(year));
					break;
				case "csn":
					result.push(SHDateWord.getConstellationsFullNames(month - 1));
					break;
				case "ssn":
					result.push(SHDateWord.getSeasonFullNames(month - 1));
					break;
				case "osn":
					result.push(SHDateWord.getSolsticeFullNames(month - 1));
					break;
				case "sun":
					result.push(SHDateWord.getSuffixNames(date));
					break;
				default:
					result.push(f);
					break;
			}
		});
		return result;
	}

	/**
	 * Return current Unix timestamp
	 * @returns {number} - current Unix timestamp
	 * @since 1.0.0
	 */
	public static now(): number {
		return Date.now();
	}

	/**
	 * Returns the number of milliseconds between midnight, 11 Dey 1348 Universal Coordinated Time (UTC) (or GMT) and the specified date.
	 * @param {number} year — The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
	 * @param {number} month — The month as a number between 0 and 11 (January to December).
	 * @param {number} date — The date as a number between 1 and 31.
	 * @param {number} hours — Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.
	 * @param {number} minutes — Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.
	 * @param {number} seconds — Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds.
	 * @param {number} ms — A number from 0 to 999 that specifies the milliseconds.
	 * @returns {number} The number of milliseconds between midnight, 11 Dey 1348 UTC and the supplied date.
	 * @since 1.0.0
	 */
	public static UTC(...args: number[]): number {
		let date = new Date(new SHDate(args).getTime());
		return Date.UTC(
			date.getUTCFullYear(),
			date.getUTCMonth(),
			date.getUTCDate(),
			date.getUTCHours(),
			date.getUTCMinutes(),
			date.getUTCSeconds(),
			date.getUTCMilliseconds()
		);
	}

	/**
	 * Sets the year of the Date object using local time.
	 * @param {number} year — A numeric value for the year.
	 * @param {number} month — A zero-based numeric value for the month (0 for January, 11 for December). Must be *specified if numDate is specified.
	 * @param {number} date — A numeric value equal for the day of the month.
	 * @return {object} SHDate
	 * @since 1.0.0
	 */
	setFullYear(
		year: number,
		month: number = this.getMonth() + 1,
		date: number = this.getDate()
	): object {
		const [gyear, gmonth, gdate] = this.SolarToGregorian(year, month, date);
		this.date.setFullYear(gmonth - 1, gdate, gyear);
		return this;
	}

	/**
	 * Sets the year value in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} year — A numeric value equal to the year.
	 * @param {number} month — A numeric value equal to the month. The value for January is 0, and other month values follow * consecutively. Must be supplied if numDate is supplied.
	 * @param {number} date — A numeric value equal to the day of the month.
	 * @return {object} SHDate
	 * @since 1.0.0
	 */
	setUTCFullYear(
		year: number,
		month: number = this.getUTCMonth() + 1,
		date: number = this.getUTCDate()
	): object {
		const [gyear, gmonth, gdate] = this.SolarToGregorian(year, month, date);
		this.date.setUTCFullYear(gmonth - 1, gdate, gyear);
		return this;
	}

	/**
	 * Sets the month value in the Date object using local time.
	 * @param {number} month — A numeric value equal to the month. The value for January is 0, and other month values follow * consecutively.
	 * @param {number} date — A numeric value representing the day of the month. If this value is not supplied, the value from a * call to the getDate method is used.
	 * @return {object} SHDate
	 * @since 1.0.0
	 */
	setMonth(month: number, date: number = this.getDate()): object {
		const [gyear, gmonth, gdate] = this.SolarToGregorian(
			this.getFullYear(),
			month,
			date
		);
		this.date.setMonth(gmonth - 1, gdate);
		return this;
	}

	/**
	 * Sets the month value in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} month — A numeric value equal to the month. The value for January is 0, and other month values follow * consecutively.
	 * @param {number} date — A numeric value representing the day of the month. If it is not supplied, the value from a call to  the getUTCDate method is used.
	 * @return {object} SHDate
	 * @since 1.0.0
	 */
	setUTCMonth(month: number, date: number = this.getUTCDate()): object {
		const [gyear, gmonth, gdate] = this.SolarToGregorian(
			this.getUTCFullYear(),
			month,
			date
		);
		this.date.setUTCMonth(gmonth - 1, gdate);
		return this;
	}

	/**
	 * Sets the numeric day-of-the-month value of the Date object using local time.
	 * @param {number} date — A numeric value equal to the day of the month.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	setDate(date: number): object {
		const [gyear, gmonth, gdate] = this.SolarToGregorian(
			this.getFullYear(),
			this.getMonth() + 1,
			date
		);
		this.date.setDate(gdate);
		return this;
	}

	/**
	 * 	Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} date — A numeric value equal to the day of the month.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	setUTCDate(date: number): object {
		const [gyear, gmonth, gdate] = this.SolarToGregorian(
			this.getUTCFullYear(),
			this.getUTCMonth() + 1,
			date
		);
		this.date.setUTCDate(gdate);
		return this;
	}

	/**
	 * 	Sets the hour value in the Date object using local time.
	 *
	 * @param {number} hours — A numeric value equal to the hours value.
	 * @param {number} min — A numeric value equal to the minutes value.
	 * @param {number} sec — A numeric value equal to the seconds value.
	 * @param {number} ms — A numeric value equal to the milliseconds value.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setHours(
		hours: number,
		minutes: number = this.getMinutes(),
		seconds: number = this.getSeconds(),
		milliSeconds: number = this.getMilliseconds()
	): object {
		this.date.setHours(hours, minutes, seconds, milliSeconds);
		return this;
	}

	/**
	 * 	Sets the hours value in the Date object using Universal Coordinated Time (UTC).
	 *
	 * @param {number} hours — A numeric value equal to the hours value.
	 * @param {number} min — A numeric value equal to the minutes value.
	 * @param {number} sec — A numeric value equal to the seconds value.
	 * @param {number} ms — A numeric value equal to the milliseconds value.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setUTCHours(
		hours: number,
		minutes: number = this.getUTCMinutes(),
		seconds: number = this.getUTCSeconds(),
		milliSeconds: number = this.getUTCMilliseconds()
	): object {
		this.date.setUTCHours(hours, minutes, seconds, milliSeconds);
		return this;
	}

	/**
	 * 	Sets the minutes value in the Date object using local time.
	 *
	 * @param {number} min — A numeric value equal to the minutes value.
	 * @param {number} sec — A numeric value equal to the seconds value.
	 * @param {number} ms — A numeric value equal to the milliseconds value.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setMinutes(
		minutes: number,
		seconds: number = this.getSeconds(),
		milliSeconds: number = this.getMilliseconds()
	): object {
		this.date.setMinutes(minutes, seconds, milliSeconds);
		return this;
	}

	/**
	 * 	Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
	 *
	 * @param {number} min — A numeric value equal to the minutes value.
	 * @param {number} sec — A numeric value equal to the seconds value.
	 * @param {number} ms — A numeric value equal to the milliseconds value.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setUTCMinutes(
		minutes: number,
		seconds: number = this.getUTCSeconds(),
		milliSeconds: number = this.getUTCMilliseconds()
	): object {
		this.date.setUTCMinutes(minutes, seconds, milliSeconds);
		return this;
	}

	/**
	 * Sets the seconds value in the Date object using local time.
	 *
	 * @param {number} sec — A numeric value equal to the seconds value.
	 * @param {number} ms — A numeric value equal to the milliseconds value.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setSeconds(
		seconds: number,
		milliSeconds: number = this.getMilliseconds()
	): object {
		this.date.setSeconds(seconds, milliSeconds);
		return this;
	}

	/**
	 * 	Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} sec — A numeric value equal to the seconds value.
	 * @param {number} ms — A numeric value equal to the milliseconds value.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setUTCSeconds(
		seconds: number,
		milliSeconds: number = this.getUTCMilliseconds()
	): object {
		this.date.setUTCSeconds(seconds, milliSeconds);
		return this;
	}

	/**
	 * 	Sets the milliseconds value in the Date object using local time.
	 * @param {number} ms — A number between 0 and 999, representing the milliseconds.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setMilliseconds(ms: number): object {
		this.date.setMilliseconds(ms);
		return this;
	}

	/**
	 * 	Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} ms — A number between 0 and 999, representing the milliseconds.
	 * @returns {object} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
	 * @since 1.0.0
	 */
	public setUTCMilliseconds(ms: number): object {
		this.date.setUTCMilliseconds(ms);
		return this;
	}

	/**
	 * Gets the year, using local time.
	 * @returns {number} The year.
	 * @since 1.0.0
	 */
	public getFullYear(): number {
		this.UpDate();
		return this.shDate[0];
	}

	/**
	 * Gets the year using Universal Coordinated Time (UTC).
	 * @returns {number} The year.
	 * @since 1.0.0
	 *
	 */
	public getUTCFullYear(): number {
		this.UpDate(true);
		return this.shUTCDate[0];
	}

	/**
	 * Gets the month, using local time.
	 * @returns {number} The month (0-11)
	 * @since 1.0.0
	 */
	public getMonth(): number {
		this.UpDate();
		return this.shDate[1] - 1;
	}

	/**
	 * Gets the month of a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The month (0-11) in the Date object using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	public getUTCMonth(): number {
		this.UpDate(true);
		return this.shUTCDate[1] - 1;
	}

	/**
	 * Gets the day-of-the-month, using local time.
	 * @returns {number} The day-of-the-month, using local time.
	 * @since 1.0.0
	 */
	public getDate(): number {
		this.UpDate();
		return this.shDate[2];
	}

	/**
	 * Gets the day-of-the-month, using Universal Coordinated Time (UTC).
	 * @returns {number} The day-of-the-month, using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	public getUTCDate(): number {
		this.UpDate(true);
		return this.shUTCDate[2];
	}

	/**
	 * Gets the hours in a date, using local time.
	 * @returns {number} The hours (from 0 to 23)
	 * @since 1.0.0
	 */
	public getHours(): number {
		return this.date.getHours();
	}

	/**
	 * Gets the hours value in a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The hours (from 0 to 23)
	 * @since 1.0.0
	 */
	public getUTCHours(): number {
		return this.date.getUTCHours();
	}

	/**
	 * Gets the minutes of a Date object, using local time.
	 * @returns {number} The minutes value in the Date object.
	 * @since 1.0.0
	 */
	public getMinutes(): number {
		return this.date.getMinutes();
	}

	/**
	 * Gets the minutes of a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The minutes of the Date object using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	public getUTCMinutes(): number {
		return this.date.getUTCMinutes();
	}

	/**
	 * Gets the seconds of a Date object, using local time.
	 * @returns {number} The seconds of the Date object.
	 * @since 1.0.0
	 */
	public getSeconds(): number {
		return this.date.getSeconds();
	}

	/**
	 * Gets the seconds of a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The seconds value in a Date object using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	public getUTCSeconds(): number {
		return this.date.getUTCSeconds();
	}

	/**
	 * Gets the milliseconds of a Date, using local time.
	 * @returns {number} The return value ranges from 0 to 999.
	 * @since 1.0.0
	 */
	public getMilliseconds(): number {
		return this.date.getMilliseconds();
	}

	/**
	 * Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The return value ranges from 0 to 999.
	 * @since 1.0.0
	 */
	public getUTCMilliseconds(): number {
		return this.date.getUTCMilliseconds();
	}

	/**
	 * Gets the day-of-the-week in a Date object, using local time.
	 * @returns {number} 0 for satarday , 1 for Sunday, and so on.
	 * @since 1.0.0
	 */
	public getDay(): number {
		return (
			this.DayOfWeek(this.getFullYear(), this.getMonth() + 1, this.getDate()) -
			1
		);
	}

	/**
	 * Gets the day-of-the-week in a Date object, using Universal Coordinated Time (UTC).
	 * @returns {number} 0 for satarday , 1 for Sunday, and so on.
	 * @since 1.0.0
	 */
	public getUTCDay(): number {
		return (
			this.DayOfWeek(
				this.getUTCFullYear(),
				this.getUTCMonth() + 1,
				this.getUTCDate()
			) - 1
		);
	}

	/**
	 * Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).
	 * @returns {number} The difference in minutes.
	 * @since 1.0.0
	 */
	public getTimezoneOffset(): number {
		return this.date.getTimezoneOffset();
	}

	/**
	 * Sets the date and time value in the Date object.
	 * @param {number} time — A numeric value representing the number of elapsed milliseconds since midnight, 11 Dey 1348 GMT.
	 * @returns {object} The Date object.
	 */
	public setTime(time: number): object {
		//if (isUTC) return this.date.setUTCTime(time);
		this.date.setTime(time);
		return this;
	}

	/**
	 * Gets the time value in milliseconds.
	 * @returns {number}
	 */
	public getTime(): number {
		//if (isUTC) return this.date.getUTCTime();
		return this.date.getTime();
	}

	/**
	 * Returns the stored time value in milliseconds since midnight, 11 Dey 1348 UTC.
	 * @returns {number}
	 */
	public valueOf(): number {
		return this.date.valueOf();
	}

	/**
	 * Validate a date
	 * @param {number} year Year of the date
	 * @param {number} month Month of the date
	 * @param {number} date Date of the date
	 * @returns {boolean} TRUE if valid; otherwise FALSE
	 * @since 1.0.0
	 */
	public checkDate(year: number, month: number, date: number): boolean {
		return !(
			year < 1 ||
			year > 1700 /* 3,500,000 */ ||
			month < 1 ||
			month > 12 ||
			date < 1 ||
			date > this.DaysInMonth(year, month)
		);
	}

	/**
	 * Validate a time
	 * @param {number} hours Hour of the time
	 * @param {number} minutes Minutes of the time
	 * @param {number} seconds Seconds of the time
	 * @returns {boolean} TRUE if valid; otherwise FALSE
	 * @since 1.0.0
	 */
	public checkTime(hours: number, minutes: number, seconds: number): boolean {
		return !(
			hours < 0 ||
			hours > 23 ||
			minutes < 0 ||
			minutes > 59 ||
			seconds < 0 ||
			seconds > 59
		);
	}

	/**
	 * Validate a week
	 * @param year  Year of the weeks
	 * @param week  Week of the weeks
	 * @param day  Day of the weeks
	 * @returns {boolean} TRUE if valid; otherwise FALSE
	 * @since 1.0.0
	 */
	public checkWeek(year: number, week: number, day: number): boolean {
		return !(
			year < 1 ||
			year > 1700 /* 3,500,000 */ ||
			week < 1 ||
			week > this.WeeksInYear(year) ||
			day < 1 ||
			day > 7
		);
	}

	/**
	 * Returns a string representation of a function.
	 * @returns {string} A string representation of a function.
	 * @since x.y.z
	 */
	public toString(): string {
		const [dsn, date, msn, year] = this.format("dsn=dd=msn=yy");
		return `${this.toDateString()} ${this.toTimeString()}`;
	}

	/**
	 *
	 * @returns {string} A string representation of a function.
	 * @since x.y.z
	 */
	public toUTCString(): string {
		const [dsn, date, msn, year] = this.format("dsn=dd=msn=yy", true);
		return `${this.toUTCDateString()} ${this.toUTCTimeString()}`;
	}

	/**
	 *
	 * @returns {string} A string representation of a function.
	 * @since x.y.z
	 */
	public toDateString(): string {
		const [dsn, date, msn, year] = this.format("dsn=dd=msn=yy");
		return `${dsn} ${date} ${msn} ${year}`;
	}

	/**
	 *
	 * @returns {string} A string representation of a function.
	 * @since x.y.z
	 */
	public toUTCDateString(): string {
		const [dsn, date, msn, year] = this.format("dsn=dd=msn=yy", true);
		return `${dsn}, ${date} ${msn} ${year}`;
	}

	/**
	 * Returns a time as a string value.
	 * @returns {string} A string representation of a function.
	 * @since 1.0.0
	 */
	public toTimeString(): string {
		return this.date.toTimeString();
	}

	/**
	 *
	 * @returns {string} A string representation of a function.
	 * @since 1.0.0
	 */
	public toUTCTimeString(): string {
		const [hours, minute, second] = this.format("hh=ii=ss", true);
		return `${hours}:${minute}:${second} GMT`;
	}

	/**
	 *
	 * @returns {string} A string representation of a function.
	 * @since 1.0.0
	 */
	public toISOString(): string {
		const [dates, times] = this.date.toJSON().split(/\s*(?:T|$)\s*/);
		const [year, month, date] = this.format("yy=mm=dd");
		return `${year}-${month}-${date}T${times}`;
	}

	/**
	 *
	 * @returns {string} A string representation of a function.
	 * @since 1.0.0
	 */
	public toJSON(): string {
		return this.toISOString();
	}

	/**
	 * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, 11 Dey 1348.
	 * @param {string} s — A date string
	 * @returns {number} The number of milliseconds between that date and midnight, 11 Dey 1348.
	 * @since x.y.z
	 * https://gitcode.net/openthos/gecko-dev/-/blob/GECKO120_2012041106_RELBRANCH/js/src/jsdate.cpp#L911
	 */
	public static parse(s: string): number {
		throw new Error("Not Implemented parse"); // TODO: implement
	}

	/** // get timestamp in linux format
	toString: function(format, convertDigit) {
		var ret = (!!format && format !== null) ? jdate._format(format + '', this.jdate) : jdate._format('yyyy-MM-dd HH:mm:ss.l Z', this.jdate);
		return (!!convertDigit && convertDigit !== null) ? ret.toFaDigit() : ret;
	} */

	/**
	 * converts a Date object to a primitive value.
	 * @param {*} hint
	 * @returns
	 */
	public [Symbol.toPrimitive](hint: string | number): string | number | null {
		if (hint === "number") {
			return this.getTime();
		} else if (hint === "string" || hint === "default") {
			return `Date ${this.toString()}`;
		}
		return null;
	}

	/**
	 * Converts a time to a string by using the current or specified locale.
	 * @param {string | string[]} locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
	 * @param {Intl.DateTimeFormatOptions} options An object that contains one or more properties that specify comparison options.
	 * @returns
	 */
	public toLocaleTimeString(
		locales?: string | string[],
		options?: Intl.DateTimeFormatOptions
	) {
		return this.date.toLocaleTimeString(locales, options);
	}

	public toLocaleDateString(
		locales?: string | string[],
		options?: Intl.DateTimeFormatOptions
	) {
		return this.date.toLocaleDateString(locales, options);
	}

	public toLocaleString(
		locales?: string | string[],
		options?: Intl.DateTimeFormatOptions
	) {
		return this.date.toLocaleString(locales, options);
	}
}
