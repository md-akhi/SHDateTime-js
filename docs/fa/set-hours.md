# SHDate.setHours()

روش <code dir = "ltr"> sethours () </code> ساعت ها را برای یک تاریخ مشخص با توجه به زمان محلی تعیین می کند و تعداد میلی ثانیه را از 11 دیا 1348 00:00:00 UTC تا زمان ارائه شده توسط باز می گرداندنمونه تاریخ به روز شده.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setHours(hoursValue);
setHours(hoursValue, minutesValue);
setHours(hoursValue, minutesValue, secondsValue);
setHours(hoursValue, minutesValue, secondsValue, msValue);
```

# پارامترها

<code dir = "ltr"> hoursvalue </code>
در حالت ایده آل ، یک عدد صحیح بین 0 تا 23 ، ساعت را نشان می دهد.اگر مقداری بیشتر از 23 ارائه شود ، DateTime با ساعات اضافی افزایش می یابد.

<code dir = "ltr"> minutevalue </code>
اختیاری.در حالت ایده آل ، یک عدد صحیح بین 0 تا 59 ، دقایقی را نشان می دهد.اگر مقداری بیشتر از 59 ارائه شود ، DateTime با دقایقی اضافی افزایش می یابد.

<code dir = "ltr"> secondsvalue </code>
اختیاری.در حالت ایده آل ، یک عدد صحیح بین 0 تا 59 ، نمایانگر ثانیه ها است.اگر مقداری بیشتر از 59 ارائه شود ، DateTime با ثانیه های اضافی افزایش می یابد.اگر پارامتر SecondsValue را مشخص کردید ، باید MinuteValue را نیز مشخص کنید.

<code dir = "ltr"> msvalue </code>
اختیاری.در حالت ایده آل ، تعدادی بین 0 تا 999 ، نماینده میلی ثانیه.اگر مقداری بیشتر از 999 ارائه شود ، DateTime توسط میلی ثانیه اضافی افزایش می یابد.اگر پارامتر MSVALUE را مشخص کردید ، باید MinoryValue و SecondsValue را نیز مشخص کنید.

# مقدار برگشتی

تعداد میلی ثانیه بین 11 Dey 1348 00:00:00 UTC و تاریخ به روز شده.

# توضیحات

اگر پارامترهای MinuteValue ، SecondsValue و MSValue را مشخص نکردید ، مقادیر برگشتی از روشهای <code dir="ltr">GetMinutes ()</code> ، <code dir="ltr">GetConds ()</code> و <code dir="ltr">GetMilliseconds ()</code> استفاده می شود.

اگر پارامتری که مشخص کرده اید خارج از محدوده مورد انتظار است ، Sethours () سعی می کند اطلاعات تاریخ را در شیء تاریخ بر این اساس به روز کند.به عنوان مثال ، اگر از 100 برای SecondsValue استفاده کنید ، دقیقه ها توسط 1 (MinuteValue + 1) افزایش می یابد و 40 برای ثانیه استفاده می شود.

# نمونه‌ها

با استفاده از <code dir = "ltr"> sethours () </code>

```js
var theBigDay = new SHDate();
theBigDay.setHours(7);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours
