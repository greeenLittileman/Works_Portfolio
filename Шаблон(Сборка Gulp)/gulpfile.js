//var jade = require('gulp-pug');
var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

gulp.task('jade', function()
{
	gulp.src('jade/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('./'))
});

gulp.task('sass', function(){
  gulp.src('scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css'))
});

