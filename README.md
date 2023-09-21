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

- setMonths: ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-month) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/set-month) )

  - seting months

- setDays: ( [en](https://md-akhi.github.io/SHDateTime-js/en/set-days) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setDays) )

  - seting days

- setHours: ( [en](https://md-akhi.github.io/SHDateTime-js/en/setHours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setHours) )

  - seting hours

- setMinutes: ( [en](https://md-akhi.github.io/SHDateTime-js/en/setMinutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setMinutes) )

  - seting minutes

- setSeconds: ( [en](https://md-akhi.github.io/SHDateTime-js/en/setSeconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setSeconds) )

  - seting seconds

- setMilliseconds: ( [en](https://md-akhi.github.io/SHDateTime-js/en/setMilliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/setMilliseconds) )

  - seting milliseconds

- getFullYears: ( [en](https://md-akhi.github.io/SHDateTime-js/en/getFullYears) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getFullYears) )

  - geting years

- getMonths: ( [en](https://md-akhi.github.io/SHDateTime-js/en/getMonths) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getMonths) )

  - geting months

- getDays: ( [en](https://md-akhi.github.io/SHDateTime-js/en/getDays) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getDays) )

  - geting days

- getHours: ( [en](https://md-akhi.github.io/SHDateTime-js/en/getHours) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getHours) )

  - geting hours

- getMinutes: ( [en](https://md-akhi.github.io/SHDateTime-js/en/getMinutes) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getMinutes) )

  - geting minutes

- getSeconds: ( [en](https://md-akhi.github.io/SHDateTime-js/en/getSeconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getSeconds) )

  - geting seconds

- getMilliseconds: ( [en](https://md-akhi.github.io/SHDateTime-js/en/getMilliseconds) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/getMilliseconds) )

  - seting milliseconds

- isLeapYear: ( [en](https://md-akhi.github.io/SHDateTime-js/en/isLeapYear) | [fa](https://md-akhi.github.io/SHDateTime-js/fa/isLeapYear) )

  - Whether year is leap year
