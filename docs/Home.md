<div dir=rtl>
  
## به نام خدا

تاریخ و زمان گاهشماری هجری شمسی(هجری خورشیدی) به زبان js

</div>

## In the name of Allah, the Beneficent, the Merciful.

Date and Time Related Extensions - SH (Solar Hijri, Shamsi Hijri, Iranian Hijri)

## Install

```bash
$ npm i @md-akhi/shdatetime
```

## Usage

- ES Modules:

```javascript
import SHDate from "@md-akhi/shdatetime";
var date = new SHDate();
```

- CommonJS:

```javascript
const SHDate = require("@md-akhi/shdatetime");
var date = new SHDate();
```

- TypeScript:

```TypeScript
const SHDate = require('@md-akhi/shdatetime');
// OR
import SHDate from '@md-akhi/shdatetime';

var date = new SHDate();
```

- ES Modules for the browser:

```html
<script type="module">
	import SHDate from "/path/to/@md-akhi/shdatetime.js";
	var date = new SHDate();
</script>
```

### Note

- If you want to use ES Modules in Node.js without a transpiler, you need to add `"type": "module"` in your `package.json` or change your file extension from `.js` to `.mjs`.
