---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: setUTCSeconds
---

# SHDate.setUTCSeconds()

روش <code dir = "ltr">setutcseconds()</code> ثانیه ها را برای تاریخ مشخص با توجه به زمان جهانی تعیین می کند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setUTCSeconds" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setUTCSeconds(secondsValue);
setUTCSeconds(secondsValue, msValue);
```

# پارامترها

<code dir = "ltr">secondsvalue</code>
یک عدد صحیح بین 0 تا 59 ، نمایانگر ثانیه ها.

<code dir = "ltr">msvalue</code>
اختیاری.تعدادی بین 0 تا 999 ، نماینده میلی ثانیه.

# مقدار برگشتی

تعداد میلی ثانیه بین 25 دی 1390 00:00:00 `UTC` و تاریخ به روز شده.

# توضیحات

اگر پارامتر `MSValue` را مشخص نکردید ، از مقدار بازگشت از روش<code dir = "ltr">getUtCmilliseconds()</code> استفاده می شود.

اگر پارامتری که مشخص کرده اید خارج از محدوده مورد انتظار است ، <code dir = "ltr">setutcseconds()</code> سعی می کند اطلاعات تاریخ را در شیء تاریخ بر این اساس به روز کند.به عنوان مثال ، اگر از 100 برای `SecondsValue` استفاده کنید ، دقیقه های ذخیره شده در شیء تاریخ با 1 افزایش می یابد و 40 برای ثانیه استفاده می شود.

# نمونه‌ها

```js
var theBigDay = new SHDate();
theBigDay.setUTCSeconds(20);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
