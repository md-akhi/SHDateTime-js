---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: getDay
---

# SHDate.getDay()

متد <code dir="ltr">getDay()</code> روز هفته را برای تاریخ مشخص شده با توجه به زمان محلی برمی گرداند، جایی که 0 نشان دهنده شنبه است. برای روز ماه، به <code dir="ltr">SHDate.prototype.getDate()</code> مراجعه کنید.

امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getDay" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getDay();
```

# پارامتر

ندارد.

# مقدار برگشتی

یک عدد صحیح، بین 0 تا 6، مطابق با روز هفته برای تاریخ معین، مطابق با زمان محلی: 0 برای شنبه، 1 برای یکشنبه،، 2 برای دوشنبه، و غیره.

# شرح

مقدار بازگشتی <code dir="ltr">getDay()</code> مبتنی بر صفر است که برای نمایه سازی در آرایه های روز مفید است، به عنوان مثال:

```JS
const valentines = new SHDate("1995-02-14");
const day = valentines.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday" /* , … */];

console.log(dayNames[day]); // "Monday"
```

با این حال، به منظور بین‌المللی‌سازی، بهتر است از <code dir="ltr">Intl.DateTimeFormat</code> با پارامتر `option` استفاده کنید.

```JS
const options = { weekday: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(valentines));
// "Monday"
console.log(new Intl.DateTimeFormat("de-DE", options).format(valentines));
// "Montag"
```

# نمونه‌ها

دستور دوم زیر مقدار 1 را بر اساس مقدار شیء `Date dey90` به روزهای هفته اختصاص می دهد. 25 دی 1390 دوشنبه است.

```js
var dey90 = new SHDate("Dey 25, 1390 23:15:30");
var weekday = dey90.getDay();

console.log(weekday); // 1
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
