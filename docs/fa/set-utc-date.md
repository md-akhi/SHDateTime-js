# SHDate.setUTCDate()
روش <code dir = "ltr"> setutcdate () </code> روز ماه یک نمونه تاریخ معین را بر اساس زمان UTC تغییر می دهد.

برای تغییر روز ماه برای یک نمونه تاریخ معین بر اساس زمان محلی ، از روش <code dir = "ltr"> setDate () </code> استفاده کنید.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setUTCDate(dayValue);
```

# پارامترها

<code dir="ltr">dayValue</code>
یک عدد صحیح از 1 تا 31 ، نمایانگر روز ماه است.
# مقدار برگشتی

تعداد میلی ثانیه بین 25 دی 1390 00:00:00 UTC و تاریخ به روز شده.
# توضیحات

اگر پارامتری که مشخص کرده اید خارج از محدوده مورد انتظار است ، <code dir = "ltr"> setutcdate () </code> سعی می کند اطلاعات تاریخ را در شیء تاریخ بر این اساس به روز کند.به عنوان مثال ، اگر از 40 برای DayValue استفاده می کنید ، و ماه ذخیره شده در تاریخ تاریخ ژوئن است ، روز به 10 تغییر می یابد و ماه تا ژوئیه افزایش می یابد.
# نمونه‌ها

```js
var theBigDay = new SHDate();
theBigDay.setUTCDate(20);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
