/**
 * In The Name Of God
 * @package SHDate
 * @author   Mohammad Amanalikhani
 * @link    http://md-akhi.github.io | http://md.akhi.ir
 * @copyright   Copyright (C) 2015 - 2021 Open Source Matters,Inc. All right reserved.
 * @license https://www.gnu.org/licenses/agpl-3.0.en.html AGPL-3.0 License
 * @version Release: 1.0.0
 */

export default (() => {
	function SHDate() {
		if (!this) {
			let date = new SHDate(arguments);
			return date.toString();
		}
		this.date = new Date();
		Update(this);
		UpdateUTC(this);
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

		this.now = Now();
		// setter
		this.setFullYear = FullYearSet.bind(this);
		this.setMonth = MonthSet.bind(this);
		this.setDate = DateSet.bind(this);
		this.setHours = HoursSet.bind(this);
		this.setMinutes = MinutesSet.bind(this);
		this.setSeconds = SecondsSet.bind(this);
		this.setMilliseconds = MillisecondsSet.bind(this);
		this.setTime = TimeSet.bind(this);
		//getter
		this.getFullYear = FullYearGet.bind(this);
		this.getMonth = MonthGet.bind(this);
		this.getDate = DateGet.bind(this);
		this.getHours = HoursGet.bind(this);
		this.getMinutes = MinutesGet.bind(this);
		this.getSeconds = SecondsGet.bind(this);
		this.getMilliseconds = MillisecondsGet.bind(this);
		this.getTime = TimeGet.bind(this);
		this.getTimezoneOffset = TimezoneOffsetGet.bind(this);

		// UTC
		this.UTC = UTC();
		// setter UTC
		this.setUTCFullYear = FullYearUTCSet.bind(this);
		this.setUTCMonth = MonthUTCSet.bind(this);
		this.setUTCDate = DateUTCSet.bind(this);
		this.setUTCHours = HoursUTCSet.bind(this);
		this.setUTCMinutes = MinutesUTCSet.bind(this);
		this.setUTCSeconds = SecondsUTCSet.bind(this);
		this.setUTCMilliseconds = MillisecondsUTCSet.bind(this);
		this.setUTCTime = TimeUTCSet.bind(this);
		// getter UTC
		this.getUTCFullYear = FullYearUTCGet.bind(this);
		this.getUTCMonth = MonthUTCGet.bind(this);
		this.getUTCDate = DateUTCGet.bind(this);
		this.getUTCHours = HoursUTCGet.bind(this);
		this.getUTCMinutes = MinutesUTCGet.bind(this);
		this.getUTCSeconds = SecondsUTCGet.bind(this);
		this.getUTCMilliseconds = MillisecondsUTCGet.bind(this);
		this.getUTCTime = TimeUTCGet.bind(this);
	}

	function Update(tis) {
		tis.shDate = GregorianToSolar(
			tis.date.getFullYear(),
			tis.date.getMonth() + 1,
			tis.date.getDate()
		);
	}
	function UpdateUTC(tis) {
		tis.shDateUTC = GregorianToSolar(
			tis.date.getUTCFullYear(),
			tis.date.getUTCMonth() + 1,
			tis.date.getUTCDate()
		);
	}

	function FullYearSet(year, month, date) {
		const [gyear, gmonth, gdate] = SolarToGregorian(year, month, date);
		return this.date.setFullYear(gmonth - 1, gdate, gyear);
	}
	function MonthSet(month, date) {
		const [gyear, gmonth, gdate] = SolarToGregorian(
			this.getFullYear(),
			month,
			date
		);
		return this.date.setMonth(gmonth - 1, gdate);
	}
	function DateSet(date) {
		const [gyear, gmonth, gdate] = SolarToGregorian(
			this.getFullYear(),
			this.getMonth(),
			date
		);
		return this.date.setDate(gdate);
	}
	function FullYearGet() {
		if (this.date[0] == this.date.getFullYear()) return this.shDate[0];
		Update(this);
		return this.shDate[0];
	}
	function MonthGet() {
		if (this.date[1] == this.date.getMonth() + 1) return this.shDate[1];
		Update(this);
		return this.shDate[1];
	}
	function DateGet() {
		if (this.date[2] == this.date.getDate()) return this.shDate[2];
		Update(this);
		return this.shDate[2];
	}

	function HoursSet(hours, minutes, seconds, milliSeconds) {
		return this.date.setHours(hours, minutes, seconds, milliSeconds);
	}
	function MinutesSet(minutes, seconds, milliSeconds) {
		return this.date.setMinutes(minutes, seconds, milliSeconds);
	}
	function SecondsSet(seconds, milliSeconds) {
		return this.date.setSeconds(seconds, milliSeconds);
	}
	function MillisecondsSet(milliSeconds) {
		return this.date.setMilliseconds(milliSeconds);
	}
	function TimeSet(time) {
		return this.date.setTime(time);
	}
	function HoursGet() {
		return this.date.getHours();
	}
	function MinutesGet() {
		return this.date.getMinutes();
	}
	function SecondsGet() {
		return this.date.getSeconds();
	}
	function MillisecondsGet() {
		return this.date.getMilliseconds();
	}
	function TimeGet() {
		return this.date.getTime();
	}
	function TimezoneOffsetGet() {
		return this.date.getTimezoneOffset();
	}
	const Now = () => {
		return Date.now();
	};
	const UTC = (year, month, day, hour, minute, second, millisecond) => {
		return Date.UTC(year, month, day, hour, minute, second, millisecond);
	};

	SHDate.prototype = {
		setFullYear: (year, month = false, date = false) => {
			this.setFullYear(
				year ?? this.getFullYear(),
				month ?? this.getMonth(),
				date ?? this.getDate()
			);
			return this;
		},
		setMonth: (month, date = false) =>
			this.setMonth(month ?? this.getMonth(), date ?? this.getDate()),
		setDate: (date) => this.setDate(date ?? this.getDate()),
		setHours: (hours, minutes = false, seconds = false, milliSeconds = false) =>
			this.setHours(
				hours,
				minutes ?? this.getMinutes(),
				seconds ?? this.getSeconds(),
				milliSeconds ?? this.getMilliseconds()
			),
		setMinutes: (minutes, seconds = false, milliSeconds = false) =>
			this.setMinutes(
				minutes,
				seconds ?? this.getSeconds(),
				milliSeconds ?? this.getMilliseconds()
			),
		setSeconds: (seconds, milliSeconds = false) =>
			this.date.setSeconds(seconds, milliSeconds ?? this.getMilliseconds()),
		setMilliseconds: (milliSeconds) => this.date.setMilliseconds(milliSeconds),
		setTime: (time) => this.date.setTime(time),
		getFullYear: () => this.getFullYear(),
		getMonth: () => this.getMonth(),
		getDate: () => this.getDate(),
		getHours: () => this.getHours(),
		getMinutes: () => this.getMinutes(),
		getSeconds: () => this.getSeconds(),
		getMilliseconds: () => this.getMilliseconds(),
		getTime: () => this.getTime(),
		getTimezoneOffset: () => this.getTimezoneOffset(),
		getDay: () =>
			DayOfWeek(this.getFullYear(), this.getMonth(), this.getDate()),
		valueOf: () => this.getTime(),
		now: () => this.now(),
		UTC: () => this.UTC(),
		checkDate: (year, month, date) => CheckDate(year, month, date),
		checkTime: (hours, minutes, seconds) => CheckTime(hours, minutes, seconds),
		toString: () => "Date.toString()",
		/* // get timestamp in linux format
		toString: function(format, convertDigit) {
			var ret = (!!format && format !== null) ? jdate._format(format + '', this.jdate) : jdate._format('yyyy-MM-dd HH:mm:ss.l Z', this.jdate);
			return (!!convertDigit && convertDigit !== null) ? ret.toFaDigit() : ret;
		} */
	};
	SHDate.now = () => Date.now();

	function GregorianToSolar(gyear, gmonth, gdate, julian) {
		let doy, year, month, date, dim;
		// if(julian&&(gyear<=1581||(gyear==1582&&gmonth<=10&&gdate<15)))
		// list(gmonth,gdate,gyear)=explode('/', jdtogregorian(juliantojd(gmonth,gdate,gyear)));
		doy =
			(gyear - 1) * 365 +
			([0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][gmonth] +
				gdate) -
			226745 + //226745 = 621*365+80
			Math.abs(GIsLeap(gyear, 1) - IsLeap(gyear - 621, 1));
		if (GIsLeap(gyear) && gmonth > 2) doy++;
		year = parseInt(doy / 365) + 1;
		date = doy % 365;
		const jleap = IsLeap(year);
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
			date = IsLeap(year) + 29;
		}
		return [parseInt(year), parseInt(month), parseInt(date)];
	}

	function SolarToGregorian(year, month, date, julian) {
		let gdoy, gyear, gmonth, gdate, dim;
		gdoy =
			(year - 1) * 365 +
			DayOfYear(month, date, year) +
			1 +
			226745 /*621*365+80*/ -
			Math.abs(GIsLeap(year + 621, 1) - IsLeap(year, 1));
		gyear = parseInt(gdoy / 365) + 1;
		gdate = gdoy % 365;
		const prev_gleap = GIsLeap(gyear - 1);
		const jleap = IsLeap(year);
		if (
			(prev_gleap && gyear == year + 622) ||
			(jleap && prev_gleap && month > 11)
		)
			gdate--;
		gmn = [0, 31, GIsLeap(gyear) + 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
	function IsLeap(year, all) {
		return all
			? parseInt((year += 1128) * 365.2422) - parseInt(--year * 365.2422) - 365
			: Math.ceil((year += 1127) * 365.2422 - year * 365) - 274;
	}

	function GIsLeap(gyear, all) {
		return all
			? gyear % 4 == 0 && !(gyear % 100 == 0 && gyear % 400 != 0)
			: Math.ceil(
					parseInt(--gyear / 4) - parseInt(gyear / 100) + parseInt(gyear / 400)
			  ) - 150;
	}

	function DayOfWeek(year, month, date) {
		return ((1127 + year) * 365.2422 + DayOfYear(month, date, year) - 3) % 7;
	}

	function DayOfYear(month, date, year) {
		return (
			((month < 7 ? (month - 1) * 31 : (month - 7) * 30 + 186) + --date) %
			(DaysInYear(year) - 1)
		);
	}

	function WeekOfYear(year, month, date) {
		var iw, iy;
		/* Find if Y M D falls in YearNumber --Y, WeekNumber 52 or 53 */
		if (
			(doy = DayOfYear(month, date, year) + 1) <=
				8 - (far1weekday = DayOfWeek(year, 1, 1) + 1) &&
			far1weekday > 4
		)
			return [
				(iw =
					far1weekday == 5 || (far1weekday == 6 && IsLeap((iy = --year)))
						? 53
						: 52),
				iy,
			];
		/* Find if Y M D falls in YearNumber ++Y, WeekNumber 1 */
		if (
			365 - doy + IsLeap(year) <
			4 - (weekday = DayOfWeek(year, month, date) + 1)
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

	function DaysInMonth(year, month) {
		return month < 7 ? 31 : month < 12 ? 30 : IsLeap(year) + 29;
	}

	function DaysInYear(year) {
		return IsLeap(year) + 365;
	}
	function CheckDate(year, month, date) {
		return !(
			year < 1 ||
			year > 1700 /*3500000  3,500,000 */ ||
			month < 1 ||
			month > 12 ||
			date < 1 ||
			date > DaysInMonth(year, month)
		);
	}

	function CheckTime(h, i, s) {
		return !(h < 0 || h > 23 || i < 0 || i > 59 || s < 0 || s > 59);
	}

	return SHDate;
})();

function NumsTo(str, con = "FA", dec = false) {
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
}
export { NumsTo };
