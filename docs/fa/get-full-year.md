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

A number corresponding to the year of the given date, according to local time.

# توضیحات

The value returned by <code dir="ltr">getFullYear()</code> is an absolute number. For dates between the years 1000 and 9999, <code dir="ltr">getFullYear()</code> returns a four-digit number, for example, 1390. Use this function to make sure a year is compliant with years after 2000.

# نمونه‌ها

The following example assigns the four-digit value of the current year to the variable year.

```js
var today = new SHDate();
var year = today.getFullYear();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
