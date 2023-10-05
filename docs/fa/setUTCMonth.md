---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
---

# SHDate.setUTCMonth()

روش <code dir = "ltr"> setutcmonth () </code> ماه را برای تاریخ مشخص با توجه به زمان جهانی تعیین می کند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setUTCMonth" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setUTCMonth(monthValue);
setUTCMonth(monthValue, dayValue);
```

# پارامترها

<code dir = "ltr"> moonvalue </code>
یک عدد صحیح بین 0 تا 11 ، نمایانگر ماههای فارواردین از طریق Esfand است.

<code dir = "ltr"> dayvalue </code>
اختیاری.یک عدد صحیح از 1 تا 31 ، نمایانگر روز ماه است.

# مقدار برگشتی

تعداد میلی ثانیه بین 25 دی 1390 00:00:00 UTC و تاریخ به روز شده.

# توضیحات

اگر پارامتر DayValue را مشخص نکنید ، از روش <code dir = "ltr"> getUtcdate () </code> بازگردانده شده است.

اگر پارامتری که مشخص کرده اید خارج از محدوده مورد انتظار است ، <Code DIR = "ltr"> setUtCmonth () </code> سعی می کند اطلاعات تاریخ را در شیء تاریخ بر این اساس به روز کند.به عنوان مثال ، اگر از 15 برای MothorValue استفاده کنید ، سال توسط 1 افزایش می یابد و 3 برای ماه استفاده می شود.

# نمونه‌ها

```js
var theBigDay = new SHDate();
theBigDay.setUTCMonth(11);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
