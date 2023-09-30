---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
---

# SHDate.getMinutes()

متد <code dir="ltr">getMinutes()</code> دقیقه ها را در تاریخ مشخص شده بر اساس زمان محلی برمی گرداند.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getMinutes" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getMinutes();
```

# مقدار برگشتی

یک عدد صحیح، بین 0 تا 59، که بیانگر دقایق در تاریخ معین بر اساس زمان محلی است.

# نمونه‌ها

با استفاده از <code dir="ltr">getMinutes()</code>
عبارت دوم زیر مقدار 15 را به متغیر دقیقه بر اساس مقدار شیء Date Xmas95 اختصاص می دهد.

```js
var Xmas95 = new SHDate("Dey 25, 1390 23:15:30");
var minutes = Xmas95.getMinutes();

console.log(minutes); // 15
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes
