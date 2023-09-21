# SHDate.setFullYear()

متد <code dir="ltr">setFullYear()</code> کل سال را برای یک تاریخ مشخص با توجه به زمان محلی تنظیم می کند. مهر زمانی جدید را برمی گرداند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setFullYear(yearValue);
setFullYear(yearValue, monthValue);
setFullYear(yearValue, monthValue, dateValue);
```

# پارامترها

<code dir="ltr">yearValue</code>
یک عدد صحیح که مقدار عددی سال را مشخص می کند، به عنوان مثال، 1395.

<code dir="ltr">monthValue</code>
اختیاری. عدد صحیحی بین 0 تا 11 نشان دهنده ماه های فروردین تا اسفند است.

<code dir="ltr">dateValue</code>
اختیاری. یک عدد صحیح بین 1 و 31 که نشان دهنده روز ماه است. اگر پارامتر dateValue را مشخص کنید، باید monthValue را نیز مشخص کنید.

# مقدار برگشتی

تعداد میلی ثانیه بین 25 دی 1390 00:00:00 UTC و تاریخ به روز شده.

# توضیحات

اگر پارامترهای monthValue و dateValue را مشخص نکنید، از مقادیر برگشتی از متد <code dir="ltr">getMonth()</code> و <code dir="ltr">getDate()</code> استفاده می شود.

اگر پارامتری که مشخص می‌کنید خارج از محدوده مورد انتظار باشد، <code dir="ltr">setFullYear()</code> سعی می‌کند پارامترهای دیگر و اطلاعات تاریخ را در شی Date به‌روزرسانی کند. به عنوان مثال، اگر 15 را برای monthValue مشخص کنید، سال 1 افزایش می یابد (yearValue + 1) و 3 برای ماه استفاده می شود.

# نمونه‌ها

استفاده از <code dir="ltr">setFullYear()</code>

```js
var theBigDay = new SHDate();
theBigDay.setFullYear(1997);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear
