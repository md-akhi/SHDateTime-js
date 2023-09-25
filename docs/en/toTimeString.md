# SHDate.toTimeString()

The toTimeString() method returns the time portion of a Date object in human readable form in English.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=toTimeString" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toTimeString();
```

# Return value

A string representing the time portion of the given date in human readable form in English.

# Description

Date instances refer to a specific point in time. Calling toString() will return the date formatted in a human readable form in English. Sometimes it is desirable to obtain a string of the time portion; such a thing can be accomplished with the toTimeString() method.

The toTimeString() method is especially useful because compliant engines implementing ECMA-262 may differ in the string obtained from toString() for Date objects, as the format is implementation-dependent; simple string slicing approaches may not produce consistent results across multiple engines.

# Examples

A basic usage of toTimeString()

```js
var d = new SHDate(1372, 3, 6, 14, 39, 7);

console.log(d.toString()); // Wed Mor 06 1372 14:39:07 GMT-0600 (PDT)
console.log(d.toTimeString()); // 14:39:07 GMT-0600 (PDT)
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString
