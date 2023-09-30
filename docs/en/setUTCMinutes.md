---
layout: page
language: en-US
contentLanguage: en
direction: ltr
---

---

layout: page
language: en-US
contentLanguage: en
direction: ltr

---

# SHDate.setUTCMinutes()

The setUTCMinutes() method sets the minutes for a specified date according to universal time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setUTCMinutes" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setUTCMinutes(minutesValue);
setUTCMinutes(minutesValue, secondsValue);
setUTCMinutes(minutesValue, secondsValue, msValue);
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

If you do not specify the secondsValue and msValue parameters, the values returned from getUTCSeconds() and getUTCMilliseconds() methods are used.

If a parameter you specify is outside of the expected range, setUTCMinutes() attempts to update the date information in the Date object accordingly. For example, if you use 100 for secondsValue, the minutes will be incremented by 1 (minutesValue + 1), and 40 will be used for seconds.

# Examples

```js
var theBigDay = new SHDate();
theBigDay.setUTCMinutes(43);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
