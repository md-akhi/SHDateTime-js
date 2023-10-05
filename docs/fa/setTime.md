---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: setTime
---

# SHDate.setTime()

روش <code dir = "ltr"> settime () </code> شیء تاریخ را به زمان نمایش داده شده توسط تعدادی میلی ثانیه از 11 دی 1348 ، 00:00:00 UTC تنظیم می کند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setTime" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setTime(timeValue);
```

# پارامترها

<code dir="ltr">timeValue</code>
یک عدد صحیح به نمایندگی از تعداد میلی ثانیه از 25 Dey 1390 ، 00:00:00 UTC.

# مقدار برگشتی

تعداد میلی ثانیه بین 25 Dey 1390 00:00:00 UTC و تاریخ به روز شده (به طور مؤثر ، ارزش استدلال).

# توضیحات

برای کمک به اختصاص یک تاریخ و زمان به یک موضوع تاریخ دیگر ، از روش <code dir = "ltr"> settime () </code> استفاده کنید.

# نمونه‌ها

```js
var theBigDay = new SHDate("July 1, 1999");
var sameAsBigDay = new SHDate();
sameAsBigDay.setTime(theBigDay.getTime());
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime
