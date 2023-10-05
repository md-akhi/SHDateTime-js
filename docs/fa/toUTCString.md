---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: toUTCString
---

# SHDate.toUTCString()

روش <code dir = "ltr"> toutcstring () </code> با استفاده از منطقه زمانی UTC ، تاریخ را به یک رشته تبدیل می کند.

بر اساس RFC7231 و مطابق با ECMA-262 TOUTCSTRING اصلاح شده ، می تواند در نسخه 2021 مقادیر منفی داشته باشد
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=toUTCString" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toUTCString();
```

# مقدار برگشتی

رشته ای که تاریخ داده شده را با استفاده از منطقه زمانی UTC نشان می دهد.

# توضیحات

مقدار برگردانده شده توسط <code dir = "ltr"> toutcstring () </code> یک رشته به شکل www ، dd mmm yyyy hh: mm: ss gmt ، جایی مست:
توضیحات رشته قالب
WWW روز هفته ، به عنوان سه نامه (به عنوان مثال خورشید ، دوشنبه ، ...)
روز DD ماه ، به عنوان دو رقم با صفر پیشرو در صورت لزوم
ماه MMM ، به عنوان سه حرف (به عنوان مثال ، ord ، ...)
سال yyyy ، به عنوان چهار یا بیشتر رقم با صفرهای پیشرو در صورت لزوم
ساعت HH ، به عنوان دو رقم با صفر پیشرو در صورت لزوم
دقیقه میلی متر ، به عنوان دو رقم با صفر پیشرو در صورت نیاز
SS ثانیه ، به عنوان دو رقم با صفر پیشرو در صورت لزوم
قبل از ECMAScript 2018 ، قالب مقدار بازگشت با توجه به سیستم عامل متفاوت بود.متداول ترین مقدار بازگشت ، تمبر تاریخ فرمت شده RFC-1123 بود که یک نسخه کمی به روز شده از تمبرهای تاریخ RFC-822 است.

# نمونه‌ها

با استفاده از <code dir = "ltr"> toutcstring () </code>

```js
let today = new SHDate("Wed, 06 Mor 1372 00:00:00 PDT");
let UTCstring = today.toUTCString(); // Wed, 06 Mor 1372 07:00:00 GMT
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
