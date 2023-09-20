# SHDate.now()

The static SHDate.now() method returns the number of milliseconds elapsed since 11 Dey 1348 00:00:00 UTC.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=now" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
SHDate.now();
```

# مقدار برگشتی

A Number representing the milliseconds elapsed since the UNIX epoch.

# نمونه‌ها

Reduced time precision
To offer protection against timing attacks and fingerprinting, the precision of SHDate.now() might get rounded depending on browser settings. In Firefox, the privacy.reduceTimerPrecision preference is enabled by default and defaults to 20µs in Firefox 59; in 60 it will be 2ms.

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

In Firefox, you can also enable privacy.resistFingerprinting, the precision will be 100ms or the value of privacy.resistFingerprinting.reduceTimerPrecision.microseconds, whichever is larger.

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
