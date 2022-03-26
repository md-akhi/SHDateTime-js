# Constructor

```javascript
SHDate();
```

When called as a function, returns a string representation of the current date and time, exactly as ` new SHDate().toString()` does.

---

```javascript
new SHDate();
```

When called as a constructor, returns a `new SHDate` object.

# Static methods

```javascript
SHDate.now();
```

Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.

---

```javascript
SHDate.parse();
```

Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.

    Note: Parsing of strings with `SHDate.parse` is strongly discouraged due to browser differences and inconsistencies.

---

```javascript
SHDate.UTC();
```

Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.

# Instance methods

```javascript
SHDate.prototype.getDate();
```

Returns the day of the month (1–31) for the specified date according to local time.

---

```javascript
SHDate.prototype.getDay();
```

Returns the day of the week (0–6) for the specified date according to local time.

---

```javascript
SHDate.prototype.getFullYear();
```

Returns the year (4 digits for 4-digit years) of the specified date according to local time.

---

```javascript
SHDate.prototype.getHours();
```

Returns the hour (0–23) in the specified date according to local time.

---

```javascript
SHDate.prototype.getMilliseconds();
```

Returns the milliseconds (0–999) in the specified date according to local time.

```javascript
SHDate.prototype.getMinutes();
```

Returns the minutes (0–59) in the specified date according to local time.

```javascript
SHDate.prototype.getMonth();
```

Returns the month (0–11) in the specified date according to local time.

```javascript
SHDate.prototype.getSeconds();
```

Returns the seconds (0–59) in the specified date according to local time.

```javascript
SHDate.prototype.getTime();
```

Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)

```javascript
SHDate.prototype.getTimezoneOffset();
```

Returns the time-zone offset in minutes for the current locale.

```javascript
SHDate.prototype.getUTCDate();
```

Returns the day (date) of the month (1–31) in the specified date according to universal time.

```javascript
SHDate.prototype.getUTCDay();
```

Returns the day of the week (0–6) in the specified date according to universal time.

```javascript
SHDate.prototype.getUTCFullYear();
```

Returns the year (4 digits for 4-digit years) in the specified date according to universal time.

```javascript
SHDate.prototype.getUTCHours();
```

Returns the hours (0–23) in the specified date according to universal time.

```javascript
SHDate.prototype.getUTCMilliseconds();
```

Returns the milliseconds (0–999) in the specified date according to universal time.

```javascript
SHDate.prototype.getUTCMinutes();
```

Returns the minutes (0–59) in the specified date according to universal time.

```javascript
SHDate.prototype.getUTCMonth();
```

Returns the month (0–11) in the specified date according to universal time.

```javascript
SHDate.prototype.getUTCSeconds();
```

Returns the seconds (0–59) in the specified date according to universal time.

```javascript
SHDate.prototype.getYear();
```

Returns the year (usually 2–3 digits) in the specified date according to local time. Use `getFullYear()` instead.

```javascript
SHDate.prototype.setDate();
```

Sets the day of the month for a specified date according to local time.

```javascript
SHDate.prototype.setFullYear();
```

Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.

```javascript
SHDate.prototype.setHours();
```

Sets the hours for a specified date according to local time.

```javascript
SHDate.prototype.setMilliseconds();
```

Sets the milliseconds for a specified date according to local time.

```javascript
SHDate.prototype.setMinutes();
```

Sets the minutes for a specified date according to local time.

```javascript
SHDate.prototype.setMonth();
```

Sets the month for a specified date according to local time.

```javascript
SHDate.prototype.setSeconds();
```

Sets the seconds for a specified date according to local time.

```javascript
SHDate.prototype.setTime();
```

Sets the SHDate object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. Use negative numbers for times prior.

```javascript
SHDate.prototype.setUTCDate();
```

Sets the day of the month for a specified date according to universal time.

```javascript
SHDate.prototype.setUTCFullYear();
```

Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.

```javascript
SHDate.prototype.setUTCHours();
```

Sets the hour for a specified date according to universal time.

```javascript
SHDate.prototype.setUTCMilliseconds();
```

Sets the milliseconds for a specified date according to universal time.

```javascript
SHDate.prototype.setUTCMinutes();
```

Sets the minutes for a specified date according to universal time.

```javascript
SHDate.prototype.setUTCMonth();
```

Sets the month for a specified date according to universal time.

```javascript
SHDate.prototype.setUTCSeconds();
```

Sets the seconds for a specified date according to universal time.

```javascript
SHDate.prototype.setYear();
```

Sets the year (usually 2–3 digits) for a specified date according to local time. Use `setFullYear()` instead.

```javascript
SHDate.prototype.toDateString();
```

Returns the "date" portion of the SHDate as a human-readable string like 'Thu Apr 12 2018'.

```javascript
SHDate.prototype.toISOString();
```

Converts a date to a string following the ISO 8601 Extended Format.

```javascript
SHDate.prototype.toJSON();
```

Returns a string representing the SHDate using `toISOString()`. Intended for use by `JSON.stringify()`.

```javascript
SHDate.prototype.toGMTString();
```

Returns a string representing the SHDate based on the GMT (UTC) time zone. Use `toUTCString()` instead.

```javascript
SHDate.prototype.toLocaleDateString();
```

Returns a string with a locality sensitive representation of the date portion of this date based on system settings.

```javascript
SHDate.prototype.toLocaleString();
```

Returns a string with a locality-sensitive representation of this date. Overrides the `Object.prototype.toLocaleString()` method.

```javascript
SHDate.prototype.toLocaleTimeString();
```

Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.

```javascript
SHDate.prototype.toString();
```

Returns a string representing the specified SHDate object. Overrides the `Object.prototype.toString()` method.

```javascript
SHDate.prototype.toTimeString();
```

Returns the "time" portion of the SHDate as a human-readable string.

```javascript
SHDate.prototype.toUTCString();
```

Converts a date to a string using the UTC timezone.

```javascript
SHDate.prototype.valueOf();
```

Returns the primitive value of a SHDate object. Overrides the `Object.prototype.valueOf()` method.
