---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
---

# SHDate.getUTCFullYear()

روش <code dir="ltr">GetUtcallyear ()</code> سال را در تاریخ مشخص با توجه به زمان جهانی برمی گرداند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getUTCFullYear" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getUTCFullYear();
```

# Return value

یک عدد.اگر تاریخ تاریخ یک تاریخ معتبر را نشان دهد ، یک عدد صحیح که سال را در تاریخ معین با توجه به زمان جهانی نشان می دهد.در غیر این صورت ، NAN اگر موضوع تاریخ یک تاریخ معتبر را نشان نمی دهد.

# توضیحات

مقدار برگردانده شده توسط <code dir = "ltr"> getUtcracyear () </code> یک عدد مطلق است که مطابق با سال 2000 است ، به عنوان مثال ، 1995.

# نمونه‌ها

با استفاده از <code dir="ltr">GetUtcractyear ()</code>
مثال زیر مقدار چهار رقمی سال جاری را به سال متغیر اختصاص می دهد.

```js
var today = new SHDate();
var year = today.getUTCFullYear();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
