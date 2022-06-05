# SHDate.toUTCString()

The toUTCString() method converts a date to a string, using the UTC time zone.

Based on rfc7231 and modified according to ecma-262 toUTCString, it can have negative values in the 2021 version

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
toUTCString();
```

# Return value

A string representing the given date using the UTC time zone.

# Description

The value returned by toUTCString() is a string in the form Www, dd Mmm yyyy hh:mm:ss GMT, Where:

Format String Description
Www Day of week, as three letters (e.g. Sun, Mon, ...)
dd Day of month, as two digits with leading zero if required
Mmm Month, as three letters (e.g. Jan, Feb, ...)
yyyy Year, as four or more digits with leading zeroes if required
hh Hour, as two digits with leading zero if required
mm Minute, as two digits with leading zero if required
ss Seconds, as two digits with leading zero if required
Prior to ECMAScript 2018, the format of the return value varied according to the platform. The most common return value was an RFC-1123 formatted date stamp, which is a slightly updated version of RFC-822 date stamps.

# Examples

Using toUTCString()

```js
let today = new Date("Wed, 14 Jun 2017 00:00:00 PDT");
let UTCstring = today.toUTCString(); // Wed, 14 Jun 2017 07:00:00 GMT
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
