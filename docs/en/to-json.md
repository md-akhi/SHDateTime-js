Date.toJSON()
The toJSON() method returns a string representation of the Date object.

Try it

Syntax
toJSON()

Return value
A string representation of the given date.

Description
Date instances refer to a specific point in time. Calling toJSON() returns a string (using toISOString()) representing the Date object's value. This method is generally intended to, by default, usefully serialize Date objects during JSON serialization.

Examples
Using toJSON()
var jsonDate = (new Date()).toJSON();
var backToDate = new Date(jsonDate);

console.log(jsonDate); //2015-10-26T07:46:36.611Z

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON
