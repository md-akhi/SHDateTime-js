/**
 * In The Name Of God
 * @package SHDate
 * @author   Mohammad Amanalikhani
 * @link    http://md-akhi.github.io | http://md.akhi.ir
 * @copyright   Copyright (C) 2015 - 2021 Open Source Matters,Inc. All right reserved.
 * @license https://www.gnu.org/licenses/agpl-3.0.en.html AGPL-3.0 License
 * @version Release: 1.0.0
 */
class SHWord {}

class SHDate {
	#shDate;
	#shDateUTC;
	#date;
	#now;
	#utc;
	constructor() {
		if (!this) {
			return new SHDate(arguments).toString();
		}
		this.#date = new Date();
		this.#now = Date.now();
		this.#utc = Date.UTC(this.#date.getUTCFullYear());
		this.#Update();
		if (typeof arguments[0] == "number" && arguments.length == 1) {
			// value
			if (arguments[0].length == 4) {
				this.setFullYear(arguments[0]);
			} else if (arguments[0].length == 2) {
				//this.setYear(arguments[0]);
			} else this.setTime(arguments[0]);
		} else if (typeof arguments[0] == "number" && arguments.length >= 1) {
			// value
			this.setFullYear(arguments[0] ?? this.getFullYear());
			this.setMonth(arguments[1] ?? this.getMonth());
			this.setDate(arguments[2] ?? this.getDate());
			this.setHours(arguments[3] ?? this.getHours());
			this.setMinutes(arguments[4] ?? this.getMinutes());
			this.setSeconds(arguments[5] ?? this.getSeconds());
			this.setMilliseconds(arguments[6] ?? this.getMilliseconds());
		} else if (typeof arguments[0] == "string" && arguments.length == 1) {
			// dateString
			throw new Error("Not Implemented dateString");
		}
		console.log(this);
	}

	#Update(isUTC = false) {
		if (
			parseInt(this.getTime() / 1000) != parseInt(this.#date.getTime() / 1000)
		) {
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
		return;
	}

	#GregorianToSolar(gyear, gmonth, gdate, julian) {
		let doy, year, month, date, dim;
		// if(julian&&(gyear<=1581||(gyear==1582&&gmonth<=10&&gdate<15)))
		// list(gmonth,gdate,gyear)=explode('/', jdtogregorian(juliantojd(gmonth,gdate,gyear)));
		doy =
			(gyear - 1) * 365 +
			([0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][gmonth] +
				gdate) -
			226745 + //226745 = 621*365+80
			Math.abs(this.#GIsLeap(gyear, 1) - this.#IsLeap(gyear - 621, 1));
		if (this.#GIsLeap(gyear) && gmonth > 2) doy++;
		year = parseInt(doy / 365) + 1;
		date = doy % 365;
		const jleap = this.#IsLeap(year);
		if (gmonth < 4 && jleap && year == gyear - 622) date++;
		const jmn = [0, 31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, jleap + 29];
		for (let i in jmn) {
			(month = i), (dim = jmn[i]);
			if (date <= dim) break;
			date -= dim;
		}
		if (date == 0) {
			year--;
			month = 12;
			date = this.#IsLeap(year) + 29;
		}
		return [parseInt(year), parseInt(month), parseInt(date)];
	}

	#SolarToGregorian(year, month, date, julian) {
		let gdoy, gyear, gmonth, gdate, dim;
		gdoy =
			(year - 1) * 365 +
			this.#DayOfYear(month, date, year) +
			1 +
			226745 /*621*365+80*/ -
			Math.abs(this.#GIsLeap(year + 621, 1) - this.#IsLeap(year, 1));
		gyear = parseInt(gdoy / 365) + 1;
		gdate = gdoy % 365;
		const prev_gleap = this.#GIsLeap(gyear - 1);
		const jleap = this.#IsLeap(year);
		if (
			(prev_gleap && gyear == year + 622) ||
			(jleap && prev_gleap && month > 11)
		)
			gdate--;
		const gmn = [
			0,
			31,
			this.#GIsLeap(gyear) + 28,
			31,
			30,
			31,
			30,
			31,
			31,
			30,
			31,
			30,
			31,
		];
		for (let i in gmn) {
			(gmonth = i), (dim = gmn[i]);
			if (gdate <= dim) break;
			gdate -= dim;
		}
		if (gdate == -1) {
			gyear--;
			gmonth = 12;
			gdate = 30;
		} else if (gdate == 0) {
			gyear--;
			gmonth = 12;
			gdate = 31;
		}
		// if(julian&&(gyear<=1581||(gyear==1582&&gmonth<=10&&gdate<15)))
		// list(gmonth,gdate,gyear)=explode('/', jdtojulian(gregoriantojd(gmonth,gdate,gyear)));
		return [parseInt(gyear), parseInt(gmonth), parseInt(gdate)];
	}

	#IsLeap(year, all) {
		return all
			? parseInt((year += 1128) * 365.2422) - parseInt(--year * 365.2422) - 365
			: Math.ceil((year += 1127) * 365.2422 - year * 365) - 274;
	}

	#GIsLeap(gyear, all) {
		return all
			? gyear % 4 == 0 && !(gyear % 100 == 0 && gyear % 400 != 0)
			: Math.ceil(
					parseInt(--gyear / 4) - parseInt(gyear / 100) + parseInt(gyear / 400)
			  ) - 150;
	}

