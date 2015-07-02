var gulp = require('gulp'),
qunit = require('gulp-qunit');
gulp.task('test', function() {
return gulp.src('./QUnit.html')
    .pipe(qunit());
});
