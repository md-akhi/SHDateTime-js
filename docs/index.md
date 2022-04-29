# SHDate

JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

Note: TC39 is working on Temporal, a new Date/Time API. Read more about it on the Igalia blog. It is not yet ready for production use!

# Description

### The ECMAScript epoch and timestamps

A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since the ECMAScript epoch, which is defined as 11 Dey 1348, UTC (equivalent to the UNIX epoch).

Note: It's important to keep in mind that while the time value at the heart of a Date object is UTC, the basic methods to fetch the date and time or its components all work in the local (i.e. host system) time zone and offset.

It should be noted that the maximum Date is not of the same value as the maximum safe integer (Number.MAX_SAFE_INTEGER is 9,007,199,254,740,991). Instead, it is defined in ECMA-262 that a maximum of ±100,000,000 (one hundred million) days relative to 11 Dey 1348 UTC (that is, April 20, 271821 BCE ~ September 13, 275760 CE) can be represented by the standard Date object (equivalent to ±8,640,000,000,000,000 milliseconds).

### Date format and time zone conversions

There are several methods available to obtain a date in various formats, as well as to perform time zone conversions. Particularly useful are the functions that output the date and time in Coordinated Universal Time (UTC), the global standard time defined by the World Time Standard. (This time is historically known as Greenwich Mean Time, as UTC lies along the meridian that includes London—and nearby Greenwich—in the United Kingdom.) The user's device provides the local time.

In addition to methods to read and alter individual components of the local date and time (such as getDay() and setHours()), there are also versions of the same methods that read and manipulate the date and time using UTC (such as getUTCDay() and setUTCHours()).

# Constructor

```javascript
SHDate();
```

When called as a function, returns a string representation of the current date and time, exactly as ` new SHDate().toString()` does.

```javascript
new SHDate();
```

When called as a constructor, returns a `new SHDate` object.

# Static methods

```javascript
SHDate.now();
```

Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since 11 Dey 1348 00:00:00 UTC, with leap seconds ignored.

```javascript
SHDate.parse(); // Not Impl
```

Parses a string representation of a date and returns the number of milliseconds since 11 Dey 1348, 00:00:00 UTC, with leap seconds ignored.

    Note: Parsing of strings with `SHDate.parse` is strongly discouraged due to browser differences and inconsistencies.

```javascript
SHDate.UTC();
```

Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since 11 Dey 1348, 00:00:00 UTC, with leap seconds ignored.

# Instance methods

```javascript
SHDate.getDate();
```

Returns the day of the month (1–31) for the specified date according to local time.

```javascript
SHDate.getDay();
```

Returns the day of the week (0–6) for the specified date according to local time.

```javascript
SHDate.getFullYear();
```

Returns the year (4 digits for 4-digit years) of the specified date according to local time.

```javascript
SHDate.getHours();
```

Returns the hour (0–23) in the specified date according to local time.

```javascript
SHDate.getMilliseconds();
```

Returns the milliseconds (0–999) in the specified date according to local time.

```javascript
SHDate.getMinutes();
```

Returns the minutes (0–59) in the specified date according to local time.

```javascript
SHDate.getMonth();
```

Returns the month (0–11) in the specified date according to local time.

```javascript
SHDate.getSeconds();
```

Returns the seconds (0–59) in the specified date according to local time.

```javascript
SHDate.getTime();
```

Returns the numeric value of the specified date as the number of milliseconds since 11 Dey 1348, 00:00:00 UTC. (Negative values are returned for prior times.)

```javascript
SHDate.getTimezoneOffset();
```

Returns the time-zone offset in minutes for the current locale.

```javascript
SHDate.getUTCDate();
```

Returns the day (date) of the month (1–31) in the specified date according to universal time.

```javascript
SHDate.getUTCDay();
```

Returns the day of the week (0–6) in the specified date according to universal time.

```javascript
SHDate.getUTCFullYear();
```

Returns the year (4 digits for 4-digit years) in the specified date according to universal time.

```javascript
SHDate.getUTCHours();
```

Returns the hours (0–23) in the specified date according to universal time.

```javascript
SHDate.getUTCMilliseconds();
```

Returns the milliseconds (0–999) in the specified date according to universal time.

```javascript
SHDate.getUTCMinutes();
```

Returns the minutes (0–59) in the specified date according to universal time.

```javascript
SHDate.getUTCMonth();
```

Returns the month (0–11) in the specified date according to universal time.

```javascript
SHDate.getUTCSeconds();
```

Returns the seconds (0–59) in the specified date according to universal time.

```javascript
SHDate.setDate();
```

Sets the day of the month for a specified date according to local time.

```javascript
SHDate.setFullYear();
```

Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.

```javascript
SHDate.setHours();
```

Sets the hours for a specified date according to local time.

```javascript
SHDate.setMilliseconds();
```

Sets the milliseconds for a specified date according to local time.

```javascript
SHDate.setMinutes();
```

Sets the minutes for a specified date according to local time.

```javascript
SHDate.setMonth();
```

Sets the month for a specified date according to local time.

```javascript
SHDate.setSeconds();
```

Sets the seconds for a specified date according to local time.

```javascript
SHDate.setTime();
```

Sets the SHDate object to the time represented by a number of milliseconds since 11 Dey 1348, 00:00:00 UTC. Use negative numbers for times prior.

```javascript
SHDate.setUTCDate();
```

Sets the day of the month for a specified date according to universal time.

```javascript
SHDate.setUTCFullYear();
```

Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.

```javascript
SHDate.setUTCHours();
```

Sets the hour for a specified date according to universal time.

