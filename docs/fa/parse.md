---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: parse
---

# SHDate.parse()

متد <code dir="ltr">shdate.parse()</code> بازنمایی رشته ای از یک تاریخ را تجزیه می کند ، و تعداد میلی ثانیه از 11 `Dey 1348 ، 00:00:00 UTC` یا `NAN` را برمی گرداند اگر این رشته ناشناخته باشد یا در بعضی موارد حاوی مقادیر غیرقانونی تاریخ باشد (به عنوان مثال 2015-02-31).

توصیه نمی شود از `shdate.parse` استفاده کنید تا زمانی که `ES5` ، تجزیه رشته ها کاملاً وابسته به اجرای آن بود.هنوز هم تفاوت های زیادی در نحوه تجزیه رشته های تاریخ میزبان وجود دارد ، بنابراین رشته های تاریخ باید به صورت دستی تجزیه شوند (یک کتابخانه در صورت اسکان بسیاری از قالب های مختلف می تواند کمک کند).
امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=parse" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
// Direct call:

SHDate.parse(dateString);

// Implicit call:

new SHDate(dateString);
```

# پارامترها

<code dir="ltr">dateString</code>
رشته ای که نشان دهنده ساده سازی فرمت گسترده تقویم `ISO 8601` است.(ممکن است از قالب های دیگر استفاده شود ، اما نتایج وابسته به اجرای آن هستند.)

# مقدار برگشتی

تعدادی به نمایندگی از میلی ثانیه از 11 `Dey 1348 ، 00:00:00 UTC` و تاریخ به دست آمده با تجزیه نمایندگی رشته ای از تاریخ.اگر استدلال یک تاریخ معتبر را نشان نداد ، `NAN` بازگردانده می شود.

# توضیحات

متد <code dir = "ltr">parse()</code> یک رشته تاریخ (مانند "2011-10-10T14: 48: 00") را می گیرد و تعداد میلی ثانیه را از 11 دی 1348 ، 00:00 برمی گرداند: 00 `UTC`.

این تابع برای تنظیم مقادیر تاریخ بر اساس مقادیر رشته ، به عنوان مثال در رابطه با متد <code dir="ltr">setTime()</code> و شیء تاریخ مفید است.

قالب رشته زمان تاریخ
بازنمایی رشته استاندارد از یک رشته زمان تاریخ ، ساده سازی فرمت تمدید تاریخ تقویم `ISO 8601` است.(برای اطلاعات بیشتر به فرمت رشته زمان بخش در مشخصات `ECMAScript` مراجعه کنید.)

به عنوان مثال ، "2011-10-10" (فرم فقط تاریخ) ، "2011-10-10T14: 48: 00" (فرم تاریخ زمان) ، یا "2011-10-10T14: 48: 00.000+09: 00"(فرم تاریخ با میلی ثانیه و منطقه زمانی) قابل عبور است و تجزیه می شود.هنگامی که جبران منطقه زمانی وجود ندارد ، فرم های فقط تاریخ به عنوان یک زمان UTC تعبیر می شوند و فرم های زمان تاریخ به عنوان زمان محلی تعبیر می شوند.

در حالی که از مشخصات منطقه زمانی در هنگام تجزیه رشته برای تفسیر آرگومان استفاده می شود ، مقدار برگشتی همیشه تعداد میلی ثانیه بین 11 Dey 1348 00:00:00 UTC و نقطه ای از زمان نشان داده شده توسط استدلال یا `NAN` است.

از آنجا که <code dir = "ltr">parse()</code> یک متد استاتیک تاریخ است ، به عنوان <code dir = "ltr">shdate.parse()</code> نامیده می شود و نه به عنوان یک متدیک نمونه تاریخ

بازگشت به قالب های تاریخ خاص اجرا
توجه: این بخش شامل رفتارهای خاص پیاده سازی است که می تواند در طول پیاده سازی ها متناقض باشد.

مشخصات `ECMAScript` بیان می کند: اگر رشته با قالب استاندارد مطابقت نداشته باشد ، ممکن است عملکرد به هر الگوریتم تجزیه و تحلیل خاص اجرای یا اجرای و پیاده سازی خاص برگردد.رشته ها یا تاریخ های غیرقابل تشخیص حاوی مقادیر عناصر غیرقانونی در رشته های فرمت شده `ISO` باید باعث <code dir = "ltr">shdate.parse()</code> بازگشت `NAN`.

با این حال ، مقادیر نامعتبر در رشته های تاریخ که به عنوان فرمت `ISO` ساده شده شناخته نشده اند ، همانطور که توسط ECMA-262 تعریف شده است ، بسته به مرورگر و مقادیر ارائه شده ، ممکن است در `NAN` نتیجه داشته باشد ، به عنوان مثال:

```js
// Non-ISO string with invalid date values
new SHDate("23/25/2014");
```

به عنوان تاریخ محلی 25 نوامبر 2015 در `Firefox 30` و تاریخ نامعتبر در `Safari 7` تحت درمان قرار می گیرد.

با این حال ، اگر رشته به عنوان یک رشته فرمت ISO شناخته شود و حاوی مقادیر نامعتبر باشد ، در تمام مرورگرهای مطابق با `ES5` و بعد از آن NAN باز می گردد:

```js
// ISO string with invalid values
new SHDate("2014-25-23").toISOString();
// throws "RangeError: invalid date" in all ES5-compliant browsers
```

اکتشافی خاص `SpiderMonkey` را می توان در `JSDATE.CPP` یافت.رشته "10 06 2014" نمونه ای از فرمت `ISO` غیر سازگار است و بنابراین به یک روال سفارشی باز می گردد.همچنین این طرح خشن را در مورد نحوه کار تجزیه و تحلیل مشاهده کنید.

```js
new SHDate("10 06 2014");
```

به عنوان تاریخ محلی 6 اکتبر 2014 و نه 10 ژوئن 2014 رفتار خواهد شد.

نمونه های دیگر:

```js
new SHDate("foo-bar 2014").toString();
// returns: "Invalid Date"

