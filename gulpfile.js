var gulp          = require('gulp');
var sass          = require('gulp-sass');

gulp.task('watch', function(){
    gulp.watch('./app/styles/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
    gulp.src('./app/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
});

gulp.task('default',['watch']);
