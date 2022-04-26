Date.setUTCFullYear()
The setUTCFullYear() method sets the full year for a specified date according to universal time.

Try it

Syntax
setUTCFullYear(yearValue)
setUTCFullYear(yearValue, monthValue)
setUTCFullYear(yearValue, monthValue, dayValue)

Parameters
yearValue
An integer specifying the numeric value of the year, for example, 1995.

monthValue
Optional. An integer between 0 and 11 representing the months January through December.

dayValue
Optional. An integer between 1 and 31 representing the day of the month. If you specify the dayValue parameter, you must also specify the monthValue.

Return value
The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

Description
If you do not specify the monthValue and dayValue parameters, the values returned from the getUTCMonth() and getUTCDate() methods are used.

If a parameter you specify is outside of the expected range, setUTCFullYear() attempts to update the other parameters and the date information in the Date object accordingly. For example, if you specify 15 for monthValue, the year is incremented by 1 (yearValue + 1), and 3 is used for the month.

Examples
Using setUTCFullYear()
var theBigDay = new Date();
theBigDay.setUTCFullYear(1997);

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
