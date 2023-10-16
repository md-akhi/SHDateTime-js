---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: setMonth
---

# SHDate.setMonth()

متد <code dir="ltr">setMonth()</code> ماه را برای تاریخ مشخص با توجه به سال تعیین شده تعیین می کند.
امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setMonth" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setMonth(monthValue);
setMonth(monthValue, dayValue);
```

# پارامترها

<code dir = "ltr">moonvalue</code>
یک عدد صحیح مبتنی بر صفر که نمایانگر ماه جبران سال از ابتدای سال است.بنابراین ، 0 نمایانگر فارواردین ، 11 نماینده `Esfand` ، -1 نمایانگر `Esfand` سال گذشته است ، و 12 نماینده فارواردین سال بعد است.

<code dir = "ltr">dayvalue</code>
اختیاری.یک عدد صحیح از 1 تا 31 ، نمایانگر روز ماه است.

# مقدار برگشتی

تعداد میلی ثانیه بین 25 دی 1390 00:00:00 `UTC` و تاریخ به روز شده.

# توضیحات

اگر پارامتر DayValue را مشخص نکنید ، از مقدار برگشتی از متد <code dir="ltr">GetDate()</code> استفاده می شود.

اگر پارامتری که مشخص کرده اید خارج از محدوده مورد انتظار است ، <code dir="ltr">SetMonth()</code> سعی می کند اطلاعات تاریخ را در شیء تاریخ بر این اساس به روز کند.به عنوان مثال ، اگر از 15 برای `MothorValue` استفاده کنید ، سال توسط 1 افزایش می یابد و 3 برای ماه استفاده می شود.

روز فعلی ماه تأثیر بر رفتار این متد خواهد داشت.از نظر مفهومی تعداد روزهای داده شده در روز فعلی ماه را به روز اول ماه جدید که به عنوان پارامتر مشخص شده است ، اضافه می کند تا تاریخ جدید را برگرداند.به عنوان مثال ، اگر ارزش فعلی 31 آگوست 2016 باشد ، فراخوانی `SetMonth` با ارزش 1 2 مارس 2016 باز می گردد. این به این دلیل است که در فوریه 2016 29 روز داشت.

# نمونه‌ها

با استفاده از <code dir="ltr">setMonth()</code>

```js
var theBigDay = new SHDate();
theBigDay.setMonth(6);

//Watch out for end of month transitions
var endOfMonth = new SHDate(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); //Wed Mar 02 2016 00:00:00
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth

```

```
