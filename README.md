<div dir=rtl>
  
## به نام خدا

تاریخ و زمان گاهشماری هجری شمسی (هجری خورشیدی, جلالی)

</div>

## In the name of Allah, the Beneficent, the Merciful.

Date and Time - SH (Solar Hijri, Shamsi Hijri, Iranian Hijri)

[![GitHub license](https://img.shields.io/github/license/md-akhi/SHDateTime-js)](https://github.com/md-akhi/SHDateTime-js/blob/main/LICENSE)
[![GitHub version release](https://img.shields.io/github/v/release/md-akhi/SHDateTime-js?color=green)](https://github.com/md-akhi/SHDateTime-js/releases)
[![GitHub version dev](https://img.shields.io/github/v/tag/md-akhi/SHDateTime-js)](https://github.com/md-akhi/SHDateTime-js/tags)
[![ workflow test](https://github.com/md-akhi/SHDateTime-js/actions/workflows/test.yaml/badge.svg?branch=main)](https://github.com/md-akhi/SHDateTime-js/actions/workflows/test.yaml)
[![ workflow publish](https://github.com/md-akhi/SHDateTime-js/actions/workflows/publish.yaml/badge.svg?branch=main)](https://github.com/md-akhi/SHDateTime-js/actions/workflows/publish.yaml)
[![Static Badge npm](https://img.shields.io/badge/shdate-npm-red)](https://www.npmjs.com/package/shdate)

<!-- [![Static Badge npm](https://img.shields.io/badge/shdate-yarn-red)](https://yarnpkg.com/package/@md-akhi/shdatetime) -->
<!-- [![Static Badge npm](https://img.shields.io/badge/shdate-pnpm-red)](https://pnpm.io/package/@md-akhi/shdatetime) -->

# Language

- [English](https://md-akhi.github.io/SHDateTime-js/en) - [فارسی](https://md-akhi.github.io/SHDateTime-js/fa)

## Install

```bash
 npm i shdate
```

## Usage

- ES Modules (ESM):

```javascript
import SHDate from "shdate";
var date = new SHDate();
```

- CommonJS (CJS):

```javascript
const SHDate = require("shdate").default;
var date = new SHDate();
```

- TypeScript (TS):

```TypeScript
const SHDate = require('shdate');
// OR
import SHDate from 'shdate';

var date = new SHDate();
```

- ES Modules for the browser:

```html
<script type="module">
	import SHDate from "shdate";
	var date = new SHDate();
</script>
```

- client side for the browser:

```html
<script
	type="text/javascript"
	src="/path/to/shdate/dist/browser/shdate.min.js"
></script>
<script>
	var date = new SHDate();
</script>
```

jsdrive:

```shell
https://cdn.jsdelivr.net/npm/shdate@latest/dist/browser/shdate.min.js
```

ubpkg:

```shell
https://unpkg.com/shdate@latest/dist/browser/shdate.min.js
```

### Note

- If you want to use ES Modules in Node.js without a transpiler, you need to add `"type": "module"` in your `package.json` or change your file extension from `.js` to `.mjs`.

# Standard built-in objects

- SHDate

# Constructor

- SHDate() constructor

# Methods

- \[@@toPrimitive\](): ( [en](https://md-akhi.github.io/SHDateTime-js/en/@@toPrimitive) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/@@toPrimitive) )

- getDate(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getDate) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getDate) )

- getDay(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getDay) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getDay) )

- getFullYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getFullYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getFullYear) )

- getHours(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getHours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getHours) )

- getMilliseconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getMilliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getMilliseconds) )

- getMinutes(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getMinutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getMinutes) )

- getMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getMonth) )

- getSeconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getSeconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getSeconds) )

- getTime()( [en](https://md-akhi.github.io/SHDateTime-js/en/getTime) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getTime) )

- getTimezoneOffset()( [en](https://md-akhi.github.io/SHDateTime-js/en/getTimezoneOffset) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getTimezoneOffset) )

- getUTCDate()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCDate) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCDate) )

- getUTCDay()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCDay) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCDay) )

- getUTCFullYear()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCFullYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCFullYear) )

- getUTCHours()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCHours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCHours) )

- getUTCMilliseconds()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCMilliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCMilliseconds) )

- getUTCMinutes()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCMinutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCMinutes) )

- getUTCMonth()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCMonth) )

- getUTCSeconds()( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCSeconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCSeconds) )

- SHDate.now(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/now) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/now) )

- SHDate.parse(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/parse) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/parse) )

- setDate(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setDate) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setDate) )

- setDay: ( [en](https://md-akhi.github.io/SHDateTime-js/en/setDay) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setDay) )

- setFullYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setFullYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setFullYear) )

- setHours(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setHours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setHours) )

- setMilliseconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setMilliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setMilliseconds) )

- setMinutes(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setMinutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setMinutes) )

- setMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setMonth) )

- setSeconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setSeconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setSeconds) )

- setTime(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setTime) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setTime) )

- setUTCDate(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCDate) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCDate) )

- setUTCFullYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCFullYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCFullYear) )

- setUTCHours(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCHours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCHours) )

- setUTCMilliseconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCMilliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCMilliseconds) )

- setUTCMinutes(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCMinutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCMinutes) )

- setUTCMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCMonth) )

- setUTCSeconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCSeconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCSeconds) )

- toDateString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toDateString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toDateString) )

- toISOString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toISOString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toISOString) )

- toJSON(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toJSON) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toJSON) )

- toLocaleDateString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toLocaleDateString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toLocaleDateString) )

- toLocaleString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toLocaleString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toLocaleString) )

- toLocaleTimeString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toLocaleTimeString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toLocaleTimeString) )

- toString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toString) )

- toTimeString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toTimeString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toTimeString) )

- toUTCString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toUTCString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toUTCString) )

- SHDate.UTC(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/UTC) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/UTC) )

- valueOf(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/valueOf) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/valueOf) )

- format: ( [en](https://md-akhi.github.io/SHDateTime-js/en/format) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/format) )

- isLeapYear: ( [en](https://md-akhi.github.io/SHDateTime-js/en/isLeapYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/isLeapYear) )

## Documents are being prepared

- static VERSION
- static DAYS_IN_MONTH
- static DAYS_IN_MONTH_LEAP
- static DAY_OF_YEAR
- static DAYS_IN_YEAR
- static DAYS_IN_YEAR_LEAP
- static WEEKS_IN_YEAR
- static WEEKS_IN_YEAR_LEAP

- setWeek()
- setDateOfDayOfYear()
- setUTCDateOfDayOfYear()

- getDayOfYear()
- getUTCDayOfYear()
- getDaysInYear()
- getUTCDaysInYear()
- getWeekOfYear()
- getUTCWeekOfYear()
- getWeeksInYear()
- getUTCWeeksInYear()
- getDaysInMonth()
- getUTCDaysInMonth()
- getDates()
- getUTCDates()
- toUTCDateString()
- getUTCTime()
- toUTCTimeString()

- checkDate()
- dateCorrection()

- checkWeek()
- weekCorrection()

- static checkTime() || checkTime()
- checkTime12()
- timeCorrection()
- restTime()
- restUTCTime()

- getLanguage()
- getFirstDayOfWeek()
- getTimeServerDiff()
- getTimeZone()

- setTimeServerDiff()
- setTimeZone()
- setLanguage()
- setFirstDayOfWeek()

- setConfig()

- clone()
- instance()

- getVersion()

- NumbersTo()
