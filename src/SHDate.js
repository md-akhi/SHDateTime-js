/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package Date and Time Related Extensions SH{ Shamsi Hijri, Solar Hijri, Iranian Hijri }
 * @author Mohammad Amanalikhani
 * @link http://docs.akhi.ir/js/SHDateTime
 * @copyright Copyright (C) 2015 - 2022 Open Source Matters,Inc. All right reserved.
 * @license https://www.gnu.org/licenses/agpl-3.0.en.html AGPL-3.0 License
 * @version Release: 1.0.0
 */
"use strict";
/**
 * class SHDate Language: Persian
 * @since 1.0.0
 */
class SHDateLang_fa_IR {
	// Languages
	static LANG = "fa_IR"; //Persion	fa
	static DIGIT = new Array(
		"٠",
		"١",
		"٢",
		"٣",
		"۴",
		"۵",
		"۶",
		"٧",
		"٨",
		"٩",
		","
	);
	static SUFFIX = "ام";
	static MERIDIEN_FULL_NAMES = new Array("قبل از ظهر", "بعد از ظهر");
	static MERIDIEN_SHORT_NAMES = new Array("ق‍.ظ", "ب‍.ظ");
	static MONTH_FULL_NAMES = new Array(
		"فروردين",
		"ارديبهشت",
		"خرداد",
		"تير",
		"امرداد",
		"شهريور",
		"مهر",
		"آبان",
		"آذر",
		"دي",
		"بهمن",
		"اسفند"
	);
	static MONTH_SHORT_NAMES = new Array(
		"فرو",
		"ارد",
		"خرد",
		"تير",
		"امر",
		"شهر",
		"مهر",
		"آبا",
		"آذر",
		"دي",
		"بهم‍",
		"اسف‍"
	);
	static DAY_FULL_NAMES = new Array(
		"شنبه",
		"يک‌شنبه",
		"دوشنبه",
		"سه ش‍‍‍‍نبه",
		"چهارشنبه",
		"پنجشنبه",
		"جمعه"
	);
	static DAY_SHORT_NAMES = new Array("ش‍", "ی‍", "د", "س‍", "چ‍", "پ‍", "ج‍");
	static CONSTELLATIONS_FULL_NAMES = new Array(
		"حَمَل",
		"ثَور",
		"جَوزا",
		"سَرَطان",
		"اَسَد",
		"سُنبُله",
		"مِیزان",
		"عَقرَب",
		"قَوس",
		"جَدْی",
		"دَلو",
		"حوت"
	);
	static ANIMALS_FULL_NAMES = new Array(
		"مار",
		"اسب",
		"گوسفند",
		"ميمون",
		"مرغ",
		"سگ",
		"خوک",
		"موش",
		"گاو",
		"پلنگ",
		"خرگوش",
		"نهنگ"
	);
	static SEASON_FULL_NAMES = new Array("بهار", "تابستان", "پاييز", "زمستان");
	static SOLSTICE_FULL_NAMES = new Array("يلدا", "تموز");
	/**
	 * Ordinal suffix for the day of the month
	 * @param   int  $num    numeric the day of the month
	 * @return  string  Ordinal suffix for the day of the month
	 * @since   1.0.0
	 */
	static SuffixNames(num) {
		if (!Number.isInteger(num)) {
			throw new Error("The value is not integer");
		}
		return SHDateLang_fa_IR.SUFFIX;
	}
}

/**
 * class SHDate Language: English
 * @since 1.0.0
 */
