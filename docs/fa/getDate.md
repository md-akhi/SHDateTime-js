---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: getDate
---

# SHDate.getDate()

متد <code dir="ltr">getDate()</code> روز ماه را برای تاریخ مشخص شده بر اساس زمان محلی برمی گرداند.

امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getDate" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getDate();
```

# پارامتر

ندارد.

# مقدار برگشتی

یک عدد صحیح، بین 1 و 31، که نشان دهنده روز ماه برای تاریخ معین بر اساس زمان محلی است. اگر تاریخ نامعتبر باشد `NaN` را برمی‌گرداند.

# نمونه‌ها

### استفاده از <code dir="ltr">getDate()</code>

عبارت دوم زیر مقدار 25 را به متغیر روز بر اساس مقدار شیء `Date` `dey90` اختصاص می دهد.

```js
var dey90 = new SHDate("Dey 25, 1390 23:15:30");
var day = dey90.getDate();

console.log(day); // 25
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
