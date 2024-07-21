---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: checkDate
---

# SHDate.checkDate()

این متد چهت اعتبار سنجی تاریح هجری شمسی مورد استفاده قرار میگیرد.

امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=checkDate" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
checkDate(year: number, month: number, date: number): boolean;
```

# پارامتر

<div dir="rtl">

| پارامتر |                                          توضیحات |
| :------ | -----------------------------------------------: |
| `year`  | ضروری. سال را عددی بین 1 تا 3،500،000 مشخص میکند |
| `month` |        ضروری. ماه را عددی بین 0 تا 11 مشخص میکند |
| `date`  |        ضروری. روز را عددی بین 1 تا 31 مشخص میکند |

</div>

# مقدار برگشتی

اگر تاریخ معتبر باشد مقدار `True`، در غیر این صورت مقدار `False`.

# نمونه‌ها

```js
let check = new SHDate();
let isTrue = check.checkDate(1390, 10, 25);

console.log(isTrue); // true

// Static
isTrue = SHDate.checkDate(1390, 10, 25);

console.log(isTrue); // true
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/checkDate
