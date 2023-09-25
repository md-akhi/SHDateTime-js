# SHDate.getTime()

روش <code dir = "ltr"> getTime () </code> تعداد میلی ثانیه از زمان Ecmascript را برمی گرداند.
می توانید از این روش برای کمک به اختصاص تاریخ و زمان به یک شیء تاریخ دیگر استفاده کنید.این روش از نظر عملکردی معادل روش مقدار () است.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getTime" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getTime();
```

# مقدار برگشتی

تعدادی به نمایندگی از میلی ثانیه بین 25 دی 1390 00:00:00 UTC و تاریخ مشخص شده.
# Reduced time precision

برای ارائه محافظت در برابر حملات به موقع و اثر انگشت ، دقت <code dir = "ltr"> shdate جدید (). gettime () </code> بسته به تنظیمات مرورگر ممکن است گرد شود.در Firefox ، اولویت reducetimerprecision به طور پیش فرض و پیش فرض به 20 میکرومتر در Firefox 59 فعال می شود.در 60 این 2 متر خواهد بود.
```js
// reduced time precision (2ms) in Firefox 60
new SHDate().getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// reduced time precision with `privacy.resistFingerprinting` enabled
new SHDate().getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

در Firefox ، شما همچنین می توانید حریم خصوصی را فعال کنید. ResistFingerPrinting ، دقت 100ms یا ارزش حریم خصوصی خواهد بود. ResistFingerPrinting.ReducetimerPrecision.microseconds ، هر کدام بزرگتر باشد.
# نمونه‌ها

با استفاده از <code dir = "ltr"> getTime () </code> برای کپی کردن تاریخ
ساخت یک شی تاریخ با مقدار زمان یکسان.

```js
// Since month is zero based, birthday will be Farvardin 10, 1390
var birthday = new SHDate(1389, 11, 10);
var copy = new SHDate();
copy.setTime(birthday.getTime());

اندازه گیری زمان اجرای
تفریق دو تماس بعدی () در مورد اشیاء تاریخ تازه تولید شده ، مدت زمان بین این دو تماس را می دهید.این می تواند برای محاسبه زمان اجرای برخی از عملیات ها استفاده شود.همچنین برای جلوگیری از فوری اشیاء غیر ضروری تاریخ ، به shdate.now () مراجعه کنید.

var end, start;

start = new SHDate();
for (var i = 0; i < 1000; i++) {
Math.sqrt(i);
}
end = new SHDate();

console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
