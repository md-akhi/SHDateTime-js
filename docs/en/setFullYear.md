---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: setFullYear
---

# SHDate.setFullYear()

The setFullYear() method sets the full year for a specified date according to local time. Returns new timestamp.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setFullYear" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setFullYear(yearValue);
setFullYear(yearValue, monthValue);
setFullYear(yearValue, monthValue, dateValue);
```

# Parameters

<code>yearValue</code>
An integer specifying the numeric value of the year, for example, 1395.

<code>monthValue</code>
Optional. An integer between 0 and 11 representing the months Farvardin through Esfand.

<code>dateValue</code>
Optional. An integer between 1 and 31 representing the day of the month. If you specify the dateValue parameter, you must also specify the monthValue.

# Return value

The number of milliseconds between 25 Dey 1390 00:00:00 UTC and the updated date.

# Description

If you do not specify the monthValue and dateValue parameters, the values returned from the getMonth() and getDate() methods are used.

If a parameter you specify is outside of the expected range, setFullYear() attempts to update the other parameters and the date information in the Date object accordingly. For example, if you specify 15 for monthValue, the year is incremented by 1 (yearValue + 1), and 3 is used for the month.

# Examples

Using setFullYear()

```js
var theBigDay = new SHDate();
theBigDay.setFullYear(1997);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear
