const gulp = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const del = require('del')
const cleans = require('gulp-clean-css')

gulp.task('compress-js', function() {
    return gulp.src('lib/*.js')
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('lib/'))
})

gulp.task('compress-css', function(cb) {
    gulp.src('lib/*.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleans())
        .pipe(gulp.dest('lib/'))
    cb()
})


gulp.task('rename-utils', function() {
    return gulp.src('utils/*.js')
        .pipe(gulp.dest('lib-utils'))
})


gulp.task('del-utils', function() {
    return del('utils') // 删除整个utils文件夹
})

gulp.task('del-lib', function() {
    return del(['lib/*.html', 'lib/*.gz'])
})

gulp.task('style', gulp.series('rename-utils', 'del-utils'))
gulp.task('lib', gulp.series('del-lib', 'compress-css', 'compress-js'))
