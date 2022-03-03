
'use strict';
const gulp = require('gulp');
const rename = require('gulp-rename');

/**
 * Copy commonjs package.
 */
gulp.task('package-cjs', function() {
  return gulp.src(['build/script/package-cjs.json'])
	.pipe(rename( {
		basename: 'package'
    }))
    .pipe(gulp.dest('lib/src'))
});

/**
 * Copy esm package.
 */
gulp.task('package-mjs', function() {
  return gulp.src(['build/script/package-mjs.json'])
	.pipe(rename( {
		basename: 'package'
    }))
    .pipe(gulp.dest('lib/mjs'))
});

 /**
	* Run default.
	*/
gulp.task('default', gulp.parallel('package-cjs', 'package-mjs'));





