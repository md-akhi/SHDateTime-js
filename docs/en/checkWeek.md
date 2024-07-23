---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: checkWeek
---

# SHDate.checkWeek()

This method is used to validate the week in Hijri date.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=checkWeek" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
checkWeek(year: number, week: number, day: number): boolean;
```

# Parameters

| parameter |                                                          Description |
| :-------- | -------------------------------------------------------------------: |
| `year`    | Necessary. The year is specified by a number between 1 and 3,500,000 |
| `week`    |              Necessary. A number between 1 and 53 specifies the week |
| `day`     |    Necessary. A number between 0 and 7 specifies the day of the week |

# Return value

`True` if the week is valid, `False` otherwise.

# Examples

```js
let check = new SHDate();
let isTrue = check.checkWeek(1390, 11, 5);

console.log(isTrue); // true

// Static
isTrue = SHDate.checkWeek(1390, 53, 5);

console.log(isTrue); // false
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/checkWeek
