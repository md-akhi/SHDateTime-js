---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: getHours
---

# SHDate.getHours()

متد <code dir="ltr">getHours()</code> ساعت را برای تاریخ مشخص شده، با توجه به زمان محلی برمی گرداند.

امتحان کنید

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
عبارت دوم زیر مقدار 23 را بر اساس مقدار شیء `Date h23` به متغیر ساعت اختصاص می دهد.

```js
let h23 = new SHDate("Dey 25, 1390 23:15:30");
let hours = h23.getHours();

console.log(hours); // 23
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
