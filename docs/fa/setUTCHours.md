---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
---

# SHDate.setUTCHours()

روش <code dir = "ltr"> setutchours () </code> ساعت را برای یک تاریخ مشخص با توجه به زمان جهانی تعیین می کند و تعداد میلی ثانیه را از 11 Dey 1348 00:00:00 UTC تا زمان نشان داده شده باز می گرداندنمونه تاریخ به روز شده.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setUTCHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setUTCHours(hoursValue);
setUTCHours(hoursValue, minutesValue);
setUTCHours(hoursValue, minutesValue, secondsValue);
setUTCHours(hoursValue, minutesValue, secondsValue, msValue);
```

# پارامترها

<code dir = "ltr"> hoursvalue </code>
یک عدد صحیح بین 0 تا 23 ، نمایانگر ساعت است.

<code dir = "ltr"> minutevalue </code>
اختیاری.یک عدد صحیح بین 0 تا 59 ، نمایندگی های دقایق را نشان می دهد.

<code dir = "ltr"> secondsvalue </code>
اختیاری.یک عدد صحیح بین 0 تا 59 ، نمایانگر ثانیه ها.اگر پارامتر SecondsValue را مشخص کردید ، باید MinuteValue را نیز مشخص کنید.

<code dir = "ltr"> msvalue </code>
اختیاری.تعدادی بین 0 تا 999 ، نماینده میلی ثانیه.اگر پارامتر MSVALUE را مشخص کردید ، باید MinoryValue و SecondsValue را نیز مشخص کنید.

# مقدار برگشتی

تعداد میلی ثانیه بین 11 Dey 1348 00:00:00 UTC و تاریخ به روز شده.

# توضیحات

اگر پارامترهای MinuteValue ، SecondsValue و MSValue را مشخص نکنید ، از مقادیر برگشتی از <code dir="ltr">GetUtcminutes ()</code> ، <code dir="ltr">GetUtcseconds ()</code> و <code dir="ltr">GetUtcmilliseconds ()</code> استفاده می شود.

اگر پارامتری که مشخص کرده اید خارج از محدوده مورد انتظار است ، <code dir="ltr">SetUtchours ()</code> سعی می کند اطلاعات تاریخ را در شیء تاریخ بر این اساس به روز کند.به عنوان مثال ، اگر از 100 برای SecondsValue استفاده کنید ، دقیقه ها توسط 1 (MinuteValue + 1) افزایش می یابد و 40 برای ثانیه استفاده می شود.

# نمونه‌ها

```js
var theBigDay = new SHDate();
theBigDay.setUTCHours(8);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
