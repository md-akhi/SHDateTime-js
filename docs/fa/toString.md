---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: toString
---

# SHDate.toString()

روش <code dir = "ltr">toString()</code> رشته ای را نشان می دهد که نمایانگر شیء تاریخ مشخص شده است.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=toString" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toString();
```

# مقدار برگشتی

رشته ای که تاریخ داده شده را نشان می دهد.

# توضیحات

نمونه های تاریخ به ارث می برند <code dir = "ltr">toString()</code> از `shdate.prototype` ، نه <code dir = "ltr">object.prototype.</code> <code dir = "ltr">shdate.prototype.toString()</code> بازنمایی رشته ای از تاریخ را در قالب مشخص شده در `ECMA-262` برمی گرداند که می تواند به صورت خلاصه شود:
Week day: نام 3 حرف هفته انگلیسی ، به عنوان مثال"شنبه"
space
Month name: نام ماه انگلیسی 3 نامه ، به عنوان مثال"روز"
space
Date: روز 2 رقمی در ماه ، به عنوان مثال"01"
space
Year: سال 4 رقمی ، به عنوان مثال"1402"
space
Hour: ساعت 2 رقمی روز ، به عنوان مثال"14"
colon
Minute: دقیقه 2 رقمی ساعت ، به عنوان مثال"53"
colon
Second: 2 رقمی ثانیه دقیقه ، به عنوان مثال"26"
space
رشته "GMT"
علامت جبران منطقه زمانی ، یا:"+" for positive offsets (0 or greater)
"-" برای جبران های منفی (کمتر از صفر)
جبران دو رقمی ساعت ، به عنوان مثال"14"
جبران دو رقمی دقیقه ، به عنوان مثال"00"به صورت اختیاری ، یک منطقه زمانی متشکل از:space
براکت سمت چپ ، یعنی "("
نمایندگی رشته وابسته به اجرای منطقه زمانی ، که ممکن است یک مخفف یا نام کامل باشد (هیچ استانداردی برای نام یا مخفف مناطق زمانی وجود ندارد) ، به عنوان مثال."زمان جزایر خط" یا "خط"
براکت راست ، یعنی ")"
E.g. "Sat Sep 01 2018 14:53:26 GMT+1400 (LINT)"
تا زمان ECMAScript 2018 (نسخه 9) ، فرمت رشته ای که توسط <code dir="ltr">shdate.prototype.tostring</code> برگردانده شده بود ، وابسته بود.بنابراین نباید به آن اعتماد کرد که در قالب مشخص شده باشد.

روش <code dir = "ltr">toString()</code> به طور خودکار هنگام نمایش تاریخ به عنوان یک مقدار متن ، به عنوان مثال ، به طور خودکار فراخوانی می شود.<code dir = "ltr"> console.log (shdate جدید ()) </code> ، یا هنگامی که یک تاریخ در یک کنسرت رشته ای استفاده می شود ، مانند <code dir = "ltr"> var today = "امروز است"+ shdate جدید () </code>.
<code dir = "ltr"> toString () </code> یک روش عمومی است ، نیازی به این نیست که این یک نمونه تاریخ باشد.با این حال ، باید یک خاصیت داخلی [[TimeValue]] داشته باشد که با استفاده از `JavaScript` بومی ساخته نمی شود ، بنابراین به طور موثری محدود به استفاده با نمونه های تاریخ است.اگر به یک نمونه غیر دات فراخوانده شود ، یک نوع پرتاب می شود.

# نمونه‌ها

با استفاده از <code dir = "ltr">toString()</code>
موارد زیر مقدار <code dir = "ltr">toString()</code> یک شیء تاریخ را به `Myvar` اختصاص می دهد:

```js
var x = new SHDate();
var myVar = x.toString(); // assigns a string value to myVar in the same format as:
// Mon Sep 08 1998 14:36:22 GMT-0700 (PDT)
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString
