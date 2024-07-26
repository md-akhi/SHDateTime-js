---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: static
---

# SHDate.VERSION

Versioning displays the currently in use.

# SHDate.DAYS_IN_MONTH

It displays the number of days in each month as an array for a non-leap year.

> Array [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]

# SHDate.DAYS_IN_MONTH_LEAP

It displays the number of days in each month as an array for a leap year.

> Array [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30]

# SHDate.DAY_OF_YEAR

It shows the number of days in the first days of each month by adding the previous months.

> Array [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336]

# SHDate.DAYS_IN_YEAR

It shows the number of days in a non-leap year, 365 days.

# SHDate.DAYS_IN_YEAR_LEAP

It shows the number of days in a leap year, 366 days.

# SHDate.WEEKS_IN_YEAR

It shows the number of weeks in a year, 52 weeks.

# SHDate.WEEKS_IN_YEAR_LEAP

It shows the number of weeks in a year, 53 weeks.

Try it

<iframe style="width: 830px; height: 500px;" src="/SHDateTime-js/examples/live.html?function=static" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
SHDate.VERSION;

SHDate.DAYS_IN_MONTH;

SHDate.DAYS_IN_MONTH_LEAP;

SHDate.DAY_OF_YEAR;

SHDate.DAYS_IN_YEAR;

SHDate.DAYS_IN_YEAR_LEAP;

SHDate.WEEKS_IN_YEAR;

SHDate.WEEKS_IN_YEAR_LEAP;
```

# Examples

استفاده از توابع ثابت

```js
SHDate.VERSION;
console.log(SHDate.VERSION);
// Expected output: "2.2.5"

SHDate.DAYS_IN_MONTH;
console.log(SHDate.DAYS_IN_MONTH);
// Expected output: "[31,31,31,31,31,31,30,30,30,30,30,29]"

SHDate.DAYS_IN_MONTH_LEAP;
console.log(SHDate.DAYS_IN_MONTH_LEAP);
// Expected output: "[31,31,31,31,31,31,30,30,30,30,30,30]"

SHDate.DAY_OF_YEAR;
console.log(SHDate.DAY_OF_YEAR);
// Expected output: "[0,31,62,93,124,155,186,216,246,276,306,336]"

SHDate.DAYS_IN_YEAR;
console.log(SHDate.DAYS_IN_YEAR);
// Expected output: "365"

SHDate.DAYS_IN_YEAR_LEAP;
console.log(SHDate.DAYS_IN_YEAR_LEAP);
// Expected output: "366"

SHDate.WEEKS_IN_YEAR;
console.log(SHDate.WEEKS_IN_YEAR);
// Expected output: "52"

SHDate.WEEKS_IN_YEAR_LEAP;
console.log(SHDate.WEEKS_IN_YEAR_LEAP);
// Expected output: "53"
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/static
