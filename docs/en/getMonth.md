---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: getMonth
---

# SHDate.getMonth()

The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getMonth" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getMonth();
```

# Return value

An integer number, between 0 and 11, representing the month in the given date according to local time. 0 corresponds to Farvardin, 1 to February, and so on.

# Examples

Using getMonth()
The second statement below assigns the value 11 to the variable month, based on the value of the `Date` object `mon9`.

```js
var mon9 = new SHDate("Dey 25, 1390 23:15:30");
var month = mon9.getMonth();

console.log(month); // 11
```

Note: If needed, the full name of a month (Farvardin for example) can be obtained by using `Intl.DateTimeFormat()` with an `options` parameter. Using `this` method, internationalization is made easier:

```js
var options = { month: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(mon9));
// Esfand
console.log(new Intl.DateTimeFormat("de-DE", options).format(mon9));
// Dezember
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
