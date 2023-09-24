# SHDate.getUTCMilliseconds()

The getUTCMilliseconds() method returns the milliseconds portion of the time object's value according to universal time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getUTCMilliseconds();
```

# Return value

A number. If the Date object represents a valid date, an integer between 0 and 999, representing the milliseconds portion of the given Date object according to universal time. Otherwise, NaN if the Date object doesn't represent a valid date.

Not to be confused with Unix epoch time. To get the total milliseconds since 1348/10/11, use the SHDate.getTime() method.

# Examples

Using getUTCMilliseconds()
The following example assigns the milliseconds portion of the current time to the variable milliseconds.

```js
var today = new SHDate();
var milliseconds = today.getUTCMilliseconds();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
