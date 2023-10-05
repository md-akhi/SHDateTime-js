---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: UTC
---

# SHDate.UTC()

روش <code dir = "ltr">shdate.utc()</code> پارامترهای مشابه سازنده تاریخ را می پذیرد ، اما آنها را به عنوان `UTC` رفتار می کند.این تعداد میلی ثانیه از 11 `Dey 1348 ، 00:00:00 UTC` را برمی گرداند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=UTC" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
SHDate.UTC(year);
SHDate.UTC(year, month);
SHDate.UTC(year, month, day);
SHDate.UTC(year, month, day, hour);
SHDate.UTC(year, month, day, hour, minute);
SHDate.UTC(year, month, day, hour, minute, second);
SHDate.UTC(year, month, day, hour, minute, second, millisecond);
```

# year

ارزش عدد صحیح به نمایندگی از سال.

مقادیر 0 تا 99 نقشه به سالهای 1300 تا 1399. تمام مقادیر دیگر سال واقعی هستند.مثال را ببینید.

<code dir = "ltr"> ماه </code> اختیاری
یک عدد صحیح بین 0 (فارواردین) و 11 (`ESPAND`) نماینده ماه.از آنجا که `ECMAScript 2017` در صورت حذف به 0 پیش فرض می شود.(تا زمان `ECMAScript 2016` ، ماه یک پارامتر مورد نیاز بود. از نظر ES2017 ، دیگر نیست.)

<code dir = "ltr"> روز </code> اختیاری
یک عدد صحیح بین 1 تا 31 به نمایندگی از روز ماه.در صورت حذف ، پیش فرض به 1.

<code dir = "ltr"> ساعت </code> اختیاری
یک عدد صحیح بین 0 تا 23 نشان دهنده ساعت است.در صورت حذف ، پیش فرض 0.

<code dir = "ltr"> دقیقه </code> اختیاری
یک عدد صحیح بین 0 تا 59 نشان دهنده دقیقه است.در صورت حذف ، پیش فرض 0.

<code dir = "ltr"> دوم </code> اختیاری
یک عدد صحیح بین 0 تا 59 به نمایندگی از ثانیه.در صورت حذف ، پیش فرض 0.

<code dir = "ltr"> millisecond </code> اختیاری
یک عدد صحیح بین 0 تا 999 نماینده میلی ثانیه.در صورت حذف ، پیش فرض 0.

# مقدار برگشتی

تعدادی که تعداد میلی ثانیه را برای تاریخ مشخص از 11 دی 1348 ، 00:00:00 ، `UTC` نشان می دهد.

# توضیحات

<code dir = "ltr"> utc () </code> پارامترهای تاریخ و زمان کاما را می گیرد و تعداد میلی ثانیه را بین 11 دی 1348 ، 00:00:00 ، زمان جهانی و تاریخ و زمان مشخص شده باز می گرداند.
Years between 0 and 99 are converted to a year in the 14th century (1348 + year). For example, 95 is converted to the year 1395.
سالهای بین 0 تا 99 در قرن چهاردهم (1348 + سال) به یک سال تبدیل می شود.به عنوان مثال ، 95 به سال 1395 تبدیل می شود.The U<code dir="ltr"></code>TC() method differs from the Date constructor in two ways:
rrowش u <code dir = "ltr"> </code> tc () ba saزndhe tharیخ be adw rruش methahahahttette:زمان.
<code dir = "ltr"> shdate.utc () </code> به جای ایجاد یک شیء تاریخ ، مقدار زمان را به عنوان یک عدد برمی گرداند.
اگر یک پارامتر خارج از محدوده مورد انتظار باشد ، روش <code dir = "ltr"> utc () </code> پارامترهای دیگر را برای قرار دادن مقدار به روز می کند.به عنوان مثال ، اگر 15 برای ماه استفاده شود ، سال توسط 1 (سال + 1) افزایش می یابد و 3 برای ماه استفاده می شود.
<code dir="ltr">UTC ()</code> یک روش استاتیک تاریخ است ، بنابراین به عنوان <code dir = "ltr"> shdate.utc () </code> نامیده می شود و نه به عنوان یک روش یک نمونه تاریخ.# نمونه‌ها

با استفاده از <code dir = "ltr">shdate.utc()</code>
بیانیه زیر با استدلال هایی که به عنوان `UTC` به جای محلی رفتار می شود ، یک شیء تاریخ ایجاد می کند:

```js
let utcDate = new SHDate(SHDate.UTC(1348, 9, 11, 0, 0, 0));
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC

```

```
