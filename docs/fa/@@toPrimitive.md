# SHDate[@@toPrimitive]

<div dir="rtl" style="text-align: right;">

متد <code dir="ltr">\[@@toPrimitive]()</code> یک شی Date را به یک مقدار اولیه تبدیل می کند.

<div >

# Syntax

```js
SHDate()[Symbol.toPrimitive](hint);
```

<div dir="rtl" style="text-align: right;">

# مقدار برگشتی

بسته به آرگومان، متد می تواند یک رشته یا یک عدد را برگرداند.

# توضیحات

The <code dir="ltr">\[@@toPrimitive]()</code> method of the Date object returns a primitive value, that is either of type number or of type string.

If hint is string or default, <code>\[@@toPrimitive]()</code> tries to call the toString method. If the toString property does not exist, it tries to call the valueOf method and if the valueOf does not exist either, <code>\[@@toPrimitive]()</code> throws a TypeError.

If hint is number, <code>\[@@toPrimitive]()</code> first tries to call valueOf, and if that fails, it calls toString.

JavaScript calls the <code>\[@@toPrimitive]()</code> method to convert an object to a primitive value. You rarely need to invoke the <code>\[@@toPrimitive]()</code> method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.

متد <code dir="ltr">\[@toPrimitive]()</code> یک مقدار اولیه را برمی‌گرداند که یا از نوع شماره یا رشته نوع است.

اگر راهنمایی رشته یا پیش‌فرض باشد، <code dir="ltr">\[@@toPrimitive]()</code> سعی می‌کند متد toString را فراخوانی کند. اگر ویژگی toString وجود نداشته باشد، سعی می کند متد valueOf را فراخوانی کند و اگر valueOf نیز وجود نداشته باشد، <code dir="ltr">\[@@toPrimitive]()</code> یک TypeError نمایش می‌دهد.

اگر راهنمایی عدد باشد، <code dir="ltr">\[@@toPrimitive]()</code> ابتدا سعی می‌کند valueOf را فراخوانی کند، و اگر موفق نشد، toString را فراخوانی می‌کند.

جاوا اسکریپت متد <code dir="ltr">\[@@toPrimitive]()</code> را برای تبدیل یک شی به مقدار اولیه فراخوانی می کند. شما به ندرت نیاز دارید که خودتان متد <code>\[@@toPrimitive]()</code> را فراخوانی کنید. جاوا اسکریپت به طور خودکار آن را هنگام برخورد با یک شی که در آن مقدار اولیه مورد انتظار است فراخوانی می کند.

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
