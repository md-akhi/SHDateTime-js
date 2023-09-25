# SHDate.getMilliseconds()

The getMilliseconds() method returns the milliseconds in the specified date according to local time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getMilliseconds" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getMilliseconds();
```

# Return value

A number, between 0 and 999, representing the milliseconds for the given date according to local time.

# Examples

Using getMilliseconds()
The following example assigns the milliseconds portion of the current time to the variable milliseconds:

```js
var today = new SHDate();
var milliseconds = today.getMilliseconds();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
