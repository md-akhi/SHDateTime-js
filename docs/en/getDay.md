---
layout: page
language: en-US
contentLanguage: en
direction: ltr
---

# SHDate.getDay()

The <code>getDay()</code> method returns the day of the week for the specified date according to local time, where 0 represents Sunday. For the day of the month, see <code>SHDate.prototype.getDate()</code>.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getDay" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getDay();
```

# Return value

An integer number, between 0 and 6, corresponding to the day of the week for the given date, according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

# Examples

The second statement below assigns the value 1 to weekday, based on the value of the Date object Xmas95. Dey 25, 1390, is a Monday.

```js
var Xmas95 = new SHDate("Dey 25, 1390 23:15:30");
var weekday = Xmas95.getDay();

console.log(weekday); // 1
```

Note: If needed, the full name of a day ("Monday" for example) can be obtained by using Intl.DateTimeFormat with an options parameter. Using this method, the internationalization is made easier:

```js
var options = { weekday: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(Xmas95));
// Monday
console.log(new Intl.DateTimeFormat("de-DE", options).format(Xmas95));
// Montag
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
