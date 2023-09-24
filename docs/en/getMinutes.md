# SHDate.getMinutes()

The getMinutes() method returns the minutes in the specified date according to local time.

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getMinutes();
```

# Return value

An integer number, between 0 and 59, representing the minutes in the given date according to local time.

# Examples

Using getMinutes()
The second statement below assigns the value 15 to the variable minutes, based on the value of the Date object Xmas95.

```js
var Xmas95 = new SHDate("Dey 25, 1390 23:15:30");
var minutes = Xmas95.getMinutes();

console.log(minutes); // 15
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes
