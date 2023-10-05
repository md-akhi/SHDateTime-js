---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: getUTCDate
---

# SHDate.getUTCDate()

روش <code dir = "ltr">getutcdate()</code> روز ماه (از 1 تا 31) را در تاریخ مشخص شده با توجه به زمان جهانی برمی گرداند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getUTCDate" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getUTCDate();
```

# Return value

یک عدد.اگر تاریخ تاریخ یک تاریخ معتبر را نشان دهد ، یک عدد صحیح از 1 تا 31 به نمایندگی از روز ماه برای تاریخ معین ، طبق زمان جهانی.در غیر این صورت ، `NAN` اگر موضوع تاریخ یک تاریخ معتبر را نشان نمی دهد.

# نمونه‌ها

با استفاده از <code dir="ltr">getUTCDate()</code>مثال زیر روز ماه تاریخ فعلی را به متغیر `dayofmonth` اختصاص می دهد.

```js
var today = new SHDate();
var dayOfMonth = today.getUTCDate();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
