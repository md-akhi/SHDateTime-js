---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: checkDate
---

# SHDate.checkDate()

This method is used to validate the Hijri date.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=checkDate" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
checkDate(year: number, month: number, date: number): boolean;
```

# Parameters

| parameter |                                                          Description |
| :-------- | -------------------------------------------------------------------: |
| `year`    | Necessary. The year is specified by a number between 1 and 3,500,000 |
| `month`   |       Necessary. The month is specified by a number between 0 and 11 |
| `date`    |           Necessary. The day is defined by a number between 1 and 31 |

# Return value

`True` if the date is valid, `False` otherwise.

# Examples

```js
let check = new SHDate();
let isTrue = check.checkDate(1390, 10, 25);

console.log(isTrue); // true

// Static
isTrue = SHDate.checkDate(1390, 10, 25);

console.log(isTrue); // true
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/checkDate
