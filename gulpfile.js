
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
    .pipe(gulp.dest('dist/cjs'))
});

/**
 * Copy esm package.
 */
gulp.task('package-mjs', function() {
  return gulp.src(['build/script/package-mjs.json'])
	.pipe(rename( {
		basename: 'package'
    }))
    .pipe(gulp.dest('dist/mjs'))
});

 /**
	* Run default.
	*/
gulp.task('default', gulp.parallel('package-cjs', 'package-mjs'));





