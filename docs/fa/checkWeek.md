---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: checkWeek
---

# SHDate.checkWeek()

این متد چهت اعتبار سنجی هفته در تاریخ هجری شمسی مورد استفاده قرار میگیرد.

امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=checkWeek" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
checkWeek(year: number, week: number, day: number): boolean;
```

# پارامتر

<div dir="rtl">

| پارامتر |                                          توضیحات |
| :------ | -----------------------------------------------: |
| `year`  | ضروری. سال را عددی بین 1 تا 3،500،000 مشخص میکند |
| `week`  |       ضروری. هفته را عددی بین 1 تا 53 مشخص میکند |
| `day`   |    ضروری. روز هفته را عددی بین 0 تا 7 مشخص میکند |

</div>

# مقدار برگشتی

اگر هفته معتبر باشد مقدار `True`، در غیر این صورت مقدار `False`.

# نمونه‌ها

```js
let check = new SHDate();
let isTrue = check.checkWeek(1390, 11, 5);

console.log(isTrue); // true

// Static
isTrue = SHDate.checkWeek(1390, 53, 5);

console.log(isTrue); // false
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/checkWeek
