---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: toJSON
---

# SHDate.toJSON()

متد <code dir = "ltr">tojson()</code> بازنمایی رشته ای از شیء تاریخ را برمی گرداند.
امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=toJSON" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toJSON();
```

# مقدار برگشتی

بازنمایی رشته ای از تاریخ معین.

# توضیحات

نمونه های تاریخ به یک نکته خاص در زمان مراجعه می کنند.فراخوانی <code dir = "ltr">tojson()</code> یک رشته (با استفاده از <code dir = "ltr"> toisostring()</code>) را نشان می دهد که مقدار شیء تاریخ را نشان می دهد.این متد به طور کلی در نظر گرفته شده است ، به طور پیش فرض ، اشیاء تاریخ را در طول سریال سازی `JSON` سریال سازی کنید.

# نمونه‌ها

```js
var jsonDate = new SHDate().toJSON();
var backToDate = new SHDate(jsonDate);

console.log(jsonDate); //1402-10-26T07:46:36.611Z
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON
