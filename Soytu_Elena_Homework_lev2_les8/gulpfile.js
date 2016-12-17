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

gulp.task('jade', function(){
  return gulp.src('app/templates/*.jade')
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('app'));
});

gulp.task('watch', ['browserSync', 'css'], function (){
  gulp.watch('app/css/**/*.css', ['css']); 
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 

});

gulp.task('useref', ['jade'], function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    
    .pipe(gulp.dest('dist'))

});



