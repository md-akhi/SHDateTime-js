---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: clone
---

# SHDate.clone()

دریافت یک انشعاب از کلاس در حال استفاده

امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=clone" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
clone();
```

# مقدار برگشتی

یک انشعاب از کلاس در حال استفاده برمیگرداند

# نمونه‌ها

```js
var shdate = new SHDate("Dey 25, 1390 23:15:30");
var clone = shdate.clone();

console.log(shdate.toString()); // "Sun 25 Dey 1390 23:15:30 GMT+0330 (Iran Standard Time)"
shdate.setMonth(11);
console.log(shdate.toString()); // "Thu 25 Esf 1390 23:15:30 GMT+0330 (Iran Standard Time)"

console.log(clone.toString()); // "Sun 25 Dey 1390 23:15:30 GMT+0330 (Iran Standard Time)"
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/clone
