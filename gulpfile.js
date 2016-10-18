var gulp   = require('gulp');
var sass   = require('gulp-sass');
var eslint = require('gulp-eslint');

gulp.task('watch', function() {
    gulp.watch('./app/styles/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
    gulp.src('./app/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
});

gulp.task('lint', function() {
    return gulp.src('./app/**/*.js')
        .pipe(eslint({useEslintrc: true}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default',['watch']);
