# SHDate.setUTCFullYear()

روش <code dir = "ltr"> setUtcallyEar () </code> سال کامل را برای یک تاریخ مشخص با توجه به زمان جهانی تعیین می کند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setUTCFullYear(yearValue);
setUTCFullYear(yearValue, monthValue);
setUTCFullYear(yearValue, monthValue, dayValue);
```

# پارامترها
<code dir = "ltr"> yourValue </code>
یک عدد صحیح که ارزش عددی سال را مشخص می کند ، به عنوان مثال ، 1995.

<code dir = "ltr"> moonvalue </code>
اختیاری.یک عدد صحیح بین 0 تا 11 نماینده ماه های فارواردین از طریق Esfand.

<code dir = "ltr"> dayvalue </code>
اختیاری.یک عدد صحیح بین 1 تا 31 به نمایندگی از روز ماه.اگر پارامتر DayValue را مشخص کردید ، باید MustValue را نیز مشخص کنید.
# مقدار برگشتی

تعداد میلی ثانیه بین 25 دی 1390 00:00:00 UTC و تاریخ به روز شده.
# توضیحات
اگر پارامترهای MustValue و DayValue را مشخص نکنید ، از مقادیر برگشتی از روشهای GetUtCmonth () و GetUtcdate () استفاده می شود.

اگر پارامتری که مشخص کرده اید خارج از محدوده مورد انتظار است ، SetUtcallyEar () سعی در به روزرسانی سایر پارامترها و اطلاعات تاریخ در موضوع تاریخ بر این اساس دارد.به عنوان مثال ، اگر 15 را برای MustValue مشخص کنید ، سال توسط 1 (yourValue + 1) افزایش می یابد و 3 برای ماه استفاده می شود.
# نمونه‌ها

```js
var theBigDay = new SHDate();
theBigDay.setUTCFullYear(1997);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
