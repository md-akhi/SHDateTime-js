---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: getSeconds
---

# SHDate.getSeconds()

متد <code dir="ltr">GetSeconds()</code> ثانیه ها را در تاریخ مشخص با توجه به زمان محلی برمی گرداند.
امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getSeconds" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getSeconds();
```

# مقدار برگشتی

یک عدد عدد صحیح ، بین 0 تا 59 ، نمایانگر ثانیه در تاریخ معین با توجه به زمان محلی است.

# نمونه‌ها

با استفاده از <code dir="ltr">GetEconds()</code>
بیانیه دوم در زیر مقدار 30 را به ثانیه متغیر اختصاص می دهد ، بر اساس مقدار تاریخ تاریخ `sec30`.

```js
var sec30 = new SHDate("Dey 25, 1390 23:15:30");
var seconds = sec30.getSeconds();

console.log(seconds); // 30
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds
