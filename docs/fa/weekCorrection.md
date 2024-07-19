---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: weekCorrection
---

# SHDate.weekCorrection()

اصلاح ورودی هفته به یک ورودی صحیح

امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=weekCorrection" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
weekCorrection(year: number, week: number, [day: number = 0]);
```

# پارامترها

<code dir = "ltr">`year‍‍`</code> اجباری
سال یک عدد صحیح

<code dir = "ltr">`week`</code>: اجباری
هفته یک عدد صحیح بین 1 الی 53

<code dir = "ltr">`day`</code> اختیاری
روز هفته یک عدد صحیح بین 0 الی 6 که به صورت پیش فرض مقدار 0 است

# مقدار برگشتی

آرایه ای که شامل [isoYear, isoWeek, dayOfWeek] می باشد

# نمونه‌ها

استفاده از <code dir="ltr">weekCorrection()</code>

```js
var shdate = new SHDate();
var week = shdate.weekCorrection(1372, 53, 7);
console.log(shdate.toString());
console.log(week); // Array [1373, 2, 0]
!Bug;
var shdate = new SHDate("1372W53-7");
var week = shdate.weekCorrection(1372, 53, 7);
console.log(shdate.toString()); // "Fri 05 Far 1373 00:00:00 GMT+0430 (Iran Daylight Time)"
console.log(week); // Array [1373, 2, 0]
const [iy, iw, dow] = week;
console.log(`${iy}W${iw}-${dow}`); // Array [1373, 2, 0]
var shdate = new SHDate(`${iy}W${iw}-${dow}`);
console.log(shdate.toString()); // "Mon 01 Far 1373 00:00:00 GMT+0330 (Iran Standard Time)"
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/weekCorrection
