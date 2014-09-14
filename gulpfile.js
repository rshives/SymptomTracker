// SymptomTracker/gulpfile.js

var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  watch = require('gulp-watch'),
  webserver = require('gulp-webserver');

gulp.task('scripts', function () {
  return gulp.src('app/scripts/*.js')
    .pipe(jshint())
    .pipe(gulp.dest('build/scripts/'));
});

gulp.task('watch', function () {
  watch('app/scripts/*.js', function (files, cb) {
    gulp.start('scripts', cb);
  });
});

gulp.task('webserver', function () {
  gulp.src('.')
    .pipe(webserver(
    {
      port: 3000,
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', function () {
  gulp.start(['scripts', 'webserver', 'watch' ]); 
});
 
