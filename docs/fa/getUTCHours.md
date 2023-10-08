---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: getUTCHours
---

# SHDate.getUTCHours()

متد <code dir="ltr">getUTCHours()</code> ساعت ها را در تاریخ مشخص شده با توجه به زمان جهانی برمی گرداند.
امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getUTCHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getUTCHours();
```

# مقدار برگشتی

یک عدد.اگر شیء تاریخ یک تاریخ معتبر را نشان دهد ، یک عدد صحیح بین 0 تا 23 ، ساعات موجود در تاریخ معین را با توجه به زمان جهانی هماهنگ نشان می دهد.در غیر این صورت ، `NAN` اگر موضوع تاریخ یک تاریخ معتبر را نشان نمی دهد.

# نمونه‌ها

با استفاده از <code dir = "ltr">getUTCHours()</code>
مثال زیر بخش ساعت زمان فعلی را به ساعتهای متغیر اختصاص می دهد.

```js
var today = new SHDate();
var hours = today.getUTCHours();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
