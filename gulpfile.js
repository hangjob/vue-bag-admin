const gulp = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const del = require("del");

gulp.task('script', function () {
    return gulp.src('lib/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./lib/js'))
})


gulp.task('rename-utils', function () {
    return gulp.src('utils/*.js')
        .pipe(gulp.dest('lib-utils'))
})


gulp.task("del", function (cb) {
    return del('utils'); // 删除整个utils文件夹
});

gulp.task('style', gulp.series('rename-utils','del'))
