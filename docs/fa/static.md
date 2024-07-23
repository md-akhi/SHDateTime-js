---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: static
---

# SHDate.VERSION

نسخه بندی در حال استفاده را نمایش می‌دهد

# SHDate.DAYS_IN_MONTH

تعداد روزهای هر ماه را به صورت آرایه نمایش می‌دهد برای سال بدون کبیسه

> Array [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]

# SHDate.DAYS_IN_MONTH_LEAP

تعداد روزهای هر ماه را به صورت آرایه نمایش می‌دهد برای سال با کبیسه

> Array [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30]

# SHDate.DAY_OF_YEAR

تعداد روزهای اول هر ماه را با جمع ماه‌های قبل نمایش می‌دهد

> Array [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336]

# SHDate.DAYS_IN_YEAR

تعداد روزهای یک سال بدون کبیسه را نمایش می‌دهد، 365 روز

# SHDate.DAYS_IN_YEAR_LEAP

تعداد روزهای یک سال با کبیسه را نمایش می‌دهد، 366 روز

# SHDate.WEEKS_IN_YEAR

تعداد هفته یک سال را نمایش میدهد، 52 هفته

# SHDate.WEEKS_IN_YEAR_LEAP

تعداد هفته یک سال را نمایش میدهد، 53 هفته

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
