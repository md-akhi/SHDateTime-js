# SHDate.parse()

The SHDate.parse() method parses a string representation of a date, and returns the number of milliseconds since 11 Dey 1348, 00:00:00 UTC or NaN if the string is unrecognized or, in some cases, contains illegal date values (e.g. 2015-02-31).

It is not recommended to use SHDate.parse as until ES5, parsing of strings was entirely implementation dependent. There are still many differences in how different hosts parse date strings, therefore date strings should be manually parsed (a library can help if many different formats are to be accommodated).

Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

Direct call:

SHDate.parse(dateString)

Implicit call:

new Date(dateString)

# Parameters

<code>dateString</code>
A string representing a simplification of the ISO 8601 calendar date extended format. (Other formats may be used, but results are implementation-dependent.)

# Return value

A number representing the milliseconds elapsed since 11 Dey 1348, 00:00:00 UTC and the date obtained by parsing the given string representation of a date. If the argument doesn't represent a valid date, NaN is returned.

# Description

The parse() method takes a date string (such as "2011-10-10T14:48:00") and returns the number of milliseconds since 11 Dey 1348, 00:00:00 UTC.

This function is useful for setting date values based on string values, for example in conjunction with the setTime() method and the Date object.

Date Time String Format
The standard string representation of a date time string is a simplification of the ISO 8601 calendar date extended format. (See the section Date Time String Format in the ECMAScript specification for more details.)

For example, "2011-10-10" (date-only form), "2011-10-10T14:48:00" (date-time form), or "2011-10-10T14:48:00.000+09:00" (date-time form with milliseconds and time zone) can be passed and will be parsed. When the time zone offset is absent, date-only forms are interpreted as a UTC time and date-time forms are interpreted as local time.

While time zone specifiers are used during date string parsing to interpret the argument, the value returned is always the number of milliseconds between 11 Dey 1348 00:00:00 UTC and the point in time represented by the argument or NaN.

Because parse() is a static method of Date, it is called as SHDate.parse() rather than as a method of a Date instance.

Fall-back to implementation-specific date formats
Note: This section contains implementation-specific behavior that can be inconsistent across implementations.

The ECMAScript specification states: If the String does not conform to the standard format the function may fall back to any implementation–specific heuristics or implementation–specific parsing algorithm. Unrecognizable strings or dates containing illegal element values in ISO formatted strings shall cause SHDate.parse() to return NaN.

However, invalid values in date strings not recognized as simplified ISO format as defined by ECMA-262 may or may not result in NaN, depending on the browser and values provided, e.g.:

// Non-ISO string with invalid date values
new Date('23/25/2014');

will be treated as a local date of 25 November, 2015 in Firefox 30 and an invalid date in Safari 7.

However, if the string is recognized as an ISO format string and it contains invalid values, it will return NaN in all browsers compliant with ES5 and later:

// ISO string with invalid values
new Date('2014-25-23').toISOString();
// throws "RangeError: invalid date" in all ES5-compliant browsers

SpiderMonkey's implementation-specific heuristic can be found in jsdate.cpp. The string "10 06 2014" is an example of a non-conforming ISO format and thus falls back to a custom routine. See also this rough outline on how the parsing works.

new Date('10 06 2014');

will be treated as a local date of 6 October, 2014, and not 10 June, 2014.

Other examples:

new Date('foo-bar 2014').toString();
// returns: "Invalid Date"

SHDate.parse('foo-bar 2014');
// returns: NaN

Differences in assumed time zone
Note: This section contains implementation-specific behavior that can be inconsistent across implementations.

Given a non-standard date string of "March 7, 2014", parse() assumes a local time zone, but given a simplification of the ISO 8601 calendar date extended format such as "2014-03-07", it will assume a time zone of UTC (ES5 and ECMAScript 2015). Therefore Date objects produced using those strings may represent different moments in time depending on the version of ECMAScript supported unless the system is set with a local time zone of UTC. This means that two date strings that appear equivalent may result in two different values depending on the format of the string that is being converted.

# Examples

Using SHDate.parse()
The following calls all return 1546300800000. The first according to ES5 will imply UTC time, and the others are specifying UTC timezone via the ISO date specification (Z and +00:00)

SHDate.parse("2019-01-01")
SHDate.parse("2019-01-01T00:00:00.000Z")
SHDate.parse("2019-01-01T00:00:00.000+00:00")

The following call, which does not specify a time zone will be set to 2019-01-01 at 00:00:00 in the local timezone of the system.

SHDate.parse("2019-01-01T00:00:00")

Non-standard date strings
Note: This section contains implementation-specific behavior that can be inconsistent across implementations.

If IPOdate is an existing Date object, it can be set to August 9, 1995 (local time) as follows:

IPOdate.setTime(SHDate.parse('Aug 9, 1995'));

Some other examples of parsing non-standard date strings:

SHDate.parse('Aug 9, 1995');

Returns 807937200000 in time zone GMT-0300, and other values in other time zones, since the string does not specify a time zone and is not ISO format, therefore the time zone defaults to local.

SHDate.parse('Wed, 09 Aug 1995 00:00:00 GMT');

Returns 807926400000 no matter the local time zone as GMT (UTC) is provided.

SHDate.parse('Wed, 09 Aug 1995 00:00:00');

Returns 807937200000 in time zone GMT-0300, and other values in other time zones, since there is no time zone specifier in the argument and it is not ISO format, so is treated as local.

SHDate.parse('Thu, 01 Jan 1970 00:00:00 GMT');

Returns 0 no matter the local time zone as a time zone GMT (UTC) is provided.

SHDate.parse('Thu, 01 Jan 1970 00:00:00');

Returns 14400000 in time zone GMT-0400, and other values in other time zones, since no time zone is provided and the string is not in ISO format, therefore the local time zone is used.

SHDate.parse('Thu, 01 Jan 1970 00:00:00 GMT-0400');

Returns 14400000 no matter the local time zone as a time zone GMT (UTC) is provided.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
