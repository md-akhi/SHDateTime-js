---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: valueOf
---

# SHDate.valueOf()

روش <code dir = "ltr"> مقدار () </code> مقدار بدوی یک شیء تاریخ را برمی گرداند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=valueOf" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
valueOf();
```

# مقدار برگشتی

تعداد میلی ثانیه بین 25 Dey 1390 00:00:00 UTC و تاریخ داده شده یا NAN در صورت تاریخ نامعتبر.

# توضیحات

روش <code dir = "ltr"> مقدار () </code> مقدار بدوی یک شیء تاریخ را به عنوان نوع داده شماره ، تعداد میلی ثانیه از نیمه شب 11 روز ، 1348 UTC برمی گرداند.
این روش از نظر عملکردی معادل روش <code dir = "ltr"> shdate.gettime () </code> است.
این روش معمولاً توسط JavaScript داخلی خوانده می شود و صریحاً در کد نیست.

# نمونه‌ها

```js
var x = new SHDate(56, 6, 17);
var myVar = x.valueOf(); // assigns -424713600000 to myVar
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf
