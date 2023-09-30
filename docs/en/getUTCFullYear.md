---
layout: page
language: en-US
contentLanguage: en
direction: ltr
---
# SHDate.getUTCFullYear()

The getUTCFullYear() method returns the year in the specified date according to universal time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getUTCFullYear" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>
# Syntax
getUTCFullYear()

Return value
A number. If the Date object represents a valid date, an integer representing the year in the given date according to universal time. Otherwise, NaN if the Date object doesn't represent a valid date.

# Description

The value returned by getUTCFullYear() is an absolute number that is compliant with year-2000, for example, 1995.

# Examples

Using getUTCFullYear()
The following example assigns the four-digit value of the current year to the variable year.

var today = new SHDate();
var year = today.getUTCFullYear();

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
