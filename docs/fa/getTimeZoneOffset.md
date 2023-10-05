---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: getTimezoneOffset
---

# SHDate.getTimezoneOffset()

روش <code dir="ltr">GetTimeZoneOffset()</code> تفاوت ، در عرض چند دقیقه ، بین تاریخی را که در منطقه زمانی UTC ارزیابی شده و همان تاریخ ارزیابی شده در منطقه زمانی محلی را برمی گرداند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getTimezoneOffset" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getTimezoneOffset();
```

# مقدار برگشتی

تفاوت ، در دقیقه ، بین تاریخ ، همانطور که در منطقه زمانی `UTC` ارزیابی شده است ، و همانطور که در منطقه زمانی محلی ارزیابی شده است.

# توضیحات

<code dir="ltr">date.gettimezoneoffset()</code> تفاوت ، در دقیقه ، بین تاریخ ارزیابی شده در منطقه زمانی `UTC` ، و تاریخ را که در منطقه زمانی محلی ارزیابی شده است - یعنی منطقه زمانی سیستم میزبان که در آن مرورگر استفاده می شود ، برمی گرداند.اگر کد از وب در یک مرورگر اجرا شود) ، یا در غیر این صورت سیستم میزبان هر زمان اجرا `JavaScript` (به عنوان مثال ، یک محیط `Node.js`) کد در آن اجرا می شود.

مقادیر منفی و مقادیر مثبت
اگر منطقه زمانی محلی در پشت `UTC` باشد ، تعداد دقایقی که توسط <code dir="ltr">getTimeZoneOffset()</code> مثبت است ، مثبت است و اگر منطقه زمانی محلی از `UTC` جلوتر باشد ، منفی است.به عنوان مثال ، برای `UTC+10 ، -600` بازگردانده می شود.

منطقه زمانی فعلی `UTC-8` `UTC` `UTC+3`
مقدار بازگشت 480 0 -180
نتایج متنوع در زمان صرفه جویی در نور روز (`DST`) مناطق زمانی
در یک منطقه زمانی که سالانه در زمان صرفه جویی در نور روز (`DST`) تغییر می کند و خارج می شود ، تعداد دقایقی که با فراخوانی <code dir="ltr">GetTimeZoneOffset()</code> برگشت داده می شود ، می تواند متفاوت باشد.

یک منطقه زمانی محلی خاص و یک تاریخ تاریخ 1 را در نظر بگیرید که هم در DST است ، و دقایقی را در نظر بگیرید ، تعداد دقایقی که با فراخوانی تاریخ 1.<code dir="ltr">gettimezoneoffset()</code> بازگردانده می شود.سپس:

اگر منطقه زمانی محلی در حال حاضر در `DST` باشد ، اما تاریخ تاریخ مشخص 2 در `DST` نیست ، تعداد دقایقی که توسط <code dir="ltr">Date2.GettimeZoneOffset()</code> بازگردانده می شود 60 دقیقه است.
اگر منطقه زمانی محلی در حال حاضر در `DST` نباشد ، اما تاریخ تاریخ مشخصی در `DST` است ، تعداد دقایقی که توسط <code dir="ltr">Date3.gettimezoneOffset()</code> دقیقه بازگردانده شده است 60 دقیقه است.
در یک منطقه زمانی که سالانه از زمان صرفه جویی در نور روز (`DST`) تغییر نمی کند و خارج نمی شود ، تعداد دقایقی که با فراخوانی <code dir="ltr">GetTimeZoneOffset()</code> بازگردانده می شود ، بدون در نظر گرفتن نمونه ای که از آن خوانده می شود ، همان تعداد دقایقی را برمی گرداند.

توجه: توضیحات فوق ساده سازی است.در پیاده سازی ها ، از پایگاه داده منطقه زمانی `IANA (TZDATA)` برای تعیین دقیق تأثیر `DST` در محاسبه اختلاف منطقه زمانی استفاده می شود.

# نمونه‌ها

```js
// Create a Date instance for the current time
let currentLocalDate = new SHDate();
// Create a Date instance for 03:24 GMT-0200 on May 1st in 2016
let laborDay2016at0324GMTminus2 = new SHDate("Day 1, 1402 03:24:00 GMT-0200");
currentLocalDate.getTimezoneOffset() ===
	laborDay2016at0324GMTminus2.getTimezoneOffset();
// true, always, in any timezone that doesn't annually shift in and out of DST
// false, sometimes, in any timezone that annually shifts in and out of DST
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
