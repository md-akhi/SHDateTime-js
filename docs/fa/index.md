---
layout: default
title: Another page
description: This is just another page
---

# SHDate

اشیاء تاریخ جاوا اسکریپت یک لحظه در زمان را در قالبی مستقل از پلتفرم نشان می دهند. اشیاء تاریخ حاوی یک عدد هستند که نشان دهنده میلی ثانیه از 11 دی 1348 UTC است.

توجه: TC39 روی Temporal، یک API جدید تاریخ/زمان کار می‌کند. اطلاعات بیشتر در مورد آن را در وبلاگ Igalia بخوانید. هنوز برای استفاده تولید آماده نیست!

# شرح

### دوره و مهرهای زمانی ECMAScript

تاریخ جاوا اسکریپت اساساً به عنوان تعداد میلی ثانیه هایی است که از دوره ECMAScript گذشته است که به عنوان 11 دی 1348، UTC (معادل دوره یونیکس) تعریف می شود.

توجه: مهم است که به خاطر داشته باشید که در حالی که مقدار زمان در قلب شیء Date UTC است، روش‌های اساسی برای واکشی تاریخ و زمان یا اجزای آن همگی در منطقه زمانی محلی (یعنی سیستم میزبان) و افست کار می‌کنند.

لازم به ذکر است که حداکثر Date با حداکثر عدد صحیح امن یکسان نیست (Number.MAX_SAFE_INTEGER 9,007,199,254,740,991 است). در عوض، در ECMA-262 تعریف شده است که حداکثر ± 100,000,000 (صد میلیون) روز نسبت به 11 دی 1348 UTC (یعنی 20 آوریل 271821 قبل از میلاد تا 13 سپتامبر 275760 میلادی) می تواند با استاندارد D نشان داده شود. جسم (معادل ± 8,640,000,000,000,000 میلی ثانیه).

### تبدیل فرمت تاریخ و منطقه زمانی

روش های مختلفی برای به دست آوردن تاریخ در قالب های مختلف و همچنین انجام تبدیل منطقه زمانی وجود دارد. به ویژه توابعی مفید هستند که تاریخ و زمان را در زمان هماهنگ جهانی (UTC)، زمان استاندارد جهانی تعریف شده توسط استاندارد جهانی زمان، خروجی می‌دهند. (این زمان از نظر تاریخی به عنوان زمان گرینویچ شناخته می شود، زیرا UTC در امتداد نصف النهار واقع شده است که لندن و گرینویچ نزدیک آن را در بریتانیا شامل می شود.) دستگاه کاربر زمان محلی را ارائه می دهد.

علاوه بر روش هایی برای خواندن و تغییر اجزای جداگانه تاریخ و زمان محلی (مانند getDay() و setHours())، نسخه هایی از همان روش ها نیز وجود دارد که تاریخ و زمان را با استفاده از UTC می خوانند و دستکاری می کنند (مانند getUTCDay). () و setUTCHours()).

# Constructor

```javascript
SHDate();
```

هنگامی که به عنوان یک تابع فراخوانی می شود، نمایش رشته ای از تاریخ و زمان فعلی را دقیقاً همانطور که SHDate().toString()» جدید برمی گرداند.

```javascript
new SHDate();
```

هنگامی که به عنوان سازنده فراخوانی می شود، یک شی «SHDate جدید» را برمی گرداند.

# Static methods

```javascript
SHDate.now();
```

مقدار عددی مربوط به زمان فعلی را برمی‌گرداند - تعداد میلی‌ثانیه‌های سپری شده از 11 دی 1348 ساعت 00:00:00 UTC، با نادیده گرفتن ثانیه‌های کبیسه.

```javascript
SHDate.parse(); // Not Impl
```

نمایش رشته ای از تاریخ را تجزیه می کند و تعداد میلی ثانیه ها را از 11 دی 1348، 00:00:00 UTC، با نادیده گرفتن ثانیه های کبیسه برمی گرداند.

     توجه: تجزیه رشته‌ها با «SHDate.parse» به دلیل تفاوت‌ها و ناسازگاری‌های مرورگر به شدت ممنوع است.

```javascript
SHDate.UTC();
```

پارامترهای مشابه طولانی‌ترین شکل سازنده (یعنی 2 تا 7) را می‌پذیرد و تعداد میلی‌ثانیه‌ها را از 11 دی 1348، 00:00:00 UTC، با نادیده گرفتن ثانیه‌های کبیسه برمی‌گرداند.

# Instance methods

```js
SHDate.getDate();
```

روز ماه (1–31) را برای تاریخ مشخص شده بر اساس زمان محلی برمی‌گرداند.

```js
SHDate.getDay();
```

روز هفته (0-6) را برای تاریخ مشخص شده بر اساس زمان محلی برمی گرداند.

```js
SHDate.getFullYear();
```

سال (4 رقم برای سالهای 4 رقمی) تاریخ مشخص شده را بر اساس زمان محلی برمی گرداند.

```js
SHDate.getHours();
```

ساعت (0–23) را در تاریخ مشخص شده بر اساس زمان محلی برمی‌گرداند.

```js
SHDate.getMilliseconds();
```

میلی ثانیه (0–999) را در تاریخ مشخص شده بر اساس زمان محلی برمی گرداند.

```js
SHDate.getMinutes();
```

دقیقه ها (0–59) را در تاریخ مشخص شده بر اساس زمان محلی برمی گرداند.

```js
SHDate.getMonth();
```

ماه (0–11) را در تاریخ مشخص شده بر اساس زمان محلی برمی‌گرداند.

```js
SHDate.getSeconds();
```

ثانیه ها (0–59) را در تاریخ مشخص شده بر اساس زمان محلی برمی گرداند.

```js
SHDate.getTime();
```

مقدار عددی تاریخ مشخص شده را به عنوان تعداد میلی ثانیه از 11 دی 1348، 00:00:00 UTC برمی‌گرداند. (مقادیر منفی برای زمان های قبلی برگردانده می شوند.)

```js
SHDate.getTimezoneOffset();
```

افست منطقه زمانی را در دقیقه برای منطقه فعلی برمی‌گرداند.

```js
SHDate.getUTCDate();
```

روز (تاریخ) ماه (1-31) را در تاریخ مشخص شده مطابق با زمان جهانی برمی‌گرداند.

```js
SHDate.getUTCDay();
```

روز هفته (0-6) را در تاریخ مشخص شده مطابق با زمان جهانی برمی‌گرداند.

```js
SHDate.getUTCFullYear();
```

سال (4 رقم برای سالهای 4 رقمی) را در تاریخ مشخص شده مطابق با زمان جهانی برمی گرداند.

```js
SHDate.getUTCHours();
```

ساعات (0-23) را در تاریخ مشخص شده مطابق با زمان جهانی برمی‌گرداند.

```js
SHDate.getUTCMilliseconds();
```

میلی ثانیه (0–999) را در تاریخ مشخص شده با توجه به زمان جهانی برمی‌گرداند.

```js
SHDate.getUTCMinutes();
```

دقیقه ها (0-59) را در تاریخ مشخص شده مطابق با زمان جهانی برمی گرداند.

```js
SHDate.getUTCMonth();
```

ماه (0–11) را در تاریخ مشخص شده مطابق با زمان جهانی برمی‌گرداند.

```js
SHDate.getUTCSseconds();
```

ثانیه های (0-59) را در تاریخ مشخص شده بر اساس زمان جهانی برمی گرداند.

```js
SHDate.setDate();
```

روز ماه را برای یک تاریخ مشخص با توجه به زمان محلی تنظیم می کند.

```js
SHDate.setFullYear();
```

سال کامل (مثلاً 4 رقم برای سالهای 4 رقمی) را برای یک تاریخ مشخص بر اساس زمان محلی تنظیم می کند.

```js
SHDate.setHours();
```

ساعت ها را برای یک تاریخ مشخص با توجه به زمان محلی تنظیم می کند.

```js
SHDate.setMilliseconds();
```

میلی ثانیه ها را برای یک تاریخ مشخص با توجه به زمان محلی تنظیم می کند.

```js
SHDate.setMinutes();
```

دقیقه را برای یک تاریخ مشخص با توجه به زمان محلی تنظیم می کند.

```js
SHDate.setMonth();
```

ماه را برای یک تاریخ مشخص با توجه به زمان محلی تنظیم می کند.

```js
SHDate.setSeconds();
```

ثانیه ها را برای یک تاریخ مشخص با توجه به زمان محلی تنظیم می کند.

```js
SHDate.setTime();
```

شیء SHDate را بر روی زمانی تنظیم می کند که با تعدادی میلی ثانیه از 11 دی 1348، 00:00:00 UTC نشان داده شده است. برای دفعات قبل از اعداد منفی استفاده کنید.

```js
SHDate.setUTCDate();
```

روز ماه را برای یک تاریخ مشخص با توجه به زمان جهانی تنظیم می کند.

