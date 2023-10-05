---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
---

# SHDate.getUTCMinutes()

روش <code dir = "ltr"> getutcminutes () </code> دقیقه ها را در تاریخ مشخص شده با توجه به زمان جهانی برمی گرداند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getUTCMinutes" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getUTCMinutes();
```

# مقدار برگشتی

یک عدد.اگر شیء تاریخ یک تاریخ معتبر را نشان دهد ، یک عدد صحیح بین 0 تا 59 ، نمایندگی صورتجلسه در تاریخ معین با توجه به زمان جهانی است.در غیر این صورت ، NAN اگر موضوع تاریخ یک تاریخ معتبر را نشان نمی دهد.

# نمونه‌ها

با استفاده از <code dir = "ltr"> getutcminutes () </code>
مثال زیر بخش دقیقه از زمان فعلی را به دقیقه های متغیر اختصاص می دهد.

```js
var today = new SHDate();
var minutes = today.getUTCMinutes();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
