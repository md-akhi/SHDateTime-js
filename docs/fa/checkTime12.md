---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: checkTime12
---

# SHDate.checkTime12()

این متد چهت اعتبار سنجی زمان به صورت 12 ساعتی مورد استفاده قرار میگیرد.

امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=checkTime12" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
checkTime12(hours: number, minutes: number, seconds: number, [milliseconds: number = 0]): boolean;
```

# پارامتر

<div dir="rtl">

| پارامتر        |                                             توضیحات |
| :------------- | --------------------------------------------------: |
| `hours`        |          ضروری. ساعت را عددی بین 0 تا 11 مشخص میکند |
| `minutes`      |         ضروری. دقیقه را عددی بین 0 تا 59 مشخص میکند |
| `seconds`      |         ضروری. ثانیه را عددی بین 1 تا 59 مشخص میکند |
| `milliseconds` | اختیاری. میلی ثانیه را عددی بین 0 تا 999 مشخص میکند |

</div>

# مقدار برگشتی

اگر زمان معتبر باشد مقدار `True`، در غیر این صورت مقدار `False`.

# نمونه‌ها

```js
let check = new SHDate();
let isTrue = check.checkTime12(true, 14, 50, 20);

console.log(isTrue); // true

// Static
isTrue = SHDate.checkTime12(false, 14, 50, 20, 900);

console.log(isTrue); // false
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/checkTime12
