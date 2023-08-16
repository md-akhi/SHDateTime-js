/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package Date and Time Related Extensions SH{ Shamsi Hijri, Solar Hijri, Iranian Hijri }
 * @author Mohammad Amanalikhani
 * @link http://codehub.akhi.ir/js/SHDateTime
 * @copyright Copyright (C) 2015 - 2022 Open Source Matters,Inc. All right reserved.
 * @license https://www.gnu.org/licenses/agpl-3.0.en.html AGPL-3.0 License
 * @version Release: 1.3.0
 */

import Word from "./word.js";
import SHParser from "./parser/parse.js";
interface VarSHDate {
	[key: string]: number | undefined;
	year?: number;
	month?: number;
	date?: number;
	UTC_year?: number;
	UTC_month?: number;
	UTC_date?: number;
}

/**
 * class SHDate
 * @since   1.0.0
 */
export default class SHDate {
	/**
	 * version of SHDate
	 */
	static version: string = "1.3.0";
	/**
	 * @type {number[]} days in month without leap year
	 */
	static DAYS_IN_MONTH: number[] = [
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
	static DAYS_IN_MONTH_LEAP: number[] = [
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
	 * first day of month
	 * @type {number[]} days of year
	 */
	static DAY_OF_YEAR: number[] = [
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
	static DAYS_IN_YEAR: number = 365;

	/**
	 * @type {number[]} days in year with leap year
	 */
	static DAYS_IN_YEAR_LEAP: number = 366;

	/**
	 * @type {number[]} weeks in year without leap week
	 */
	static WEEKS_IN_YEAR: number = 52;

	/**
	 * @type {number[]} weeks in year with leap week
	 */
	static WEEKS_IN_YEAR_LEAP: number = 53;

	/**
	 * @type {Date} Date
	 */
	#date: Date;

	/**
	 * @type {object} year, month, date, UTC_year, UTC_month, UTC_date
	 */
	#sh: VarSHDate = {};

	#config: any = {
		time_zone: "Asia/Tehran",
		language_Word: "en_US",
		first_day_of_week: 0,
		time_server_diff: 0 // miliseconds
	};

	/**
	 * Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format.Date objects contain a Number that represents milliseconds since 11 Day 1348 UTC.
	 * @param {object} mix-dateObject Date object
	 * @param {string} mix-datastring Timestamp string
	 * @param {number} mix-value Time value or timestamp number
	 * @param {number} mix-year Year
	 * @param {number} month beginning with 0 for Farvardin to 11 for Esfand.
	 * @param {number} date the day of the month. The default is 1.
	 * @param {number} hour between 0 and 23 representing the hour of the day. Defaults to 0.
	 * @param {number} minute the minute segment of a time. The default is 0 minutes past the hour.
	 * @param {number} second the second segment of a time. The default is 0 seconds past the minute.
	 * @param {number} millisecond the millisecond segment of a time. The default is 0 milliseconds past the second.
	 * @returns {string} a Date object whose toString() method returns the literal string Invalid Date.
	 * @since 1.0.0
	 */
	constructor(mix: any = false, ...args: number[] | undefined[]) {
		if (!new.target || !this) {
			// if you run me without new
			throw new Error("You must use new to create a instance of this class");
			//return new SHDate().toString();
		}
		this.#date = new Date();
		if (typeof mix == "number")
			if (mix.toString().length == 4 && (mix >= 1200 || mix < 1700)) {
				const [
					month = 0,
					date = 1,
					hours = 0,
					minute = 0,
					second = 0,
					millisecond = 0
				] = args;
				// year
				this.setFullYear(mix, month, date);
				this.setHours(hours, minute, second, millisecond);
			}
			// value
			else this.setTime(mix);
		else if (typeof mix == "string") {
			const [time = this.getTime()] = args;
			// dateString
			this.setTime(time);
			SHDate.parse(mix);
		} else if (mix instanceof SHDate || mix instanceof Date)
			// dateObject
			this.setTime(mix.getTime());
		else if (typeof mix == "boolean") this.setTime(this.#date.getTime());
		return this;
	}

	/** //todo  change name to synceDate
	 * update date
	 * @returns {null}
	 * @since 1.0.0
	 */
	#updateDate(): void {
		const [UTC_year, UTC_month, UTC_date] = this.#GregorianToSolar(
			this.#date.getUTCFullYear(),
			this.#date.getUTCMonth(),
			this.#date.getUTCDate()
		);
		this.#sh.UTC_year = UTC_year;
		this.#sh.UTC_month = UTC_month;
		this.#sh.UTC_date = UTC_date;

		const [year, month, date] = this.#GregorianToSolar(
			this.#date.getFullYear(),
			this.#date.getMonth(),
			this.#date.getDate()
		);
		this.#sh.year = year;
		this.#sh.month = month;
		this.#sh.date = date;
		return;
	}
	/** //todo  change name to synceTime
	 * update time
	 * @returns {null}
	 * @since 1.2.2
	 */
	#updateTime(): void {
		this.#date.setTime(this.#date.getTime() + this.#config.time_server_diff);
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
		var gdoy: number, doy: number, year: number;
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
			this.#isLeapYear(year, true);
		return this.#dateOfDoy(year, doy - 1);
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
		var doy: number, gdoy: number, gyear: number;
		doy =
			(year - 1) * 365 + this.#dayOfYear(month, date) + 226746 /*621*365+80*/;
		gyear = parseInt((doy / 365).toString()) + 1;
		gdoy =
			(doy % 365) +
			this.#isLeapYear(year, true) -
			this.#GIsLeapYear(gyear, true);
		return this.#GDateOfDoy(gyear, gdoy);
	}

	#GDateOfDoy(gyear: number, gdoy: number): number[] {
		var gdiy: number = this.#GDaysInYear(gyear),
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
	#isLeapYear(year: number, all: boolean = false): number {
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
		return this.#isLeapYear(year) ? true : false;
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
	#dayOfWeek(
		year: number,
		month: number,
		date: number,
		FDOW: number = this.#config.first_day_of_week
	): number {
		//	return (year+this.isLeapYear(year,true)+this::dayOfYear(year,month,date)+5)%7;
		// 7+(gdow+1)-this.#config.first_day_of_week%7
		// return (8 + gdow - this.#config.first_day_of_week) % 7; // shdow
		//	new and best version
		return (
			(5 +
				year +
				this.#isLeapYear(year, true) +
				this.#dayOfYear(month, date) -
				FDOW) %
			7
		);
	}

	getDayOfWeek(
		year: number,
		month: number,
		date: number,
		FDOW: number = this.#config.first_day_of_week
	) {
		return this.#dayOfWeek(year, month, date, FDOW);
	}
	/**
	 * Get day of year (doy)
	 * @param {number} month - solar hijri month
	 * @param {number} date - solar hijri date
	 * @returns {number} - day of year
	 * @since 1.0.0
	 */
	#dayOfYear(month: number, date: number): number {
		return SHDate.DAY_OF_YEAR[month] + date - 1;
		// var doy: number;
		// month++;
		// if (month < 7) doy = (month - 1) * 31;
		// else doy = (month - 7) * 30 + 186;
		// return (doy + date - 1) % (this.#daysInYear(year) - 1);
	}
	getDayOfYear(month: number, date: number) {
		return this.#dayOfYear(month, date);
	}
	/**
	 * Get week of year (woy)
	 * @param {number} year - solar hijri year
	 * @param {number} month - solar hijri month
	 * @param {number} date - solar hijri date
	 * @returns {number} - week of year
	 * @since 1.0.0
	 */
	#weekOfYear(
		year: number,
		month: number,
		date: number,
		FDOW: number = this.#config.first_day_of_week
	): number[] {
		var iw: number, //iso_week
			iy: number, //iso_year
			doy: number = this.#dayOfYear(month, date) + 1, // 1 through 366
			far1weekday: number = this.#dayOfWeek(year, 0, 1, FDOW) + 1; // 1 through 7 - first dow of farvardin
		/* Find if Y M D falls in YearNumber --Y, WeekNumber 52 or 53 */
		if (doy <= 8 - far1weekday && far1weekday > 4) {
			iy = --year;
			iw =
				far1weekday == 5 || (far1weekday == 6 && this.#isLeapYear(iy))
					? 53
					: 52;
			return [iw, iy];
		}
		var esf29weekday: number =
			this.#dayOfWeek(year, 11, this.#daysInMonth(year, 11), FDOW) + 1; // 1 through 7 - last dow of esfand
		/* Find if Y M D falls in YearNumber ++Y, WeekNumber 1 */
		if (doy > this.#daysInYear(year) - esf29weekday && esf29weekday < 4) {
			iy = ++year;
			iw = 1;
			return [iw, iy];
		}
		/* Find if Y M D falls in YearNumber Y, WeekNumber 1 through 52|53 */
		iy = year;
		//(doy+(7-(this.#dayOfWeek(year,month,date,FDOW)+1))+(far1weekday-1))/7
		iw = (5 + doy + far1weekday - this.#dayOfWeek(year, month, date, FDOW)) / 7;
		if (far1weekday > 4) iw--;
		return [iw, iy];
	}

	/**
	 * Get weeks in year (wiy)
	 * @param {number} year - solar hijri year
	 * @returns {number} - weeks in year
	 * @since 1.0.0
	 */
	#weeksInYear(year: number): number {
		const far1dow: number = this.#dayOfWeek(year, 0, 1) + 1;
		if (far1dow == 4 || (far1dow == 3 && this.#isLeapYear(year))) return 53; // SHDate.WEEKS_IN_YEAR_LEAP;
		return 52; // SHDate.WEEKS_IN_YEAR;
	}

	/**
	 * Get week of day (wod)
	 * @param year  - solar hijri year
	 * @param week - solar hijri week
	 * @param date - solar hijri date
	 * @returns {number} - week of day
	 */
	#weekOfDay(year: number, week: number, date: number = 1): number[] {
		const doy = (week - 1) * 7 + date - this.#dayOfWeek(year, 0, 4) + 2;
		return this.#dateOfDoy(year, doy);
	}
	getWeekOfDay(year: number, week: number, date: number = 1) {
		this.#weekOfDay(year, week, date);
	}
	/**
	 * Get date of days of year (dodoy)
	 * @param year - solar hijri year
	 * @param doy  - solar hijri day of year
	 * @returns {array} - days of day
	 * @since 1.0.0
	 */
	#dateOfDoy(year: number, doy: number): number[] {
		var diy, month, date;
		doy++;
		diy = this.#daysInYear(year);
		if (doy < 1)
			do {
				year--;
				doy += this.#daysInYear(year);
			} while (doy < 1);
		else if (doy > diy)
			do {
				doy -= diy;
				year++;
				diy = this.#daysInYear(year);
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
	#daysInMonth(year: number, month: number): number {
		if (month < 11) return SHDate.DAYS_IN_MONTH[month];
		return this.#isLeapYear(year) ? 30 : 29; // SHDate.DAYS_IN_MONTH_LEAP[month] : SHDate.DAYS_IN_MONTH[month];
	}
	getDaysInMonth(year: number, month: number) {
		return this.#daysInMonth;
	}

	/**
	 * Get days in year (diy)
	 * @param {number} year - solar hijri year
	 * @returns {number} - days in year
	 * @since 1.0.0
	 */
	#daysInYear(year: number): number {
		return this.#isLeapYear(year) ? 366 : 365; // SHDate.DAYS_IN_YEAR_LEAP : SHDate.DAYS_IN_YEAR;
	}
	/**
	 * getRevDayOfYear
	 *
	 */
	getDaysOfDay(year: number, doy: number) {
		let month: number, day: number, diy: number;
		if (!(Number.isInteger(year) && Number.isInteger(doy))) {
			throw "The value is not integer";
		}
		doy++;
		diy = this.#daysInYear(year);
		if (doy < 1)
			do {
				year--;
				doy += this.#daysInYear(year);
			} while (doy < 1);
		else if (doy > diy)
			do {
				doy -= diy;
				year++;
				diy = this.#daysInYear(year);
			} while (doy > diy);
		if (doy < 187) {
			month = parseInt(((doy - 1) / 31).toString()) + 1;
			day = doy % 31 ? doy % 31 : 31;
		} else {
			doy -= 186;
			month = parseInt(((doy - 1) / 30).toString()) + 7;
			day = doy % 30 ? doy % 30 : 30;
		}
		return [year, month, day];
	}

	/**
	 * revTime
	 *
	 * @param  int hours
	 * @param  int minute
	 * @param  int second
	 * @return array
	 */
	revTime(hours: number, minute: number, second: number) {
		let time: number, doy: number;
		time = hours * 3600 /* 60*60 */ + minute * 60 + second;
		second = time % 60;
		minute = (time / 60) % 60;
		hours = (time / 3600) % 24;
		doy = parseInt((time / 86400).toString());
		return [hours, minute, second, doy];
	}

	/**
	 * Get date/time information
	 * @param   int  timestamp  The optional timestamp parameter is an integer Unix timestamp that defaults to the current local time if a timestamp is not given. In other words,it defaults to the value of jtime().
	 * @return  array  an associative array of information related to the timestamp.
	 * @since   1.0.0
	 */
	getDates(timestamp: any = this.getTime(), isGMT: boolean = false) {
		const date =
			typeof timestamp === "undefined"
				? new SHDate()
				: timestamp instanceof SHDate
				? timestamp // Not provided
				: new SHDate(timestamp); // Javascript Date() // UNIX timestamp (auto-convert to int)
		return {
			seconds: isGMT ? date.getUTCSeconds() : date.getSeconds(),
			minutes: isGMT ? date.getUTCMinutes() : date.getMinutes(),
			hours: isGMT ? date.getUTCHours() : date.getHours(),
			mday: isGMT ? date.getUTCDate() : date.getDate(),
			wday: isGMT ? date.getUTCDay() : date.getDay(),
			mon: isGMT ? date.getUTCMonth() : date.getMonth(),
			year: isGMT ? date.getUTCFullYear() : date.getFullYear(),
			yday: this.#dayOfYear(
				isGMT ? date.getUTCMonth() : date.getMonth(),
				isGMT ? date.getUTCDate() : date.getDate()
			),
			ts: parseInt((date.getTime() / 1000).toString())
		};
	}

	/**
	 * Get private data of solar hijri date
	 * @param {string} format - format of data
	 * @returns {array}
	 */
	public format(format: string, isUTC: boolean = false): any[] {
		const year: number = isUTC ? this.getUTCFullYear() : this.getFullYear(),
			month: number = isUTC ? this.getUTCMonth() : this.getMonth(),
			date: number = isUTC ? this.getUTCDate() : this.getDate(),
			hours: number = isUTC ? this.getUTCHours() : this.getHours(),
			minute: number = isUTC ? this.getUTCMinutes() : this.getHours(),
			second: number = isUTC ? this.getUTCSeconds() : this.getMinutes(),
			millisecond: number = isUTC
				? this.getUTCMilliseconds()
				: this.getMilliseconds(),
			weekday: number = isUTC ? this.getUTCDay() : this.getDay();
		var str: any[] = [];
		format.split(/\s*(?:=|$)\s*/).forEach((f) => {
			switch (f) {
				case "YY":
					str.push(year);
					break;
				case "yy":
					str.push(year.toString().padStart(4, "0"));
					break;
				case "MM":
					str.push(month.toString());
					break;
				case "mm":
					str.push(month.toString().padStart(2, "0"));
					break;
				case "DD":
					str.push(date);
					break;
				case "dd":
					str.push(date.toString().padStart(2, "0"));
					break;
				case "HH":
					str.push(hours);
					break;
				case "hh":
					str.push(hours.toString().padStart(2, "0"));
					break;
				case "II":
					str.push(minute);
					break;
				case "ii":
					str.push(minute.toString().padStart(2, "0"));
					break;
				case "SS":
					str.push(second);
					break;
				case "ss":
					str.push(second.toString().padStart(2, "0"));
					break;
				case "MS":
					str.push(millisecond);
					break;
				case "ms":
					str.push(millisecond.toString().padStart(2, "0"));
					break;
				case "Diy": // days In Year
					str.push(this.#daysInYear(year));
					break;
				case "diy":
					str.push(this.#daysInYear(year).toString().padStart(3, "0"));
					break;
				case "Leap":
				case "leap":
					str.push(this.isLeapYear(year));
					break;
				case "Dim": // days In Month
					str.push(this.#daysInMonth(year, month));
					break;
				case "dim":
					str.push(this.#daysInMonth(year, month).toString().padStart(2, "0"));
					break;
				case "Wiy": //weeks In Year
					str.push(this.#weeksInYear(year));
					break;
				case "wiy":
					str.push(this.#weeksInYear(year).toString().padStart(2, "0"));
					break;
				case "Woy": //week Of Year
					str.push(this.#weekOfYear(year, month, date));
					break;
				case "woy": //week Of Year
					const [iso_week, iso_year] = this.#weekOfYear(year, month, date);
					str.push(
						iso_week.toString().padStart(2, "0"),
						iso_year.toString().padStart(2, "0") // todo change number 2 to 4
					);
					break;
				case "Dow": // day Of Week
					str.push(weekday);
					break;
				case "dow":
					str.push(weekday.toString().padStart(2, "0"));
					break;
				case "Doy": //day Of Year
					str.push(this.#dayOfYear(month, date));
					break;
				case "doy":
					str.push(this.#dayOfYear(month, date).toString().padStart(3, "0"));
					break;
				case "dsn": //day short names
					str.push(
						Word.getDayShortNames(
							weekday,
							this.#config.language_Word,
							this.#config.first_day_of_week
						)
					);
					break;
				case "dfn": //day full names
					str.push(
						Word.getDayFullNames(
							weekday,
							this.#config.language_Word,
							this.#config.first_day_of_week
						)
					);
					break;
				case "efn": //meridien full names
					str.push(
						Word.getMeridienFullNames(hours, this.#config.language_Word)
					);
					break;
				case "esn": //meridien short names
					str.push(
						Word.getMeridienShortNames(hours, this.#config.language_Word)
					);
					break;
				case "mfn": //month full names
					str.push(Word.getMonthFullNames(month, this.#config.language_Word));
					break;
				case "msn": //month short names
					str.push(Word.getMonthShortNames(month, this.#config.language_Word));
					break;
				case "asn": //animals full names
					str.push(Word.getAnimalsFullNames(year, this.#config.language_Word));
					break;
				case "csn": //constellations full names
					str.push(
						Word.getConstellationsFullNames(month, this.#config.language_Word)
					);
					break;
				case "ssn": //season full names
					str.push(Word.getSeasonFullNames(month, this.#config.language_Word));
					break;
				case "osn": //solstice full names
					str.push(
						Word.getSolsticeFullNames(month, date, this.#config.language_Word)
					);
					break;
				case "sun": //suffix names
					str.push(Word.getSuffixNames(date, this.#config.language_Word));
					break;
				default:
					str.push(f);
					break;
			}
		});
		return str;
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
		var date = new Date(new SHDate(args).getTime());
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
		month: number | false = false,
		date: number | false = false
	): number {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			year,
			month || this.getMonth(),
			date || this.getDate()
		);
		if (date) this.#date.setFullYear(gyear, gmonth, gdate);
		else if (month) this.#date.setFullYear(gyear, gmonth);
		else this.#date.setFullYear(gyear);
		this.#updateDate();
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
		if (date) this.#date.setUTCFullYear(gyear, gmonth, gdate);
		else if (month) this.#date.setUTCFullYear(gyear, gmonth);
		else this.#date.setUTCFullYear(gyear);
		this.#updateDate();
		return this.getTime();
	}

	/**
	 * Sets the month value in the Date object using local time.
	 * @param {number} month — A numeric value equal to the month. The value for Farvardin is 0, and other month values follow * consecutively.
	 * @param {number} date — A numeric value representing the day of the month. If this value is not supplied, the value from a * call to the getDate method is used.
	 * @return {object} SHDate
	 * @since 1.0.0
	 */
	setMonth(month: number, date: number | false = false): number {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getFullYear(),
			month,
			date || this.getDate()
		);
		if (date) this.#date.setMonth(gmonth, gdate);
		else this.#date.setMonth(gmonth);
		this.#date.setMonth(gmonth, gdate);
		this.#updateDate();
		return this.getTime();
	}

	/**
	 * Sets the month value in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} month — A numeric value equal to the month. The value for Farvardin is 0, and other month values follow * consecutively.
	 * @param {number} date — A numeric value representing the day of the month. If it is not supplied, the value from a call to  the getUTCDate method is used.
	 * @return {object} SHDate
	 * @since 1.0.0
	 */
	setUTCMonth(month: number, date: number | false = false): number {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getUTCFullYear(),
			month,
			date || this.getUTCDate()
		);
		if (date) this.#date.setUTCMonth(gmonth, gdate);
		else this.#date.setUTCMonth(gmonth);
		this.#updateDate();
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
		this.#updateDate();
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
		this.#updateDate();
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
		minutes: number | false = false,
		seconds: number | false = false,
		milliseconds: number | false = false
	): number {
		if (milliseconds)
			this.#date.setHours(
				hours,
				minutes || this.getMinutes(),
				seconds || this.getSeconds(),
				milliseconds
			);
		else if (seconds)
			this.#date.setHours(hours, minutes || this.getMinutes(), seconds);
		else if (minutes) this.#date.setHours(hours, minutes);
		else this.#date.setHours(hours);
		this.#updateTime();
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
		minutes: number | false = false,
		seconds: number | false = false,
		milliseconds: number | false = false
	): number {
		if (milliseconds)
			this.#date.setUTCHours(
				hours,
				minutes || this.getMinutes(),
				seconds || this.getSeconds(),
				milliseconds
			);
		else if (seconds)
			this.#date.setUTCHours(hours, minutes || this.getMinutes(), seconds);
		else if (minutes) this.#date.setHours(hours, minutes);
		else this.#date.setUTCHours(hours);
		this.#updateTime();
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
		seconds: number | false = false,
		milliseconds: number | false = false
	): number {
		if (milliseconds)
			this.#date.setMinutes(
				minutes,
				seconds || this.getSeconds(),
				milliseconds
			);
		else if (seconds) this.#date.setMinutes(minutes, seconds);
		else this.#date.setMinutes(minutes);
		this.#updateTime();
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
		seconds: number | false = false,
		milliseconds: number | false = false
	): number {
		if (milliseconds)
			this.#date.setUTCMinutes(
				minutes,
				seconds || this.getUTCSeconds(),
				milliseconds
			);
		else if (seconds) this.#date.setUTCMinutes(minutes, seconds);
		else this.#date.setUTCMinutes(minutes);
		this.#updateTime();
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
		milliseconds: number | false = false
	): number {
		if (milliseconds) this.#date.setSeconds(seconds, milliseconds);
		else this.#date.setSeconds(seconds);
		this.#updateTime();
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
		milliseconds: number | false = false
	): number {
		if (milliseconds) this.#date.setUTCSeconds(seconds, milliseconds);
		else this.#date.setUTCSeconds(seconds);
		this.#updateTime();
		return this.getTime();
	}

	/**
	 * 	Sets the milliseconds value in the Date object using local time.
	 * @param {number} milliseconds — A number between 0 and 999, representing the milliseconds.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	public setMilliseconds(milliseconds: number): number {
		this.#date.setMilliseconds(milliseconds);
		this.#updateTime();
		return this.getTime();
	}

	/**
	 * 	Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} milliseconds — A number between 0 and 999, representing the milliseconds.
	 * @returns {object} The number of milliseconds between 11 Dey 1348 00:00:00 UTC and the updated date.
	 * @since 1.0.0
	 */
	public setUTCMilliseconds(milliseconds: number): number {
		this.#date.setUTCMilliseconds(milliseconds);
		this.#updateTime();
		return this.getTime();
	}

	/**
	 * Gets the year, using local time.
	 * @returns {number} The year.
	 * @since 1.0.0
	 */
	public getFullYear(): number {
		return this.#sh.year as number;
	}

	/**
	 * Gets the year using Universal Coordinated Time (UTC).
	 * @returns {number} The year.
	 * @since 1.0.0
	 *
	 */
	public getUTCFullYear(): number {
		return this.#sh.UTC_year as number;
	}

	/**
	 * Gets the month, using local time.
	 * @returns {number} The month (0-11)
	 * @since 1.0.0
	 */
	public getMonth(): number {
		return this.#sh.month as number;
	}

	/**
	 * Gets the month of a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The month (0-11) in the Date object using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	public getUTCMonth(): number {
		return this.#sh.UTC_month as number;
	}

	/**
	 * Gets the day-of-the-month, using local time.
	 * @returns {number} The day-of-the-month, using local time.
	 * @since 1.0.0
	 */
	public getDate(): number {
		return this.#sh.date as number;
	}

	/**
	 * Gets the day-of-the-month, using Universal Coordinated Time (UTC).
	 * @returns {number} The day-of-the-month, using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	public getUTCDate(): number {
		return this.#sh.UTC_date as number;
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
		return this.#dayOfWeek(this.getFullYear(), this.getMonth(), this.getDate());
		//return this.#GDOWToDOW(this.#date.getDay());
	}

	/**
	 * Gets the day-of-the-week in a Date object, using Universal Coordinated Time (UTC).
	 * @returns {number} 0 for satarday , 1 for Sunday, and so on.
	 * @since 1.0.0
	 */
	public getUTCDay(): number {
		return this.#dayOfWeek(
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
		this.#date.setTime(time + this.#config.time_server_diff);
		this.#updateDate();
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
			date > this.#daysInMonth(year, month)
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
			week > this.#weeksInYear(year) ||
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
		//const [day_short_name, date, month_short_name, year] = this.format("dsn=dd=msn=yy");
		return `${this.toDateString()} ${this.toTimeString()}`;
	}

	/**
	 *
	 * @returns {string} A string representation of a function.
	 * @since x.y.z
	 */
	public toUTCString(): string {
		//const [day_short_name, date, month_short_name, year] = this.format("dsn=dd=msn=yy", true);
		return `${this.toUTCDateString()} ${this.toUTCTimeString()}`;
	}

	/**
	 *
	 * @returns {string} A string representation of a function.
	 * @since x.y.z
	 */
	public toDateString(): string {
		const [day_short_name, date, month_short_name, year] =
			this.format("dsn=dd=msn=yy");
		return `${day_short_name} ${date} ${month_short_name} ${year}`;
	}

	/**
	 *
	 * @returns {string} A string representation of a function.
	 * @since x.y.z
	 */
	public toUTCDateString(): string {
		const [day_short_name, date, month_short_name, year] = this.format(
			"dsn=dd=msn=yy",
			true
		);
		return `${day_short_name}, ${date} ${month_short_name} ${year}`;
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
	 * @param {string} str — A date string
	 * @returns {number} The number of milliseconds between that date and midnight, 11 Dey 1348.
	 * @since x.y.z
	 * https://gitcode.net/openthos/gecko-dev/-/blob/GECKO120_2012041106_RELBRANCH/js/src/jsdate.cpp#L911
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
	 * https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format
	 * https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
	 * https://www.w3schools.com/js/js_date_formats.asp
	 */
	public static parse(str: string): number {
		//throw new Error("Not Implemented parse"); // TODO: implement
		let year: number,
			month: number,
			day: number,
			hours: number,
			minute: number,
			second: number,
			farction: number,
			doy: number,
			week: number,
			time: number,
			date: SHDate = new SHDate();
		const dataObj: any = new SHParser(str);
		Object.entries(dataObj).forEach(([key, value]: any) => {
			switch (key) {
				case "YEAR":
					year = parseInt(value);
					date.setFullYear(year);
					break;
				case "MONTH":
					month = parseInt(value);
					date.setMonth(month - 1);
					break;
				case "DAY":
					day = parseInt(value);
					date.setDate(day);
					break;
				case "HOURS":
					hours = parseInt(value);
					date.setHours(hours);
					break;
				case "MINUTES":
					minute = parseInt(value);
					date.setMinutes(minute);
					break;
				case "SECONDS":
					second = parseInt(value);
					date.setSeconds(second);
					break;
				case "FRAC":
					farction = parseInt(value);
					date.setMilliseconds(farction);
					break;
				case "TIMESTAMP":
					time = parseInt(value);
					date.setTime(time);
					break;
				case "DAY_OF_YEAR":
					doy = parseInt(value);
					[year, month, day] = date.#dateOfDoy(year, doy);
					date.setFullYear(year, month, day);
					break;
				case "WEEK_OF_YEAR":
					week = parseInt(value);
					[year, month, day] = date.#weekOfDay(
						year,
						week,
						dataObj.DAY_OF_WEEK || date.getDay()
					);
					date.setFullYear(year, month, day);
					break;
				case "NOW":
					time = parseInt(value);
					date.setTime(SHDate.now());
					break;
				case "TODAY_MIDNIGHT":
					date.restTime();
					break;
				case "NOON":
					date.restTime(12);
					break;
				case "YESTERDAY":
					date.setDate(date.getDate() - 1);
					date.restTime();
					break;
				case "TOMORROW":
					date.setDate(date.getDate() + 1);
					date.restTime();
					break;
			}
		});
		//console.log(JSON.stringify(SHParser, null, 2));
		console.log(dataObj, str, date.toString(), date.getTime());
		return date.getTime();
	}

	/**
	 * converts a Date object to a primitive value.
	 * @param {*} hint
	 * @returns
	 */
	public [Symbol.toPrimitive](hint: string | number): string | number | null {
		if (hint === "number") {
			return this.getTime() - this.#config.time_server_diff;
		} else if (hint === "string" || hint === "default") {
			return `SHDate ${this.toString()}`;
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
	 * The time difference with the server - miliseconds
	 */
	setTimeServerDiff(time: number): void {
		this.#config.time_server_diff = time;
		this.#date.setTime(this.#date.getTime() - time);
	}
	getTimeServerDiff(): number {
		return this.#config.time_server_diff;
	}

	/**
	 * Timezone identifier
	 */
	setTimeZone(time_zone: string): void {
		this.#config.time_zone = time_zone;
	}
	getTimeZone(): string {
		return this.#config.time_zone;
	}

	/**
	 * Language words Software
	 */
	setLanguage(language: string): void {
		if (Word.checkLanguage(language)) this.#config.language_Word = language;
		else throw new Error("setLanguage: " + language + " not found");
	}
	getLanguage(): string {
		return this.#config.language_Word;
	}

	/**
	 * Start first day of the week // 0 = Saturday | 6 = Friday
	 */
	setFirstDayOfWeek(FDOW: number): void {
		if (FDOW >= 0 && FDOW <= 6) this.#config.first_day_of_week = FDOW;
		else
			throw new Error(
				"setFirstDayOfWeek: " + FDOW + " less than 0 or more than 6"
			);
	}
	getFirstDayOfWeek(): number {
		return this.#config.first_day_of_week;
	}

	/**
	 *
	 * rest Time
	 *
	 * @param  int h Hours
	 * @param  int m Minutes
	 * @param  int s Seconds
	 * @return bool
	 */
	public restTime(h = 0, m = 0, s = 0, f = 0) {
		this.setHours(h, m, s, f);
		return true;
	}

	setConfig(...args: any[]): void {
		const config = { ...this.#config, ...args };
		this.setFirstDayOfWeek(config.first_day_of_week);
		this.setLanguage(config.language_Word);
		this.setTimeZone(config.time_zone);
		this.setTimeServerDiff(config.time_server_diff);
	}

	clone(): SHDate {
		return new SHDate(this);
	}

	instance(): SHDate {
		return this;
	}

	/**
	 * version
	 */
	static getVersion() {
		return SHDate.version;
	}
}

export class Export_SHDate extends SHDate {
	getDaysInMonth(shYear: any, shMonth: any) {
		return super.getDaysInMonth(shYear, shMonth);
	}

	getTime() {
		return super.getTime();
	}

	getDates() {
		return super.getDates();
	}

	checkTime(hours: number, minute: number, second: number) {
		return super.checkTime(hours, minute, second);
	}

	revTime(hours: number, minute: number, second: number) {
		return super.revTime(hours, minute, second);
	}

	getDayOfWeek(
		Year: number,
		Month: number,
		Day: number,
		FDOW = super.getFirstDayOfWeek()
	) {
		return super.getDayOfWeek(Year, Month, Day, FDOW);
	}

	getDayOfYear(Month: number, Day: number) {
		return super.getDayOfYear(Month, Day);
	}

	getDaysOfDay(Year: number, doy: number) {
		return super.getDaysOfDay(Year, doy);
	}
	getWeekOfDay(year: number, week: number, date: number = 1) {
		super.getWeekOfDay(year, week, date);
	}
}
