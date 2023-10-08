---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: now
---

# SHDate.now()

متد استاتیک <code dir = "ltr">shdate.now()</code> تعداد میلی ثانیه از 11 `Dey 1348 00:00:00 UTC` را باز می گرداند.
امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=now" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
SHDate.now();
```

# مقدار برگشتی

تعدادی که نمایندگان میلی ثانیه از زمان دوره یونیکس سپری شده اند.

# نمونه‌ها

کاهش دقت زمان
برای محافظت در برابر حملات به موقع و اثر انگشت ، دقت <code dir="ltr">shdate.now()</code> بسته به تنظیمات مرورگر ممکن است گرد شود.در Firefox ، اولویت `reducetimerprecision` به طور پیش فرض و پیش فرض به 20 میکرومتر در `Firefox 59` فعال می شود.در 60 این 2 متر خواهد بود.

```js
// reduced time precision (2ms) in Firefox 60
SHDate.now();
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// reduced time precision with `privacy.resistFingerprinting` enabled
SHDate.now();
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

در `Firefox` ، شما همچنین می توانید حریم خصوصی را فعال کنید. ResistFingerPrinting ، دقت 100ms یا ارزش حریم خصوصی خواهد بود. ResistFingerPrinting.ReducetimerPrecision.microseconds ، هر کدام بزرگتر باشد.
[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
