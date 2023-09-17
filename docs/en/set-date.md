# SHDate.setDate()

The setDate() method changes the day of the month of a given Date instance, based on local time.

To instead change the day of the month for a given Date instance based on UTC time, use the setUTCDate() method.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setDate(dayValue);
```

# Parameters

<code>dayValue</code>
An integer representing the day of the month.

# Return value

The number of milliseconds between 25 Dey 1390 00:00:00 UTC and the given date (the Date object is also changed in place).

# Description

If the dayValue is outside of the range of date values for the month, setDate() will update the Date object accordingly.

For example, if 0 is provided for dayValue, the date will be set to the last day of the previous month.

If a negative number is provided for dayValue, the date will be set counting backwards from the last day of the previous month. -1 would result in the date being set to 1 day before the last day of the previous month.

# Examples

Using setDate()

```js
const theBigDay = new SHDate(1962, 6, 7, 12); // noon of 1962-07-07 (7th of July 1962, month is 0-indexed)
const theBigDay2 = new SHDate(theBigDay).setDate(24); // 1962-07-24 (24th of July 1962)
const theBigDay3 = new SHDate(theBigDay).setDate(32); // 1962-08-01 (1st of August 1962)
const theBigDay4 = new SHDate(theBigDay).setDate(22); // 1962-07-22 (22nd of July 1962)
const theBigDay5 = new SHDate(theBigDay).setDate(0); // 1962-06-30 (30th of June 1962)
const theBigDay6 = new SHDate(theBigDay).setDate(98); // 1962-10-06 (6th of October 1962)
const theBigDay7 = new SHDate(theBigDay).setDate(-50); // 1962-05-11 (11th of May 1962)
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate
