---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: timeCorrection
---

# SHDate.timeCorrection()

این متد زمان ورودی را اصلاح و زمان صحیح را نمایش میدهد

امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=timeCorrection" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
timeCorrection(hours: number, minute: number, second: number, millisecond: number = 0): Array<number>;
```

# پارامتر

<div dir="rtl">

| پارامتر       |                                        توضیحات |
| :------------ | ---------------------------------------------: |
| `hours`       |       ضروری. ساعت را هر عدد صحیحی میتواند باشد |
| `minute`      |      ضروری. دقیقه را هر عدد صحیحی میتواند باشد |
| `second`      |      ضروری. ثانیه را هر عدد صحیحی میتواند باشد |
| `millisecond` | ضروری. میلی ثانیه را هر عدد صحیحی میتواند باشد |

</div>

# مقدار برگشتی

فرم صحیح زمان ورودی را برمیگرداند

# نمونه‌ها

```js
var shdate = new SHDate();
var date = shdate.timeCorrection(30, 150, 120, 1200);

console.log(date); // Array [8, 32, 1, 200, 1]

// Static
var date = SHDate.timeCorrection(1372, 15, 100);

console.log(date); // Array [8, 32, 1, 200, 1]
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/timeCorrection
