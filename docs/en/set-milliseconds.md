Date.setMilliseconds()
The setMilliseconds() method sets the milliseconds for a specified date according to local time.

Try it

Syntax
setMilliseconds(millisecondsValue)

Parameters
millisecondsValue
A number between 0 and 999, representing the milliseconds.

Return value
The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

Description
If you specify a number outside the expected range, the date information in the Date object is updated accordingly. For example, if you specify 1005, the number of seconds is incremented by 1, and 5 is used for the milliseconds.

Examples
Using setMilliseconds()
var theBigDay = new Date();
theBigDay.setMilliseconds(100);

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
