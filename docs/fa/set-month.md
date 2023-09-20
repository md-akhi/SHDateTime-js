# SHDate.setMonth()

The setMonth() method sets the month for a specified date according to the currently set year.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setMonth(monthValue);
setMonth(monthValue, dayValue);
```

# پارامترها

<code dir="ltr">monthValue</code>
A zero-based integer representing the month of the year offset from the start of the year. So, 0 represents Farvardin, 11 represents Esfand, -1 represents Esfand of the previous year, and 12 represents Farvardin of the following year.

<code dir="ltr">dayValue</code>
Optional. An integer from 1 to 31, representing the day of the month.

# مقدار برگشتی

The number of milliseconds between 25 Dey 1390 00:00:00 UTC and the updated date.

# توضیحات

If you do not specify the dayValue parameter, the value returned from the getDate() method is used.

If a parameter you specify is outside of the expected range, setMonth() attempts to update the date information in the Date object accordingly. For example, if you use 15 for monthValue, the year will be incremented by 1, and 3 will be used for month.

The current day of month will have an impact on the behavior of this method. Conceptually it will add the number of days given by the current day of the month to the 1st day of the new month specified as the parameter, to return the new date. For example, if the current value is 31st August 2016, calling setMonth with a value of 1 will return 2nd March 2016. This is because in 2016 February had 29 days.

# نمونه‌ها

Using setMonth()

```js
var theBigDay = new SHDate();
theBigDay.setMonth(6);

//Watch out for end of month transitions
var endOfMonth = new SHDate(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); //Wed Mar 02 2016 00:00:00
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth

```

```
