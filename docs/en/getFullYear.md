---
layout: page
language: en-US
contentLanguage: en
direction: ltr
---

# SHDate.getFullYear()

The <code>getFullYear()</code> method returns the year of the specified date according to local time.

Use this method instead of the <code>getYear()</code> method.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getFullYear" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getFullYear();
```

# Return value

A number corresponding to the year of the given date, according to local time.

# Description

The value returned by <code>getFullYear()</code> is an absolute number. For dates between the years 1000 and 9999, <code>getFullYear()</code> returns a four-digit number, for example, 1390. Use this function to make sure a year is compliant with years after 2000.

# Examples

The following example assigns the four-digit value of the current year to the variable year.

```js
var today = new SHDate();
var year = today.getFullYear();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
