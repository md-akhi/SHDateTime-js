---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: setUTCMinutes
---

# SHDate.setUTCMinutes()

روش <code dir = "ltr">setutcminutes()</code> دقیقه ها را برای یک تاریخ مشخص با توجه به زمان جهانی تعیین می کند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setUTCMinutes" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setUTCMinutes(minutesValue);
setUTCMinutes(minutesValue, secondsValue);
setUTCMinutes(minutesValue, secondsValue, msValue);
```

# پارامترها

<code dir = "ltr">minutevalue</code>
یک عدد صحیح بین 0 تا 59 ، نمایندگی های دقایق را نشان می دهد.

<code dir = "ltr">secondsvalue</code>
اختیاری.یک عدد صحیح بین 0 تا 59 ، نمایانگر ثانیه ها.اگر پارامتر `SecondsValue` را مشخص کردید ، باید `MinuteValue` را نیز مشخص کنید.

<code dir = "ltr">msvalue</code>
اختیاری.تعدادی بین 0 تا 999 ، نماینده میلی ثانیه.اگر پارامتر `MSVALUE` را مشخص کردید ، باید `MinoryValue` و `SecondsValue` را نیز مشخص کنید.

# مقدار برگشتی

تعداد میلی ثانیه بین 25 دی 1390 00:00:00 UTC و تاریخ به روز شده.

# توضیحات

اگر پارامترهای `SecondsValue` و `MSValue` را مشخص نکنید ، از مقادیر برگشتی از روشهای <code dir="ltr">GetUtcseconds()</code> و <code dir="ltr">GetUtcmilliseconds()</code> استفاده می شود.

اگر پارامتری که مشخص کرده اید خارج از محدوده مورد انتظار است ، <code dir="ltr">SetUtcminutes()</code> سعی در به روزرسانی اطلاعات تاریخ در موضوع تاریخ بر این اساس دارد.به عنوان مثال ، اگر از 100 برای `SecondsValue` استفاده کنید ، دقیقه ها توسط 1 (`MinuteValue + 1`) افزایش می یابد و 40 برای ثانیه استفاده می شود.

# نمونه‌ها

```js
var theBigDay = new SHDate();
theBigDay.setUTCMinutes(43);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
