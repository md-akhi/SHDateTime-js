---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: getMinutes
---

# SHDate.getMinutes()

The getMinutes() method returns the minutes in the specified date according to local time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getMinutes" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getMinutes();
```

# Return value

An integer number, between 0 and 59, representing the minutes in the given date according to local time.

# Examples

Using getMinutes()
The second statement below assigns the value 15 to the variable minutes, based on the value of the `Date` object `min15`.

```js
var min15 = new SHDate("Dey 25, 1390 23:15:30");
var minutes = min15.getMinutes();

console.log(minutes); // 15
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes
