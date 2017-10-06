const gulp              = require('gulp');
const sass              = require('gulp-sass');
const plumber           = require('gulp-plumber');
const sourcemaps        = require('gulp-sourcemaps');
const autoprefixer      = require('gulp-autoprefixer');
const browserSync       = require('browser-sync').create();


const handleError = function(err) {
    console.log(err.toString());
    this.emit('end');
}

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        // notify: false,
        // open: false, //czy otwierac automatyscznie
        server: {
            baseDir: "./",
        }
    });
});

gulp.task('sass', function () {
  return gulp.src('./scss/main.scss')
    .pipe(plumber({errorHandler: handleError}))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'})) //nested, expanded, compact, compressed
    .pipe(autoprefixer({
        browsers: ['> 5%'],
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

//obserwujemy zmiany w plikach
gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

//wywolujemy sass'a i watch'a na raz
gulp.task('default', function(){
    console.log("-------Rozpoczynam prace---------");
    gulp.start(['sass', 'watch', 'browser-sync']);
})
