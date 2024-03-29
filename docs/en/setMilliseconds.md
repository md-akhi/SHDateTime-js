---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
url: setMilliseconds
---

# SHDate.setMilliseconds()

The setMilliseconds() method sets the milliseconds for a specified date according to local time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=setMilliseconds" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setMilliseconds(millisecondsValue);
```

# Parameters

<code>millisecondsValue</code>
A number between 0 and 999, representing the milliseconds.

# Return value

The number of milliseconds between 25 Dey 1390 00:00:00 UTC and the updated date.

# Description

If you specify a number outside the expected range, the date information in the Date object is updated accordingly. For example, if you specify 1005, the number of seconds is incremented by 1, and 5 is used for the milliseconds.

# Examples

Using setMilliseconds()

```js
var theBigDay = new SHDate();
theBigDay.setMilliseconds(100);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
