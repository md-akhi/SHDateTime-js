Date.setUTCMonth()
The setUTCMonth() method sets the month for a specified date according to universal time.

Try it

Syntax
setUTCMonth(monthValue)
setUTCMonth(monthValue, dayValue)

Parameters
monthValue
An integer between 0 and 11, representing the months January through December.

dayValue
Optional. An integer from 1 to 31, representing the day of the month.

Return value
The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

Description
If you do not specify the dayValue parameter, the value returned from the getUTCDate() method is used.

If a parameter you specify is outside of the expected range, setUTCMonth() attempts to update the date information in the Date object accordingly. For example, if you use 15 for monthValue, the year will be incremented by 1, and 3 will be used for month.

Examples
Using setUTCMonth()
var theBigDay = new Date();
theBigDay.setUTCMonth(11);

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
