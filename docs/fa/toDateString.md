# SHDate.toDateString()
روش <code dir = "ltr"> todatestring () </code> بخش تاریخ یک شیء تاریخ را به زبان انگلیسی در قالب زیر که توسط فضاها جدا شده است ، برمی گرداند:

سه حرف اول نام روز هفته
سه حرف اول نام ماه
روز دو رقمی ماه ، در صورت لزوم در سمت چپ صفر قرار گرفته است
چهار رقمی سال (حداقل) ، در صورت لزوم در سمت چپ با صفر قرار گرفته است
به عنوان مثال."پنجشنبه روز 11 1348".
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toDateString();
```

# مقدار برگشتی

رشته ای که بخش تاریخ شیء تاریخ داده شده را در فرم قابل خواندن انسان به زبان انگلیسی نشان می دهد.
# توضیحات
نمونه های تاریخ به یک نکته خاص در زمان مراجعه می کنند.فراخوانی <code dir = "ltr"> toString () </code> تاریخ فرمت شده به شکل قابل خواندن انسان به زبان انگلیسی را برمی گرداند.بعضی اوقات مطلوب است که یک رشته از زمان را بدست آورید.چنین چیزی را می توان با روش <code dir = "ltr"> totimestring () </code> انجام داد.

روش <code dir = "ltr"> todatestring () </code> به ویژه مفید است زیرا موتورهای سازگار با اجرای ECMA-262 ممکن است در رشته به دست آمده از toString () برای اشیاء تاریخ متفاوت باشند ، زیرا این قالب وابسته به اجرای و ساده استرویکردهای برش رشته ممکن است نتایج مداوم در چندین موتورهای مختلف ایجاد نکند.
# نمونه‌ها

A basic usage of <code dir="ltr">toDateString()</code>

استفاده اساسی از <code dir = "ltr"> todatestring () </code>var d = new SHDate(1372, 3, 7, 14, 39, 7);

console.log(d.toString()); // logs Mon Tir 07 1372 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // logs Mon Tir 07 1372
```

توجه: ماه در هنگام استفاده به عنوان آرگومان تاریخ ، 0- شاخص می شوند (بنابراین 0 مربوط به فارواردین و 11 تا دسامبر است).
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
