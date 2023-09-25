# SHDate.getMilliseconds()

روش <code dir="ltr">getMilliseconds()</code> میلی ثانیه ها را در تاریخ مشخص شده بر اساس زمان محلی برمی گرداند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getMilliseconds" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getMilliseconds();
```

# مقدار برگشتی

عددی بین 0 تا 999 که نشان‌دهنده میلی‌ثانیه برای تاریخ معین بر اساس زمان محلی است.

# نمونه‌ها

استفاده از <code dir="ltr">getMilliseconds()</code>
مثال زیر بخش میلی ثانیه ای زمان جاری را به متغیر میلی ثانیه اختصاص می دهد:

```js
var today = new SHDate();
var milliseconds = today.getMilliseconds();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
