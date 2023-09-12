import gulp from "gulp"
// import concat from "gulp-concat"
import uglify from "gulp-uglify"
// import cleanCSS from "gulp-clean-css"

gulp.task("cjs", function () {
    return gulp.src(["lib/**/*.js","lib/**/*.cjs"])
        .pipe(uglify())
        .pipe(gulp.dest("lib"))
})

// gulp.task("css", function () {
//     return gulp.src("lib/style.css")
//         .pipe(cleanCSS())
//         .pipe(gulp.dest("lib"))
// })
//
//
// gulp.task("combine", gulp.series("cjs", "css", function () {
//     return gulp.src(["lib/bag-admin.umd.cjs", "lib/style.css"])
//         .pipe(concat("bag-admin.und.min.cjs"))
//         .pipe(gulp.dest("lib"))
// }))

gulp.task("default", gulp.series("cjs"))

