---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: "@@toPrimitive"
---

# SHDate[@@toPrimitive]

The <code>\[@@toPrimitive]()</code> method converts a Date object to a primitive value.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=toPrimitive" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>

# Syntax

```js
SHDate()[Symbol.toPrimitive](hint);
```

# Return value

The primitive value of the given Date object. Depending on the argument, the method can return either a string or a number.

# Description

The <code>\[@@toPrimitive]()</code> method of the Date object returns a primitive value, that is either of type number or of type string.

If hint is string or default, <code>\[@@toPrimitive]()</code> tries to call the toString method. If the toString property does not exist, it tries to call the valueOf method and if the valueOf does not exist either, <code>\[@@toPrimitive]()</code> throws a TypeError.

If hint is number, <code>\[@@toPrimitive]()</code> first tries to call valueOf, and if that fails, it calls toString.

JavaScript calls the <code>\[@@toPrimitive]()</code> method to convert an object to a primitive value. You rarely need to invoke the <code>\[@@toPrimitive]()</code> method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.

# Examples

Returning date primitives

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
