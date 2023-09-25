# SHDate.getSeconds()

The getSeconds() method returns the seconds in the specified date according to local time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getSeconds" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getSeconds();
```

# Return value

An integer number, between 0 and 59, representing the seconds in the given date according to local time.

# Examples

Using getSeconds()
The second statement below assigns the value 30 to the variable seconds, based on the value of the Date object Xmas95.

```js
var Xmas95 = new SHDate("Dey 25, 1390 23:15:30");
var seconds = Xmas95.getSeconds();

console.log(seconds); // 30
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds
