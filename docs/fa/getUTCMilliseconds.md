---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: getUTCMilliseconds
---

# SHDate.getUTCMilliseconds()

متد <code dir = "ltr">getUTCMilliseconds()</code> بخش میلی ثانیه از ارزش شیء زمان را با توجه به زمان جهانی برمی گرداند.
امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getUTCMilliseconds" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getUTCMilliseconds();
```

# مقدار برگشتی

یک عدد.اگر شیء تاریخ یک تاریخ معتبر را نشان دهد ، یک عدد صحیح بین 0 تا 999 ، نمایانگر بخش میلی ثانیه از شیء تاریخ داده شده با توجه به زمان جهانی است.در غیر این صورت ، `NAN` اگر موضوع تاریخ یک تاریخ معتبر را نشان نمی دهد.

با زمان یونیکس اشتباه گرفته نشود.برای به دست آوردن کل میلی ثانیه از سال 1348/11 ، از متد <code dir="ltr">shdate.getTime()</code> استفاده کنید.

# نمونه‌ها

با استفاده از <code dir="ltr">getutcmilliseconds()</code>
مثال زیر بخش میلی ثانیه از زمان فعلی را به میلی ثانیه متغیر اختصاص می دهد.

```js
var today = new SHDate();
var milliseconds = today.getUTCMilliseconds();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
