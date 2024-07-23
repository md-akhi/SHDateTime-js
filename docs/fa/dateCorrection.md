---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: dateCorrection
---

# SHDate.dateCorrection()

این متد تاریخ ورودی را اصلاح و تاریخ صحیح را نمایش میدهد

امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=dateCorrection" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
dateCorrection(year: number, month: number = 0, day: number = 1): Array<number>;
```

# پارامتر

<div dir="rtl">

| پارامتر |                                 توضیحات |
| :------ | --------------------------------------: |
| `year`  | ضروری. سال را هر عدد صحیحی میتواند باشد |
| `month` | ضروری. ماه را هر عدد صحیحی میتواند باشد |
| `date`  | ضروری. روز را هر عدد صحیحی میتواند باشد |

</div>

# مقدار برگشتی

فرم صحیح تاریخ ورودی را برمیگرداند

# نمونه‌ها

```js
var shdate = new SHDate();
var date = shdate.dateCorrection(1372, 14, 100);

console.log(date); // Array [1373, 5, 7]

// Static
var date = SHDate.dateCorrection(1372, 15, 100);

console.log(date); // Array [1373, 6, 7]
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/dateCorrection
