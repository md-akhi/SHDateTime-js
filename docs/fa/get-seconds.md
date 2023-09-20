# SHDate.getSeconds()

روش GetSeconds () ثانیه ها را در تاریخ مشخص با توجه به زمان محلی برمی گرداند.
Try it

<iframe style="width: 830px; height: 460px;" src="/SHDateTime-js/examples/live.html?function=getHours" title="MDN Web Docs Interactive Example" loading="lazy"></iframe>
<br/>

# Syntax

```js
getSeconds();
```

# مقدار برگشتی

یک عدد عدد صحیح ، بین 0 تا 59 ، نمایانگر ثانیه در تاریخ معین با توجه به زمان محلی است.
# نمونه‌ها
با استفاده از GetEconds ()
بیانیه دوم در زیر مقدار 30 را به ثانیه متغیر اختصاص می دهد ، بر اساس مقدار تاریخ تاریخ XMAS95.
```js
var Xmas95 = new SHDate("Dey 25, 1390 23:15:30");
var seconds = Xmas95.getSeconds();

console.log(seconds); // 30
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds
