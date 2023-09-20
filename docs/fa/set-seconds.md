# SHDate.setSeconds()

The setSeconds() method sets the seconds for a specified date according to local time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
setSeconds(secondsValue);
setSeconds(secondsValue, msValue);
```

# پارامترها

<code dir="ltr">secondsValue</code>
An integer between 0 and 59, representing the seconds.

<code dir="ltr">msValue</code> Optional
Optional. A number between 0 and 999, representing the milliseconds.

# مقدار برگشتی

The number of milliseconds between 25 Dey 1390 00:00:00 UTC and the updated date.

# توضیحات

If you do not specify the msValue parameter, the value returned from the getMilliseconds() method is used.

If a parameter you specify is outside of the expected range, setSeconds() attempts to update the date information in the Date object accordingly. For example, if you use 100 for secondsValue, the minutes stored in the Date object will be incremented by 1, and 40 will be used for seconds.

# نمونه‌ها

Using setSeconds()

```js
var theBigDay = new SHDate();
theBigDay.setSeconds(30);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds
