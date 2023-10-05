---
layout: page
language: fa-IR
contentLanguage: fa
direction: rtl
sidebar: sidebarMethod
---

# SHDate.toLocaleString()

روش <code dir = "ltr"> tolocalestring () </code> رشته ای را با بازنمایی حساس به زبان از این تاریخ برمی گرداند.

آرگومان های محلی و گزینه های جدید به برنامه ها اجازه می دهند زبانی را که از کنوانسیون های قالب بندی استفاده می شود ، مشخص کنند و رفتار عملکرد را سفارشی کنند.

در پیاده سازی های قدیمی ، که آرگومان های محلی و گزینه ها را نادیده می گیرند ، محل مورد استفاده و شکل رشته برگشتی کاملاً وابسته به اجرای است.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=toLocaleString" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toLocaleString();
toLocaleString(locales);
toLocaleString(locales, options);
```

# پارامترها

آرگومان های محلی و گزینه ها رفتار عملکرد را سفارشی می کنند و به برنامه ها اجازه می دهند زبانی را که از کنوانسیون های قالب بندی استفاده می شود ، مشخص کنند.در پیاده سازی هایی که آرگومان های محلی و گزینه ها را نادیده می گیرند ، محل مورد استفاده و شکل رشته برگشتی کاملاً وابسته به پیاده سازی است.

برای جزئیات بیشتر در مورد این پارامترها و نحوه استفاده از آنها ، به سازنده <code dir = "ltr"> intl.datetimeformat () </code> مراجعه کنید.

مقدار پیش فرض برای هر خاصیت مؤلفه تاریخ تعریف نشده است.اما اگر روزهای هفته ، سال ، ماه و روز همه تعریف نشده باشند ، فرض می شود که سال ، ماه و روز "عددی" باشد.

# مقدار برگشتی

رشته ای که تاریخ داده شده را مطابق با کنوانسیون های خاص زبان نشان می دهد.

# نمونه‌ها

با استفاده از <code dir = "ltr"> tolocalestring () </code>
در استفاده اساسی بدون مشخص کردن یک مکان ، یک رشته فرمت شده در محل پیش فرض و با گزینه های پیش فرض بازگردانده می شود.

```js
let date = new SHDate(SHDate.UTC(1402, 11, 12, 3, 0, 0));

// toLocaleString() without arguments depends on the
// implementation, the default locale, and the default time zone
console.log(date.toLocaleString());
// → "12/11/1402, 7:00:00 PM" if run in en-US locale with time zone Asia/Tehran
```

بررسی پشتیبانی از آرگومان های محلی و گزینه ها
آرگومان های محلی و گزینه ها هنوز در همه مرورگرها پشتیبانی نمی شوند.برای بررسی اینکه آیا یک اجرای از قبل از آنها پشتیبانی می کند ، می توانید از الزامی که برچسب های زبان غیرقانونی با یک استثناء RangeRror رد می شوند ، استفاده کنید:

```js
function toLocaleStringSupportsLocales() {
	try {
		new SHDate().toLocaleString("i");
	} catch (e) {
		return e.name === "RangeError";
	}
	return false;
}
```

با استفاده از محلی
این مثال برخی از تغییرات در قالب های تاریخ و زمان موضعی را نشان می دهد.برای به دست آوردن قالب زبان مورد استفاده در رابط کاربری برنامه خود ، حتماً با استفاده از استدلال محلی ، آن زبان (و احتمالاً برخی از زبانهای برگشتی) را مشخص کنید:

```js
let date = new SHDate(SHDate.UTC(2012, 11, 20, 3, 0, 0));

// Formats below assume the local time zone of the locale;
// Asia/Tehran for the IR

// US English uses month-day-year order and 12-hour time with AM/PM
console.log(date.toLocaleString("en-US"));
// → "12/19/2012, 7:00:00 PM"

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(date.toLocaleString("en-GB"));
// → "20/12/2012 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(date.toLocaleString("ko-KR"));
// → "2012. 12. 20. 오후 12:00:00"

// Arabic in most Arabic-speaking countries uses Eastern Arabic numerals
console.log(date.toLocaleString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// For Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// → "24/12/20 12:00:00"

// When requesting a language that may not be supported, such as
// Balinese, include a fallback language (in this case, Indonesian)
console.log(date.toLocaleString(["ban", "id"]));
// → "20/12/2012 11.00.00"
```

با استفاده از گزینه ها
نتایج ارائه شده توسط <code dir = "ltr"> tolocalestring () </code> با استفاده از آرگومان گزینه ها قابل تنظیم است:

```js
let date = new SHDate(SHDate.UTC(1400, 11, 20, 3, 0, 0));

// Request a weekday along with a long date
let options = {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric"
};

console.log(date.toLocaleString("de-DE", options));
// → "Donnerstag, 20. Dezember 1400"

// An application may want to use UTC and make that visible
options.timeZone = "UTC";
options.timeZoneName = "short";

console.log(date.toLocaleString("en-US", options));
// → "Thursday, Esfand 20, 1400, GMT"

// Sometimes even the US needs 24-hour time
console.log(date.toLocaleString("en-US", { hour12: false }));
// → "12/19/1400, 19:00:00"
```

از مقایسه مقادیر تاریخ فرمت شده با مقادیر استاتیک خودداری کنید
بیشتر اوقات ، قالب بندی توسط <code dir = "ltr"> tolocalestring () </code> بازگردانده می شود.با این حال ، این ممکن است در آینده تغییر کند ، و برای همه زبانها تضمین نمی شود.تغییرات خروجی با طراحی و با مشخصات مجاز است.

مهمتر از همه ، مرورگرهای IE و Edge کاراکترهای کنترل دو طرفه را در اطراف تاریخ قرار می دهند ، بنابراین متن خروجی در هنگام هماهنگی با متن دیگر به درستی جریان می یابد.

به همین دلیل ، شما نمی توانید انتظار داشته باشید که بتوانید نتایج <code dir = "ltr"> tolocalestring () </code> را با یک مقدار استاتیک مقایسه کنید:

```js
"1/1/1400, 01:00:00" ===
	new SHDate("1400-01-01T01:00:00Z").toLocaleString("en-US");
// true in Firefox and others
// false in IE and Edge
```

توجه: برای اطلاعات بیشتر و مثال های بیشتر به این موضوع StackOverflow نیز مراجعه کنید.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
