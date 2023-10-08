---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: constructor
---

---

layout: page
language: en-US
contentLanguage: en
direction: ltr

---

# SHDate.setUTCMilliseconds()

The setUTCMilliseconds() method sets the milliseconds for a specified date according to universal time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setUTCMilliseconds" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setUTCMilliseconds(millisecondsValue);
```

# Parameters

<code>millisecondsValue</code>
A number between 0 and 999, representing the milliseconds.

# Return value

The number of milliseconds between 25 Dey 1390 00:00:00 UTC and the updated date.

# Description

If a parameter you specify is outside of the expected range, setUTCMilliseconds() attempts to update the date information in the Date object accordingly. For example, if you use 1100 for millisecondsValue, the seconds stored in the Date object will be incremented by 1, and 100 will be used for milliseconds.

# Examples

```js
var theBigDay = new SHDate();
theBigDay.setUTCMilliseconds(500);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
