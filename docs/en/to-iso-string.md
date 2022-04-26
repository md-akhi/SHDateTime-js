Date.toISOString()
The toISOString() method returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always zero UTC offset, as denoted by the suffix "Z".

Try it

Syntax
toISOString()

Return value
A string representing the given date in the ISO 8601 format according to universal time.

Examples
Using toISOString()
let today = new Date('05 October 2011 14:48 UTC')

console.log(today.toISOString()) // Returns 2011-10-05T14:48:00.000Z

The above example uses parsing of a non–standard string value that may not be correctly parsed in non–Mozilla browsers.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
