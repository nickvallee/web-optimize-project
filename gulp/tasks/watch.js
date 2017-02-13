
var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    /* this is creating a local server */
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });


/*watch for saved changes to html file */
    watch('./app/index.html', function() {
       browserSync.reload();
    });

    watch('./app/assets/css/**/*.css', function() {
        gulp.start('cssInject');
    });

    watch('./app/assets/js/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });
});

gulp.task('cssInject',['mainStyles', 'viewsStyles'], function() {
    return gulp.src('./app/temp/css/**', './app/temp/views/css/**')
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh',['scripts'], function() {
    browserSync.reload()
});
