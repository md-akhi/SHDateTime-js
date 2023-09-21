<div dir=rtl>
  
## به نام خدا

تاریخ و زمان گاهشماری هجری شمسی(هجری خورشیدی)

</div>

## In the name of Allah, the Beneficent, the Merciful.

Date and Time Related Extensions - SH (Solar Hijri, Shamsi Hijri, Iranian Hijri)

[![GitHub license](https://img.shields.io/github/license/md-akhi/SHDateTime-js)](https://github.com/md-akhi/SHDateTime-js/blob/dev/LICENSE)
![GitHub package.json version release](https://img.shields.io/github/v/release/md-akhi/SHDateTime-js?color=green)
![GitHub package.json version dev](https://img.shields.io/github/v/tag/md-akhi/SHDateTime-js)
![ workflow](https://github.com/md-akhi/SHDateTime-js/actions/workflows/test.yaml/badge.svg?branch=dev)
![ workflow](https://github.com/md-akhi/SHDateTime-js/actions/workflows/publish.yaml/badge.svg?branch=main)

## Install

```bash
$ npm i shdatetime
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

- format: ( [en](./docs/en/format) | [fa](./docs/fa/format) )

  - Formatting a Date and Time (Date -> String)

- parse: ( [en](./docs/en/parse) | [fa](./docs/fa/parse) )

  - Parsing a Date and Time string (String -> Date)

- setFullYears: ( [en](./docs/en/setFullYears) | [fa](./docs/fa/setFullYears) )

  - seting years

- setMonths: ( [en](./docs/en/setMonths) | [fa](./docs/fa/setMonths) )

  - seting months

- setDays: ( [en](./docs/en/setDays) | [fa](./docs/fa/setDays) )

  - seting days

- setHours: ( [en](./docs/en/setHours) | [fa](./docs/fa/setHours) )

  - seting hours

- setMinutes: ( [en](./docs/en/setMinutes) | [fa](./docs/fa/setMinutes) )

  - seting minutes

- setSeconds: ( [en](./docs/en/setSeconds) | [fa](./docs/fa/setSeconds) )

  - seting seconds

- setMilliseconds: ( [en](./docs/en/setMilliseconds) | [fa](./docs/fa/setMilliseconds) )

  - seting milliseconds

- getFullYears: ( [en](./docs/en/getFullYears) | [fa](./docs/fa/getFullYears) )

  - geting years

- getMonths: ( [en](./docs/en/getMonths) | [fa](./docs/fa/getMonths) )

  - geting months

- getDays: ( [en](./docs/en/getDays) | [fa](./docs/fa/getDays) )

  - geting days

- getHours: ( [en](./docs/en/getHours) | [fa](./docs/fa/getHours) )

  - geting hours

- getMinutes: ( [en](./docs/en/getMinutes) | [fa](./docs/fa/getMinutes) )

  - geting minutes

- getSeconds: ( [en](./docs/en/getSeconds) | [fa](./docs/fa/getSeconds) )

  - geting seconds

- getMilliseconds: ( [en](./docs/en/getMilliseconds) | [fa](./docs/fa/getMilliseconds) )

  - seting milliseconds

- isLeapYear: ( [en](./docs/en/isLeapYear) | [fa](./docs/fa/isLeapYear) )

  - Whether year is leap year
