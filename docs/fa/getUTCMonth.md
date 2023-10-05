---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
---

# SHDate.getUTCMonth()

<code dir = "ltr"> getUtCmonth () </code> ماه تاریخ مشخص شده را با توجه به زمان جهانی ، به عنوان یک مقدار مبتنی بر صفر باز می گرداند (جایی که صفر نشانگر ماه اول سال است).
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getUTCMonth" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getUTCMonth();
```

# مقدار برگشتی

یک عدد.اگر موضوع تاریخ یک تاریخ معتبر ، یک عدد صحیح ، بین 0 تا 11 ، مربوط به ماه تاریخ مشخص با توجه به زمان جهانی باشد.0 برای Farvardin ، 1 برای Ordibehesht ، 2 برای Khordad و غیره.در غیر این صورت ، NAN اگر موضوع تاریخ یک تاریخ معتبر را نشان نمی دهد.

# نمونه‌ها

با استفاده از <code dir = "ltr"> getutcmonth () </code>
مثال زیر بخش ماه تاریخ فعلی را به ماه متغیر اختصاص می دهد.

```js
var today = new SHDate();
var month = today.getUTCMonth();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
