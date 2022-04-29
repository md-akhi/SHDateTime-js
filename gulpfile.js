"use strict";
const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const del = require("del");
const banner = require("gulp-header");
const pkg = require("./package.json");

/**
 * combine all .ts files into one
 */
function combineTS() {
	return gulp
		.src(["src/**/*.ts"])
		.pipe(concat("shdatetime.ts"))
		.pipe(replace(/class ([a-z]{2}_[A-Z]{2})/g, "class SHDateLanguage_$1"))
		.pipe(replace(/export default (function|class)/g, "$1"))
		.pipe(replace(/import [a-zA-z_]* from [0-9a-zA-z_/\.\"]*;/g, " "))
		.pipe(replace(/ ([a-z]{2}_[A-Z]{2})\./g, " SHDateLanguage_$1."))
		.pipe(replace(/ Language_([a-z]{2}_[A-Z]{2})/g, " SHDateLanguage_$1"))
		.pipe(replace(/class (Word)/g, "class SHDate$1"))
		.pipe(replace(/\w?(Word\.)/g, " SHDate$1"))
		.pipe(gulp.dest("src/browser"));
}

function moveDTS() {
	return gulp.src("dist/cjs/**/*.d.ts").pipe(gulp.dest("dist/types"));
}
function delDTS() {
	return del(["dist/cjs/**/*.d.ts"]);
}

function browser() {
	var infoLong = [
		"/**",
		"* In the name of Allah, the Beneficent, the Merciful.",
		`* @package ${pkg.name} - ${pkg.description}`,
		`* @author ${pkg.author}`,
		"* @link http://codehub.akhi.ir/js/SHDateTime",
		"* @copyright Copyright (C) 2015 - 2022 . All right reserved.",
		`* @license https://www.gnu.org/licenses/agpl-3.0.en.html ${pkg.license} License`,
		`* @version Release: ${pkg.version}`,
		"*/"
	].join("\n");
	var infoShort = [
		`/** In the name of Allah. | ${pkg.name}@${pkg.version} | (C) 2015 - 2022 All right reserved. | ${pkg.license} | http://codehub.akhi.ir/js/SHDateTime */`,
		""
	].join("\n");

	return gulp
		.src("dist/browser/shdatetime.js")
		.pipe(babel({ presets: ["@babel/env"] }))
		.pipe(banner(infoLong))
		.pipe(gulp.dest("dist/browser"))
		.pipe(uglify())
		.pipe(rename({ extname: ".min.js" }))
		.pipe(banner(infoShort))
		.pipe(gulp.dest("./dist/browser"));
}

function delTSBrowser() {
	return del(["src/browser"]);
}

/**
 * Run default.
 */
exports.default = gulp.series(browser, delTSBrowser);
exports.combineTS = combineTS;
exports.moveDTS = moveDTS;
exports.delDTS = delDTS;
