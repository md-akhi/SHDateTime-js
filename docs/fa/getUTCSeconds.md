# SHDate.getUTCSeconds()

روش <code dir = "ltr"> getutcseconds () </code> ثانیه ها را در تاریخ مشخص شده با توجه به زمان جهانی برمی گرداند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getUTCSeconds" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getUTCSeconds();
```

# مقدار برگشتی

یک عدد.اگر موضوع تاریخ یک تاریخ معتبر را نشان دهد ، یک عدد صحیح بین 0 تا 59 ، که نمایانگر ثانیه در تاریخ معین با توجه به زمان جهانی است.در غیر این صورت ، NAN اگر موضوع تاریخ یک تاریخ معتبر را نشان نمی دهد.
# نمونه‌ها
با استفاده از <code dir = "ltr"> getutcseconds () </code>
مثال زیر بخش ثانیه زمان فعلی را به ثانیه متغیر اختصاص می دهد.

```js
var today = new SHDate();
var seconds = today.getUTCSeconds();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
