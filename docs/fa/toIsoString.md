---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: toISOString
---

# SHDate.toISOString()

روش <code dir = "ltr">toisostring()</code> رشته ای را با فرمت `ISO` ساده شده (`ISO 8601`) باز می گرداند ، که همیشه 24 یا 27 کاراکتر طول دارد (`yyyy-mm-ddthh: mm: ss.sssz`یا به ترتیب :`yyyyyyyy-mm-ddthhMM: SSSSSZ`).منطقه زمانی همیشه صفر `UTC` جبران می شود ، همانطور که توسط پسوند "z" مشخص شده است.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=toISOString" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toISOString();
```

# مقدار برگشتی

A string representing the given date in the ISO 8601 format according to universal time.
رشته ای که تاریخ مشخص شده در قالب ISO 8601 را با توجه به زمان جهانی نشان می دهد.# نمونه‌ها

```js
let today = new SHDate("05 Day 1402 14:48 UTC");

console.log(today.toISOString()); // Returns 1402-09-05T14:48:00.000Z
```

The above example uses parsing of a non–standard string value that may not be correctly parsed in non–Mozilla browsers.
مثال فوق از تجزیه یک مقدار رشته غیر استاندارد استفاده می کند که ممکن است به درستی در مرورگرهای غیر موزیلی تجزیه نشود.https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
