'use strict'
var gulp = require('gulp');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var gulpIf = require('gulp-if');
var jade = require('gulp-jade');


gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})
gulp.task('css', function() {
  return gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'css'], function (){
  gulp.watch('app/css/**/*.css', ['css']); 
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 

});

gulp.task('useref', function(){
  return gulp.src('app/**/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', cleanCSS()))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))

});



