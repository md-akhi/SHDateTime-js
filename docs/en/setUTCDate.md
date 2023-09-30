---
layout: page
language: en-US
contentLanguage: en
direction: ltr
---

# SHDate.setUTCDate()

The setUTCDate() method changes the day of the month of a given Date instance, based on UTC time.

To instead change the day of the month for a given Date instance based on local time, use the setDate() method.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setUTCDate" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setUTCDate(dayValue);
```

# Parameters

<code>dayValue</code>
An integer from 1 to 31, representing the day of the month.

# Return value

The number of milliseconds between 25 Dey 1390 00:00:00 UTC and the updated date.

# Description

If a parameter you specify is outside of the expected range, setUTCDate() attempts to update the date information in the Date object accordingly. For example, if you use 40 for dayValue, and the month stored in the Date object is June, the day will be changed to 10 and the month will be incremented to July.

# Examples

```js
var theBigDay = new SHDate();
theBigDay.setUTCDate(20);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