class SHDateLang_en_US {
	// Languages
	static LANG = "en_US"; //English	en
	static DIGIT = new Array(
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"."
	);
	static SUFFIX = new Array("th", "st", "nd", "rd");
	static MERIDIEN_FULL_NAMES = new Array("AM", "PM");
	static MERIDIEN_SHORT_NAMES = new Array("am", "pm");
	static MONTH_FULL_NAMES = new Array(
		"Farvardin",
		"Ordibehesht",
		"Khordad",
		"Tir",
		"Amordad",
		"Shahrivar",
		"Mehr",
		"Aban",
		"Azar",
		"Dey",
		"Bahman",
		"Esfand"
	);
	static MONTH_SHORT_NAMES = new Array(
		"Far",
		"Ord",
		"Kho",
		"Tir",
		"Amo",
		"Sha",
		"Meh",
		"Aba",
		"Aza",
		"Dey",
		"Bah",
		"Esf"
	);
	static DAY_FULL_NAMES = new Array(
		"Saturday",
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday"
	);
	static DAY_SHORT_NAMES = new Array(
		"Sat",
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri"
	);
	static CONSTELLATIONS_FULL_NAMES = new Array(
		"Aries",
		"Taurus",
		"Gemini",
		"Cancer",
		"Leo",
		"Virgo",
		"Libra",
		"Scorpio",
		"Sagittarius",
		"Capricorn",
		"Aquarius",
		"Pisces"
	);
	static ANIMALS_FULL_NAMES = new Array(
		"Snake",
		"Horse",
		"Sheep",
		"Monkey",
		"Chicken",
		"Dog",
		"Pig",
		"Mouse",
		"Cow",
		"Panther",
		"Rabbit",
		"Whale"
	);
	static SEASON_FULL_NAMES = new Array("Spring", "Summer", "Fall", "Winter");
	static SOLSTICE_FULL_NAMES = new Array("Yalda", "Tammuz");
	/**
	 * Ordinal suffix for the day of the month
	 * @param   int  $num    numeric the day of the month
	 * @return  string  Ordinal suffix for the day of the month
	 * @since   1.0.0
	 */
	static SuffixNames(num) {
		if (!Number.isInteger(num)) {
			throw new Error("The value is not integer");
		}
		//Calculate Ordinal suffix for the day of the month
		if (num >= 10 && num <= 19) return SHDateLang_en_US.SUFFIX[0];
		switch (num % 10) {
			case 1:
				return SHDateLang_en_US.SUFFIX[1];
			case 2:
				return SHDateLang_en_US.SUFFIX[2];
			case 3:
				return SHDateLang_en_US.SUFFIX[3];
			default:
				return SHDateLang_en_US.SUFFIX[0];
		}
	}
}

/**
 * class SHDate Configuration
 * @since 1.0.0
 */
class SHDateConfig {
	/**
	 *	The time difference with the server
	 */
	static TIME_SERVER = 0;
	static TSERVER = SHDateConfig.TIME_SERVER;
	/**
	 *    Timezone identifier
	 */
	static TIME_ZONE = "Asia/Tehran";
	static TZONE = SHDateConfig.TIME_ZONE;

	/**
	 *    Language words Software
	 */
	static LANG_WORD = "en_US";
	static FIRST_DAY_OF_WEEK = 0; // 0 = Saturday | 6 = Friday
}
/**
 * class SHDate Word
 * @since 1.0.0
 */
class SHDateWord {
	/**
	 * Get Language
	 * @param string lang
	 * @return  string
	 * @since   1.0.0
	 */
	static getClassLanguage(lang = SHDateConfig.LANG_WORD) {
		if (typeof lang !== "string") {
			throw new Error("The value is not string");
		}
		switch (lang) {
			// Languages
			case "fa_IR":
				return SHDateLang_fa_IR;
			case "en_US":
				return SHDateLang_en_US;
			default:
				return SHDateLang_en_US;
		}
	}

	/**
	 * Uppercase Ante meridiem and Post meridiem
	 * @param   int  num    numeric
	 * @param   string  LW    language    word
	 * @return  string  Ante/Post meridiem
	 * @since   1.0.0
	 */
	static getMeridienFullNames(H24, LW = SHDateConfig.LANG_WORD) {
		if (!Number.isInteger(H24)) {
			throw new Error("The value is not integer");
		}
		const cls = SHDateWord.getClassLanguage(LW);
		return cls.MERIDIEN_FULL_NAMES[H24 > 11];
	}

	/**
	 * Lowercase Ante meridiem and Post meridiem, two letters
	 * @param   int  num    numeric
	 * @param   string  LW    language    word
	 * @return  string  Ante/Post meridiem, two letters
	 * @since   1.0.0
	 */
	static getMeridienShortNames(H24, LW = SHDateConfig.LANG_WORD) {
		if (!Number.isInteger(H24)) {
			throw new Error("The value is not integer");
		}
		const cls = SHDateWord.getClassLanguage(LW);
		return cls.MERIDIEN_SHORT_NAMES[H24 > 11];
	}

	/**
	 * A full textual representation of a month
	 * @param   int  num    numeric of a month
	 * @return  string  A full textual of a month
	 * @since   1.0.0
	 */
	static getMonthFullNames(month, LW = SHDateConfig.LANG_WORD) {
		if (!Number.isInteger(month)) {
			throw new Error("The value is not integer");
		}
		const cls = SHDateWord.getClassLanguage(LW);
		return cls.MONTH_FULL_NAMES[month];
	}

