---
layout: page
language: en-US
contentLanguage: en
direction: ltr
sidebar: sidebarMethod
---

---

layout: page
language: en-US
contentLanguage: en
direction: ltr

---

# SHDate.toISOString()

The toISOString() method returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always zero UTC offset, as denoted by the suffix "Z".

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=toISOString" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toISOString();
```

# Return value

A string representing the given date in the ISO 8601 format according to universal time.

# Examples

```js
let today = new SHDate("05 Day 1402 14:48 UTC");

console.log(today.toISOString()); // Returns 1402-09-05T14:48:00.000Z
```

The above example uses parsing of a non–standard string value that may not be correctly parsed in non–Mozilla browsers.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
