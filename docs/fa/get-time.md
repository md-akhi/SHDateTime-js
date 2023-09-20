# SHDate.getTime()

The getTime() method returns the number of milliseconds since the ECMAScript epoch.

You can use this method to help assign a date and time to another Date object. This method is functionally equivalent to the valueOf() method.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getTime();
```

# مقدار برگشتی

A number representing the milliseconds elapsed between 25 Dey 1390 00:00:00 UTC and the given date.

# Reduced time precision

To offer protection against timing attacks and fingerprinting, the precision of new SHDate().getTime() might get rounded depending on browser settings. In Firefox, the privacy.reduceTimerPrecision preference is enabled by default and defaults to 20µs in Firefox 59; in 60 it will be 2ms.

```js
// reduced time precision (2ms) in Firefox 60
new SHDate().getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// reduced time precision with `privacy.resistFingerprinting` enabled
new SHDate().getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

In Firefox, you can also enable privacy.resistFingerprinting, the precision will be 100ms or the value of privacy.resistFingerprinting.reduceTimerPrecision.microseconds, whichever is larger.

# نمونه‌ها

Using getTime() for copying dates
Constructing a date object with the identical time value.

```js
// Since month is zero based, birthday will be Farvardin 10, 1390
var birthday = new SHDate(1389, 11, 10);
var copy = new SHDate();
copy.setTime(birthday.getTime());

Measuring execution time
Subtracting two subsequent getTime() calls on newly generated Date objects, give the time span between these two calls. This can be used to calculate the executing time of some operations. See also SHDate.now() to prevent instantiating unnecessary Date objects.

var end, start;

start = new SHDate();
for (var i = 0; i < 1000; i++) {
Math.sqrt(i);
}
end = new SHDate();

console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
