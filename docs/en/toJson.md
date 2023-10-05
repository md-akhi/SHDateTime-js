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

# SHDate.toJSON()

The toJSON() method returns a string representation of the Date object.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=toJSON" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toJSON();
```

# Return value

A string representation of the given date.

# Description

Date instances refer to a specific point in time. Calling toJSON() returns a string (using toISOString()) representing the Date object's value. This method is generally intended to, by default, usefully serialize Date objects during JSON serialization.

# Examples

```js
var jsonDate = new SHDate().toJSON();
var backToDate = new SHDate(jsonDate);

console.log(jsonDate); //1402-10-26T07:46:36.611Z
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON
