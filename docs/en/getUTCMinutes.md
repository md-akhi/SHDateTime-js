---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
---

# SHDate.getUTCMinutes()

The getUTCMinutes() method returns the minutes in the specified date according to universal time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getUTCMinutes" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getUTCMinutes();
```

# Return value

A number. If the Date object represents a valid date, an integer between 0 and 59, representing the minutes in the given date according to universal time. Otherwise, NaN if the Date object doesn't represent a valid date.

# Examples

Using getUTCMinutes()
The following example assigns the minutes portion of the current time to the variable minutes.

```js
var today = new SHDate();
var minutes = today.getUTCMinutes();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
