---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: setSeconds
---

# SHDate.setSeconds()

روش <code dir = "ltr"> setSeconds () </code> ثانیه ها را برای تاریخ مشخص با توجه به زمان محلی تعیین می کند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setSeconds" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setSeconds(secondsValue);
setSeconds(secondsValue, msValue);
```

# پارامترها

<code dir = "ltr"> secondsvalue </code>
یک عدد صحیح بین 0 تا 59 ، نمایانگر ثانیه ها.

<code dir = "ltr"> msvalue </code> اختیاری
اختیاری.تعدادی بین 0 تا 999 ، نماینده میلی ثانیه.

# مقدار برگشتی

تعداد میلی ثانیه بین 25 دی 1390 00:00:00 UTC و تاریخ به روز شده.

# توضیحات

اگر پارامتر MSValue را مشخص نکردید ، از مقدار بازگشت از روش <code dir = "ltr"> getMilliseconds () </code> استفاده می شود.

اگر پارامتری که مشخص کرده اید خارج از محدوده مورد انتظار است ، <Code dir = "ltr"> setSeconds () </code> سعی می کند اطلاعات تاریخ را در شیء تاریخ بر این اساس به روز کند.به عنوان مثال ، اگر از 100 برای SecondsValue استفاده کنید ، دقیقه های ذخیره شده در شیء تاریخ با 1 افزایش می یابد و 40 برای ثانیه استفاده می شود.

# نمونه‌ها

با استفاده از <code dir="ltr">setSeconds ()</code>

```js
var theBigDay = new SHDate();
theBigDay.setSeconds(30);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds
