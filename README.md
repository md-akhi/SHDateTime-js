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
 npm i shdatetime
```

## Usage

- ES Modules (ESM):

```javascript
import SHDate from "shdatetime";
var date = new SHDate();
```

- CommonJS (CJS):

```javascript
const SHDate = require("shdatetime").default;
var date = new SHDate();
```

- TypeScript (TS):

```TypeScript
const SHDate = require('shdatetime');
// OR
import SHDate from 'shdatetime';

var date = new SHDate();
```

- ES Modules for the browser:

```html
<script type="module">
	import SHDate from "shdatetime";
	var date = new SHDate();
</script>
```

- client side for the browser:

```html
<script
	type="text/javascript"
	src="/path/to/shdatetime/dist/browser/shdatetime.min.js"
></script>
<script>
	var date = new SHDate();
</script>
```

jsdrive:

```shell
https://cdn.jsdelivr.net/npm/shdatetime@latest/dist/browser/shdatetime.min.js
```

ubpkg:

```shell
https://unpkg.com/shdatetime@latest/dist/browser/shdatetime.min.js
```

### Note

- If you want to use ES Modules in Node.js without a transpiler, you need to add `"type": "module"` in your `package.json` or change your file extension from `.js` to `.mjs`.

## API

- format: ( [en](https://md-akhi.github.io/SHDateTime-js/en/format) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/format) )

  - Formatting a Date and Time (Date -> String)

- parse: ( [en](https://md-akhi.github.io/SHDateTime-js/en/parse) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/parse) )

  - Parsing a Date and Time string (String -> Date)

- setFullYears: ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-full-year) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-full-year) )

  - seting years

- setMonth: ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-month) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-month) )

  - seting months

- setDate: ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-date) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-date) )

  - seting date

- setDay: ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-day) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-day) )

  - seting days

- setHours: ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-hours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-hours) )

  - seting hours

- setMinutes: ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-minutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-minutes) )

  - seting minutes

- setSeconds: ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-seconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-seconds) )

  - seting seconds

- setMilliseconds: ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-milliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-milliseconds) )

  - seting milliseconds

- getFullYear: ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-full-year) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-full-year) )

  - geting years

- getMonth: ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-month) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-month) )

  - geting months

- getDate: ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-date) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-date) )

  - geting days

- getDay: ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-day) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-day) )

  - geting days

- getHours: ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-hours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-hours) )

  - geting hours

- getMinutes: ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-minutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-minutes) )

  - geting minutes

- getSeconds: ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-seconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-seconds) )

  - geting seconds

- getMilliseconds: ( [en](https://md-akhi.github.io/SHDateTime-js/en/get-milliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/get-milliseconds) )

  - seting milliseconds

- isLeapYear: ( [en](https://md-akhi.github.io/SHDateTime-js/en/is-leap-year) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/is-leap-year) )

  - Whether year is leap year
