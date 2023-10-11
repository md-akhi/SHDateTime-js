---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: toTimeString
---

# SHDate.toTimeString()

متد <code dir = "ltr">totimestring()</code> بخش زمان یک شیء تاریخ را به شکل قابل خواندن انسان به زبان انگلیسی برمی گرداند.
امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=toTimeString" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toTimeString();
```

# مقدار برگشتی

رشته ای که بخش زمانی از تاریخ داده شده را در فرم قابل خواندن انسان به زبان انگلیسی نشان می دهد.

# توضیحات

نمونه های تاریخ به یک نکته خاص در زمان مراجعه می کنند.فراخوانی <code dir = "ltr">toString()</code> تاریخ فرمت شده به شکل قابل خواندن انسان به زبان انگلیسی را برمی گرداند.بعضی اوقات مطلوب است که یک رشته از زمان را بدست آورید.چنین چیزی را می توان با متد <code dir = "ltr"> totimestring()</code> انجام داد.
متد <code dir = "ltr">totimestring()</code> به ویژه مفید است زیرا موتورهای سازگار با اجرای `ECMA-262` ممکن است در رشته به دست آمده از <code dir = "ltr">toString()</code> برایاشیاء تاریخ ، به عنوان قالب وابسته به اجرای است.رویکردهای برش رشته ای ساده ممکن است نتایج مداوم را در چندین موتورهای مختلف به همراه نکند.

# نمونه‌ها

استفاده اساسی از <code dir = "ltr">totimestring()</code>

```js
var d = new SHDate(1372, 3, 6, 14, 39, 7);

console.log(d.toString()); // Wed Mor 06 1372 14:39:07 GMT-0600 (PDT)
console.log(d.toTimeString()); // 14:39:07 GMT-0600 (PDT)
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString
