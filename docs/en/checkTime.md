---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: checkTime
---

# SHDate.checkTime()

This method is used for time validation.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=checkTime" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
checkTime(hours: number, minutes: number, seconds: number, [milliseconds: number = 0]): boolean;
```

# Parameters

| parameter      |                                                     Description |
| :------------- | --------------------------------------------------------------: |
| `hours`        |   Necessary. The hour is specified by a number between 0 and 23 |
| `minutes`      | Necessary. The minute is specified by a number between 0 and 59 |
| `seconds`      | Necessary. The second is specified by a number between 1 and 59 |
| `milliseconds` |      optional A number between 0 and 999 specifies milliseconds |

# Return value

`True` if the time is valid, `False` otherwise.

# Examples

```js
let check = new SHDate();
let isTrue = check.checkTime(14, 50, 20);

console.log(isTrue); // true

// Static
isTrue = SHDate.checkTime(14, 50, 20, 900);

console.log(isTrue); // true
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/checkTime
