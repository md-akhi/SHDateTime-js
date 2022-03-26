# Examples

Several ways to create a Date object
The following examples show several ways to create JavaScript dates:

    Note: Parsing of date strings with the Date constructor (and Date.parse, they are equivalent) is strongly discouraged due to browser differences and inconsistencies.

```js
let today = new Date();
let birthday = new Date("December 17, 1995 03:24:00");
let birthday = new Date("1995-12-17T03:24:00");
let birthday = new Date(1995, 11, 17); // the month is 0-indexed
let birthday = new Date(1995, 11, 17, 3, 24, 0);
let birthday = new Date(628021800000); // passing epoch timestamp
```

To get Date, Month and Year or Time

```js
const date = new Date();
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
`new Date()` exhibits legacy undesirable, inconsistent behavior with two-digit year values; specifically, when a n`ew Date()` call is given a two-digit year value, that year value does not get treated as a literal year and used as-is but instead gets interpreted as a relative offset — in some cases as an offset from the year 1900, but in other cases, as an offset from the year 2000.

```js
let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
let date = new Date(22, 1); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
let date = new Date("2/1/22"); // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// Legacy method; always interprets two-digit year values as relative to 1900
date.setYear(98);
date.toString(); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date.setYear(22);
date.toString(); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
```

So, to create and get dates between the years 0 and 99, instead use the preferred setFullYear() and getFullYear() methods:.

```js
// Preferred method; never interprets any value as being a relative offset,
// but instead uses the year value as-is
date.setFullYear(98);
date.getFullYear(); // 98 (not 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (not 1922, not 2022)
```

Calculating elapsed time
The following examples show how to determine the elapsed time between two JavaScript dates in milliseconds.

Due to the differing lengths of days (due to daylight saving changeover), months, and years, expressing elapsed time in units greater than hours, minutes, and seconds requires addressing a number of issues, and should be thoroughly researched before being attempted.

```js
// Using Date objects
let start = Date.now()

// The event to time goes here:
doSomethingForALongTime()
let end = Date.now()
let elapsed = end - start // elapsed time in milliseconds
Copy to Clipboard
// Using built-in methods
let start = new Date()

// The event to time goes here:
doSomethingForALongTime()
let end = new Date()
let elapsed = end.getTime() - start.getTime() // elapsed time in milliseconds
Copy to Clipboard
// To test a function and get back its return
function printElapsedTime(fTest) {
let nStartTime = Date.now(),
vReturn = fTest(),
nEndTime = Date.now()

console.log(`Elapsed time: ${ String(nEndTime - nStartTime) } milliseconds`)
return vReturn
}

let yourFunctionReturn = printElapsedTime(yourFunction)
```

Note: In browsers that support the Web Performance API's high-resolution time feature, Performance.now() can provide more reliable and precise measurements of elapsed time than Date.now().

Get the number of seconds since the ECMAScript Epoch

```js
let seconds = Math.floor(Date.now() / 1000);
```

In this case, it's important to return only an integer—so a simple division won't do. It's also important to only return actually elapsed seconds. (That's why this code uses Math.floor(), and not Math.round().)
