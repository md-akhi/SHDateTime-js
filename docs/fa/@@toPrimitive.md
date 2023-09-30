---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
---

# SHDate[@@toPrimitive]

<div dir="rtl" style="text-align: right;">

متد <code dir="ltr">[@@toPrimitive]()</code> یک شی Date را به یک مقدار اولیه تبدیل می کند.

<div >

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=toPrimitive" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>

# Syntax

```js
SHDate()[Symbol.toPrimitive](hint);
```

<div dir="rtl" style="text-align: right;">

# مقدار برگشتی

بسته به آرگومان، متد می تواند یک رشته یا یک عدد را برگرداند.

# توضیحات

روش <code dir = "ltr"> [@@toPrimitive]() </code> شیء تاریخ یک مقدار بدوی را برمی گرداند ، یعنی از نوع یا نوع رشته.

اگر اشاره رشته یا پیش فرض باشد ، <code dir = "ltr"> [@@toPrimitive]() </code> سعی می کند با روش toString تماس بگیرد.اگر ویژگی toString وجود نداشته باشد ، سعی می کند با روش مقدار مقدار تماس بگیرد و اگر مقدار OF وجود نداشته باشد ، <Code DIR = "LTR"> [@@toPrimitive]() </code> یک نوع را پرتاب می کند.

اگر اشاره شماره باشد ، <code dir = "ltr"> [@@toPrimitive]() </code> ابتدا سعی می کند با ارزش تماس بگیرید ، و اگر این کار از کار بیفتد ، صدا را صدا می کند.

JavaScript روش <code dir = "ltr"> [@@toPrimitive]() </code> را برای تبدیل یک شی به یک مقدار بدوی فراخوانی می کند.شما به ندرت نیاز به استفاده از <code dir = "ltr"> [@@toPrimitive]() </code> خود را دارید.JavaScript هنگام مواجهه با شیئی که در آن مقدار بدوی انتظار می رود ، به طور خودکار آن را فراخوانی می کند.

متد <code dir="ltr">[@@toPrimitive]()</code> یک مقدار اولیه را برمی‌گرداند که یا از نوع شماره یا رشته نوع است.

اگر راهنمایی رشته یا پیش‌فرض باشد، <code dir="ltr">[@@toPrimitive]()</code> سعی می‌کند متد toString را فراخوانی کند. اگر ویژگی toString وجود نداشته باشد، سعی می کند متد valueOf را فراخوانی کند و اگر valueOf نیز وجود نداشته باشد، <code dir="ltr">[@@toPrimitive]()</code> یک TypeError نمایش می‌دهد.

اگر راهنمایی عدد باشد، <code dir="ltr">[@@toPrimitive]()</code> ابتدا سعی می‌کند valueOf را فراخوانی کند، و اگر موفق نشد، toString را فراخوانی می‌کند.

جاوا اسکریپت متد <code dir="ltr">[@@toPrimitive]()</code> را برای تبدیل یک شی به مقدار اولیه فراخوانی می کند. شما به ندرت نیاز دارید که خودتان متد <code dir="ltr">[@@toPrimitive]()</code> را فراخوانی کنید. جاوا اسکریپت به طور خودکار آن را هنگام برخورد با یک شی که در آن مقدار اولیه مورد انتظار است فراخوانی می کند.

# نمونه‌ها

</div>

```js
const testDate = new SHDate(1590757517834);
// "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]("string");
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]("number");
// Returns "1590757517834"

testDate[Symbol.toPrimitive]("default");
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
