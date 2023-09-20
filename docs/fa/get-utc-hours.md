# SHDate.getUTCHours()

The getUTCHours() method returns the hours in the specified date according to universal time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getUTCHours();
```

# مقدار برگشتی

A number. If the Date object represents a valid date, an integer between 0 and 23, representing the hours in the given date according to Coordinated Universal Time. Otherwise, NaN if the Date object doesn't represent a valid date.

# نمونه‌ها

Using getUTCHours()
The following example assigns the hours portion of the current time to the variable hours.

```js
var today = new SHDate();
var hours = today.getUTCHours();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