```js
SHDate.setUTCFullYear();
```

سال کامل (به عنوان مثال 4 رقم برای سالهای 4 رقمی) را برای یک تاریخ مشخص مطابق با زمان جهانی تنظیم می کند.

```js
SHDate.setUTCHours();
```

ساعت را برای یک تاریخ مشخص با توجه به زمان جهانی تنظیم می کند.

```js
SHDate.setUTCMilliseconds();
```

میلی ثانیه ها را برای یک تاریخ مشخص با توجه به زمان جهانی تنظیم می کند.

```js
SHDate.setUTCMinutes();
```

دقیقه را برای یک تاریخ مشخص با توجه به زمان جهانی تنظیم می کند.

```js
SHDate.setUTCMonth();
```

ماه را برای یک تاریخ مشخص با توجه به زمان جهانی تنظیم می کند.

```js
SHDate.setUTCSseconds();
```

ثانیه ها را برای یک تاریخ مشخص با توجه به زمان جهانی تنظیم می کند.

```js
SHDate.toDateString();
```

بخش «تاریخ» از SHDate را به‌عنوان رشته‌ای قابل خواندن برای انسان مانند «پنج‌شنبه ۱۲ آوریل ۲۰۱۸» برمی‌گرداند.

```js
SHDate.toISOSstring();
```

تاریخ را به رشته ای بر اساس فرمت توسعه یافته ISO 8601 تبدیل می کند.

```js
SHDate.toJSON();
```

رشته ای را برمی گرداند که نشان دهنده SHDate با استفاده از `toISOSstring()` است. برای استفاده توسط `JSON.stringify()` در نظر گرفته شده است.

```js
SHDate.toGMTString();
```

رشته‌ای را برمی‌گرداند که نشان‌دهنده SHDate بر اساس منطقه زمانی GMT (UTC) است. به جای آن از «toUTCString()» استفاده کنید.

```js
SHDate.toLocaleDateString();
```

رشته‌ای را با نمایشی حساس از قسمت تاریخ این تاریخ بر اساس تنظیمات سیستم برمی‌گرداند.

```js
SHDate.toLocaleString();
```

رشته ای را با نمایشی حساس به محلی از این تاریخ برمی گرداند. روش «Object.toLocaleString()» را لغو می کند.

```js
SHDate.toLocaleTimeString();
```

رشته ای را با محلی-
نمایش حساس بخش زمانی این تاریخ، بر اساس تنظیمات سیستم.

```js
SHDate.toString();
```

رشته ای را برمی گرداند که نشان دهنده شیء SHDate مشخص شده است. روش «Object.toString()» را لغو می کند.

```js
SHDate.toTimeString();
```

بخش "زمان" از SHDate را به عنوان یک رشته قابل خواندن توسط انسان برمی‌گرداند.

```js
SHDate.toUTCString();
```

تاریخ را با استفاده از منطقه زمانی UTC به رشته تبدیل می کند.

```js
SHDate.valueOf();
```

مقدار اولیه یک شی Date را برمی‌گرداند. روش «Object.valueOf()» را لغو می کند.

# Examples

چندین روش برای ایجاد یک شی Date
مثال‌های زیر چندین راه برای ایجاد تاریخ جاوا اسکریپت را نشان می‌دهند:

     توجه: تجزیه رشته های تاریخ با سازنده Date (و SHDate.parse، آنها معادل هستند) به دلیل تفاوت ها و ناهماهنگی های مرورگر به شدت ممنوع است.

```js
let today = new SHDate();
// let birthday = new SHDate("26 Azar, 1374 03:24:00");
// let birthday = new SHDate("1374-08-26T03:24:00");
let birthday = new SHDate(1374, 8, 26); // the month is 0-indexed
let birthday = new SHDate(1374, 8, 26, 3, 24, 0);
let birthday = new SHDate(628021800000); // passing epoch timestamp
```

برای دریافت تاریخ، ماه و سال یا زمان

```js
const date = new SHDate();
const [month, day, year] = [
	date.getMonth(),
	date.getDate(),
	date.getFullYear()
];
const [hour, minutes, seconds] = [
	date.getHours(),
	date.getMinutes(),
	date.getSeconds()
];
```

تفسیر سالهای دو رقمی
"New SHDate()" رفتار نامطلوب و متناقض میراثی را با مقادیر سال دو رقمی نشان می دهد. به طور خاص، هنگامی که یک فراخوانی n`SHDate()` یک مقدار سال دو رقمی داده می شود، آن مقدار سال به عنوان یک سال تحت اللفظی در نظر گرفته نمی شود و همانطور که هست استفاده نمی شود، بلکه به عنوان یک افست نسبی تفسیر می شود - در برخی موارد به عنوان یک جبران از سال 1900، اما در موارد دیگر، به عنوان جبران از سال 2000.

```js
let date = new SHDate(1376, 11); // Sun 01 Esf 1376 00:00:00 GMT+0000 (GMT)
let date = new SHDate(1370, 11); // Wed 01 Esf 1370 00:00:00 GMT+0000 (GMT)
let date = new SHDate("1400/12/10"); // Tue 10 Esf 1400 00:00:00 GMT+0000 (GMT)

// Legacy method; always interprets two-digit year values as relative to 1900
date.setFullYear(1376);
date.toString(); // Sun 01 Esf 1376 00:00:00 GMT+0000 (GMT)
date.setFullYear(1300);
date.toString(); // Wed 01 Esf 1300 00:00:00 GMT+0000 (GMT)
```

بنابراین، برای ایجاد و دریافت تاریخ‌های بین سال‌های 0 و 99، به جای آن از متدهای ترجیحی setFullYear() و getFullYear() استفاده کنید.

```js
// Preferred method; never interprets any value as being a relative offset,
// but instead uses the year value as-is
date.setFullYear(98);
date.getFullYear(); // 98 (not 1398)
date.setFullYear(22);
date.getFullYear(); // 22 (not 1322, not 1422)
```

محاسبه زمان سپری شده
مثال های زیر نحوه تعیین زمان سپری شده بین دو تاریخ جاوا اسکریپت را در میلی ثانیه نشان می دهد.

با توجه به طول های متفاوت روزها (به دلیل تغییر در تابستان)، ماه ها و سال ها، بیان زمان سپری شده در واحدهای بیشتر از ساعت، دقیقه و ثانیه نیاز به پرداختن به تعدادی از مسائل دارد و باید قبل از اقدام به طور کامل تحقیق شود.

```js
// Using Date objects
let start = SHDate.now();

// The event to time goes here:
doSomethingForALongTime();
let end = SHDate.now();
let elapsed = end - start; // elapsed time in milliseconds

// Using built-in methods
let start = new SHDate();

// The event to time goes here:
doSomethingForALongTime();
let end = new SHDate();
let elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds

// To test a function and get back its return
function printElapsedTime(fTest) {
	let nStartTime = SHDate.now(),
		vReturn = fTest(),
		nEndTime = SHDate.now();

	console.log(`Elapsed time: ${String(nEndTime - nStartTime)} milliseconds`);
	return vReturn;
}

let yourFunctionReturn = printElapsedTime(yourFunction);
```

توجه: در مرورگرهایی که از ویژگی زمان با وضوح بالا Web Performance API پشتیبانی می‌کنند، Performance.now() می‌تواند اندازه‌گیری‌های مطمئن‌تر و دقیق‌تری از زمان سپری شده را نسبت به SHDate.now () ارائه دهد.

تعداد ثانیه‌های پس از ECMAScript Epoch را دریافت کنید

````js
let seconds = Math.floor(SHDate.now() / 1000);
```
در این مورد، مهم است که فقط یک عدد صحیح را برگردانید - بنابراین یک تقسیم ساده انجام نمی دهد. همچنین مهم است که فقط ثانیه های واقعی سپری شده را برگردانید. (به همین دلیل است که این کد از Math.floor() و نه Math.round() استفاده می کند.)

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
````

<div dir=rtl>
  
## به نام خدا

تاریخ و زمان گاهشماری هجری شمسی(هجری خورشیدی)

[![GitHub license](https://img.shields.io/github/license/md-akhi/SHDateTime-js)](https://github.com/md-akhi/SHDateTime-js/blob/dev/LICENSE)
[![GitHub version release](https://img.shields.io/github/v/release/md-akhi/SHDateTime-js?color=green)](https://github.com/md-akhi/SHDateTime-js/releases)
[![GitHub version dev](https://img.shields.io/github/v/tag/md-akhi/SHDateTime-js)](https://github.com/md-akhi/SHDateTime-js/tags)
[![ workflow test](https://github.com/md-akhi/SHDateTime-js/actions/workflows/test.yaml/badge.svg?branch=dev)](https://github.com/md-akhi/SHDateTime-js/actions)
![ workflow publish](https://github.com/md-akhi/SHDateTime-js/actions/workflows/publish.yaml/badge.svg?branch=main)

# زبان

- [English](../en/README) - [فارسی](../fa/README)

## نحوه نصب

```bash
 npm i shdate
