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

- \[@@toPrimitive\](): ( [en](https://md-akhi.github.io/SHDateTime-js/en/@@toPrimitive) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/@@toPrimitive) )

  - to primitive

- getDate(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getDate) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getDate) )

  - geting date

- getDay(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getDay) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getDay) )

  - geting day

- getFullYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getFullYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getFullYear) )

  - geting year

- getHours(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getHours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getHours) )

  - geting hours

- getMilliseconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getMilliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getMilliseconds) )

  - seting milliseconds

- getMinutes(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getMinutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getMinutes) )

  - geting minutes

- getMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getMonth) )

  - geting month

- getSeconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/getSeconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getSeconds) )

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

- setDate(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setDate) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setDate) )

  - seting date

- setDay: ( [en](https://md-akhi.github.io/SHDateTime-js/en/setDay) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setDay) )

  - seting days

- setFullYear(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setFullYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setFullYear) )

  - seting years

- setHours(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setHours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setHours) )

  - seting hours

- setMilliseconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setMilliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setMilliseconds) )

  - seting milliseconds

- setMinutes(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setMinutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setMinutes) )

  - seting minutes

- setMonth(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setMonth) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setMonth) )

  - seting months

- setSeconds(): ( [en](https://md-akhi.github.io/SHDateTime-js/en/setSeconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setSeconds) )

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

- isLeapYear: ( [en](https://md-akhi.github.io/SHDateTime-js/en/isLeapYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/isLeapYear) )

  - Whether year is leap year