```javascript
SHDate.setUTCMilliseconds();
```

Sets the milliseconds for a specified date according to universal time.

```javascript
SHDate.setUTCMinutes();
```

Sets the minutes for a specified date according to universal time.

```javascript
SHDate.setUTCMonth();
```

Sets the month for a specified date according to universal time.

```javascript
SHDate.setUTCSeconds();
```

Sets the seconds for a specified date according to universal time.

```javascript
SHDate.toDateString();
```

Returns the "date" portion of the SHDate as a human-readable string like 'Thu Apr 12 2018'.

```javascript
SHDate.toISOString();
```

Converts a date to a string following the ISO 8601 Extended Format.

```javascript
SHDate.toJSON();
```

Returns a string representing the SHDate using `toISOString()`. Intended for use by `JSON.stringify()`.

```javascript
SHDate.toGMTString();
```

Returns a string representing the SHDate based on the GMT (UTC) time zone. Use `toUTCString()` instead.

```javascript
SHDate.toLocaleDateString();
```

Returns a string with a locality sensitive representation of the date portion of this date based on system settings.

```javascript
SHDate.toLocaleString();
```

Returns a string with a locality-sensitive representation of this date. Overrides the `Object.toLocaleString()` method.

```javascript
SHDate.toLocaleTimeString();
```

Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.

```javascript
SHDate.toString();
```

Returns a string representing the specified SHDate object. Overrides the `Object.toString()` method.

```javascript
SHDate.toTimeString();
```

Returns the "time" portion of the SHDate as a human-readable string.

```javascript
SHDate.toUTCString();
```

Converts a date to a string using the UTC timezone.

```javascript
SHDate.valueOf();
```

Returns the primitive value of a Date object. Overrides the `Object.valueOf()` method.

# Examples

Several ways to create a Date object
The following examples show several ways to create JavaScript dates:

    Note: Parsing of date strings with the Date constructor (and SHDate.parse, they are equivalent) is strongly discouraged due to browser differences and inconsistencies.

```js
let today = new SHDate();
// let birthday = new SHDate("26 Azar, 1374 03:24:00");
// let birthday = new SHDate("1374-08-26T03:24:00");
let birthday = new SHDate(1374, 8, 26); // the month is 0-indexed
let birthday = new SHDate(1374, 8, 26, 3, 24, 0);
let birthday = new SHDate(628021800000); // passing epoch timestamp
```

To get Date, Month and Year or Time

```js
const date = new SHDate();
const [month, day, year] = [
	date.getMonth(),
	date.getDate(),
	date.getFullYear()
];
const [hour, minutes, seconds] = [
	date.getHours(),
	date.getMinutes(),
	date.getSeconds()
];
```

Interpretation of two-digit years
`new SHDate()` exhibits legacy undesirable, inconsistent behavior with two-digit year values; specifically, when a n`ew SHDate()` call is given a two-digit year value, that year value does not get treated as a literal year and used as-is but instead gets interpreted as a relative offset — in some cases as an offset from the year 1900, but in other cases, as an offset from the year 2000.

```js
let date = new SHDate(1376, 11); // Sun 01 Esf 1376 00:00:00 GMT+0000 (GMT)
let date = new SHDate(1370, 11); // Wed 01 Esf 1370 00:00:00 GMT+0000 (GMT)
let date = new SHDate("1400/12/10"); // Tue 10 Esf 1400 00:00:00 GMT+0000 (GMT)

// Legacy method; always interprets two-digit year values as relative to 1900
date.setFullYear(1376);
date.toString(); // Sun 01 Esf 1376 00:00:00 GMT+0000 (GMT)
date.setFullYear(1300);
date.toString(); // Wed 01 Esf 1300 00:00:00 GMT+0000 (GMT)
```

So, to create and get dates between the years 0 and 99, instead use the preferred setFullYear() and getFullYear() methods:.

```js
// Preferred method; never interprets any value as being a relative offset,
// but instead uses the year value as-is
date.setFullYear(98);
date.getFullYear(); // 98 (not 1398)
date.setFullYear(22);
date.getFullYear(); // 22 (not 1322, not 1422)
```

Calculating elapsed time
The following examples show how to determine the elapsed time between two JavaScript dates in milliseconds.

Due to the differing lengths of days (due to daylight saving changeover), months, and years, expressing elapsed time in units greater than hours, minutes, and seconds requires addressing a number of issues, and should be thoroughly researched before being attempted.

```js
// Using Date objects
let start = SHDate.now();

// The event to time goes here:
doSomethingForALongTime();
let end = SHDate.now();
let elapsed = end - start; // elapsed time in milliseconds

// Using built-in methods
let start = new SHDate();

// The event to time goes here:
doSomethingForALongTime();
let end = new SHDate();
let elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds

// To test a function and get back its return
function printElapsedTime(fTest) {
	let nStartTime = SHDate.now(),
		vReturn = fTest(),
		nEndTime = SHDate.now();

	console.log(`Elapsed time: ${String(nEndTime - nStartTime)} milliseconds`);
	return vReturn;
}

let yourFunctionReturn = printElapsedTime(yourFunction);
```

Note: In browsers that support the Web Performance API's high-resolution time feature, Performance.now() can provide more reliable and precise measurements of elapsed time than SHDate.now().

Get the number of seconds since the ECMAScript Epoch

```js
let seconds = Math.floor(SHDate.now() / 1000);
```

In this case, it's important to return only an integer—so a simple division won't do. It's also important to only return actually elapsed seconds. (That's why this code uses Math.floor(), and not Math.round().)

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
