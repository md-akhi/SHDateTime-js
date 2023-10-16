---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: getUTCDay
---

# SHDate.getUTCDay()

متد <code dir="ltr">getUTCday()</code> روز هفته را در تاریخ مشخص با توجه به زمان جهانی ، جایی که 0 یکشنبه را نشان می دهد ، برمی گرداند.
امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getUTCDay" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getUTCDay();
```

# Return value

یک عدد.اگر تاریخ تاریخ یک تاریخ معتبر را نشان دهد ، یک عدد صحیح مربوط به روز هفته برای تاریخ مشخص ، طبق زمان جهانی: 0 برای یکشنبه ، 1 برای دوشنبه ، 2 برای سه شنبه و غیره.در غیر این صورت ، `NAN` اگر موضوع تاریخ یک تاریخ معتبر را نشان نمی دهد.

# نمونه‌ها

با استفاده از <code dir="ltr">getUTCDay()</code>
مثال زیر بخش روز هفته تاریخ فعلی را به متغیر روز در هفته اختصاص می دهد.

```js
var today = new SHDate();
var weekday = today.getUTCDay();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
