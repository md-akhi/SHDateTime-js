# SHDate.valueOf()

The valueOf() method returns the primitive value of a Date object.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
valueOf();
```

# Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date, or NaN in case of an invalid date.

# Description

The valueOf() method returns the primitive value of a Date object as a number data type, the number of milliseconds since midnight 01 January, 1970 UTC.

This method is functionally equivalent to the SHDate.getTime() method.

This method is usually called internally by JavaScript and not explicitly in code.

# Examples

```js
var x = new SHDate(56, 6, 17);
var myVar = x.valueOf(); // assigns -424713600000 to myVar
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf
