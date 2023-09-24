<div dir=rtl>
  
## به نام خدا

تاریخ و زمان گاهشماری هجری شمسی(هجری خورشیدی)

</div>

## In the name of Allah, the Beneficent, the Merciful.

Date and Time Related Extensions - SH (Solar Hijri, Shamsi Hijri, Iranian Hijri)

[![GitHub license](https://img.shields.io/github/license/md-akhi/SHDateTime-js)](https://github.com/md-akhi/SHDateTime-js/blob/dev/LICENSE)
[![GitHub version release](https://img.shields.io/github/v/release/md-akhi/SHDateTime-js?color=green)](https://github.com/md-akhi/SHDateTime-js/releases)
[![GitHub version dev](https://img.shields.io/github/v/tag/md-akhi/SHDateTime-js)](https://github.com/md-akhi/SHDateTime-js/tags)
[![ workflow test](https://github.com/md-akhi/SHDateTime-js/actions/workflows/test.yaml/badge.svg?branch=dev)](https://github.com/md-akhi/SHDateTime-js/actions)
![ workflow publish](https://github.com/md-akhi/SHDateTime-js/actions/workflows/publish.yaml/badge.svg?branch=main)

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

- \[@@toPrimitive\](): ( [en](https://md-akhi.github.io/SHDateTime-js/en/@@to-primitive) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/@@to-primitive) )

  - to primitive

- getDate(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-date) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-date) )

  - geting date

- getDay(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-day) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-day) )

  - geting day

- getFullYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-full-year) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-full-year) )

  - geting year

- getHours(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-hours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-hours) )

  - geting hours

- getMilliseconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-milliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-milliseconds) )

  - seting milliseconds

- getMinutes(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-minutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-minutes) )

  - geting minutes

- getMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-month) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-month) )

  - geting month

- getSeconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-seconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-seconds) )

  - geting seconds

- getTime()

- getTimezoneOffset()
- getUTCDate()
- getUTCDay()
- getUTCFullYear()
- getUTCHours()
- getUTCMilliseconds()
- getUTCMinutes()
- getUTCMonth()
- getUTCSeconds()

- SHDate.now(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/now) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/now) )

  - now

- SHDate.parse(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/parse) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/parse) )

  - Parsing a Date and Time string (String -> Date)

- setDate(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-date) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-date) )

  - seting date

- setDay: ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-day) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-day) )

  - seting days

- setFullYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-full-year) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-full-year) )

  - seting years

- setHours(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-hours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-hours) )

  - seting hours

- setMilliseconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-milliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-milliseconds) )

  - seting milliseconds

- setMinutes(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-minutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-minutes) )

  - seting minutes

- setMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-month) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-month) )

  - seting months

- setSeconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-seconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-seconds) )

  - seting seconds

- setTime()
- setUTCDate()
- setUTCFullYear()
- setUTCHours()
- setUTCMilliseconds()
- setUTCMinutes()
- setUTCMonth()
- setUTCSeconds()
- toDateString()
- toISOString()
- toJSON()
- toLocaleDateString()
- toLocaleString()
- toLocaleTimeString()
- toString()
- toTimeString()
- toUTCString()
- SHDate.UTC()
- valueOf()

- format: ( [en](https://md-akhi.github.io/SHDateTime-js/en/format) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/format) )

  - Formatting a Date and Time (Date -> String)

- isLeapYear: ( [en](https://md-akhi.github.io/SHDateTime-js/en/is-leap-year) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/is-leap-year) )

  - Whether year is leap year
