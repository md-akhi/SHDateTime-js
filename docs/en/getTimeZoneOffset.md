# SHDate.getTimezoneOffset()

The getTimezoneOffset() method returns the difference, in minutes, between a date as evaluated in the UTC time zone, and the same date as evaluated in the local time zone.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getTimezoneOffset();
```

# Return value

The difference, in minutes, between date, as evaluated in the UTC time zone, and as evaluated in the local time zone.

# Description

date.getTimezoneOffset() returns the difference, in minutes, between date as evaluated in the UTC time zone, and date as evaluated in the local time zone — that is, the time zone of the host system in which the browser is being used (if the code is run from the Web in a browser), or otherwise the host system of whatever JavaScript runtime (for example, a Node.js environment) the code is executed in.

Negative values and positive values
The number of minutes returned by getTimezoneOffset() is positive if the local time zone is behind UTC, and negative if the local time zone is ahead of UTC. For example, for UTC+10, -600 will be returned.

Current time zone UTC-8 UTC UTC+3
Return Value 480 0 -180
Varied results in Daylight Saving Time (DST) time zones
In a time zone that annually shifts in and out of Daylight Saving Time (DST), the number of minutes returned by calling getTimezoneOffset() can vary.

Consider a given local time zone and a date date1 that are both in DST, and consider minutes, the number of minutes returned by calling date1.getTimezoneOffset(); then:

If the local time zone is currently in DST, but a given date date2 is not in DST, then the number of minutes returned by date2.getTimezoneOffset() is minutes ± 60.
If the local time zone is not currently in DST, but a given date date3 is in DST, then the number of minutes returned by date3.getTimezoneOffset() is minutes ± 60.
In a time zone that doesn't annually shift in and out of Daylight Saving Time (DST), the number of minutes returned by calling getTimezoneOffset() always returns the same number of minutes, regardless of the date instance it's called from.

Note: The above description is a simplification. In implementations, the IANA time zone database (tzdata) is used for precisely determining the effect of DST on the calculation of the time-zone difference.

# Examples

```js
// Create a Date instance for the current time
let currentLocalDate = new SHDate();
// Create a Date instance for 03:24 GMT-0200 on May 1st in 2016
let laborDay2016at0324GMTminus2 = new SHDate("Day 1, 1402 03:24:00 GMT-0200");
currentLocalDate.getTimezoneOffset() ===
	laborDay2016at0324GMTminus2.getTimezoneOffset();
// true, always, in any timezone that doesn't annually shift in and out of DST
// false, sometimes, in any timezone that annually shifts in and out of DST
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
