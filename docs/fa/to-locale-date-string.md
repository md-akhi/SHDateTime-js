# SHDate.toLocaleDateString()

روش <code dir = "ltr"> tolocaledatestring () </code> رشته ای را با بازنمایی حساس به زبان از قسمت تاریخ تاریخ مشخص شده در منطقه زمانی عامل کاربر باز می گرداند.

آرگومان های محلی و گزینه ها به برنامه ها اجازه می دهند زبانی را که از کنوانسیون های قالب بندی استفاده می شود ، مشخص کنند و اجازه می دهند تا رفتار عملکرد را سفارشی کنند.در پیاده سازی های قدیمی ، که آرگومان های محلی و گزینه ها را نادیده می گیرند ، محلی که مورد استفاده قرار می گیرد و شکل رشته برگشتی کاملاً وابسته است.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toLocaleDateString();
toLocaleDateString(locales);
toLocaleDateString(locales, options);
```

# پارامترها

آرگومان های محلی و گزینه ها رفتار عملکرد را سفارشی می کنند و به برنامه ها اجازه می دهند زبانی را که از کنوانسیون های قالب بندی استفاده می شود ، مشخص کنند.در پیاده سازی ها ، که آرگومان های محلی و گزینه ها را نادیده می گیرند ، محلی که مورد استفاده قرار می گیرد و شکل رشته برگشتی کاملاً وابسته است.

برای جزئیات بیشتر در مورد این پارامترها و نحوه استفاده از آنها ، به سازنده <code dir = "ltr"> intl.datetimeformat () </code> مراجعه کنید.

مقدار پیش فرض برای هر خاصیت مؤلفه تاریخ مشخص نشده است ، اما اگر روزهای هفته ، سال ، ماه ، روز همه تعریف نشده باشد ، در آن زمان ، سال ، ماه و روز فرض می شود که "عددی" هستند.

# مقدار برگشتی

رشته ای که بخش تاریخ نمونه تاریخ مشخص را با توجه به کنوانسیون های خاص زبان نشان می دهد.

# Performance

هنگام قالب بندی تعداد زیادی از تاریخ ها ، بهتر است یک شیء intl.datetimeformat ایجاد کرده و از عملکرد ارائه شده توسط ویژگی فرمت آن استفاده کنید.

# نمونه‌ها

با استفاده از <code dir = "ltr"> tolocaledatestring () </code>
در استفاده اساسی بدون مشخص کردن یک مکان ، یک رشته فرمت شده در محل پیش فرض و با گزینه های پیش فرض بازگردانده می شود.

```js
const date = new SHDate(SHDate.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleDateString());
// → "12/11/2012" if run in en-US locale with time zone Asia/Tehran
```

بررسی پشتیبانی از آرگومان های محلی و گزینه ها
آرگومان های محلی و گزینه ها هنوز در همه مرورگرها پشتیبانی نمی شوند.برای بررسی اینکه آیا یک اجرای از قبل از آنها پشتیبانی می کند ، می توانید از الزامی که برچسب های زبان غیرقانونی با یک استثناء RangeRror رد می شوند ، استفاده کنید:

```js
function toLocaleDateStringSupportsLocales() {
	try {
		new SHDate().toLocaleDateString("i");
	} catch (e) {
		return e.name === "RangeError";
	}
	return false;
}
```

با استفاده از محلی
این مثال برخی از تغییرات در قالب های تاریخ بومی سازی را نشان می دهد.برای به دست آوردن قالب زبان مورد استفاده در رابط کاربری برنامه خود ، حتماً با استفاده از استدلال محلی ، آن زبان (و احتمالاً برخی از زبانهای برگشتی) را مشخص کنید:

```js
const date = new SHDate(SHDate.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// Asia/Tehran for the IR

// US English uses month-day-year order
console.log(date.toLocaleDateString("en-US"));
// → "12/20/2012"

// British English uses day-month-year order
console.log(date.toLocaleDateString("en-GB"));
// → "20/12/2012"

// Korean uses year-month-day order
console.log(date.toLocaleDateString("ko-KR"));
// → "2012. 12. 20."

// Event for Persian, It's hard to manually convert date to Solar Hijri
console.log(date.toLocaleDateString("fa-IR"));
// → "۱۳۹۱/۹/۳۰"

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(date.toLocaleDateString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢"

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
console.log(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// → "24/12/20"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(date.toLocaleDateString(["ban", "id"]));
// → "20/12/2012"
```
با استفاده از گزینه ها
نتایج ارائه شده توسط tolocaledatestring () با استفاده از آرگومان گزینه ها قابل تنظیم است:
```js
const date = new SHDate(SHDate.UTC(1402, 11, 20, 3, 0, 0));

// request a weekday along with a long date
const options = {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric"
};
console.log(date.toLocaleDateString("de-DE", options));
// → "Donnerstag, 20. Espand 1402"

// an application may want to use UTC and make that visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleDateString("en-US", options));
// → "Thursday, Esfand 20, 1402, UTC"
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

```

```
