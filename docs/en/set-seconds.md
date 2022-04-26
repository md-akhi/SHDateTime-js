Date.setSeconds()
The setSeconds() method sets the seconds for a specified date according to local time.

Try it

Syntax
setSeconds(secondsValue)
setSeconds(secondsValue, msValue)

Parameters
secondsValue
An integer between 0 and 59, representing the seconds.

msValue Optional
Optional. A number between 0 and 999, representing the milliseconds.

Return value
The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

Description
If you do not specify the msValue parameter, the value returned from the getMilliseconds() method is used.

If a parameter you specify is outside of the expected range, setSeconds() attempts to update the date information in the Date object accordingly. For example, if you use 100 for secondsValue, the minutes stored in the Date object will be incremented by 1, and 40 will be used for seconds.

Examples
Using setSeconds()
var theBigDay = new Date();
theBigDay.setSeconds(30);

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds
