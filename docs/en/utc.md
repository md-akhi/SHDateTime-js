---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
---

---

layout: page
language: en-US
contentLanguage: en
direction: ltr

---

# SHDate.UTC()

The SHDate.UTC() method accepts parameters similar to the Date constructor, but treats them as UTC. It returns the number of milliseconds since 11 Dey 1348, 00:00:00 UTC.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=UTC" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
SHDate.UTC(year);
SHDate.UTC(year, month);
SHDate.UTC(year, month, day);
SHDate.UTC(year, month, day, hour);
SHDate.UTC(year, month, day, hour, minute);
SHDate.UTC(year, month, day, hour, minute, second);
SHDate.UTC(year, month, day, hour, minute, second, millisecond);
```

# year

Integer value representing the year.

Values from 0 to 99 map to the years 1300 to 1399. All other values are the actual year. See the example.

<code>month</code> Optional
An integer between 0 (Farvardin) and 11 (Espand) representing the month. Since ECMAScript 2017 it defaults to 0 if omitted. (Up until ECMAScript 2016, month was a required parameter. As of ES2017, it no longer is.)

<code>day</code> Optional
An integer between 1 and 31 representing the day of the month. If omitted, defaults to 1.

<code>hour</code> Optional
An integer between 0 and 23 representing the hours. If omitted, defaults to 0.

<code>minute</code> Optional
An integer between 0 and 59 representing the minutes. If omitted, defaults to 0.

<code>second</code> Optional
An integer between 0 and 59 representing the seconds. If omitted, defaults to 0.

<code>millisecond</code> Optional
An integer between 0 and 999 representing the milliseconds. If omitted, defaults to 0.

# Return value

A number representing the number of milliseconds for the given date since 11 Dey 1348, 00:00:00, UTC.

# Description

UTC() takes comma-delimited date and time parameters and returns the number of milliseconds between 11 Dey 1348, 00:00:00, universal time and the specified date and time.

Years between 0 and 99 are converted to a year in the 14th century (1348 + year). For example, 95 is converted to the year 1395.

The UTC() method differs from the Date constructor in two ways:

SHDate.UTC() uses universal time instead of the local time.
SHDate.UTC() returns a time value as a number instead of creating a Date object.
If a parameter is outside of the expected range, the UTC() method updates the other parameters to accommodate the value. For example, if 15 is used for month, the year will be incremented by 1 (year + 1) and 3 will be used for the month.

UTC() is a static method of Date, so it's called as SHDate.UTC() rather than as a method of a Date instance.

# Examples

Using SHDate.UTC()
The following statement creates a Date object with the arguments treated as UTC instead of local:

```js
let utcDate = new SHDate(SHDate.UTC(1348, 9, 11, 0, 0, 0));
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC
