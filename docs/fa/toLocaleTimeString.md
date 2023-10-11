---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
url: toLocaleTimeString
---

# SHDate.toLocaleTimeString()

متد <code dir = "ltr">tolocaletimestring()</code> رشته ای را با بازنمایی حساس به زبان از قسمت زمان تاریخ برمی گرداند.آرگومان های محلی و گزینه های جدیدتر به برنامه ها اجازه می دهند تا کنوانسیون های قالب بندی زبان را برای استفاده مشخص کنند.این استدلال ها همچنین می توانند رفتار عملکرد را سفارشی کنند.

پیاده سازی های تاریخ بیشتر ، آرگومان های محلی و گزینه ها را نادیده می گیرند.در این شرایط ، شکل رشته برگشتی کاملاً وابسته به اجرای است.
امتحان کنید

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=toLocaleTimeString" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toLocaleTimeString();
toLocaleTimeString(locales);
toLocaleTimeString(locales, options);
```

# پارامترها

آرگومان های محلی و گزینه ها رفتار عملکرد را سفارشی می کنند و به برنامه ها اجازه می دهند تا از کنوانسیون های قالب بندی زبان استفاده کنند.در پیاده سازی های قدیمی که آرگومان های محلی و گزینه ها را نادیده می گیرند ، محلی ها و شکل رشته های برگشتی کاملاً وابسته به اجرای هستند.

برای جزئیات بیشتر در مورد این پارامترها و نحوه استفاده از آنها ، به سازنده <code dir = "ltr">intl.datetimeformat()</code> مراجعه کنید.

مقدار پیش فرض برای هر خاصیت مؤلفه تاریخ تعریف نشده است ، اما اگر ساعت ، دقیقه ، خصوصیات دوم همه تعریف نشده باشد ، ساعت ، دقیقه و دوم فرض می شود که "عددی" هستند.

# مقدار برگشتی

رشته ای که نشان دهنده بخش زمانی از تاریخ مشخص شده با توجه به کنوانسیون های خاص زبان است.

# Performance

هنگام قالب بندی تعداد زیادی از تاریخ ها ، بهتر است یک شی <code dir = "ltr">intl.datetimeformat</code> ایجاد کنید و از عملکرد ارائه شده توسط ویژگی فرمت آن استفاده کنید.

# نمونه‌ها

با استفاده از <code dir = "ltr">tolocaletimestring()</code>
استفاده اساسی از این متد بدون مشخص کردن یک مکان محلی یک رشته فرمت شده را در محل پیش فرض و با گزینه های پیش فرض باز می گرداند.

```js
var date = new SHDate(SHDate.UTC(1402, 11, 12, 3, 0, 0));

// toLocaleTimeString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleTimeString());
// → "7:00:00 PM" if run in en-US locale with time zone Asia/Tehran
```

با استفاده از محلی
این مثال برخی از تغییرات در قالب های زمانی موضعی را نشان می دهد.برای به دست آوردن قالب زبان مورد استفاده در رابط کاربری برنامه خود ، حتماً با استفاده از استدلال محلی ، آن زبان (و احتمالاً برخی از زبانهای برگشتی) را مشخص کنید:

```js
var date = new SHDate(SHDate.UTC(1402, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// Asia/Tehran for the IR

// US English uses 12-hour time with AM/PM
console.log(date.toLocaleTimeString("en-US"));
// → "7:00:00 PM"

// British English uses 24-hour time without AM/PM
console.log(date.toLocaleTimeString("fa-IR"));
// → "06:30:00"

// Korean uses 12-hour time with AM/PM
console.log(date.toLocaleTimeString("ko-KR"));
// → "오후 12:00:00"

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(date.toLocaleTimeString("ar-EG"));
// → "٧:٠٠:٠٠ م"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(date.toLocaleTimeString(["ban", "id"]));
// → "11.00.00"
```

با استفاده از گزینه ها
نتایج ارائه شده توسط <code dir="ltr">tolocaletimestring()</code> با استفاده از آرگومان گزینه ها قابل تنظیم است:

```js
var date = new SHDate(SHDate.UTC(1402, 11, 20, 3, 0, 0));

// an application may want to use UTC and make that visible
var options = { timeZone: "UTC", timeZoneName: "short" };
console.log(date.toLocaleTimeString("en-US", options));
// → "3:00:00 AM GMT"

// sometimes even the US needs 24-hour time
console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// → "19:00:00"

// show only hours and minutes, use options with the default locale - use an empty array
console.log(
	date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
);
// → "20:01"
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
