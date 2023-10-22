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
const { argv } = require("node:process");
const { exec } = require("node:child_process");

const COPY_RIGHT =
	"(C) 2015 - 2023 Open Source Matters,Inc. All right reserved.";

const LINK_DOCBLOCK_LONG = `http://git.akhi.ir/js/SHDate | ${pkg.homepage}`;

const INFO_DOCBLOCK_LONG = [
	`/**
	* In the name of Allah, the Beneficent, the Merciful.
	* @package ${pkg.name} - ${pkg.description}
	* @author ${pkg.author}
	* @link ${LINK_DOCBLOCK_LONG}
	* @copyright ${COPY_RIGHT}
	* @license ${pkg.license} License
	* @version Release: ${pkg.version}
	*/
	`
].join("\n");

const INFO_DOCBLOCK_SHORT = [
	`/** In the name of Allah. | ${pkg.name}@${pkg.version} | ${COPY_RIGHT} | ${pkg.license} License | ${LINK_DOCBLOCK_LONG} */`
].join("\n");

/**
 * combine all .ts files into one
 */
function MergeFilesBrowserTS() {
	return gulp
		.src(["./src/languages/**/*.ts", "./src/parser/**/*.ts", "src/*.ts"])
		.pipe(concat("shdate.ts"))
		.pipe(replace(/export default (function|class)/g, "$1"))
		.pipe(replace(/import [a-zA-Z_]* from [0-9a-zA-Z_/\.\"]*;/g, " "))
		.pipe(replace(/extends (Language)/g, "extends SHDate$1"))
		.pipe(replace(/class ([a-z]{2,3}_[A-Z]{2})/g, "class SHDateLanguage_$1"))
		.pipe(replace(/ ([a-z]{2,3}_[A-Z]{2})\./g, " SHDateLanguage_$1."))
		.pipe(replace(/ Language_([a-z]{2,3}_[A-Z]{2})/g, " SHDateLanguage_$1"))
		.pipe(replace(/\((Languages)\)/g, "(SHDate$1)"))
		.pipe(replace(/class (Language|Word)/g, "class SHDate$1"))
		.pipe(replace(/(Language\.|Word\.)/g, "SHDate$1"))
		.pipe(replace(/enum (Language)/g, "enum SHDate$1"))
		.pipe(replace(/ Languages.([a-z]{2,3}_[A-Z]{2})/g, " SHDateLanguages.$1"))
		.pipe(replace(/SH(Parser|Lexer|Token)/g, "SHDate$1"))
		.pipe(gulp.dest("src/browser"));
}

function setDocBlockDescription() {
	/**
	 * In the name of Allah, the Beneficent, the Merciful. | \* In the name of Allah, the Beneficent, the Merciful\./im;
	 */
	return gulp
		.src(["src/**/*.ts"])
		.pipe(
			replace(
				/\* @(package( [\w\/\-\,\{\}@]+)+)/g,
				`* @package ${pkg.name} - ${pkg.description}`
			)
		)
		.pipe(
			replace(
				/\* @(author( [\w\/\-\,\{\}@<>\.\(\):]+)+)/g,
				`* @author ${pkg.author}`
			)
		)
		.pipe(
			replace(/\* @(link( [\w:\/\.\|#-]+)+)/g, `* @link ${LINK_DOCBLOCK_LONG}`)
		)
		.pipe(
			replace(
				/\* @(copyright( [\w\d.\(\)\-\,]+)+)/g,
				`* @copyright ${COPY_RIGHT}`
			)
		)
		.pipe(
			replace(
				/\* @(license( [\w\d:\/.\(\)\-]+)+)/g,
				`* @license ${pkg.license} License`
			)
		)
		.pipe(
			replace(
				/\* @(version( [\w\d:\/\.\-]+)+)/g,
				`* @version Release: ${pkg.version}`
			)
		)
		.pipe(
			replace(
				/version: string = "([\w\d:\/\.\-]+)"/g,
				`version: string = "${pkg.version}"`
			)
		)
		.pipe(gulp.dest("src/"));
}

function moveDotDToTypes(cb) {
	// return del(["dist/cjs/**/*.d.ts"]);//rm -rf dist/cjs/**/*.d.ts
	return (
		gulp.src("dist/cjs/**/*.d.ts").pipe(gulp.dest("dist/types")) &&
		exec(
			"rm -rf dist/cjs/*.d.ts dist/cjs/parser/*.d.ts dist/cjs/languages/*.d.ts dist/cjs/languages/i18n/*.d.ts dist/cjs/languages/l10n/*.d.ts",
			function (err, stdout, stderr) {
				// console.log(stdout);
				// console.log(stderr);
				cb(err);
			}
		)
	);
}

function settingBrowserJS() {
	return gulp
		.src("dist/browser/shdate.js", { sourcemaps: true })
		.pipe(babel({ presets: ["@babel/env"] }))
		.pipe(banner(INFO_DOCBLOCK_LONG))
		.pipe(gulp.dest("dist/browser"))
		.pipe(babel({ presets: ["@babel/env"] }))
		.pipe(uglify())
		.pipe(rename({ extname: ".min.js" }))
		.pipe(banner(INFO_DOCBLOCK_SHORT))
		.pipe(gulp.dest("./dist/browser", { sourcemaps: "." }));
}

function deleteMergeFilesBrowserTS(cb) {
	// return del(["src/browser", "dist/browser/*.d.ts"]);
	return exec(
		"rm -rf src/browser dist/browser/*.d.ts",
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}
function moveDotDBrowserTSToTypes() {
	return gulp
		.src(["src/browser/*.ts", "dist/browser/*.d.ts"])
		.pipe(gulp.dest("dist/types"));
}

function buildCjs() {
	//"tsc:cjs"
	return exec(
		'tsc --project tsconfig.json  && echo {"type":"commonjs"}>dist/cjs/package.json && gulp moveDotDToTypes',
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}
function buildMjs() {
	//"tsc:mjs"
	return exec(
		'tsc --project tsconfig.mjs.json && echo {"type":"module"}>dist/mjs/package.json',
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}
function buildBrowser() {
	//"tsc:browser"
	return exec(
		"gulp MergeFilesBrowserTS && tsc --project tsconfig.browser.json",
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}

function devClean() {
	return exec(
		"rm -rf dist/src dist/tests tests/tst.out",
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}

function buildTests() {
	return exec(
		'tsc --project tsconfig.test.json && echo {"type":"commonjs"}>dist/tests/cjs/package.json && echo {"type":"module"}>dist/tests/mjs/package.json',
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}

function buildUntilTests() {
	return exec(
		"npm run tsc:test && node dist/tests/build-test.js > tests/build-test.log",
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}

/**
 * Run default.
 */
exports.default = gulp.series(
	settingBrowserJS,
	moveDotDBrowserTSToTypes,
	deleteMergeFilesBrowserTS
);
// exports.deleteMergeTS = gulp.series();
exports.MergeFilesBrowserTS = MergeFilesBrowserTS;
exports.moveDotDToTypes = moveDotDToTypes;
exports.setDocBlockDescription = setDocBlockDescription;