	/**
	 * A short textual representation of a month, three letters
	 * @param   int  num    numeric of a month
	 * @return  string  A short textual of a month, three letters
	 * @since   1.0.0
	 */
	static getMonthShortNames(month, LW = SHDateConfig.LANG_WORD) {
		if (!Number.isInteger(month)) {
			throw new Error("The value is not integer");
		}
		const cls = SHDateWord.getClassLanguage(LW);
		return cls.MONTH_SHORT_NAMES[month];
	}

	/**
	 * A full textual representation of the day of the week
	 * @param   int  num    numeric of the day of the week
	 * @return  string  A full textual the day of the week
	 * @since   1.0.0
	 */
	static getDayFullNames(dow, LW = SHDateConfig.LANG_WORD) {
		if (!Number.isInteger(dow)) {
			throw new Error("The value is not integer");
		}
		const cls = SHDateWord.getClassLanguage(LW);
		return cls.DAY_FULL_NAMES[(dow + SHDateConfig.FIRST_DAY_OF_WEEK) % 7];
	}

	/**
	 * A short textual representation of the day of the week, three letters
	 * @param   int  num    numeric of the day of the week
	 * @return  string  A short textual of a day, three letters
	 * @since   1.0.0
	 */
	static getDayShortNames(dow, LW = SHDateConfig.LANG_WORD) {
		if (!Number.isInteger(dow)) {
			throw new Error("The value is not integer");
		}
		const cls = SHDateWord.getClassLanguage(LW);
		return cls.DAY_SHORT_NAMES[(dow + SHDateConfig.FIRST_DAY_OF_WEEK) % 7];
	}

	/**
	 * Ordinal suffix for the day of the month
	 * @param   {int}  $num    numeric the day of the month
	 * @return  string  Ordinal suffix for the day of the month
	 * @since   1.0.0
	 */
	static getSuffixNames(num, LW = SHDateConfig.LANG_WORD) {
		if (!Number.isInteger(num)) {
			throw new Error("The value is not integer");
		}
		const cls = SHDateWord.getClassLanguage(LW);
		return cls.SuffixNames(num);
	}

	/**
	 *
	 */
	static getConstellationsFullNames(month, LW = SHDateConfig.LANG_WORD) {
		//Constellations
		if (!Number.isInteger(month)) {
			throw new Error("The value is not integer");
		}
		const cls = SHDateWord.getClassLanguage(LW);
		return cls.CONSTELLATIONS_FULL_NAMES[month];
	}

	/**
	 *
	 */
	static getAnimalsFullNames(year, LW = SHDateConfig.LANG_WORD) {
		if (!Number.isInteger(year)) {
			throw new Error("The value is not integer");
		}
		const cls = SHDateWord.getClassLanguage(LW);
		return cls.ANIMALS_FULL_NAMES[year % 12];
	}

	/**
	 *
	 */
	static getSeasonFullNames(month, LW = SHDateConfig.LANG_WORD) {
		if (!Number.isInteger(month)) {
			throw new Error("The value is not integer");
		}
		const cls = SHDateWord.getClassLanguage(LW);
		return cls.SEASON_FULL_NAMES[parseInt(month / 3.1)];
	}

	/**
	 *
	 */
	static getSolsticeFullNames(num, LW = SHDateConfig.LANG_WORD) {
		if (!Number.isInteger(num)) {
			throw new Error("The value is not integer");
		}
		const cls = SHDateWord.getClassLanguage(LW);
		return cls.SOLSTICE_FULL_NAMES[num];
	}
}

/**
 * class SHDate
 * @since   1.0.0
 */
