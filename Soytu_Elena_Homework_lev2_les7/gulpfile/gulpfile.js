'use strict'
const gulp = require('gulp');
const browserSync = require('browser-sync');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const gulpIf = require('gulp-if');
const jade = require('gulp-jade');
const babel = require('gulp-babel');


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

gulp.task('default', () =>
    gulp.src('app/ES6_js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/js'))
);

gulp.task('useref', ['default','jade'], function(){ 
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', cleanCSS()))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});



