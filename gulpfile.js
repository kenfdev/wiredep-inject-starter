var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  lazy: true
});

gulp.task('wiredep', function() {
  var wiredep = require('wiredep').stream;

  return gulp
    .src('./src/client/index.html')
    .pipe(wiredep()) // wiredep bower dependencies
    .pipe($.inject(gulp.src(['./src/**/*.js', './src/**/*.css']), {
      relative: true // no need for the './src/client' part
    }))
    .pipe(gulp.dest('./src/client')) // output the index.html
})
