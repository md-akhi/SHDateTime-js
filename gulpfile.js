"use strict";
const gulp = require("gulp");
// const { task, src, dest } = require("gulp");
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

const env = process.env;

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

function replaceDocBlockInfo() {
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

function cleanCompile(cb) {
	return del(["dist", "src/browser"], cb);
}
gulp.task(cleanCompile);

/**
 * combine all .ts files into one
 */
function concatBrowserTS() {
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

function makeTypes(cb) {
	return (
		gulp.src("dist/cjs/**/*.d.ts").pipe(gulp.dest("dist/types")) &&
		del(["dist/cjs/**/*.d.ts"], cb)
	);
}

function compileCjs(cb) {
	//"tsc:cjs"
	return exec(
		'tsc --project tsconfig.json  && echo {"type":"commonjs"} > dist/cjs/package.json',
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}

function compileMjs(cb) {
	//"tsc:mjs"
	return exec(
		'tsc --project tsconfig.mjs.json && echo {"type":"module"} > dist/mjs/package.json',
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}

function compileBrowser(cb) {
	//"tsc:browser"
	return exec(
		"tsc --project tsconfig.browser.json",
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}

function makeBrowserTypes() {
	return gulp
		.src(["src/browser/*.ts", "dist/browser/*.d.ts"])
		.pipe(gulp.dest("dist/types"));
}

function cleanBrowserTS(cb) {
	return del(["src/browser", "dist/browser/*.d.ts"], cb);
}

function compressBrowserJS() {
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

/**
 * Run default.
 */
exports.default = gulp.task(
	"build",
	gulp.series(
		cleanCompile,
		gulp.parallel(
			compileCjs,
			makeTypes,
			compileMjs,
			concatBrowserTS,
			compileBrowser
		),
		compressBrowserJS,
		makeBrowserTypes,
		cleanBrowserTS,
		replaceDocBlockInfo
	)
);

function cleanDev(cb) {
	return del(["dist/src", "dist/tests", "tests/tst.out"], cb);
}

function compileTest(cb) {
	return exec(
		"tsc --project tsconfig.test.json",
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}
gulp.task(compileTest);

function copyTestCJS(cb) {
	return gulp.src(["tests/cjs/*"]).pipe(gulp.dest("dist/tests/cjs"));
}
function installTestsCJS(cb) {
	return exec(
		"(cd dist/tests/cjs && npm i && npm test)",
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}
function copyTestMJS(cb) {
	return gulp.src(["tests/mjs/*"]).pipe(gulp.dest("dist/tests/mjs"));
}
function installTestsMJS(cb) {
	return exec(
		"(cd dist/tests/mjs && npm i && npm test)",
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}
function copyTestPKG(cb) {
	return gulp.src(["tests/pkgs/*"]).pipe(gulp.dest("dist/tests/pkgs"));
}
function installTestsPKGS(cb) {
	return exec(
		"(cd dist/tests/pkgs && npm i && npm test) ",
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}

gulp.task(
	"test",
	gulp.series(
		cleanDev,
		compileTest,
		gulp.parallel(
			gulp.series(copyTestCJS, installTestsCJS),
			gulp.series(copyTestMJS, installTestsMJS),
			gulp.series(copyTestPKG, installTestsPKGS)
		)
	)
);

gulp.task("testRelease", gulp.series(cleanDev, compileTest));

// buildUntilTests.displayName = 'clean:all';
// buildUntilTests.description = 'Build the project';
// buildUntilTests.flags = { '-e': 'An example flag' };