class SHDate {
	#date;
	#shDate;
	#shDateUTC;
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
	constructor() {
		if (!new.target || !this) {
			// if you run me without new
			return new SHDate(arguments).toString();
		}
		this.#date = new Date();
		this.#UpDate();
		// date time
		if (typeof arguments[0] == "number" && arguments.length == 1) {
			// year
			if (
				arguments[0].length == 4 &&
				(arguments[0] >= 1200 || arguments[0] < 1700)
			)
				this.setFullYear(arguments[0]);
			// value
			else this.setTime(arguments[0]);
		} else if (typeof arguments[0] == "number" && arguments.length >= 1) {
			this.setFullYear(arguments[0] || this.getFullYear());
			this.setMonth(arguments[1] || this.getMonth());
			this.setDate(arguments[2] || 1);
			this.setHours(arguments[3] || 0);
			this.setMinutes(arguments[4] || 0);
			this.setSeconds(arguments[5] || 0);
			this.setMilliseconds(arguments[6] || 0);
		} else if (typeof arguments[0] == "string" && arguments.length == 1) {
			// dateString
			throw new Error("Not Implemented dateString");
		} else if (typeof arguments[0] == "object" && arguments.length == 1) {
			// dateObject
			throw new Error("Not Implemented dateObject");
		}
		return;
	}

	/**
	 * update date
	 * @param {boolean} isUTC
	 * @returns {null}
	 * @since 1.0.0
	 */
	#UpDate(isUTC = false) {
		if (isUTC) {
			this.#shDateUTC = this.#GregorianToSolar(
				this.#date.getUTCFullYear(),
				this.#date.getUTCMonth() + 1,
				this.#date.getUTCDate()
			);
			return;
		}
		this.#shDate = this.#GregorianToSolar(
			this.#date.getFullYear(),
			this.#date.getMonth() + 1,
			this.#date.getDate()
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
	#GregorianToSolar(gyear, gmonth, gdate, julian = false) {
		// 0622/03/22 = 0001/01/01
		let gdoy, doy, year;
		gdoy =
			(gyear - 1) * 365 +
			([0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][gmonth] +
				gdate) -
			226745; //226745 = 621*365+80
		if (this.#GIsLeap(gyear) && gmonth > 2) gdoy++;
		year = parseInt(gdoy / 365) + 1;
		doy = (gdoy % 365) + this.#GIsLeap(gyear, true) - this.#IsLeap(year, true);
		return this.#DaysOfDay(year, doy - 1);
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
	#SolarToGregorian(year, month, date, julian = false) {
		// 0001/01/01 = 0622/03/22
		let doy, gdoy, gyear;
		doy =
			(year - 1) * 365 +
			this.#DayOfYear(year, month, date) +
			226745 /*621*365+80*/;
		gyear = parseInt(doy / 365) + 1;
		gdoy = (doy % 365) + this.#IsLeap(year, true) - this.#GIsLeap(gyear, true);
		return this.#GDaysOfDay(gyear, gdoy);
	}
	#GDaysOfDay(gyear, gdoy) {
		let gdiy, gleap;
		gdiy = this.#GDaysInYear(gyear);
		if (gdoy < 1)
			do {
				gyear--;
				gdiy = this.#GDaysInYear(gyear);
				gdoy += gdiy;
			} while (gdoy < 1);
		else if (gdoy > gdiy)
			do {
				gdoy -= gdiy;
				gyear++;
				gdiy = this.#GDaysInYear(gyear);
			} while (gdoy > gdiy);
		gleap = this.#GIsLeap(gyear) ? 29 : 28;
		[0, 31, gleap, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].forEach(
			(gdim, gmonth) => {
				if (gdoy <= gdim) return [gmonth, parseInt(gdoy), gyear];
				gdoy -= gdim;
			}
		);
		return [gmonth, parseInt(gdoy), gyear];
	}
	#GDaysInYear(year) {
		return this.#GIsLeap(year) ? 366 : 365;
	}
	#GDayOfWeek(gdow) {
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
	#GIsLeap(gyear, all = false) {
		if (all)
			return (
				Math.ceil(
					parseInt(--gyear / 4) - parseInt(gyear / 100) + parseInt(gyear / 400)
				) - 150
			);
		return parseInt(gyear % 4 == 0 && !(gyear % 100 == 0 && gyear % 400 != 0));
	}

	/**
	 * Get leap year
	 * @param {number} year - solar hijri year
	 * @param {boolean} all - all leap year
	 * @returns {boolean} - leap year
	 * @since 1.0.0
	 */
	#IsLeap(year, all = false) {
		if (all)
			return parseInt(Math.ceil((year += 1127) * 365.2422 - year * 365) - 274);
		return (
			parseInt((year += 1128) * 365.2422) - parseInt(--year * 365.2422) - 365
		);
	}

	/**
	 * Get leap year
	 * @param {number} year - solar hijri year
	 * @returns {boolean} - leap year
	 * @since 1.0.0
	 */
	isLeap(year) {
		return this.#IsLeap(year) ? true : false;
	}

	/**
	 * Get day of week (dow)
	 * @param {number} year - solar hijri year
	 * @param {number} month - solar hijri month
	 * @param {number} date - solar hijri date
	 * @returns {number} - day of week
	 * @since 1.0.0
	 */
	#DayOfWeek(year, month, date, FDOW = SHDateConfig.FIRST_DAY_OF_WEEK) {
		//return (year+this.IsLeaps(year,1)+this::DayOfYear(year,month,date)+5)%7;
		//new and best version
		return (
			(5 +
				year +
				this.#IsLeap(year, 1) +
				this.#DayOfYear(year, month, date) -
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
	#DayOfYear(year, month, date) {
		let doy;
		if (month < 7) doy = (month - 1) * 31;
		else doy = (month - 7) * 30 + 186;
		return (doy + date - 1) % (this.#DaysInYear(year) - 1);
	}

	/**
	 * Get week of year (woy)
	 * @param {number} year - solar hijri year
	 * @param {number} month - solar hijri month
	 * @param {number} date - solar hijri date
	 * @returns {number} - week of year
	 * @since 1.0.0
	 */
	#WeekOfYear(year, month, date) {
		var iw, iy;
		/* Find if Y M D falls in YearNumber --Y, WeekNumber 52 or 53 */
		if (
			(doy = this.#DayOfYear(year, month, date) + 1) <=
				8 - (far1weekday = this.#DayOfWeek(year, 1, 1) + 1) &&
			far1weekday > 4
		)
			return [
				(iw =
					far1weekday == 5 || (far1weekday == 6 && this.#IsLeap((iy = --year)))
						? 53
						: 52),
				iy
			];
		/* Find if Y M D falls in YearNumber ++Y, WeekNumber 1 */
		if (
			365 - doy + this.#IsLeap(year) <
			4 - (weekday = this.#DayOfWeek(year, month, date) + 1)
		) {
			iy = ++year;
			return [(iw = 1), iy];
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
	#WeeksInYear(year) {
		const far1dow = this.#DayOfWeek(year, 1, 1) + 1;
		if (far1dow == 4 && far1dow == 3 && this.#IsLeap(year)) return 53;
		return 52;
	}

	/**
	 * Get week of day (wod)
	 * @param year  - solar hijri year
	 * @param week - solar hijri week
	 * @param date - solar hijri date
	 * @returns {number} - week of day
	 */
	#WeekOfDay(year, week, date = 1) {
		const doy = (week - 1) * 7 + date - this.#DayOfWeek(year, 1, 4) + 2;
		return this.#DaysOfDay(year, doy);
	}

	/**
	 * Get days of days of year
	 * @param year - solar hijri year
	 * @param doy  - solar hijri day of year
	 * @returns {array} - days of day
	 * @since 1.0.0
	 */
	#DaysOfDay(year, doy) {
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
			month = parseInt((doy - 1) / 31) + 1;
			date = doy % 31 || 31;
		} else {
			doy -= 186;
			month = parseInt((doy - 1) / 30) + 7;
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
	#DaysInMonth(year, month) {
		return month < 7 ? 31 : month < 12 ? 30 : this.#IsLeap(year) + 29;
	}

	/**
	 * Get days in year (diy)
	 * @param {number} year - solar hijri year
	 * @returns {number} - days in year
	 * @since 1.0.0
	 */
	#DaysInYear(year) {
		return this.#IsLeap(year) + 365;
	}

	/**
	 * Get private data of solar hijri date
	 * @param {string} format - format of data
	 * @returns {array}
	 */
	format(format) {
		let year = this.getFullYear(),
			month = this.getMonth() + 1,
			date = this.getDate(),
			result = [],
			diy,
			doy,
			dim,
			dow,
			week,
			weekday,
			woy,
			wiy,
			wod;
		format.split(/\s*(?:=|$)\s*/).forEach((f) => {
			switch (f) {
				case "diy":
					result.push(this.#DaysInYear(year).toString().padStart(3, "0"));
					break;
				case "idiy":
					result.push(this.#DaysInYear(year));
					break;
				case "dim":
					result.push(
						this.#DaysInMonth(year, month).toString().padStart(2, "0")
					);
					break;
				case "idim":
					result.push(this.#DaysInMonth(year, month));
					break;
				case "wod":
					result.push(
						this.#WeekOfDay(year, month, date).toString().padStart(2, "0")
					);
					break;
				case "iwod":
					result.push(this.#WeekOfDay(year, month, date));
					break;
				case "wiy":
					result.push(this.#WeeksInYear(year).toString().padStart(2, "0"));
					break;
				case "iwiy":
					result.push(this.#WeeksInYear(year));
					break;
				case "woy":
					result.push(
						this.#WeekOfYear(year, month, date).toString().padStart(2, "0")
					);
					break;
				case "iwoy":
					result.push(this.#WeekOfYear(year, month, date));
					break;
				case "dow":
					result.push(
						this.#DayOfWeek(year, month, date).toString().padStart(2, "0")
					);
					break;
				case "idow":
					result.push(this.#DayOfWeek(year, month, date));
					break;
				case "doy":
					result.push(
						this.#DayOfYear(year, month, date).toString().padStart(3, "0")
					);
					break;
				case "idoy":
					result.push(this.#DayOfYear(year, month, date));
					break;
				case "dsn":
					result.push(
						SHDateWord.getDayShortNames(this.#DayOfWeek(year, month, date))
					);
					break;
				case "dfn":
					result.push(
						SHDateWord.getDayFullNames(this.#DayOfWeek(year, month, date))
					);
					break;
				case "efn":
					result.push(SHDateWord.getMeridienFullNames(year));
					break;
				case "esn":
					result.push(SHDateWord.getMeridienShortNames(year));
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
	static now() {
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
	static UTC(
		year,
		month = false,
		day = false,
		hour = false,
		minute = false,
		second = false,
		millisecond = false
	) {
		const shDate = new SHDate();
		const date = new Date();
		const UTC = this.#SolarToGregorian(
			year || shDate.getUTCFullYear(),
			month || shDate.getUTCMonth() + 1,
			day || shDate.getUTCDate()
		);
		return Date.UTC(
			UTC[0],
			UTC[1] - 1,
			UTC[2],
			hour || date.getUTCHours(),
			minute || date.getUTCMinutes(),
			second || date.getUTCSeconds(),
			millisecond || date.getUTCMilliseconds()
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
	setFullYear(year, month = false, date = false) {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			year || this.getFullYear(),
			month || this.getMonth() + 1,
			date || this.getDate()
		);
		this.#date.setFullYear(gmonth - 1, gdate, gyear);
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
	setUTCFullYear(year, month = false, date = false) {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			year || this.getUTCFullYear(),
			month || this.getUTCMonth() + 1,
			date || this.getUTCDate()
		);
		this.#date.setUTCFullYear(gmonth - 1, gdate, gyear);
		return this;
	}

	/**
	 * Sets the month value in the Date object using local time.
	 * @param {number} month — A numeric value equal to the month. The value for January is 0, and other month values follow * consecutively.
	 * @param {number} date — A numeric value representing the day of the month. If this value is not supplied, the value from a * call to the getDate method is used.
	 * @return {object} SHDate
	 * @since 1.0.0
	 */
	setMonth(month, date = false) {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getFullYear(),
			month || this.getMonth() + 1,
			date || this.getDate()
		);
		this.#date.setMonth(gmonth - 1, gdate);
		return this;
	}

	/**
	 * Sets the month value in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} month — A numeric value equal to the month. The value for January is 0, and other month values follow * consecutively.
	 * @param {number} date — A numeric value representing the day of the month. If it is not supplied, the value from a call to  the getUTCDate method is used.
	 * @return {object} SHDate
	 * @since 1.0.0
	 */
	setUTCMonth(month, date = false) {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getUTCFullYear(),
			month || this.getUTCMonth() + 1,
			date || this.getUTCDate()
		);
		this.#date.setUTCMonth(gmonth - 1, gdate);
		return this;
	}

	/**
	 * Sets the numeric day-of-the-month value of the Date object using local time.
	 * @param {number} date — A numeric value equal to the day of the month.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	setDate(date) {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getFullYear(),
			this.getMonth() + 1,
			date || this.getDate()
		);
		this.#date.setDate(gdate);
		return this;
	}

	/**
	 * 	Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} date — A numeric value equal to the day of the month.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	setUTCDate(date) {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getUTCFullYear(),
			this.getUTCMonth() + 1,
			date || this.getDate()
		);
		this.#date.setUTCDate(gdate);
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
	setHours(hours, minutes = false, seconds = false, milliSeconds = false) {
		this.#date.setHours(
			hours,
			minutes || this.getMinutes(),
			seconds || this.getSeconds(),
			milliSeconds || this.getMilliseconds()
		);
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
	setUTCHours(hours, minutes = false, seconds = false, milliSeconds = false) {
		this.#date.setUTCHours(
			hours,
			minutes || this.getUTCMinutes(),
			seconds || this.getUTCSeconds(),
			milliSeconds || this.getUTCMilliseconds()
		);
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
	setMinutes(minutes, seconds = false, milliSeconds = false) {
		this.#date.setMinutes(
			minutes,
			seconds || this.getSeconds(),
			milliSeconds || this.getMilliseconds()
		);
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
	setUTCMinutes(minutes, seconds = false, milliSeconds = false) {
		this.#date.setUTCMinutes(
			minutes,
			seconds || this.getUTCSeconds(true),
			milliSeconds || this.getUTCMilliseconds(true)
		);
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
	setSeconds(seconds, milliSeconds = false) {
		this.#date.setSeconds(seconds, milliSeconds || this.getMilliseconds());
		return this;
	}

	/**
	 * 	Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} sec — A numeric value equal to the seconds value.
	 * @param {number} ms — A numeric value equal to the milliseconds value.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	setUTCSeconds(seconds, milliSeconds = false) {
		this.#date.setUTCSeconds(
			seconds,
			milliSeconds || this.getUTCMilliseconds()
		);
		return this;
	}

	/**
	 * 	Sets the milliseconds value in the Date object using local time.
	 * @param {number} ms — A number between 0 and 999, representing the milliseconds.
	 * @returns {object} SHDate
	 * @since 1.0.0
	 */
	setMilliseconds(ms) {
		this.#date.setMilliseconds(ms);
		return this;
	}

	/**
	 * 	Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
	 * @param {number} ms — A number between 0 and 999, representing the milliseconds.
	 * @returns {object} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
	 * @since 1.0.0
	 */
	setUTCMilliseconds(ms) {
		this.#date.setUTCMilliseconds(ms);
		return this;
	}

	/**
	 * Gets the year, using local time.
	 * @returns {number} The year.
	 * @since 1.0.0
	 */
	getFullYear() {
		this.#UpDate();
		return this.#shDate[0];
	}

	/**
	 * Gets the year using Universal Coordinated Time (UTC).
	 * @returns {number} The year.
	 * @since 1.0.0
	 *
	 */
	getUTCFullYear() {
		this.#UpDate(true);
		return this.shDateUTC[0];
	}

	/**
	 * Gets the month, using local time.
	 * @returns {number} The month (0-11)
	 * @since 1.0.0
	 */
	getMonth() {
		this.#UpDate();
		return this.#shDate[1] - 1;
	}

	/**
	 * Gets the month of a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The month (0-11) in the Date object using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	getUTCMonth() {
		this.#UpDate(true);
		return this.shDateUTC[1] - 1;
	}

	/**
	 * Gets the day-of-the-month, using local time.
	 * @returns {number} The day-of-the-month, using local time.
	 * @since 1.0.0
	 */
	getDate() {
		this.#UpDate();
		return this.#shDate[2];
	}

	/**
	 * Gets the day-of-the-month, using Universal Coordinated Time (UTC).
	 * @returns {number} The day-of-the-month, using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	getUTCDate() {
		this.#UpDate(true);
		return this.shDateUTC[2];
	}

	/**
	 * Gets the hours in a date, using local time.
	 * @returns {number} The hours (from 0 to 23)
	 * @since 1.0.0
	 */
	getHours() {
		return this.#date.getHours();
	}

	/**
	 * Gets the hours value in a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The hours (from 0 to 23)
	 * @since 1.0.0
	 */
	getUTCHours() {
		return this.#date.getUTCHours();
	}

	/**
	 * Gets the minutes of a Date object, using local time.
	 * @returns {number} The minutes value in the Date object.
	 * @since 1.0.0
	 */
	getMinutes() {
		return this.#date.getMinutes();
	}

	/**
	 * Gets the minutes of a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The minutes of the Date object using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	getUTCMinutes() {
		return this.#date.getUTCMinutes();
	}

	/**
	 * Gets the seconds of a Date object, using local time.
	 * @returns {number} The seconds of the Date object.
	 * @since 1.0.0
	 */
	getSeconds() {
		return this.#date.getSeconds();
	}

	/**
	 * Gets the seconds of a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The seconds value in a Date object using Universal Coordinated Time (UTC).
	 * @since 1.0.0
	 */
	getUTCSeconds() {
		return this.#date.getUTCSeconds();
	}

	/**
	 * Gets the milliseconds of a Date, using local time.
	 * @returns {number} The return value ranges from 0 to 999.
	 * @since 1.0.0
	 */
	getMilliseconds() {
		return this.#date.getMilliseconds();
	}

	/**
	 * Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).
	 * @returns {number} The return value ranges from 0 to 999.
	 * @since 1.0.0
	 */
	getUTCMilliseconds() {
		return this.#date.getUTCMilliseconds();
	}

	/**
	 * Gets the day-of-the-week in a Date object, using local time.
	 * @returns {number} 0 for satarday , 1 for Sunday, and so on.
	 * @since 1.0.0
	 */
	getDay() {
		return (
			this.#DayOfWeek(this.getFullYear(), this.getMonth() + 1, this.getDate()) -
			1
		);
	}

	/**
	 * Gets the day-of-the-week in a Date object, using Universal Coordinated Time (UTC).
	 * @returns {number} 0 for satarday , 1 for Sunday, and so on.
	 * @since 1.0.0
	 */
	getUTCDay() {
		return (
			this.#DayOfWeek(
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
	getTimezoneOffset() {
		return this.#date.getTimezoneOffset();
	}

	/**
	 * Sets the date and time value in the Date object.
	 * @param {number} time — A numeric value representing the number of elapsed milliseconds since midnight, 11 Dey 1348 GMT.
	 * @returns {object} The Date object.
	 */
	setTime(time) {
		//if (isUTC) return this.#date.setUTCTime(time);
		return this.#date.setTime(time);
	}

	/**
	 * Gets the time value in milliseconds.
	 * @returns {number}
	 */
	getTime() {
		//if (isUTC) return this.#date.getUTCTime();
		return this.#date.getTime();
	}

	/**
	 * Returns the stored time value in milliseconds since midnight, 11 Dey 1348 UTC.
	 * @returns {number}
	 */
	valueOf() {
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
	checkDate(year, month, date) {
		return !(
			year < 1 ||
			year > 1700 /* 3,500,000 */ ||
			month < 1 ||
			month > 12 ||
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
	checkTime(hours, minutes, seconds) {
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
	checkWeek(year, week, day) {
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
	toString() {
		const [dsn, msn] = this.format("dsn=msn");
		return `${dsn} ${this.getDate()} ${msn} ${this.getFullYear()} ${this.toTimeString()}`;
	}

	/**
	 * Returns a time as a string value..
	 * @returns {string} A string representation of a function.
	 * @since 1.0.0
	 */
	toTimeString() {
		return this.#date.toTimeString();
	}

	/**
	 * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, 11 Dey 1348.
	 * @param {string} s — A date string
	 * @returns {number} The number of milliseconds between that date and midnight, 11 Dey 1348.
	 * @since x.y.z
	 * https://gitcode.net/openthos/gecko-dev/-/blob/GECKO120_2012041106_RELBRANCH/js/src/jsdate.cpp#L911
	 */
	static parse(s) {
		return Date.parse(s); // TODO: implement
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
	[Symbol.toPrimitive](hint) {
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
	toLocaleTimeString(locales, options) {
		return this.#date.toLocaleTimeString(locales, options);
	}
	/**
	 *
		toLocaleDateString(locales?, options?)

		toLocaleString(locales?, options?)




		toUTCString()
		toISOString()

		toDateString()




	*/
}

/**
 * Convert a number to Persian digit
 * @param {string} str The string to be converted to Persian digits.
 * @param {boolean} con If true, convert to persian digits.
 * @param {boolean} dec If true, convert to persian digits.
 * @returns {string} The converted string.
 * @since 1.0.0
 */
const NumsTo = (str, con = "FA", dec = false) => {
	dec = dec || ",";
	EN = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".");
	FA = new Array("۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", dec);
	FA2 = new Array("٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", dec);
	con = con || "FA";
	for (lang in ["EN", "FA", "FA2"]) {
		if (con == lang) continue;
		str = str_replace(lang, con, str);
	}
	return str;
};

export { NumsTo };
export default SHDate;
