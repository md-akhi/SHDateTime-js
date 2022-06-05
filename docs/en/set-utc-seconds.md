# SHDate.setUTCSeconds()

The setUTCSeconds() method sets the seconds for a specified date according to universal time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setUTCSeconds(secondsValue);
setUTCSeconds(secondsValue, msValue);
```

# Parameters

<code>secondsValue</code>
An integer between 0 and 59, representing the seconds.

<code>msValue</code>
Optional. A number between 0 and 999, representing the milliseconds.

# Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

# Description

If you do not specify the msValue parameter, the value returned from the getUTCMilliseconds() method is used.

If a parameter you specify is outside of the expected range, setUTCSeconds() attempts to update the date information in the Date object accordingly. For example, if you use 100 for secondsValue, the minutes stored in the Date object will be incremented by 1, and 40 will be used for seconds.

# Examples

```js
var theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
