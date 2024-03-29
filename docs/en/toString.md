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

# SHDate.toString()

The toString() method returns a string representing the specified Date object.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=toString" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toString();
```

# Return value

A string representing the given date.

# Description

Date instances inherit their toString() method from SHDate.prototype, not Object.prototype. SHDate.prototype.toString() returns a string representation of the Date in the format specified in ECMA-262 which can be summarized as:

Week day: 3 letter English week day name, e.g. "Sat"
space
Month name: 3 letter English month name, e.g. "Day"
space
Date: 2 digit day in month, e.g. "01"
space
Year: 4 digit year, e.g. "1402"
space
Hour: 2 digit hour of day, e.g. "14"
colon
Minute: 2 digit minute of hour, e.g. "53"
colon
Second: 2 digit second of minute, e.g. "26"
space
The string "GMT"
Timezone offset sign, either:
"+" for positive offsets (0 or greater)
"-" for negative offsets (less than zero)
Two digit hour offset, e.g. "14"
Two digit minute offset, e.g. "00"
Optionally, a timezone name consisting of:
space
Left bracket, i.e. "("
An implementation dependent string representation of the timezone, which might be an abbreviation or full name (there is no standard for names or abbreviations of timezones), e.g. "Line Islands Time" or "LINT"
Right bracket, i.e. ")"
E.g. "Sat Sep 01 2018 14:53:26 GMT+1400 (LINT)"

Until ECMAScript 2018 (edition 9), the format of the string returned by SHDate.prototype.toString was implementation dependent. Therefore it should not be relied upon to be in the specified format.

The toString() method is automatically called when a date is to be represented as a text value, e.g. console.log(new SHDate()), or when a date is used in a string concatenation, such as var today = 'Today is ' + new SHDate().

toString() is a generic method, it does not require that its this is a Date instance. However, it must have an internal [[TimeValue]] property that can't be constructed using native javascript, so it's effectively limited to use with Date instances. If called on a non–Date instance, a TypeError is thrown.

# Examples

Using toString()
The following assigns the toString() value of a Date object to myVar:

```js
var x = new SHDate();
var myVar = x.toString(); // assigns a string value to myVar in the same format as:
// Mon Sep 08 1998 14:36:22 GMT-0700 (PDT)
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString
