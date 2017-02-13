var gulp = require('gulp'),
responsive = require('gulp-responsive');

gulp.task('responsive', function () {
  return gulp.src('./app/assets/views/images/*.{png,jpg}')
    .pipe(responsive({
      'pizzeria.jpg': {
        width: 300,
        format: 'png',
        rename: { suffix: '-web',
                  extname: '.png'
                   },
      },
      'pizza.png': {
        width: '100%',
        rename: { suffix: '-web' }
      }
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Zlib compression level of PNG output format
      compressionLevel: 6,
      // Strip all metadata
      withMetadata: false,
    }))
    .pipe(gulp.dest('./app/assets/views/images'));
});