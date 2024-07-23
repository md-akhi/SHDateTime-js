---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: checkTime12
---

# SHDate.checkTime12()

This time validation method is used for 12 hours.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=checkTime12" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
checkTime12(hours: number, minutes: number, seconds: number, [milliseconds: number = 0]): boolean;
```

# Parameters

| parameter      |                                                     Description |
| :------------- | --------------------------------------------------------------: |
| `hours`        |   Necessary. The hour is specified by a number between 1 and 12 |
| `minutes`      | Necessary. The minute is specified by a number between 0 and 59 |
| `seconds`      | Necessary. The second is specified by a number between 0 and 59 |
| `milliseconds` |      optional A number between 0 and 999 specifies milliseconds |

# Return value

`True` if the time is valid, `False` otherwise.

# Examples

```js
let check = new SHDate();
let isTrue = check.checkTime12(true, 14, 50, 20);

console.log(isTrue); // true

// Static
isTrue = SHDate.checkTime12(false, 14, 50, 20, 900);

console.log(isTrue); // false
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/checkTime12
