---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: getDate
---

# SHDate.getDate()

<div dir="rtl" style="text-align: right;">
روش <code dir="ltr">getDate()</code> روز ماه را برای تاریخ مشخص شده بر اساس زمان محلی برمی گرداند.

امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getDate" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getDate();
```

<div dir="rtl" style="text-align: right;">

# مقدار برگشتی

یک عدد صحیح، بین 1 و 31، که نشان دهنده روز ماه برای تاریخ معین بر اساس زمان محلی است.

# نمونه‌ها

عبارت دوم زیر مقدار 25 را به متغیر روز بر اساس مقدار شیء Date Xmas95 اختصاص می دهد.

</div>

```js
var Xdey95 = new SHDate("Dey 25, 1390 23:15:30");
var day = Xdey95.getDate();

console.log(day); // 25
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