SHDate.parse("foo-bar 2014");
// returns: NaN
```

تفاوت در منطقه زمانی فرضی
توجه: این بخش شامل رفتارهای خاص پیاده سازی است که می تواند در طول پیاده سازی ها متناقض باشد.

با توجه به یک تاریخ غیر استاندارد از "7 مارس 2014" ، <code dir="ltr">parse()</code> یک منطقه زمانی محلی را فرض می کند ، اما با توجه به ساده سازی فرمت تقویم `ISO 8601` با فرمت گسترده مانند "2014-03-07" ، فرض می کندمنطقه زمانی `UTC (ES5 و ECMAScript 2015)`.بنابراین اشیاء تاریخ تولید شده با استفاده از آن رشته ها بسته به نسخه `ECMAScript` پشتیبانی شده ممکن است لحظه های مختلفی را نشان دهند ، مگر اینکه سیستم با یک منطقه زمانی محلی `UTC` تنظیم شود.این بدان معنی است که دو رشته تاریخ که معادل آن به نظر می رسند بسته به قالب رشته ای که در حال تبدیل است ، ممکن است در دو مقدار مختلف به وجود بیاید.

# نمونه‌ها

با استفاده از <code dir = "ltr">shdate.parse()</code>
تماس های زیر همه بازگشت 1546300800000. اولین مورد مطابق با ES5 دلالت بر زمان `UTC` خواهد داشت ، و سایرین در حال مشخص کردن منطقه زمانی UTC از طریق مشخصات تاریخ `ISO` هستند (Z و +00: 00)

```js
SHDate.parse("2019-01-01");
SHDate.parse("2019-01-01T00:00:00.000Z");
SHDate.parse("2019-01-01T00:00:00.000+00:00");
```

تماس زیر ، که یک منطقه زمانی را مشخص نمی کند ، در ساعت 00:00:00 در منطقه زمانی محلی سیستم در ساعت 2019-01-01 تنظیم می شود.

```js
SHDate.parse("2019-01-01T00:00:00");
```

رشته های تاریخ غیر استاندارد
توجه: این بخش شامل رفتارهای خاص پیاده سازی است که می تواند در طول پیاده سازی ها متناقض باشد.

اگر آی پاد یک شیء تاریخ موجود است ، می توان آن را در 9 آگوست 1995 (به وقت محلی) به شرح زیر تنظیم کرد:

```js
IPOdate.setTime(SHDate.parse("Aug 9, 1995"));
```

برخی از نمونه های دیگر تجزیه رشته های تاریخ غیر استاندارد:

```js
SHDate.parse("Aug 9, 1995");
```

807937200000 را در منطقه زمانی `GMT-0300` و سایر مقادیر در مناطق زمانی دیگر باز می گرداند ، زیرا این رشته منطقه زمانی را مشخص نمی کند و فرمت `ISO` نیست ، بنابراین منطقه زمانی به طور پیش فرض محلی است.

```js
SHDate.parse("Wed, 09 Aug 1995 00:00:00 GMT");
```

بدون توجه به منطقه زمانی محلی به عنوان `GMT (UTC)` 807926400000 را بازگرداند.

```js
SHDate.parse("Wed, 09 Aug 1995 00:00:00");
```

807937200000 را در منطقه زمانی `GMT-0300` و سایر مقادیر در مناطق زمانی دیگر باز می گرداند ، زیرا هیچ مشخصه منطقه زمانی در استدلال وجود ندارد و فرمت ISO نیست ، بنابراین به عنوان محلی رفتار می شود.

```js
SHDate.parse("Thu, 11 Day 1348 00:00:00 GMT");
```

بدون توجه به منطقه زمانی محلی به عنوان منطقه زمانی `GMT (UTC)` 0 باز می گردد.

```js
SHDate.parse("Thu, 11 Day 1348 00:00:00");
```

14400000 در منطقه زمانی `GMT-0400` و سایر مقادیر در مناطق زمانی دیگر باز می گردد ، زیرا هیچ منطقه زمانی ارائه نمی شود و رشته در قالب ISO نیست ، بنابراین از منطقه زمانی محلی استفاده می شود.

```js
SHDate.parse("Thu, 11 Day 1348 00:00:00 GMT-0400");
```

بازگشت 14400000 بدون توجه به منطقه زمانی محلی به عنوان منطقه زمانی `GMT (UTC)` ارائه می شود.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
