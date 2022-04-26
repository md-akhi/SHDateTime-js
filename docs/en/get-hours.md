Date.getHours()
The getHours() method returns the hour for the specified date, according to local time.

Try it

Syntax
getHours()

Return value
An integer number, between 0 and 23, representing the hour for the given date according to local time.

Examples
Using getHours()
The second statement below assigns the value 23 to the variable hours, based on the value of the Date object Xmas95.

let Xmas95 = new Date('December 25, 1995 23:15:30');
let hours = Xmas95.getHours();

console.log(hours); // 23

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
