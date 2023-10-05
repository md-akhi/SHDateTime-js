---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
---

# SHDate.getDay()

متد <code dir="ltr">getDay()</code> روز هفته را برای تاریخ مشخص شده با توجه به زمان محلی برمی گرداند، جایی که 0 نشان دهنده یکشنبه است. برای روز ماه، به <code dir="ltr">SHDate.prototype.getDate()</code> مراجعه کنید.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getDay" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getDay();
```

# مقدار برگشتی

یک عدد صحیح، بین 0 تا 6، مطابق با روز هفته برای تاریخ معین، مطابق با زمان محلی: 0 برای یکشنبه، 1 برای دوشنبه، 2 برای سه شنبه، و غیره.

# نمونه‌ها

دستور دوم زیر مقدار 1 را بر اساس مقدار شیء Date Xmas95 به روزهای هفته اختصاص می دهد. 25 دی 1390 دوشنبه است.

```js
var Xmas95 = new SHDate("Dey 25, 1390 23:15:30");
var weekday = Xmas95.getDay();

console.log(weekday); // 1
```

توجه: در صورت نیاز، نام کامل یک روز (به عنوان مثال "دوشنبه") را می توان با استفاده از Intl.DateTimeFormat با پارامتر گزینه به دست آورد. با استفاده از این روش، بین المللی سازی آسان تر می شود:

```js
var options = { weekday: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(Xmas95));
// Monday
console.log(new Intl.DateTimeFormat("de-DE", options).format(Xmas95));
// Montag
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
