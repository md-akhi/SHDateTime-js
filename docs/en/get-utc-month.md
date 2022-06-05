# SHDate.getUTCMonth()

The getUTCMonth() returns the month of the specified date according to universal time, as a zero-based value (where zero indicates the first month of the year).

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getUTCMonth();
```

# Return value

A number. If the Date object represents a valid date, an integer number, between 0 and 11, corresponding to the month of the given date according to universal time. 0 for January, 1 for February, 2 for March, and so on. Otherwise, NaN if the Date object doesn't represent a valid date.

# Examples

Using getUTCMonth()
The following example assigns the month portion of the current date to the variable month.

```js
var today = new Date();
var month = today.getUTCMonth();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
