---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: getFullYear
---

# SHDate.getFullYear()

متد <code dir="ltr">getFullYear()</code> سال تاریخ مشخص شده را بر اساس زمان محلی برمی گرداند.

به جای متد <code dir="ltr">getYear()</code> از این متد استفاده کنید.

امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getFullYear" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getFullYear();
```

# پارامتر

ندارد.

# مقدار برگشتی

یک عدد صحیح که نشان دهنده سال برای تاریخ معین بر اساس زمان محلی است. اگر تاریخ نامعتبر باشد `NaN` را برمی‌گرداند.

# توضیحات

برخلاف <code dir = "ltr">getYear()</code>، مقدار بازگشتی توسط <code dir = "ltr">getFullYear()</code> یک عدد مطلق است. برای تاریخ‌های بین سال‌های 1000 و 9999، <code dir = "ltr">getFullYear()</code> یک عدد چهار رقمی را برمی‌گرداند، به عنوان مثال، 1402.

# نمونه‌ها

مثال زیر مقدار چهار رقمی سال جاری را به متغیر اختصاص می دهد.

```js
var today = new SHDate();
var year = today.getFullYear();
```

متغیر `fullYear` بر اساس مقدار شیء `Date` `year402` دارای مقدار 1402 است.

```js
const year402 = new SHDate("1402-12-25T23:15:30");
const fullYear = year402.getFullYear();

console.log(fullYear); // 1402
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
