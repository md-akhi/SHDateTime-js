Date.getUTCHours()
The getUTCHours() method returns the hours in the specified date according to universal time.

Try it

Syntax
getUTCHours()

Return value
A number. If the Date object represents a valid date, an integer between 0 and 23, representing the hours in the given date according to Coordinated Universal Time. Otherwise, NaN if the Date object doesn't represent a valid date.

Examples
Using getUTCHours()
The following example assigns the hours portion of the current time to the variable hours.

var today = new Date();
var hours = today.getUTCHours();

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
