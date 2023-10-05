---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: setDate
---

# SHDate.setDate()

روش <code dir = "ltr"> setDate () </code> روز ماه یک نمونه تاریخ معین را بر اساس زمان محلی تغییر می دهد.

برای تغییر روز ماه برای یک نمونه تاریخ معین بر اساس زمان UTC ، از روش <code dir = "ltr"> setutcdate () </code> استفاده کنید.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setDate" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setDate(dayValue);
```

# پارامترها

<code dir = "ltr"> dayvalue </code>
یک عدد صحیح به نمایندگی از روز ماه.

# مقدار برگشتی

تعداد میلی ثانیه بین 25 Dey 1390 00:00:00 UTC و تاریخ داده شده (شیء تاریخ نیز در جای خود تغییر می کند).

# توضیحات

اگر DayValue خارج از محدوده مقادیر تاریخ برای ماه باشد ، <code dir="ltr">SetDate ()</code> شیء تاریخ را بر این اساس به روز می کند.

به عنوان مثال ، اگر 0 برای DayValue ارائه شود ، تاریخ به آخرین روز ماه قبل تعیین می شود.

اگر تعداد منفی برای DayValue ارائه شود ، تاریخ از آخرین روز ماه قبل شمارش به عقب تنظیم می شود.-1 منجر به تعیین تاریخ 1 روز قبل از آخرین روز ماه قبل خواهد شد.

# نمونه‌ها

با استفاده از <code dir="ltr">setDate ()</code>

```js
const theBigDay = new SHDate(1962, 6, 7, 12); // noon of 1962-07-07 (7th of July 1962, month is 0-indexed)
const theBigDay2 = new SHDate(theBigDay).setDate(24); // 1962-07-24 (24th of July 1962)
const theBigDay3 = new SHDate(theBigDay).setDate(32); // 1962-08-01 (1st of August 1962)
const theBigDay4 = new SHDate(theBigDay).setDate(22); // 1962-07-22 (22nd of July 1962)
const theBigDay5 = new SHDate(theBigDay).setDate(0); // 1962-06-30 (30th of June 1962)
const theBigDay6 = new SHDate(theBigDay).setDate(98); // 1962-10-06 (6th of October 1962)
const theBigDay7 = new SHDate(theBigDay).setDate(-50); // 1962-05-11 (11th of May 1962)
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate
