# SHDate.toDateString()

The toDateString() method returns the date portion of a Date object in English in the following format separated by spaces:

First three letters of the week day name
First three letters of the month name
Two digit day of the month, padded on the left a zero if necessary
Four digit year (at least), padded on the left with zeros if necessary
E.g. "Thu Day 11 1348".

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toDateString();
```

# Return value

A string representing the date portion of the given Date object in human readable form in English.

# Description

Date instances refer to a specific point in time. Calling toString() will return the date formatted in a human readable form in English. Sometimes it is desirable to obtain a string of the time portion; such a thing can be accomplished with the toTimeString() method.

The toDateString() method is especially useful because compliant engines implementing ECMA-262 may differ in the string obtained from toString() for Date objects, as the format is implementation-dependent and simple string slicing approaches may not produce consistent results across multiple engines.

# Examples

A basic usage of toDateString()

```js
var d = new SHDate(1372, 3, 7, 14, 39, 7);

console.log(d.toString()); // logs Mon Tir 07 1372 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // logs Mon Tir 07 1372
```

Note: Month are 0-indexed when used as an argument of Date (thus 0 corresponds to Farvardin and 11 to December).

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
