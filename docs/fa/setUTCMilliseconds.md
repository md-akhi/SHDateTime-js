---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: setUTCMilliseconds
---

# SHDate.setUTCMilliseconds()

روش <code dir = "ltr"> setutcmilliseconds()</code> `milliseconds` را برای یک تاریخ مشخص با توجه به زمان جهانی تعیین می کند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setUTCMilliseconds" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setUTCMilliseconds(millisecondsValue);
```

# پارامترها

<code dir="ltr">millisecondsValue</code>
تعدادی بین 0 تا 999 ، نماینده میلی ثانیه.

# مقدار برگشتی

تعداد میلی ثانیه بین 25 دی 1390 00:00:00 `UTC` و تاریخ به روز شده.

# توضیحات

اگر پارامتری که مشخص کرده اید خارج از محدوده مورد انتظار است ، <code dir = "ltr">setutcmilliseconds()</code> تلاش می کند تا اطلاعات تاریخ را در شیء تاریخ بر همین اساس به روز کند.به عنوان مثال ، اگر از 1100 برای `MillisecondsValue` استفاده می کنید ، ثانیه های ذخیره شده در شیء تاریخ توسط 1 افزایش می یابد و 100 برای میلی ثانیه استفاده می شود.

# نمونه‌ها

```js
var theBigDay = new SHDate();
theBigDay.setUTCMilliseconds(500);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
