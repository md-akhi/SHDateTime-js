---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: getHours
---

# SHDate.getHours()

The getHours() method returns the hour for the specified date, according to local time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getHours();
```

# Return value

An integer number, between 0 and 23, representing the hour for the given date according to local time.

# Examples

Using getHours()
The second statement below assigns the value 23 to the variable hours, based on the value of the Date object Xmas95.

```js
let Xmas95 = new SHDate("Dey 25, 1390 23:15:30");
let hours = Xmas95.getHours();

console.log(hours); // 23
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
