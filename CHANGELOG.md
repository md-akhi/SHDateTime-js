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

## [unreleased][unreleased]

### [Added][#]

-

### [Changed][#]

-

### [Fixed][#]

-

#

<div dir="rtl" style="text-align: center;">

## [2.3.17] - SH 1403-05-05 - G 2024-07-26

### [ایجاد / اضافه شد][#]

- ایجاد متد `#nthWeekdayOfMonth`
- ایجاد متد `nthWeekdayOfMonth`
- ایجاد متد `getNthWeekdayOfMonth`
- ایجاد متد `getFirstWeekdayOfMonth`
- ایجاد متد `getLastWeekdayOfMonth`
- ایجاد متد `#WeekdayInMonth`
- ایجاد متد `getWeekdayInMonth`
- ایجاد متد `dayOfWeek`
- ایجاد متد `weekdayInMonth`
- ایجاد متد `dayOfYear`
- ایجاد متد `weekOfYear`
- ایجاد متد `weeksInYear`
- ایجاد متد `weekOfDay`
- ایجاد متد `dateOfDayOfYear`
- ایجاد متد `daysInMonth`
- ایجاد متد `daysInYear`
- ایجاد متد `copy`
- ایجاد متد `this`
- اضافه شدن مستندات متد `VERSION`
- اضافه شدن مستندات متد `DAYS_IN_MONTH`
- اضافه شدن مستندات متد `DAYS_IN_MONTH_LEAP`
- اضافه شدن مستندات متد `DAY_OF_YEAR`
- اضافه شدن مستندات متد `DAYS_IN_YEAR`
- اضافه شدن مستندات متد `DAYS_IN_YEAR_LEAP`
- اضافه شدن مستندات متد `WEEKS_IN_YEAR`
- اضافه شدن مستندات متد `WEEKS_IN_YEAR_LEAP`
- اضافه شدن مستندات متد `toUTCTimeString()`
- اضافه شدن مستندات متد `weekCorrection()`
- اضافه شدن مستندات متد `checkDate()`
- اضافه شدن مستندات متد `checkWeek()`
- اضافه شدن مستندات متد `checkTime()`
- اضافه شدن مستندات متد `checkTime12()`
- اضافه شدن مستندات متد `clone()`
- اضافه شدن مستندات متد `dateCorrection()`
- اضافه شدن مستندات متد `timeCorrection()`

### [تغییر کرد][#]

- تغییر نام `GdayOfYear` به `GDayOfYear`
- تغییر نام `GdateOfDayOfYear` به `GDateOfDayOfYear`
- تغییر نام `GdaysInMonths` به `GDaysInMonths`
- تغییر نام `setUTCDateOfDayOfYear` به `setUTCDayOfYear`
- تغییر نام `setDateOfDayOfYear` به `setDayOfYear`

### [رفع / درست شد][#]

- رفع خطای ثبت سال در متد `#setFullYear`
- رفع خطای ثبت ماه در متد `#setMonth`
- رفع خطای ثبت روز در متد `#setDate`

</div>

### [Added][#]

- Create method `#nthWeekdayOfMonth`
- Create method `nthWeekdayOfMonth`
- Create method `getNthWeekdayOfMonth`
- Create method `getFirstWeekdayOfMonth`
- Create method `getLastWeekdayOfMonth`
- Create method `#WeekdayInMonth`
- Create method `weekdayInMonth`
- Create method `getWeekdayInMonth`
- Create method `dayOfWeek`
- Create method `dayOfYear`
- Create method `weekOfYear`
- Create method `weeksInYear`
- Create method `weekOfDay`
- Create method `dateOfDayOfYear`
- Create method `daysInMonth`
- Create method `daysInYear`
- Create method `copy`
- Create method `this`
- Added method documentation `VERSION`
- Added method documentation `DAYS_IN_MONTH`
- Added method documentation `DAYS_IN_MONTH_LEAP`
- Added method documentation `DAY_OF_YEAR`
- Added method documentation `DAYS_IN_YEAR`
- Added method documentation `DAYS_IN_YEAR_LEAP`
- Added method documentation `WEEKS_IN_YEAR`
- Added method documentation `WEEKS_IN_YEAR_LEAP`
- Added method documentation `toUTCTimeString()`
- Added method documentation `weekCorrection()`
- Added method documentation `checkDate()`
- Added method documentation `checkWeek()`
- Added method documentation `checkTime()`
- Added method documentation `checkTime12()`
- Added method documentation `clone()`
- Added method documentation `dateCorrection()`
- Added method documentation `timeCorrection()`

### [Changed][#]

- Rename method from `GdayOfYear` to `GDayOfYear`
- Rename method from `GdateOfDayOfYear` to `GDateOfDayOfYear`
- Rename method from `GdaysInMonths` to `GDaysInMonths`
- Rename method from `setUTCDateOfDayOfYear` to `setUTCDayOfYear`
- Rename method from `setDateOfDayOfYear` to `setDayOfYear`

### [Fixed][#]

- Fixed year registration error in `#setFullYear` method
- Fixed month registration error in `#setMonth` method
- Fixed the day registration error in the `#setDate` method

#

<div style="text-align: center;">

## [2.1.25] - SH 1402-08-06 - G 2023-10-28

</div>
<div dir="rtl" style="text-align: right;">

### [ایجاد / اضافه شد][#]

- افزودن تست برای مرورگر [[a179f8a](https://github.com/md-akhi/SHDateTime-js/commit/a179f8ac052cd286de81951d4f5eb1a5ebfd719b)]

### [تغییر کرد][#]

- اصلاح و تغییر در gulpfile [[a179f8a](https://github.com/md-akhi/SHDateTime-js/commit/a179f8ac052cd286de81951d4f5eb1a5ebfd719b)]

### [رفع / درست شد][#]

- رفع خطای انتشار در github [[4ece537](https://github.com/md-akhi/SHDateTime-js/commit/4ece537ae13cae68003ec1f06710cca4b2bfab2e)]
- رفع خطای اجرا در مرورگر [[a179f8a](https://github.com/md-akhi/SHDateTime-js/commit/a179f8ac052cd286de81951d4f5eb1a5ebfd719b)]

</div>

### [Added][#]

- Add test for browser [[a179f8a](https://github.com/md-akhi/SHDateTime-js/commit/a179f8ac052cd286de81951d4f5eb1a5ebfd719b)]

### [Changed][#]

- Fixes and changes in gulpfile [[a179f8a](https://github.com/md-akhi/SHDateTime-js/commit/a179f8ac052cd286de81951d4f5eb1a5ebfd719b)]

### [Fixed][#]

- Fix release error on github [[4ece537](https://github.com/md-akhi/SHDateTime-js/commit/4ece537ae13cae68003ec1f06710cca4b2bfab2e)]
- Fix execution error in browser [[a179f8a](https://github.com/md-akhi/SHDateTime-js/commit/a179f8ac052cd286de81951d4f5eb1a5ebfd719b)]

#

<div style="text-align: center;">

## [2.1.23] - SH 1402-08-04 - G 2023-10-26

</div>

<div dir="rtl" style="text-align: right;">

### [ایجاد / اضافه شد][#]

- ایجاد تست برای exports PKGS [[f7daec4](https://github.com/md-akhi/SHDateTime-js/commit/f7daec448e4ac162b6fb3e77fd95e3e2cded862c)]

### [تغییر کرد][#]

- تغییر نام متد تبدیل عدد از NumbersTo به toNumber [[a48a6d1](https://github.com/md-akhi/SHDateTime-js/commit/a48a6d1ec26503fe19c33378aa8384e8b76537e8)]
- بازنویسی gulp [[54bbb56](https://github.com/md-akhi/SHDateTime-js/commit/54bbb56dd3504315d5e0c9f9a6c3a5e39f3c0383)]
- بازنویسی دستورات PKGS [[54bbb56](https://github.com/md-akhi/SHDateTime-js/commit/54bbb56dd3504315d5e0c9f9a6c3a5e39f3c0383)]

### [رفع / درست شد][#]

- اصلاح آدرس‌های exports PKGS برای فراخوانی‌ها [[8b6a11a](https://github.com/md-akhi/SHDateTime-js/commit/8b6a11a53446074eec0711876c2c66982868cc88)]

</div>

### [Added][#]

- Create test for PKGS exports[[f7daec4](https://github.com/md-akhi/SHDateTime-js/commit/f7daec448e4ac162b6fb3e77fd95e3e2cded862c)]

### [Changed][#]

- Rename conversion method from NumbersTo to toNumber [[a48a6d1](https://github.com/md-akhi/SHDateTime-js/commit/a48a6d1ec26503fe19c33378aa8384e8b76537e8)]
- Rewrite gulp [[54bbb56](https://github.com/md-akhi/SHDateTime-js/commit/54bbb56dd3504315d5e0c9f9a6c3a5e39f3c0383)]
- Rewriting PKGS commands [[54bbb56](https://github.com/md-akhi/SHDateTime-js/commit/54bbb56dd3504315d5e0c9f9a6c3a5e39f3c0383)]

### [Fixed][#]

- Modification of export PKGS addresses for calls [[8b6a11a](https://github.com/md-akhi/SHDateTime-js/commit/8b6a11a53446074eec0711876c2c66982868cc88)]

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
- اضافه شدن قابلیت کار با رشته توسط متد `parse`
- اضافه شدن تست‌های لازم و ضروری
- پیاده‌سازی متد `getDayOfYear‍‍‍`
- پیاده‌سازی متد `getUTCDayOfYear‍‍`
- پیاده‌سازی متد `getWeekOfYear`
- پیاده‌سازی متد `getUTCWeekOfYear`
- پیاده‌سازی متد `getWeeksInYear`
- پیاده‌سازی متد `getUTCWeeksInYear`
- پیاده‌سازی متد `setWeek`
- پیاده‌سازی متد `setDateOfDayOfYear`
- پیاده‌سازی متد `setUTCDateOfDayOfYear`
- پیاده‌سازی متد `getDaysInMonth`
- پیاده‌سازی متد `getUTCDaysInMonth`
- پیاده‌سازی متد `getDaysInYear`
- پیاده‌سازی متد `getUTCDaysInYear`
- پیاده‌سازی متد `timeCorrection`
- پیاده‌سازی متد `dateCorrection`
- پیاده‌سازی متد `weekCorrection`
- پیاده‌سازی متد `checkDate`
- پیاده‌سازی متد `checkTime`
- پیاده‌سازی متد `checkTime12`
- پیاده‌سازی متد `checkWeek`
- پیاده‌سازی متد `getDates`
- پیاده‌سازی متد `getUTCTime`
- پیاده‌سازی متد `parse`
- پیاده‌سازی متد `restTime`
- پیاده‌سازی متد `restUTCTime`
- پیاده‌سازی متد `getVersion`
- پیاده‌سازی متد `clone`
- پیاده‌سازی متد `instance`

### [تغییر کرد][#]

- تغییر نام فایل `index` به `base`
- انتقال فایل‌های زبان به پوشه `language`
- فراخوان برنامه از `@md-akhi/shdatetime` به `shdate`
- تغییر نام متد `updateDate` به `dateSync`
- تغییر نام متد `updateTime` به `timeSync`
- تغییر پارامتر متد `isLeapYear` به بدون پارامتر
- تغییر ارزش بازگشتی متد `weekOfYear` از [هفته،سال] به [سال،هفته]
- تغییر نام متد `dateOfDoy` به `dateOfDayOfYear`
- تغییر ارزش پیش فرض پارامتر `date` متد `weekOfDay` از `1` به `0`

### [رفع / درست شد][#]

- اصلاح نمایش دقیقه و ثانیه در متد `format` ([88811df](https://github.com/md-akhi/SHDateTime-js/commits/88811dfe9596caa596f234f95474b5a716fd350b))

</div>

### [Added][#]

- Added `Jekyll` template for documentation
- Added documentation in `English` language
- Added documentation in `Farsi` language
- Adding part of the documentation
- Added ability to work with strings by the `parse` method
- Adding necessary test
- Implementation of `getDayOfYear` method
- Implementation of `getUTCDayOfYear` method
- Implementation of the `getWeekOfYear` method
- Implementation of `getUTCWeekOfYear` method
- Implementation of the `getWeeksInYear` method
- Implementation of `getUTCWeeksInYear` method
- Implementation of the `setWeek` method
- Implementation of the `setDateOfDayOfYear` method
- Implementation of `setUTCDateOfDayOfYear` method
- Implementation of `getDaysInMonth` method
- Implementation of `getUTCDaysInMonth` method
- Implementation of `getDaysInYear` method
- Implementation of `getUTCDaysInYear` method
- Implementation of the `timeCorrection` method
- Implementation of the `dateCorrection` method
- Implementation of the `weekCorrection` method
- Implementation of the `checkDate` method
- Implementation of the `checkTime` method
- Implementation of `checkTime12` method
- Implementation of the `checkWeek` method
- Implementation of `getDates` method
- Implementation of `getUTCTime` method
- Implementation of the `parse` method
- implementation of `RestTime` method
- Implementation of `restUTCTime` method
- Implementation of `getVersion` method
- Implementation of the `clone` method
- Implementation of the `instance` method

### [Changed][#]

- Rename the `index` file to `base`
- Move the language files to the language folder
- Changing program call and address from `@md-akhi/shdatetime` to `shdate`
- Rename method `updateDate` to `dateSync`
- Rename method `updateTime` to `timeSync`
- Change the `isLeapYear` method parameter to no parameter
- Change the return value of the `weekOfYear` method from `[week, year]` to `[year, week]`
- Rename method `dateOfDoy` to `dateOfDayOfYear`
- Changing the default value of the date parameter of the `weekOfDay` method from 1 to 0

### [Fixed][#]

- Correcting the display of minutes and seconds in the `format` method ([88811df](https://github.com/md-akhi/SHDateTime-js/commits/88811dfe9596caa596f234f95474b5a716fd350b))

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
- ایجاد متد چک کننده زبان

### [تغییر کرد][#]

- تغییر نام متد از setTimeServer به setTimeServerDiff
- تغییر نام متد از getTimeServer به getTimeServerDiff

</div>

### [Added][#]

- Added documentation
- Added dockerize
- added check language method

### [Changed][#]

- Change setTimeServer method to setTimeServerDiff
- Change getTimeServer method to getTimeServerDiff

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

[unreleased]: https://github.com/md-akhi/SHDateTime-js/compare/2.3.17...HEAD
[2.3.17]: https://github.com/md-akhi/SHDateTime-js/compare/2.1.25...2.3.17
[2.1.25]: https://github.com/md-akhi/SHDateTime-js/compare/2.1.24...2.1.25
[2.1.24]: https://github.com/md-akhi/SHDateTime-js/compare/2.1.23...2.1.24
[2.1.23]: https://github.com/md-akhi/SHDateTime-js/compare/2.1.10...2.1.23
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