```

## نحوه استفاده

- ES Modules (ESM):

```javascript
import SHDate from "shdate";
var date = new SHDate();
```

- CommonJS (CJS):

```javascript
const SHDate = require("shdate").default;
var date = new SHDate();
```

- TypeScript (TS):

```TypeScript
const SHDate = require('shdate');
// OR
import SHDate from 'shdate';

var date = new SHDate();
```

- ES Modules برای مرورگر:

```html
<script type="module">
	import SHDate from "shdate";
	var date = new SHDate();
</script>
```

- سمت کاربر برای مرورگر:

```html
<script
	type="text/javascript"
	src="/path/to/shdate/dist/browser/shdate.min.js"
></script>
<script>
	var date = new SHDate();
</script>
```

jsdrive:

```shell
https://cdn.jsdelivr.net/npm/shdate@latest/dist/browser/shdate.min.js
```

ubpkg:

```shell
https://unpkg.com/shdate@latest/dist/browser/shdate.min.js
```

### توجه

- اگر می‌خواهید از ماژول‌های ES در Node.js بدون transpiler استفاده کنید، باید `"type": "module"` را در `package.json` خود اضافه کنید یا پسوند فایل خود را از `.js` به `.mjs` تغییر دهید.

# اشیاء داخلی استاندارد

- SHDate

# constructor

- SHDate() constructor

# Methods

- \[@@toPrimitive\](): ( [en](https://md-akhi.github.io/SHDateTime-js/en/@@toPrimitive) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/@@toPrimitive) )

- getDate(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getDate) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getDate) )

- getDay(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getDay) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getDay) )

- getFullYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getFullYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getFullYear) )

- getHours(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getHours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getHours) )

- getMilliseconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getMilliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getMilliseconds) )

- getMinutes(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getMinutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getMinutes) )

- getMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getMonth) )

- getSeconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getSeconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getSeconds) )

- getTime()( [en](https://md-akhi.github.io/SHDateTime-js/en/getTime) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getTime) )

- getTimezoneOffset()( [en](https://md-akhi.github.io/SHDateTime-js/en/getTimezoneOffset) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getTimezoneOffset) )

- getUTCDate()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCDate) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCDate) )

- getUTCDay()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCDay) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCDay) )

- getUTCFullYear()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCFullYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCFullYear) )

- getUTCHours()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCHours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCHours) )

- getUTCMilliseconds()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCMilliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCMilliseconds) )

- getUTCMinutes()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCMinutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCMinutes) )

- getUTCMonth()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCMonth) )

- getUTCSeconds()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCSeconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCSeconds) )

- SHDate.now(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/now) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/now) )

- SHDate.parse(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/parse) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/parse) )

- setDate(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setDate) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setDate) )

- setDay: ( [en](https://md-akhi.github.io/SHDateTime-js/en/setDay) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setDay) )

- setFullYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setFullYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setFullYear) )

- setHours(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setHours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setHours) )

- setMilliseconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setMilliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setMilliseconds) )

- setMinutes(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setMinutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setMinutes) )

- setMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setMonth) )

- setSeconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setSeconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setSeconds) )

- setTime(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setTime) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setTime) )

- setUTCDate(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCDate) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCDate) )

- setUTCFullYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCFullYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCFullYear) )

- setUTCHours(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCHours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCHours) )

- setUTCMilliseconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCMilliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCMilliseconds) )

- setUTCMinutes(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCMinutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCMinutes) )

- setUTCMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCMonth) )

- setUTCSeconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCSeconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCSeconds) )

- toDateString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toDateString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toDateString) )

- toISOString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toISOString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toISOString) )

- toJSON(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toJSON) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toJSON) )

- toLocaleDateString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toLocaleDateString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toLocaleDateString) )

- toLocaleString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toLocaleString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toLocaleString) )

- toLocaleTimeString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toLocaleTimeString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toLocaleTimeString) )

- toString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toString) )

- toTimeString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toTimeString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toTimeString) )

- toUTCString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toUTCString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toUTCString) )

- SHDate.UTC(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/UTC) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/UTC) )

- valueOf(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/valueOf) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/valueOf) )

- format: ( [en](https://md-akhi.github.io/SHDateTime-js/en/format) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/format) )

- isLeapYear: ( [en](https://md-akhi.github.io/SHDateTime-js/en/isLeapYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/isLeapYear) )

</div>
