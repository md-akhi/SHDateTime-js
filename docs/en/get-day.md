Date.getDay()
The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday. For the day of the month, see Date.prototype.getDate().

Try it

Syntax
getDay()

Return value
An integer number, between 0 and 6, corresponding to the day of the week for the given date, according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

Examples
Using getDay()
The second statement below assigns the value 1 to weekday, based on the value of the Date object Xmas95. December 25, 1995, is a Monday.

var Xmas95 = new Date('December 25, 1995 23:15:30');
var weekday = Xmas95.getDay();

console.log(weekday); // 1

Note: If needed, the full name of a day ("Monday" for example) can be obtained by using Intl.DateTimeFormat with an options parameter. Using this method, the internationalization is made easier:

var options = { weekday: 'long'};
console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));
// Monday
console.log(new Intl.DateTimeFormat('de-DE', options).format(Xmas95));
// Montag

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