	#DayOfWeek(year, month, date) {
		return (
			((1127 + year) * 365.2422 + this.#DayOfYear(month, date, year) - 3) % 7
		);
	}

	#DayOfYear(month, date, year) {
		return (
			((month < 7 ? (month - 1) * 31 : (month - 7) * 30 + 186) + --date) %
			(this.#DaysInYear(year) - 1)
		);
	}

	#WeekOfYear(year, month, date) {
		var iw, iy;
		/* Find if Y M D falls in YearNumber --Y, WeekNumber 52 or 53 */
		if (
			(doy = this.#DayOfYear(month, date, year) + 1) <=
				8 - (far1weekday = this.#DayOfWeek(year, 1, 1) + 1) &&
			far1weekday > 4
		)
			return [
				(iw =
					far1weekday == 5 || (far1weekday == 6 && this.#IsLeap((iy = --year)))
						? 53
						: 52),
				iy,
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

	#DaysInMonth(year, month) {
		month < 7 ? 31 : month < 12 ? 30 : this.#IsLeap(year) + 29;
	}

	#DaysInYear(year) {
		this.#IsLeap(year) + 365;
	}

	now() {
		return Date.now();
	}
	UTC(
		year,
		month = false,
		day = false,
		hour = false,
		minute = false,
		second = false,
		millisecond = false
	) {
		let shDate = new SHDate();
		let date = new Date();
		const UTC = this.#SolarToGregorian(
			year ?? shDate.getUTCFullYear(),
			month ?? shDate.getUTCMonth() + 1,
			day ?? shDate.getUTCDate()
		);
		console.log(
			shDate.getUTCFullYear(),
			shDate.getUTCMonth() + 1,
			shDate.getUTCDate(),
			UTC,
			date.getUTCFullYear(),
			date.getUTCMonth() + 1,
			date.getUTCDate()
		);
		return Date.UTC(
			UTC[0],
			UTC[1] - 1,
			UTC[2],
			hour ?? date.getUTCHours(),
			minute ?? date.getUTCMinutes(),
			second ?? date.getUTCSeconds(),
			millisecond ?? date.getUTCMilliseconds()
		);
	}

	setFullYear(year, month = false, date = false) {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			year ?? this.getFullYear(),
			month ?? this.getMonth(),
			date ?? this.getDate()
		);
		return this.#date.setFullYear(gmonth - 1, gdate, gyear);
	}
	setUTCFullYear(year, month = false, date = false) {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			year ?? this.getUTCFullYear(),
			month ?? this.getUTCMonth(),
			date ?? this.getUTCDate()
		);
		return this.#date.setUTCFullYear(gmonth - 1, gdate, gyear);
	}
	setMonth(month, date = false) {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getFullYear(),
			month ?? this.getMonth(),
			date ?? this.getDate()
		);
		return this.#date.setMonth(gmonth - 1, gdate);
	}
	setUTCMonth(month, date = false) {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getUTCFullYear(),
			month ?? this.getUTCMonth(),
			date ?? this.getUTCDate()
		);
		return this.#date.setUTCMonth(gmonth - 1, gdate);
	}
	setDate(date) {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getFullYear(),
			this.getMonth(),
			date ?? this.getDate()
		);
		return this.#date.setDate(gdate);
	}
	setUTCDate(date) {
		const [gyear, gmonth, gdate] = this.#SolarToGregorian(
			this.getUTCFullYear(),
			this.getUTCMonth(),
			date ?? this.getDate()
		);
		return this.#date.setUTCDate(gdate);
	}
	setHours(hours, minutes = false, seconds = false, milliSeconds = false) {
		return this.#date.setHours(
			hours,
			minutes ?? this.getMinutes(),
			seconds ?? this.getSeconds(),
			milliSeconds ?? this.getMilliseconds()
		);
	}
	setUTCHours(hours, minutes = false, seconds = false, milliSeconds = false) {
		return this.#date.setUTCHours(
			hours,
			minutes ?? this.getUTCMinutes(),
			seconds ?? this.getUTCSeconds(),
			milliSeconds ?? this.getUTCMilliseconds()
		);
	}
	setMinutes(minutes, seconds = false, milliSeconds = false) {
		return this.#date.setMinutes(
			minutes,
			seconds ?? this.getSeconds(),
			milliSeconds ?? this.getMilliseconds()
		);
	}
	setUTCMinutes(minutes, seconds = false, milliSeconds = false) {
		return this.#date.setUTCMinutes(
			minutes,
			seconds ?? this.getUTCSeconds(true),
			milliSeconds ?? this.getUTCMilliseconds(true)
		);
	}
	setSeconds(seconds, milliSeconds = false) {
		return this.#date.setSeconds(
			seconds,
			milliSeconds ?? this.getMilliseconds()
		);
	}
	setUTCSeconds(seconds, milliSeconds = false) {
		return this.#date.setUTCSeconds(
			seconds,
			milliSeconds ?? this.getUTCMilliseconds()
		);
	}
	setMilliseconds(milliSeconds) {
		return this.#date.setMilliseconds(milliSeconds);
	}
	setUTCMilliseconds(milliSeconds) {
		return this.#date.setUTCMilliseconds(milliSeconds);
	}
	getFullYear() {
		this.#Update();
		return this.#shDate[0];
	}
	getUTCFullYear() {
		this.#Update(true);
		return this.shDateUTC[0];
	}
	getMonth() {
		this.#Update(this);
		return this.#shDate[1];
	}
	getUTCMonth() {
		this.#Update(true);
		return this.shDateUTC[1];
	}
	getDate() {
		this.#Update(this);
		return this.#shDate[2];
	}
	getUTCDate() {
		this.#Update(true);
		return this.shDateUTC[2];
	}
	getHours() {
		return this.#date.getHours();
	}
	getUTCHours() {
		return this.#date.getUTCHours();
	}
	getMinutes() {
		return this.#date.getMinutes();
	}
	getUTCMinutes() {
		return this.#date.getUTCMinutes();
	}
	getSeconds() {
		return this.#date.getSeconds();
	}
	getUTCSeconds() {
		return this.#date.getUTCSeconds();
	}
	getMilliseconds() {
		return this.#date.getMilliseconds();
	}
	getUTCMilliseconds() {
		return this.#date.getUTCMilliseconds();
	}
	getDay() {
		return this.#DayOfWeek(this.getFullYear(), this.getMonth(), this.getDate());
	}
	getUTCDay() {
		return this.#DayOfWeek(
			this.getFullYear(true),
			this.getMonth(true),
			this.getDate(true)
		);
	}
	getTimezoneOffset() {
		return this.#date.getTimezoneOffset();
	}
	setTime(time) {
		//if (isUTC) return this.#date.setUTCTime(time);
		return this.#date.setTime(time);
	}
	getTime() {
		//if (isUTC) return this.#date.getUTCTime();
		return this.#date.getTime();
	}
	valueOf() {
		return this.getTime();
	}
	checkDate(year, month, date) {
		return !(
			year < 1 ||
			year > 1700 /*3500000  3,500,000 */ ||
			month < 1 ||
			month > 12 ||
			date < 1 ||
			date > this.#DaysInMonth(year, month)
		);
	}
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
	toString() {
		return "Date.toString()";
	}
	parse() {
		return "Date.parse()";
	}
	/* // get timestamp in linux format
	toString: function(format, convertDigit) {
		var ret = (!!format && format !== null) ? jdate._format(format + '', this.jdate) : jdate._format('yyyy-MM-dd HH:mm:ss.l Z', this.jdate);
		return (!!convertDigit && convertDigit !== null) ? ret.toFaDigit() : ret;
	} */
}

const NumsTo = (str, con = "FA", dec = false) => {
	dec = dec || ",";
	EN = array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".");
	FA = array("۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", dec);
	FA2 = array("٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", dec);
	con = con || "FA";
	for (lang in ["EN", "FA", "FA2"]) {
		if (con == lang) continue;
		str = str_replace(lang, con, str);
	}
	return str;
};

export { NumsTo };
export default SHDate;
