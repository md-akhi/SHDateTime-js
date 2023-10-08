---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: setMilliseconds
---

# SHDate.setMilliseconds()

متد <code dir = "ltr">setMilliseconds()</code> میلی ثانیه را برای تاریخ مشخص با توجه به زمان محلی تعیین می کند.
امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setMilliseconds" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setMilliseconds(millisecondsValue);
```

# پارامترها

<code dir="ltr">millisecondsValue</code>
تعدادی بین 0 تا 999 ، نماینده میلی ثانیه.

# مقدار برگشتی

تعداد میلی ثانیه بین 25 دی 1390 00:00:00 `UTC` و تاریخ به روز شده.

# توضیحات

اگر شماره ای را در خارج از محدوده مورد انتظار مشخص کنید ، اطلاعات تاریخ موجود در شیء تاریخ بر این اساس به روز می شود.به عنوان مثال ، اگر 1005 را مشخص کنید ، تعداد ثانیه ها توسط 1 افزایش می یابد و 5 برای میلی ثانیه استفاده می شود.

# نمونه‌ها

با استفاده از <code dir="ltr">setmilliseconds()</code>

```js
var theBigDay = new SHDate();
theBigDay.setMilliseconds(100);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
