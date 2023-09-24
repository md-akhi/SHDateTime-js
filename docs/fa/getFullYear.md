# SHDate.getFullYear()

متد <code dir="ltr">getFullYear()</code> سال تاریخ مشخص شده را بر اساس زمان محلی برمی گرداند.

به جای متد <code dir="ltr">getYear()</code> از این متد استفاده کنید.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getFullYear();
```

# مقدار برگشتی

با توجه به زمان محلی ، تعدادی مربوط به سال تاریخ مشخص شده است.

# توضیحات

مقدار برگردانده شده توسط <code dir = "ltr"> getClyear () </code> یک عدد مطلق است.برای تاریخ های بین سالهای 1000 و 9999 ، <code dir = "ltr"> getCressear () </code> یک شماره چهار رقمی را به عنوان مثال ، 1390 باز می گرداند. از این عملکرد استفاده کنید تا مطمئن شوید سال پس از سال 2000 مطابقت داردبشر

# نمونه‌ها

مثال زیر مقدار چهار رقمی سال جاری را به سال متغیر اختصاص می دهد.

```js
var today = new SHDate();
var year = today.getFullYear();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
