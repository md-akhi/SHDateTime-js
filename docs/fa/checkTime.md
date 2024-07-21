---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: checkTime
---

# SHDate.checkTime()

این متد چهت اعتبار سنجی زمان مورد استفاده قرار میگیرد.

امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=checkTime" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
checkTime(hours: number, minutes: number, seconds: number, [milliseconds: number = 0]): boolean;
```

# پارامتر

<div dir="rtl">

| پارامتر        |                                             توضیحات |
| :------------- | --------------------------------------------------: |
| `hours`        |          ضروری. ساعت را عددی بین 0 تا 23 مشخص میکند |
| `minutes`      |         ضروری. دقیقه را عددی بین 0 تا 59 مشخص میکند |
| `seconds`      |         ضروری. ثانیه را عددی بین 1 تا 59 مشخص میکند |
| `milliseconds` | اختیاری. میلی ثانیه را عددی بین 0 تا 999 مشخص میکند |

</div>

# مقدار برگشتی

اگر زمان معتبر باشد مقدار `True`، در غیر این صورت مقدار `False`.

# نمونه‌ها

```js
let check = new SHDate();
let isTrue = check.checkTime(14, 50, 20);

console.log(isTrue); // true

// Static
isTrue = SHDate.checkTime(14, 50, 20, 900);

console.log(isTrue); // true
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/checkTime
