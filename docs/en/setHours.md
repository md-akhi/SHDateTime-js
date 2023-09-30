---
layout: page
language: en-US
contentLanguage: en
direction: ltr
---

# SHDate.setHours()

The setHours() method sets the hours for a specified date according to local time, and returns the number of milliseconds since 11 Dey 1348 00:00:00 UTC until the time represented by the updated Date instance.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setHours(hoursValue);
setHours(hoursValue, minutesValue);
setHours(hoursValue, minutesValue, secondsValue);
setHours(hoursValue, minutesValue, secondsValue, msValue);
```

# Parameters

<code>hoursValue</code>
Ideally, an integer between 0 and 23, representing the hour. If a value greater than 23 is provided, the datetime will be incremented by the extra hours.

<code>minutesValue</code>
Optional. Ideally, an integer between 0 and 59, representing the minutes. If a value greater than 59 is provided, the datetime will be incremented by the extra minutes.

<code>secondsValue</code>
Optional. Ideally, an integer between 0 and 59, representing the seconds. If a value greater than 59 is provided, the datetime will be incremented by the extra seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.

<code>msValue</code>
Optional. Ideally, a number between 0 and 999, representing the milliseconds. If a value greater than 999 is provided, the datetime will be incremented by the extra milliseconds. If you specify the msValue parameter, you must also specify the minutesValue and secondsValue.

# Return value

The number of milliseconds between 11 Dey 1348 00:00:00 UTC and the updated date.

# Description

If you do not specify the minutesValue, secondsValue, and msValue parameters, the values returned from the getMinutes(), getSeconds(), and getMilliseconds() methods are used.

If a parameter you specify is outside of the expected range, setHours() attempts to update the date information in the Date object accordingly. For example, if you use 100 for secondsValue, the minutes will be incremented by 1 (minutesValue + 1), and 40 will be used for seconds.

# Examples

Using setHours()

```js
var theBigDay = new SHDate();
theBigDay.setHours(7);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours
