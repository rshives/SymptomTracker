// SymptomTracker/gulpfile.js

var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  watch = require('gulp-watch'),
  webserver = require('gulp-webserver');

var del = require('del');

var paths = {
  scripts: 'app/scripts/*.js',
  models: 'app/scripts/models/*.js',
  mainpage: 'app/index.html',
  views: 'app/views/*.*',
  style: 'app/style/*.css',
  images: 'app/images/*.*'
}

gulp.task('clean', function (cb) {
  del(['build'], cb);
});

gulp.task('cleanscripts', function (cb) {
  del(['build/scripts'], cb);
});

gulp.task('cleanmodels', function (cb) {
  del(['build/scripts/models'], cb);
});

gulp.task('cleanmainpage', function (cb) {
  del(['build/index.html'], cb);
});

gulp.task('cleanviews', function (cb) {
  del(['build/views'], cb);
});

gulp.task('cleanstyle', function (cb) {
  del(['build/style'], cb);
});

gulp.task('cleanimages', function (cb) {
  del(['build/images'], cb);
});

gulp.task('scripts', function () {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(gulp.dest('build/scripts/'));
});

gulp.task('models', function () {
  return gulp.src(paths.models)
    .pipe(jshint())
    .pipe(gulp.dest('build/scripts/'));
});

gulp.task('mainpage', function () {
  return gulp.src(paths.mainpage)
    .pipe(gulp.dest('build/'));
});

gulp.task('views', function () {
  return gulp.src(paths.views)
    .pipe(gulp.dest('build/views/'));
});

gulp.task('style', function () {
  return gulp.src(paths.style)
    .pipe(gulp.dest('build/style/'));
});

gulp.task('images', function () {
  return gulp.src(paths.images)
    .pipe(gulp.dest('build/images/'));
});

gulp.task('watch', function () {
  watch(paths.scripts, function (files, cb) {
    gulp.start('scripts', cb);
  });

  watch(paths.models, function (files, cb) {
    gulp.start('models', cb);
  });

  watch(paths.mainpage, function (files, cb) {
    gulp.start('mainpage', cb);
  });

  watch(paths.views, function (files, cb) {
    gulp.start('views', cb);
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
  gulp.start(['scripts', 'models', 'mainpage', 'views', 'style', 'images', 'webserver', 'watch' ]);
});

