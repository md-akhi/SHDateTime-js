# SHDate.setMinutes()

The setMinutes() method sets the minutes for a specified date according to local time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setMinutes" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setMinutes(minutesValue);
setMinutes(minutesValue, secondsValue);
setMinutes(minutesValue, secondsValue, msValue);
```

# Parameters

<code>minutesValue</code>
An integer between 0 and 59, representing the minutes.

<code>secondsValue</code>
Optional. An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.

<code>msValue</code>
Optional. A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter, you must also specify the minutesValue and secondsValue.

# Return value

The number of milliseconds between 25 Dey 1390 00:00:00 UTC and the updated date.

# Description

If you do not specify the secondsValue and msValue parameters, the values returned from getSeconds() and getMilliseconds() methods are used.

If a parameter you specify is outside of the expected range, setMinutes() attempts to update the date information in the Date object accordingly. For example, if you use 100 for secondsValue, the minutes will be incremented by 1 (minutesValue + 1), and 40 will be used for seconds.

# Examples

Using setMinutes()

```js
var theBigDay = new SHDate();
theBigDay.setMinutes(45);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes
