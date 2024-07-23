---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: weekCorrection
---

# SHDate.weekCorrection()

Correct the entry of the week to a correct entry

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=weekCorrection" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
weekCorrection(year: number, week: number, [day: number = 0]);
```

# Parametersها

<code dir = "ltr">`year‍‍`</code> Mandatory
Year is an integer

<code dir = "ltr">`week`</code>: Mandatory
Week is an integer between 1 and 53

<code dir = "ltr">`day`</code> optional
The day of the week is an integer between 0 and 6, which is 0 by default

# Return value

An array containing `[isoYear, isoWeek, dayOfWeek]`.

# Examples

استفاده از <code dir="ltr">weekCorrection()</code>

```js
var shdate = new SHDate();
var week = shdate.weekCorrection(1372, 53, 7);
console.log(shdate.toString());
console.log(week); // Array [1373, 2, 0]
!Bug;
var shdate = new SHDate("1372W53-7");
var week = shdate.weekCorrection(1372, 53, 7);
console.log(shdate.toString()); // "Fri 05 Far 1373 00:00:00 GMT+0430 (Iran Daylight Time)"
console.log(week); // Array [1373, 2, 0]
const [iy, iw, dow] = week;
console.log(`${iy}W${iw}-${dow}`); // Array [1373, 2, 0]
var shdate = new SHDate(`${iy}W${iw}-${dow}`);
console.log(shdate.toString()); // "Mon 01 Far 1373 00:00:00 GMT+0330 (Iran Standard Time)"
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/weekCorrection
