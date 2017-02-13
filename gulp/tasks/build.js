var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();


gulp.task('previewDist', function() {
        browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
});

gulp.task('deleteDistFolder', function() {
    return del("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/project-2048.html',
        '!./app/project-mobile.html',
        '!./app/project-webperf.html',
        '!./app/assets/img/**',
        '!./app/assets/css/**',
        '!./app/assets/js/**',
        '!./app/assets/views/css/**',
        '!./app/assets/views/images/**',
        '!./app/assets/views/js/**',
        '!./app/assets/views/pizza.html',
        '!./app/temp',
        '!./app/temp/**'
    ]

    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {

/* '!': will exclude particular folders from being in the build */

    return gulp.src(['./app/assets/img/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true,
        }))
        .pipe(gulp.dest("./docs/assets/img"));
});

gulp.task('optimizeViewsImages', ['deleteDistFolder'], function() {

/* '!': will exclude particular folders from being in the build */

    return gulp.src(['./app/assets/views/images/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true,
        }))
        .pipe(gulp.dest("./docs/assets/views/images/"));
});

gulp.task('usemin', ['deleteDistFolder', 'scripts', 'mainStyles', 'viewsStyles'], function() {
    return gulp.src("./app/**/*.html")
        .pipe(usemin({
            css: [function() {return rev()}, function() {return cssnano()}], js: [function() {return rev()}, ,function() {return uglify()}], html: [],
      jsAttributes : {
                async : true
      }
        }))
        .pipe(gulp.dest("./docs"));
});

/* IF YOU ARE ARE UPLOADING TO GITHUB, GET RID OF FORWARD SLASHES*/

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages','optimizeViewsImages', 'usemin']);

