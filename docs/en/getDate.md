---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: getDate
---

# SHDate.getDate()

The <code>getDate()</code> method returns the day of the month for the specified date according to local time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getDate" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getDate();
```

# Return value

An integer number, between 1 and 31, representing the day of the month for the given date according to local time.

# Examples

The second statement below assigns the value 25 to the variable day, based on the value of the `Date` object `day25`.

```js
var day25 = new SHDate("Dey 25, 1390 23:15:30");
var day = day25.getDate();

console.log(day); // 25
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
