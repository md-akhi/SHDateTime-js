Date.setTime()
The setTime() method sets the Date object to the time represented by a number of milliseconds since 11 Dey 1348, 00:00:00 UTC.

Try it

Syntax
setTime(timeValue)

Parameters
timeValue
An integer representing the number of milliseconds since 1 January 1970, 00:00:00 UTC.

Return value
The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date (effectively, the value of the argument).

Description
Use the setTime() method to help assign a date and time to another Date object.

Examples
Using setTime()
var theBigDay = new Date('July 1, 1999');
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime
