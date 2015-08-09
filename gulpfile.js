var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  lazy: true
});

gulp.task('wiredep', function() {
  var options = {
    bowerJson: './bower.json',
    directory: './bower_components',
    ignorePath: '../..'
  };
  var wiredep = require('wiredep').stream;

  return gulp
    .src('./src/client.index.html')
    .pipe(wiredep(options))
    .pipe($.inject(gulp.src('./src/**/*.js')))
    .pipe(gulp.dest('./src/client'))
})
