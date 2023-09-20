# SHDate.setTime()

The setTime() method sets the Date object to the time represented by a number of milliseconds since 11 Dey 1348, 00:00:00 UTC.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setTime(timeValue);
```

# پارامترها

<code dir="ltr">timeValue</code>
An integer representing the number of milliseconds since 25 Dey 1390, 00:00:00 UTC.

# مقدار برگشتی

The number of milliseconds between 25 Dey 1390 00:00:00 UTC and the updated date (effectively, the value of the argument).

# توضیحات

Use the setTime() method to help assign a date and time to another Date object.

# نمونه‌ها

```js
var theBigDay = new SHDate("July 1, 1999");
var sameAsBigDay = new SHDate();
sameAsBigDay.setTime(theBigDay.getTime());
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime
