const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('sass', function() {
    return gulp.src('./src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({outputStyle: 'expanded'})
            .on('error', sass.logError)
        )
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function() {
    return gulp.watch('./src/**/*.scss', ['sass'])
})