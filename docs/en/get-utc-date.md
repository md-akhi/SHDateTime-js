Date.getUTCDate()
The getUTCDate() method returns the day of the month(from 1 to 31) in the specified date according to universal time.

Try it

Syntax
getUTCDate()

Return value
A number. If the Date object represents a valid date, an integer number ranging from 1 to 31 representing day of month for the given date, according to universal time. Otherwise, NaN if the Date object doesn't represent a valid date.

Examples
Using getUTCDate()
The following example assigns the day of month of the current date to the variable dayOfMonth.

var today = new Date();
var dayOfMonth = today.getUTCDate();

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
