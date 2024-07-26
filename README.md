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

- static VERSION: ( [en](https://md-akhi.github.io/SHDateTime-js/en/static) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/static) )
- static DAYS_IN_MONTH: ( [en](https://md-akhi.github.io/SHDateTime-js/en/static) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/static) )
- static DAYS_IN_MONTH_LEAP: ( [en](https://md-akhi.github.io/SHDateTime-js/en/static) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/static) )
- static DAY_OF_YEAR: ( [en](https://md-akhi.github.io/SHDateTime-js/en/static) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/static) )
- static DAYS_IN_YEAR: ( [en](https://md-akhi.github.io/SHDateTime-js/en/static) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/static) )
- static DAYS_IN_YEAR_LEAP: ( [en](https://md-akhi.github.io/SHDateTime-js/en/static) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/static) )
- static WEEKS_IN_YEAR: ( [en](https://md-akhi.github.io/SHDateTime-js/en/static) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/static) )
- static WEEKS_IN_YEAR_LEAP: ( [en](https://md-akhi.github.io/SHDateTime-js/en/static) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/static) )

- toUTCTimeString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toUTCTimeString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toUTCTimeString) )
- weekCorrection(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/weekCorrection) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/weekCorrection) )

- static checkDate() || checkDate(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/checkDate) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/checkDate) )
- static checkWeek() || checkWeek(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/checkWeek) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/checkWeek) )
- static checkTime() || checkTime(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/checkTime) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/checkTime) )
- static checkTime12() || checkTime12(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/checkTime12) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/checkTime12) )
- clone(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/clone) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/clone) )
- dateCorrection(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/dateCorrection) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/dateCorrection) )
- timeCorrection(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/timeCorrection) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/timeCorrection) )

## Documents are being prepared

- setWeek(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setWeek) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setWeek) )
- setDateOfDayOfYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setDateOfDayOfYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setDateOfDayOfYear) )
- setUTCDateOfDayOfYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setUTCDateOfDayOfYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setUTCDateOfDayOfYear) )
- getDayOfYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getDayOfYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getDayOfYear) )
- getUTCDayOfYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCDayOfYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCDayOfYear) )
- getDaysInYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getDaysInYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getDaysInYear) )
- getUTCDaysInYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCDaysInYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCDaysInYear) )
- getWeekOfYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getWeekOfYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getWeekOfYear) )
- getUTCWeekOfYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCWeekOfYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCWeekOfYear) )
- getWeeksInYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getWeeksInYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getWeeksInYear) )
- getUTCWeeksInYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCWeeksInYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCWeeksInYear) )
- getDaysInMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getDaysInMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getDaysInMonth) )
- getUTCDaysInMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCDaysInMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCDaysInMonth) )
- getDates(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getDates) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getDates) )
- getUTCDates(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCDates) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCDates) )
- toUTCDateString(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/toUTCDateString) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/toUTCDateString) )
- getUTCTime(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getUTCTime) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getUTCTime) )
- restTime(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/restTime) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/restTime) )
- restUTCTime(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/restUTCTime) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/restUTCTime) )
- getLanguage(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getLanguage) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getLanguage) )
- getFirstDayOfWeek(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getFirstDayOfWeek) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getFirstDayOfWeek) )
- getTimeServerDiff(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getTimeServerDiff) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getTimeServerDiff) )
- getTimeZone(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getTimeZone) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getTimeZone) )
- setTimeServerDiff(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setTimeServerDiff) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setTimeServerDiff) )
- setTimeZone(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setTimeZone) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setTimeZone) )
- setLanguage(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setLanguage) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setLanguage) )
- setFirstDayOfWeek(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setFirstDayOfWeek) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setFirstDayOfWeek) )
- setConfig(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setConfig) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setConfig) )
- instance(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/instance) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/instance) )
- getVersion(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getVersion) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getVersion) )
- NumbersTo(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/NumbersTo) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/NumbersTo) )
- getNthWeekdayOfMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getNthWeekdayOfMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getNthWeekdayOfMonth) )
- getFirstWeekdayOfMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getFirstWeekdayOfMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getFirstWeekdayOfMonth) )
- getLastWeekdayOfMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getLastWeekdayOfMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getLastWeekdayOfMonth) )
- WeekdayInMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/WeekdayInMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/WeekdayInMonth) )
- getWeekdayInMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getWeekdayInMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getWeekdayInMonth) )
- copy(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/copy) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/copy) )
- this(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/this) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/this) )
