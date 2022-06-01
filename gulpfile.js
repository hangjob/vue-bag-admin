const gulp = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const del = require('del')
const cleans = require('gulp-clean-css')

// 压缩js
gulp.task('compress-lib-js', function() {
    return gulp.src('lib/*.js')
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('lib/'))
})

// 压缩css
gulp.task('compress-lib-css', function(cb) {
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
gulp.task('lib', gulp.series('del-lib', 'compress-lib-css', 'compress-lib-js'))

/************web依赖*****************/
gulp.task('del-lib-web', function() {
    return del(['lib-web/*.html', 'lib-web/*.gz'])
})

gulp.task('compress-lib-web-js', function() {
    return gulp.src('lib-web/*.js')
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('lib-web/'))
})

gulp.task('compress-lib-web-css', function(cb) {
    gulp.src('lib-web/*.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleans())
        .pipe(gulp.dest('lib-web/'))
    cb()
})


gulp.task('web', gulp.series('del-lib-web', 'compress-lib-web-css', 'compress-lib-web-js'))
