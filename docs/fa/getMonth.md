---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: getMonth
---

# SHDate.getMonth()

متد <code dir="ltr">GetMonth()</code> ماه را در تاریخ مشخص شده با توجه به زمان محلی ، به عنوان یک مقدار مبتنی بر صفر (جایی که صفر نشانگر ماه اول سال است) برمی گرداند.
امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getMonth" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getMonth();
```

# مقدار برگشتی

یک عدد عدد صحیح ، بین 0 تا 11 ، نمایانگر ماه در تاریخ معین با توجه به زمان محلی است.0 مطابق با فارواردین ، 1 تا فوریه و غیره است.

# نمونه‌ها

با استفاده از <code dir="ltr">getMonth()</code>
بیانیه دوم در زیر مقدار 11 را به ماه متغیر ، بر اساس مقدار موضوع تاریخ `mon9` اختصاص می دهد.

```js
var mon9 = new SHDate("Dey 25, 1390 23:15:30");
var month = mon9.getMonth();

console.log(month); // 9
```

توجه: در صورت لزوم ، نام کامل یک ماه (به عنوان مثال فارواردین) را می توان با استفاده از <code dir = "ltr">intl.datetimeformat()</code> با یک پارامتر گزینه ها بدست آورد.با استفاده از این متد ، بین المللی سازی آسانتر می شود:

```js
var options = { month: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(mon9));
// Esfand
console.log(new Intl.DateTimeFormat("de-DE", options).format(mon9));
// Dezember
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
