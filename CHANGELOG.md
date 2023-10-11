## 2.1.12 (2023-10-11)


### Bug Fixes

* **ci:** اصلاح ci ([d3ec101](https://github.com/md-akhi/SHDateTime-js/commits/d3ec10107559241fa5aa6853a72a78fde6379522))



## 2.1.11 (2023-10-11)


### Bug Fixes

* **ci:** اصلاح npm ci به npm install ([4f9818e](https://github.com/md-akhi/SHDateTime-js/commits/4f9818e8f7ce558427813c961b241818621a57a8))



<div dir="rtl" style="text-align: right;">

# تغییرات

تمام تغییرات قابل توجه در این پروژه به صورت مستند ثبت می‌شود.

[تغییرات](https://keepachangelog.com/fa-IR/1.0.0/), [نسخه‌بندی معنایی](https://semver.org/lang/fa/).

</div>

# Change Log

All notable changes to this project will be documented in this file.
[Changelog](https://keepachangelog.com/en/1.0.0/), [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

#

<div dir="rtl" style="text-align: right;">

## [منتشر نشده][unreleased]

### [ایجاد / اضافه شد][#]

-

### [تغییر کرد][#]

-

### [رفع / درست شد][#]

-

</div>

## [Unreleased]

### [Added][#]

-

### [Changed][#]

-

### [Fixed][#]

-

#

<div style="text-align: center;">

## [2.1.10] - SH 1402-07-19 - G 2023-10-11

</div>

<div dir="rtl" style="text-align: right;">

### [ایجاد / اضافه شد][#]

- اضافه شدن قالب `Jekyll` برای مستندات
- اضافه شدن مستندات به زبان انگلیسی
- اضافه شدن مستندات به زبان فارسی
- اضافه شدن بخشی از مستندات
- اضافه شدن قابلیت کار با رشته توسط تابع `parse`
- اضافه شدن تست‌های لازم و ضروری
- پیاده‌سازی تابع `getDayOfYear‍‍‍`
- پیاده‌سازی تابع `getUTCDayOfYear‍‍`
- پیاده‌سازی تابع `getWeekOfYear`
- پیاده‌سازی تابع `getUTCWeekOfYear`
- پیاده‌سازی تابع `getWeeksInYear`
- پیاده‌سازی تابع `getUTCWeeksInYear`
- پیاده‌سازی تابع `setWeek`
- پیاده‌سازی تابع `setDateOfDayOfYear`
- پیاده‌سازی تابع `setUTCDateOfDayOfYear`
- پیاده‌سازی تابع `getDaysInMonth`
- پیاده‌سازی تابع `getUTCDaysInMonth`
- پیاده‌سازی تابع `getDaysInYear`
- پیاده‌سازی تابع `getUTCDaysInYear`
- پیاده‌سازی تابع `timeCorrection`
- پیاده‌سازی تابع `dateCorrection`
- پیاده‌سازی تابع `weekCorrection`
- پیاده‌سازی تابع `checkDate`
- پیاده‌سازی تابع `checkTime`
- پیاده‌سازی تابع `checkTime12`
- پیاده‌سازی تابع `checkWeek`
- پیاده‌سازی تابع `getDates`
- پیاده‌سازی تابع `getUTCTime`
- پیاده‌سازی تابع `parse`
- پیاده‌سازی تابع `restTime`
- پیاده‌سازی تابع `restUTCTime`
- پیاده‌سازی تابع `getVersion`
- پیاده‌سازی تابع `clone`
- پیاده‌سازی تابع `instance`

### [تغییر کرد][#]

- تغییر نام فایل `index` به `base`
- انتقال فایل‌های زبان به پوشه `language`
- فراخوان برنامه از `@md-akhi/shdatetime` به `shdate`
- تغییر نام تابع `updateDate` به `dateSync`
- تغییر نام تابع `updateTime` به `timeSync`
- تغییر پارامتر تابع `isLeapYear` به بدون پارامتر
- تغییر ارزش بازگشتی تابع `weekOfYear` از [هفته،سال] به [سال،هفته]
- تغییر نام تابع `dateOfDoy` به `dateOfDayOfYear`
- تغییر ارزش پیش فرض پارامتر `date` تابع `weekOfDay` از `1` به `0`

### [رفع / درست شد][#]

- اصلاح نمایش دقیقه و ثانیه در تابع `format` ([88811df](https://github.com/md-akhi/SHDateTime-js/commits/88811dfe9596caa596f234f95474b5a716fd350b))

</div>

### [Added][#]

- Added `Jekyll` template for documentation
- Added documentation in `English` language
- Added documentation in `Farsi` language
- Adding part of the documentation
- Added ability to work with strings by the `parse` function
- Adding necessary tests
- Implementation of `getDayOfYear` function
- Implementation of `getUTCDayOfYear` function
- Implementation of the `getWeekOfYear` function
- Implementation of `getUTCWeekOfYear` function
- Implementation of the `getWeeksInYear` function
- Implementation of `getUTCWeeksInYear` function
- Implementation of the `setWeek` function
- Implementation of the `setDateOfDayOfYear` function
- Implementation of `setUTCDateOfDayOfYear` function
- Implementation of `getDaysInMonth` function
- Implementation of `getUTCDaysInMonth` function
- Implementation of `getDaysInYear` function
- Implementation of `getUTCDaysInYear` function
- Implementation of the `timeCorrection` function
- Implementation of the `dateCorrection` function
- Implementation of the `weekCorrection` function
- Implementation of the `checkDate` function
- Implementation of the `checkTime` function
- Implementation of `checkTime12` function
- Implementation of the `checkWeek` function
- Implementation of `getDates` function
- Implementation of `getUTCTime` function
- Implementation of the `parse` function
- implementation of `RestTime` function
- Implementation of `restUTCTime` function
- Implementation of `getVersion` function
- Implementation of the `clone` function
- Implementation of the `instance` function

### [Changed][#]

- Rename the `index` file to `base`
- Move the language files to the language folder
- Changing program call and address from `@md-akhi/shdatetime` to `shdate`
- Rename function `updateDate` to `dateSync`
- Rename function `updateTime` to `timeSync`
- Change the `isLeapYear` function parameter to no parameter
- Change the return value of the `weekOfYear` function from `[week, year]` to `[year, week]`
- Rename function `dateOfDoy` to `dateOfDayOfYear`
- Changing the default value of the date parameter of the `weekOfDay` function from 1 to 0

### [Fixed][#]

- Correcting the display of minutes and seconds in the `format` function ([88811df](https://github.com/md-akhi/SHDateTime-js/commits/88811dfe9596caa596f234f95474b5a716fd350b))

#

<div style="text-align: center;">

## [1.2.4] - SH 1401-02-14 - G 2022-05-04

</div>
<div dir="rtl" style="text-align: right;">

### [رفع / درست شد][#]

- رفع خطای محاسباتی تاریخ setDate, setUTCDate

</div>

### [Fixed][#]

- Fixed set day in setDate, setUTCDate

#

<div style="text-align: center;">

## [1.2.0] - SH 1400-02-12 - G 2022-05-02

</div>
<div dir="rtl" style="text-align: right;">

### [ایجاد / اضافه شد][#]

- اضافه شدن مستندات
- اضاقه شدن داکرایز
- ایجاد تابع چک کننده زبان

### [تغییر کرد][#]

- تغییر نام تابع از setTimeServer به setTimeServerDiff
- تغییر نام تابع از getTimeServer به getTimeServerDiff

</div>

### [Added][#]

- Added documentation
- Added dockerize
- added check language function

### [Changed][#]

- Change setTimeServer function to setTimeServerDiff
- Change getTimeServer function to getTimeServerDiff

<div style="text-align: center;">

#

## [1.1.0] - SH 1400-02-09 - G 2022-04-29

</div>
<div dir="rtl" style="text-align: right;">

### [ایجاد / اضافه شد][#]

- اضافه شدن سمت کلاینت برای مرورگر

</div>

### [Added][#]

- Added client side for browser

<div style="text-align: center;">

#

## [1.0.0] - SH 1400-12-11 - G 2022-03-02

</div>
<div dir="rtl" style="text-align: right;">

- انتشار نسخه اولیه

</div>

- First release

#

[unreleased]: https://github.com/md-akhi/SHDateTime-js/compare/2.1.10...HEAD
[2.1.10]: https://github.com/md-akhi/SHDateTime-js/compare/1.2.4...2.1.10
[1.2.4]: https://github.com/md-akhi/SHDateTime-js/compare/1.2.0...1.2.4
[1.2.0]: https://github.com/md-akhi/SHDateTime-js/compare/1.1.1...1.2.0
[1.1.0]: https://github.com/md-akhi/SHDateTime-js/compare/1.0.0-rc1...1.1.0
[1.0.0]: https://github.com/md-akhi/SHDateTime-js/releases/tag/1.0.0-rc1
[#]: #

<!--

<div style="text-align: center;">

## [x.y.z] - SH 4Y-2M-2D - G 4Y-2M-2D

</div>
<div dir="rtl" style="text-align: right;">

-

</div>

-

#

<div dir="rtl" style="text-align: right;">

### [ایجاد / اضافه شد][#]

-

</div>

### [Added][#]

-

<div dir="rtl" style="text-align: right;">

### [رفع / درست شد][#]

-

</div>

### [Fixed][#]

-

<div dir="rtl" style="text-align: right;">

### [تغییر کرد][#]

-

</div>

### [Changed][#]

-

<div dir="rtl" style="text-align: right;">

### [منسوخ شد][#]

-

</div>

### [Deprecated][#]

-

<div dir="rtl" style="text-align: right;">

### [حذف شد][#]

-

</div>

### [Removed][#]

-

<div dir="rtl" style="text-align: right;">

### [امنیتی][#]

-

</div>

### [Security][#]

-
