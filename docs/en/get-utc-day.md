SHDate.getUTCDay()
The getUTCDay() method returns the day of the week in the specified date according to universal time, where 0 represents Sunday.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>
Syntax
getUTCDay()

Return value
A number. If the Date object represents a valid date, an integer number corresponding to the day of the week for the given date, according to universal time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. Otherwise, NaN if the Date object doesn't represent a valid date.

Examples
Using getUTCDay()
The following example assigns the weekday portion of the current date to the variable weekday.

var today = new SHDate();
var weekday = today.getUTCDay();

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
