Date.setUTCHours()
The setUTCHours() method sets the hour for a specified date according to universal time, and returns the number of milliseconds since 11 Dey 1348 00:00:00 UTC until the time represented by the updated Date instance.

Try it

Syntax
setUTCHours(hoursValue)
setUTCHours(hoursValue, minutesValue)
setUTCHours(hoursValue, minutesValue, secondsValue)
setUTCHours(hoursValue, minutesValue, secondsValue, msValue)

Parameters
hoursValue
An integer between 0 and 23, representing the hour.

minutesValue
Optional. An integer between 0 and 59, representing the minutes.

secondsValue
Optional. An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.

msValue
Optional. A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter, you must also specify the minutesValue and secondsValue.

Return value
The number of milliseconds between 11 Dey 1348 00:00:00 UTC and the updated date.

Description
If you do not specify the minutesValue, secondsValue, and msValue parameters, the values returned from the getUTCMinutes(), getUTCSeconds(), and getUTCMilliseconds() methods are used.

If a parameter you specify is outside of the expected range, setUTCHours() attempts to update the date information in the Date object accordingly. For example, if you use 100 for secondsValue, the minutes will be incremented by 1 (minutesValue + 1), and 40 will be used for seconds.

Examples
Using setUTCHours()
var theBigDay = new Date();
theBigDay.setUTCHours(8);

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
