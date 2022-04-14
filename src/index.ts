/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package Date and Time Related Extensions SH{ Shamsi Hijri, Solar Hijri, Iranian Hijri }
 * @author Mohammad Amanalikhani
 * @link http://codehub.akhi.ir/js/SHDateTime
 * @copyright Copyright (C) 2015 - 2022 Open Source Matters,Inc. All right reserved.
 * @license https://www.gnu.org/licenses/agpl-3.0.en.html AGPL-3.0 License
 * @version Release: 1.0.2-rc2
 */

import Config from "./Config.js";
import Word from "./Word.js";

interface VarSHDate {
	[key: string]: number | undefined;
	Year?: number;
	Month?: number;
	Date?: number;
	UTCYear?: number;
	UTCMonth?: number;
	UTCDate?: number;
}
/**
 * class SHDate
 * @since   1.0.0
 */
export default class SHDate {
	/**
	 * @type {number[]} days in month without leap year
	 */
	static DAYS_IN_MONTH = [
		31, // far
		31, // ord
		31, // kho
		31, // tir
		31, // amo
		31, // sha
		30, // meh
		30, // aba
		30, // aza
		30, // dey
		30, // bah
		29 // esf
	];

	/**
	 * @type {number[]} days in month with leap year
	 */
	static DAYS_IN_MONTH_LEAP = [
		31, // far
		31, // ord
		31, // kho
		31, // tir
		31, // amo
		31, // sha
		30, // meh
		30, // aba
		30, // aza
		30, // dey
		30, // bah
		30 // esf
	];

	/**
	 * @type {number[]} days of year
	 */
	static DAY_OF_YEAR = [
		0, // far
		31, // ord
		62, // kho
		93, // tir
		124, // amo
		155, // sha
		186, // meh
		216, // aba
		246, // aza
		276, // dey
		306, // bah
		336 // esf
	];

	/**
	 * @type {number[]} days in year without leap year
	 */
	static DAYS_IN_YEAR = 365;

	/**
	 * @type {number[]} days in year with leap year
	 */
	static DAYS_IN_YEAR_LEAP = 366;

	/**
	 * @type {number[]} weeks in year without leap week
	 */
	static WEEKS_IN_YEAR = 52;

	/**
	 * @type {number[]} weeks in year with leap week
	 */
	static WEEKS_IN_YEAR_LEAP = 53;

	/**
	 * @type {Date} Date
	 */
	#date: Date;

	/**
	 * @type {object} year, month, date, UTCYear, UTCMonth, UTCDate, TimeDate
	 */
	#sh: VarSHDate = {};

	/**
	 * Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format.Date objects contain a Number that represents milliseconds since 11 Day 1348 UTC.
	 * @param {object} dateObject Date object
	 * @param {string} datastring Timestamp string
	 * @param {number} value Time value or timestamp number
	 * @param {number} year
	 * @param {number} month beginning with 0 for Farvardin to 11 for Esfand.
	 * @param {number} date the day of the month. The default is 1.
	 * @param {number} hour between 0 and 23 representing the hour of the day. Defaults to 0.
	 * @param {number} minute the minute segment of a time. The default is 0 minutes past the hour.
	 * @param {number} second the second segment of a time. The default is 0 seconds past the minute.
	 * @param {number} millisecond the millisecond segment of a time. The default is 0 milliseconds past the second.
	 * @returns {string} a Date object whose toString() method returns the literal string Invalid Date.
	 * @since 1.0.0
	 */
	constructor(data: any = false, ...args: number[] | undefined[]) {
		if (!new.target || !this) {
			// if you run me without new
			throw new Error("You must use new to create a instance of this class");
			//return new SHDate().toString();
		}
		this.#date = new Date();
		if (typeof data == "number")
			if (data.toString().length == 4 && (data >= 1200 || data < 1700)) {
				const [
					month = 0,
					date = 1,
					hours = 0,
					minute = 0,
					second = 0,
					millisecond = 0
				] = args;
				// year
				this.setFullYear(data, month, date);
				this.setHours(hours, minute, second, millisecond);
			}
			// value
			else this.setTime(data);
		else if (typeof data == "string")
			// dateString
			throw new Error("Not Implemented dateString");
		else if (data instanceof SHDate)
			// dateObject
			this.setTime(data.getTime());
		else if (typeof data == "boolean") this.setTime(this.#date.getTime());
	}

	/**
	 * update date
	 * @param {boolean} isUTC
	 * @returns {null}
	 * @since 1.0.0
	 */
	#UpDate(): void {
		const [utcyear, utcmonth, utcdate] = this.#GregorianToSolar(
			this.#date.getUTCFullYear(),
			this.#date.getUTCMonth(),
			this.#date.getUTCDate()
		);
		const [year, month, date] = this.#GregorianToSolar(
			this.#date.getFullYear(),
			this.#date.getMonth(),
			this.#date.getDate()
		);
		this.#sh.UTCYear = utcyear;
		this.#sh.UTCMonth = utcmonth;
		this.#sh.UTCDate = utcdate;
		this.#sh.Year = year;
		this.#sh.Month = month;
		this.#sh.Date = date;
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
	#GregorianToSolar(
		gyear: number,
		gmonth: number,
		gdate: number,
		julian: boolean = false
	): number[] {
		// 0622/03/22 = 0001/01/01
		let gdoy: number, doy: number, year: number;
		gdoy =
			(gyear - 1) * 365 +
			([0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][gmonth] +
				gdate) -
			226745; //226745 = 621*365+80
		if (this.#GIsLeapYear(gyear) && gmonth > 1) gdoy++;
		year = parseInt((gdoy / 365).toString()) + 1;
		doy =
			(gdoy % 365) +
			this.#GIsLeapYear(gyear, true) -
			this.#IsLeapYear(year, true);
		return this.#DateOfDoy(year, doy - 1);
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
	#SolarToGregorian(
		year: number,
		month: number,
		date: number,
		julian: boolean = false
	): number[] {
		// 0001/01/01 = 0622/03/22
		let doy: number, gdoy: number, gyear: number;
		doy =
			(year - 1) * 365 + this.#DayOfYear(month, date) + 226746 /*621*365+80*/;
		gyear = parseInt((doy / 365).toString()) + 1;
		gdoy =
			(doy % 365) +
			this.#IsLeapYear(year, true) -
			this.#GIsLeapYear(gyear, true);
		return this.#GDateOfDoy(gyear, gdoy);
	}

	#GDateOfDoy(gyear: number, gdoy: number): number[] {
		let gdiy: number = this.#GDaysInYear(gyear),
			gleap: number,
			data = { gmonth: 0, gdate: 0 };
		if (gdoy < 1)
			do {
				gdiy = this.#GDaysInYear(--gyear);
				gdoy += gdiy;
			} while (gdoy < 1);
		else if (gdoy > gdiy)
			do {
				gdiy = this.#GDaysInYear(++gyear);
				gdoy -= gdiy;
			} while (gdoy > gdiy);
		gleap = this.#GIsLeapYear(gyear) ? 29 : 28;
		[0, 31, gleap, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].forEach(
			(gdim: number, gmoy: number) => {
				if (gdoy <= gdim) return;
				gdoy -= gdim;
				data.gmonth = gmoy;
				data.gdate = parseInt(gdoy.toString());
			}
		);
		return [gyear, data.gmonth, data.gdate];
	}

	#GDaysInYear(year: number): number {
		return this.#GIsLeapYear(year) ? 366 : 365;
	}

	/**
	 * Get gregorian leap year
	 * @param {number} gyear - gregorian year
	 * @param {boolean} all - all leap year
	 * @returns {boolean} - leap year
	 * @since 1.0.0
	 */
	#GIsLeapYear(gyear: number, all: boolean = false): number {
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
	#IsLeapYear(year: number, all: boolean = false): number {
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
	public isLeapYear(year: number = this.getFullYear()): boolean {
		return this.#IsLeapYear(year) ? true : false;
	}

	/**
	 * Get day of week (dow)
	 * @param {number} year - solar hijri year
	 * @param {number} month - solar hijri month
	 * @param {number} date - solar hijri date
	 * @returns {number} - day of week
	 * @since 1.0.0
	 * Note:  0 = Saturday, 1 = Sunday, 2 = Monday, 3 = Tuesday, 4 = Wednesday, 5 = Thursday, 6 = Friday
	 * 5 => first day of week is Tuesday
	 */
	#DayOfWeek(
		year: number,
		month: number,
		date: number,
		FDOW: number = Config.FIRST_DAY_OF_WEEK
	): number {
		//	return (year+this.IsLeapYear(year,true)+this::DayOfYear(year,month,date)+5)%7;
		// 7+(gdow+1)-Config.FIRST_DAY_OF_WEEK%7
		// return (8 + gdow - Config.FIRST_DAY_OF_WEEK) % 7; // shdow
		//	new and best version
		return (
			(5 +
				year +
				this.#IsLeapYear(year, true) +
				this.#DayOfYear(month, date) -
				FDOW) %
			7
		);
	}

	/**
	 * Get day of year (doy)
	 * @param {number} month - solar hijri month
	 * @param {number} date - solar hijri date
	 * @returns {number} - day of year
	 * @since 1.0.0
	 */
	#DayOfYear(month: number, date: number): number {
		return SHDate.DAY_OF_YEAR[month] + date - 1;
		// let doy: number;
		// month++;
		// if (month < 7) doy = (month - 1) * 31;
		// else doy = (month - 7) * 30 + 186;
		// return (doy + date - 1) % (this.#DaysInYear(year) - 1);
	}

	/**
	 * Get week of year (woy)
	 * @param {number} year - solar hijri year
	 * @param {number} month - solar hijri month
	 * @param {number} date - solar hijri date
	 * @returns {number} - week of year
	 * @since 1.0.0
	 */
	#WeekOfYear(
		year: number,
		month: number,
		date: number,
		FDOW: number = Config.FIRST_DAY_OF_WEEK
	): number[] {
		let iw: number,
			iy: number,
			doy: number = this.#DayOfYear(month, date) + 1, // 1 through 366
			far1weekday: number = this.#DayOfWeek(year, 0, 1, FDOW) + 1; // 1 through 7
		/* Find if Y M D falls in YearNumber --Y, WeekNumber 52 or 53 */
		if (doy <= 8 - far1weekday && far1weekday > 4) {
			iy = --year;
			iw =
				far1weekday == 5 || (far1weekday == 6 && this.#IsLeapYear(iy))
					? 53
					: 52;
			return [iw, iy];
		}
		let esf29weekday: number =
			this.#DayOfWeek(year, 11, this.#DaysInMonth(year, 11), FDOW) + 1; // 1 through 7
		/* Find if Y M D falls in YearNumber ++Y, WeekNumber 1 */
		if (doy > this.#DaysInYear(year) - esf29weekday && esf29weekday < 4) {
			iy = ++year;
			iw = 1;
			return [iw, iy];
		}
		/* Find if Y M D falls in YearNumber Y, WeekNumber 1 through 52|53 */
		iy = year;
		//(doy+(7-(this.#DayOfWeek(year,month,day,FDOW)+1))+(far1weekday-1))/7
		iw = (5 + doy + far1weekday - this.#DayOfWeek(year, month, date, FDOW)) / 7;
		if (far1weekday > 4) iw--;
		return [iw, iy];
	}

	/**
	 * Get weeks in year (wiy)
	 * @param {number} year - solar hijri year
	 * @returns {number} - weeks in year
	 * @since 1.0.0
	 */
	#WeeksInYear(year: number): number {
		const far1dow: number = this.#DayOfWeek(year, 0, 1) + 1;
		if (far1dow == 4 || (far1dow == 3 && this.#IsLeapYear(year))) return 53; // SHDate.WEEKS_IN_YEAR_LEAP;
		return 52; // SHDate.WEEKS_IN_YEAR;
	}

	/**
	 * Get week of day (wod)
	 * @param year  - solar hijri year
	 * @param week - solar hijri week
	 * @param date - solar hijri date
	 * @returns {number} - week of day
	 */
	#WeekOfDay(year: number, week: number, date: number = 1): number[] {
		const doy = (week - 1) * 7 + date - this.#DayOfWeek(year, 0, 4) + 2;
		return this.#DateOfDoy(year, doy);
	}

	/**
	 * Get days of days of year
	 * @param year - solar hijri year
	 * @param doy  - solar hijri day of year
	 * @returns {array} - days of day
	 * @since 1.0.0
	 */
	#DateOfDoy(year: number, doy: number): number[] {
		let diy, month, date;
		doy++;
		diy = this.#DaysInYear(year);
		if (doy < 1)
			do {
				year--;
				doy += this.#DaysInYear(year);
			} while (doy < 1);
		else if (doy > diy)
			do {
				doy -= diy;
				year++;
				diy = this.#DaysInYear(year);
			} while (doy > diy);
		if (doy < 187) {
			month = parseInt(((doy - 1) / 31).toString());
			date = doy % 31 || 31;
		} else {
			doy -= 186;
			month = parseInt(((doy - 1) / 30).toString()) + 6;
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
	#DaysInMonth(year: number, month: number): number {
		if (month < 11) return SHDate.DAYS_IN_MONTH[month];
		return this.#IsLeapYear(year) ? 30 : 29; // SHDate.DAYS_IN_MONTH_LEAP[month] : SHDate.DAYS_IN_MONTH[month];
	}

	/**
	 * Get days in year (diy)
	 * @param {number} year - solar hijri year
	 * @returns {number} - days in year
	 * @since 1.0.0
	 */
	#DaysInYear(year: number): number {
		return this.#IsLeapYear(year) ? 366 : 365; // SHDate.DAYS_IN_YEAR_LEAP : SHDate.DAYS_IN_YEAR;
	}

	/**
	 * Get private data of solar hijri date
	 * @param {string} format - format of data
	 * @returns {array}
	 */
	public format(format: string, isUtc: boolean = false): any[] {
		const year: number = isUtc ? this.getUTCFullYear() : this.getFullYear(),
			month: number = isUtc ? this.getUTCMonth() : this.getMonth(),
			date: number = isUtc ? this.getUTCDate() : this.getDate(),
			hours: number = isUtc ? this.getUTCHours() : this.getHours(),
			minute: number = isUtc ? this.getUTCMinutes() : this.getHours(),
			second: number = isUtc ? this.getUTCSeconds() : this.getMinutes(),
			millisecond: number = isUtc
				? this.getUTCMilliseconds()
				: this.getMilliseconds(),
			weekday: number = isUtc ? this.getUTCDay() : this.getDay();
		let result: any[] = [];
		format.split(/\s*(?:=|$)\s*/).forEach((f) => {
			switch (f) {
				case "YY":
					result.push(year);
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
					result.push(date);
					break;
				case "dd":
					result.push(date.toString().padStart(2, "0"));
					break;
				case "HH":
					result.push(hours);
					break;
				case "hh":
					result.push(hours.toString().padStart(2, "0"));
					break;
				case "II":
					result.push(minute);
					break;
				case "ii":
					result.push(minute.toString().padStart(2, "0"));
					break;
				case "SS":
					result.push(second);
					break;
				case "ss":
					result.push(second.toString().padStart(2, "0"));
					break;
				case "MS":
					result.push(millisecond);
					break;
				case "ms":
					result.push(millisecond.toString().padStart(2, "0"));
					break;
				case "Diy":
					result.push(this.#DaysInYear(year));
					break;
				case "diy":
					result.push(this.#DaysInYear(year).toString().padStart(3, "0"));
					break;
				case "Leap":
				case "leap":
					result.push(this.isLeapYear(year));
					break;
				case "Dim":
					result.push(this.#DaysInMonth(year, month));
					break;
				case "dim":
					result.push(
						this.#DaysInMonth(year, month).toString().padStart(2, "0")
					);
					break;
				case "Wiy":
					result.push(this.#WeeksInYear(year));
					break;
				case "wiy":
					result.push(this.#WeeksInYear(year).toString().padStart(2, "0"));
					break;
				case "Woy":
					result.push(this.#WeekOfYear(year, month, date));
					break;
				case "Dow":
					result.push(weekday);
					break;
				case "dow":
					result.push(weekday.toString().padStart(2, "0"));
					break;
				case "Doy":
					result.push(this.#DayOfYear(month, date));
					break;
				case "doy":
					result.push(this.#DayOfYear(month, date).toString().padStart(3, "0"));
					break;
				case "dsn":
					result.push(Word.getDayShortNames(weekday));
					break;
				case "dfn":
					result.push(Word.getDayFullNames(weekday));
					break;
				case "efn":
					result.push(Word.getMeridienFullNames(hours));
					break;
				case "esn":
					result.push(Word.getMeridienShortNames(hours));
					break;
				case "mfn":
					result.push(Word.getMonthFullNames(month));
					break;
				case "msn":
					result.push(Word.getMonthShortNames(month));
					break;
				case "asn":
					result.push(Word.getAnimalsFullNames(year));
					break;
				case "csn":
					result.push(Word.getConstellationsFullNames(month));
					break;
				case "ssn":
					result.push(Word.getSeasonFullNames(month));
					break;
				case "osn":
					result.push(Word.getSolsticeFullNames(month, date));
					break;
				case "sun":
					result.push(Word.getSuffixNames(date));
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
	 * @param {number} month — The month as a number between 0 and 11 (Farvardin to Esfand).
	 * @param {number} date — The date as a number between 1 and 31.
	 * @param {number} hours — Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.
	 * @param {number} minutes — Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.
	 * @param {number} seconds — Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds.
	 * @param {number} milliseconds — A number from 0 to 999 that specifies the milliseconds.
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
	 * @param {number} month — A zero-based numeric value for the month (0 for Farvardin, 11 for Esfand). Must be *specified if numDate is specified.
	 * @param {number} date — A numeric value equal for the day of the month.
	 * @return {object} SHDate
	 * @since 1.0.0
	 */
	setFullYear(
		year: number,
		month: number = this.getMonth(),
		date: number = this.getDate()
	): number {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(year, month, date);
		this.#date.setFullYear(gyear, gmonth, gdate);
		this.#UpDate();
		return this.getTime();
	}

	/**
	 * Sets the year value in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} year — A numeric value equal to the year.
	 * @param {number} month — A numeric value equal to the month. The value for Farvardin is 0, and other month values follow * consecutively. Must be supplied if numDate is supplied.
	 * @param {number} date — A numeric value equal to the day of the month.
	 * @return {object} SHDate
	 * @since 1.0.0
	 */
	setUTCFullYear(
		year: number,
		month: number = this.getUTCMonth(),
		date: number = this.getUTCDate()
	): number {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(year, month, date);
		this.#date.setUTCFullYear(gyear, gmonth, gdate);
		this.#UpDate();
		return this.getTime();
	}

	/**
	 * Sets the month value in the Date object using local time.
	 * @param {number} month — A numeric value equal to the month. The value for Farvardin is 0, and other month values follow * consecutively.
	 * @param {number} date — A numeric value representing the day of the month. If this value is not supplied, the value from a * call to the getDate method is used.
	 * @return {object} SHDate
	 * @since 1.0.0
	 */
	setMonth(month: number, date: number = this.getDate()): number {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getFullYear(),
			month,
			date
		);
		this.#date.setMonth(gmonth, gdate);
		this.#UpDate();
		return this.getTime();
	}

	/**
	 * Sets the month value in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} month — A numeric value equal to the month. The value for Farvardin is 0, and other month values follow * consecutively.
	 * @param {number} date — A numeric value representing the day of the month. If it is not supplied, the value from a call to  the getUTCDate method is used.
	 * @return {object} SHDate
	 * @since 1.0.0
	 */
	setUTCMonth(month: number, date: number = this.getUTCDate()): number {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getUTCFullYear(),
			month,
			date
		);
		this.#date.setUTCMonth(gmonth, gdate);
		this.#UpDate();
		return this.getTime();
	}

	/**
	 * Sets the numeric day-of-the-month value of the Date object using local time.
	 * @param {number} date — A numeric value equal to the day of the month.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	setDate(date: number): number {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getFullYear(),
			this.getMonth(),
			date
		);
		this.#date.setDate(gdate);
		this.#UpDate();
		return this.getTime();
	}

	/**
	 * 	Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} date — A numeric value equal to the day of the month.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	setUTCDate(date: number): number {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getUTCFullYear(),
			this.getUTCMonth(),
			date
		);
		this.#date.setUTCDate(gdate);
		this.#UpDate();
		return this.getTime();
	}

	/**
	 * 	Sets the hour value in the Date object using local time.
	 *
	 * @param {number} hours — A numeric value equal to the hours value.
	 * @param {number} minutes — A numeric value equal to the minutes value.
	 * @param {number} seconds — A numeric value equal to the seconds value.
	 * @param {number} milliseconds — A numeric value equal to the milliseconds value.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setHours(
		hours: number,
		minutes: number = this.getMinutes(),
		seconds: number = this.getSeconds(),
		milliseconds: number = this.getMilliseconds()
	): number {
		this.#date.setHours(hours, minutes, seconds, milliseconds);
		return this.getTime();
	}

	/**
	 * 	Sets the hours value in the Date object using Universal Coordinated Time (UTC).
	 *
	 * @param {number} hours — A numeric value equal to the hours value.
	 * @param {number} minutes — A numeric value equal to the minutes value.
	 * @param {number} seconds — A numeric value equal to the seconds value.
	 * @param {number} milliseconds — A numeric value equal to the milliseconds value.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setUTCHours(
		hours: number,
		minutes: number = this.getUTCMinutes(),
		seconds: number = this.getUTCSeconds(),
		milliseconds: number = this.getUTCMilliseconds()
	): number {
		this.#date.setUTCHours(hours, minutes, seconds, milliseconds);
		return this.getTime();
	}

	/**
	 * 	Sets the minutes value in the Date object using local time.
	 *
	 * @param {number} minutes — A numeric value equal to the minutes value.
	 * @param {number} seconds — A numeric value equal to the seconds value.
	 * @param {number} milliseconds — A numeric value equal to the milliseconds value.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setMinutes(
		minutes: number,
		seconds: number = this.getSeconds(),
		milliseconds: number = this.getMilliseconds()
	): number {
		this.#date.setMinutes(minutes, seconds, milliseconds);
		return this.getTime();
	}

	/**
	 * 	Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
	 *
	 * @param {number} minutes — A numeric value equal to the minutes value.
	 * @param {number} seconds — A numeric value equal to the seconds value.
	 * @param {number} milliseconds — A numeric value equal to the milliseconds value.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setUTCMinutes(
		minutes: number,
		seconds: number = this.getUTCSeconds(),
		milliseconds: number = this.getUTCMilliseconds()
	): number {
		this.#date.setUTCMinutes(minutes, seconds, milliseconds);
		return this.getTime();
	}

	/**
	 * Sets the seconds value in the Date object using local time.
	 *
	 * @param {number} seconds — A numeric value equal to the seconds value.
	 * @param {number} milliseconds — A numeric value equal to the milliseconds value.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setSeconds(
		seconds: number,
		milliseconds: number = this.getMilliseconds()
	): number {
		this.#date.setSeconds(seconds, milliseconds);
		return this.getTime();
	}

	/**
	 * 	Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} seconds — A numeric value equal to the seconds value.
	 * @param {number} milliseconds — A numeric value equal to the milliseconds value.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setUTCSeconds(
		seconds: number,
		milliseconds: number = this.getUTCMilliseconds()
	): number {
		this.#date.setUTCSeconds(seconds, milliseconds);
		return this.getTime();
	}

	/**
	 * 	Sets the milliseconds value in the Date object using local time.
	 * @param {number} ms — A number between 0 and 999, representing the milliseconds.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setMilliseconds(ms: number): number {
		this.#date.setMilliseconds(ms);
		return this.getTime();
	}

	/**
	 * 	Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} ms — A number between 0 and 999, representing the milliseconds.
	 * @returns {object} The number of milliseconds between 11 Dey 1348 00:00:00 UTC and the updated date.
	 * @since 1.0.0
	 */
	public setUTCMilliseconds(ms: number): number {
		this.#date.setUTCMilliseconds(ms);
		return this.getTime();
	}

	/**
	 * Gets the year, using local time.
	 * @returns {number} The year.
	 * @since 1.0.0
	 */
	public getFullYear(): number {
		return this.#sh.Year as number;
	}

	/**
	 * Gets the year using Universal Coordinated Time (UTC).
	 * @returns {number} The year.
	 * @since 1.0.0
	 *
	 */
	public getUTCFullYear(): number {
		return this.#sh.UTCYear as number;
	}

	/**
	 * Gets the month, using local time.
	 * @returns {number} The month (0-11)
	 * @since 1.0.0
	 */
	public getMonth(): number {
		return this.#sh.Month as number;
	}

	/**
	 * Gets the month of a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The month (0-11) in the Date object using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	public getUTCMonth(): number {
		return this.#sh.UTCMonth as number;
	}

	/**
	 * Gets the day-of-the-month, using local time.
	 * @returns {number} The day-of-the-month, using local time.
	 * @since 1.0.0
	 */
	public getDate(): number {
		return this.#sh.Date as number;
	}

	/**
	 * Gets the day-of-the-month, using Universal Coordinated Time (UTC).
	 * @returns {number} The day-of-the-month, using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	public getUTCDate(): number {
		return this.#sh.UTCDate as number;
	}

	/**
	 * Gets the hours in a date, using local time.
	 * @returns {number} The hours (from 0 to 23)
	 * @since 1.0.0
	 */
	public getHours(): number {
		return this.#date.getHours();
	}

	/**
	 * Gets the hours value in a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The hours (from 0 to 23)
	 * @since 1.0.0
	 */
	public getUTCHours(): number {
		return this.#date.getUTCHours();
	}

	/**
	 * Gets the minutes of a Date object, using local time.
	 * @returns {number} The minutes value in the Date object.
	 * @since 1.0.0
	 */
	public getMinutes(): number {
		return this.#date.getMinutes();
	}

	/**
	 * Gets the minutes of a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The minutes of the Date object using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	public getUTCMinutes(): number {
		return this.#date.getUTCMinutes();
	}

	/**
	 * Gets the seconds of a Date object, using local time.
	 * @returns {number} The seconds of the Date object.
	 * @since 1.0.0
	 */
	public getSeconds(): number {
		return this.#date.getSeconds();
	}

	/**
	 * Gets the seconds of a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The seconds value in a Date object using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	public getUTCSeconds(): number {
		return this.#date.getUTCSeconds();
	}

	/**
	 * Gets the milliseconds of a Date, using local time.
	 * @returns {number} The return value ranges from 0 to 999.
	 * @since 1.0.0
	 */
	public getMilliseconds(): number {
		return this.#date.getMilliseconds();
	}

	/**
	 * Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The return value ranges from 0 to 999.
	 * @since 1.0.0
	 */
	public getUTCMilliseconds(): number {
		return this.#date.getUTCMilliseconds();
	}

	/**
	 * Gets the day-of-the-week in a Date object, using local time.
	 * @returns {number} 0 for satarday , 1 for Sunday, and so on.
	 * @since 1.0.0
	 */
	public getDay(): number {
		return this.#DayOfWeek(this.getFullYear(), this.getMonth(), this.getDate());
		//return this.#GDOWToDOW(this.#date.getDay());
	}

	/**
	 * Gets the day-of-the-week in a Date object, using Universal Coordinated Time (UTC).
	 * @returns {number} 0 for satarday , 1 for Sunday, and so on.
	 * @since 1.0.0
	 */
	public getUTCDay(): number {
		return this.#DayOfWeek(
			this.getUTCFullYear(),
			this.getUTCMonth(),
			this.getUTCDate()
		);
	}

	/**
	 * Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).
	 * @returns {number} The difference in minutes.
	 * @since 1.0.0
	 */
	public getTimezoneOffset(): number {
		return this.#date.getTimezoneOffset();
	}

	/**
	 * Sets the date and time value in the Date object.
	 * @param {number} time — A numeric value representing the number of elapsed milliseconds since midnight, 11 Dey 1348 GMT.
	 * @returns {object} The Date object.
	 */
	public setTime(time: number): number {
		//if (isUTC) return this.#date.setUTCTime(time);
		this.#date.setTime(time);
		this.#UpDate();
		return this.getTime();
	}

	/**
	 * Gets the time value in milliseconds.
	 * @returns {number}
	 */
	public getTime(): number {
		//if (isUTC) return this.#date.getUTCTime();
		return this.#date.getTime();
	}

	/**
	 * Returns the stored time value in milliseconds since midnight, 11 Dey 1348 UTC.
	 * @returns {number}
	 */
	public valueOf(): number {
		return this.#date.valueOf();
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
			month < 0 ||
			month > 11 ||
			date < 1 ||
			date > this.#DaysInMonth(year, month)
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
	public checkTime(
		hours: number,
		minutes: number,
		seconds: number,
		H12: boolean = false
	): boolean {
		return !(
			hours < 0 ||
			(H12 ? hours > 11 : hours > 23) ||
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
			week > this.#WeeksInYear(year) ||
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
		return this.#date.toTimeString();
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
		const [dates, times] = this.#date.toJSON().split(/\s*(?:T|$)\s*/);
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
		return this.#date.toLocaleTimeString(locales, options);
	}

	public toLocaleDateString(
		locales?: string | string[],
		options?: Intl.DateTimeFormatOptions
	) {
		return this.#date.toLocaleDateString(locales, options);
	}

	public toLocaleString(
		locales?: string | string[],
		options?: Intl.DateTimeFormatOptions
	) {
		return this.#date.toLocaleString(locales, options);
	}
	/**
	 * version
	 */
	public static version() {
		return Config.version;
	}
}
