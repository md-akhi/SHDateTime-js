---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
---

# SHDate.getHours()

متد <code dir="ltr">getHours()</code> ساعت را برای تاریخ مشخص شده، با توجه به زمان محلی برمی گرداند.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getHours();
```

# مقدار برگشتی

یک عدد صحیح، بین 0 و 23، که نشان دهنده ساعت برای تاریخ معین با توجه به زمان محلی است.

# نمونه‌ها

استفاده از <code dir="ltr">getHours()</code>
عبارت دوم زیر مقدار 23 را بر اساس مقدار شیء Date Xmas95 به متغیر ساعت اختصاص می دهد.

```js
let Xmas95 = new SHDate("Dey 25, 1390 23:15:30");
let hours = Xmas95.getHours();

console.log(hours); // 23
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
