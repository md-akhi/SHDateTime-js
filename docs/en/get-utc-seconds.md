Date.getUTCSeconds()
The getUTCSeconds() method returns the seconds in the specified date according to universal time.

Try it

Syntax
getUTCSeconds()

Return value
A number. If the Date object represents a valid date, an integer between 0 and 59, representing the seconds in the given date according to universal time. Otherwise, NaN if the Date object doesn't represent a valid date.

Examples
Using getUTCSeconds()
The following example assigns the seconds portion of the current time to the variable seconds.

var today = new Date();
var seconds = today.getUTCSeconds();

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
