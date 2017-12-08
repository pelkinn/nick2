var gulp = require('gulp'),
    less = require('gulp-less'),
    smartgrid = require('smart-grid'),
    watchLess = require('gulp-less-watcher'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps');

var smartgridSettings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '20px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '940px', /* max-width оn very large screen */
        fields: '10px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1170px' /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '970px'
        },
        sm: {
            width: '750px',
            fields: '5px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '425px'
        }
    }
};

gulp.task('default', function(done) {
    return gulp.src('style.less', { cwd: 'css/' })
        .pipe(plumber())
        .pipe(watchLess())
        .pipe(sourcemaps.init())
        .pipe(less().on('error', function(error) {
            done(error);
        }))
        .pipe(sourcemaps.write('css/', { includeContent: true }))
        .pipe(gulp.dest('css/'));
});

/**
 * Генерация сетки less, вместо bootstrap.css
 */
gulp.task('smartgrid', function () {
    smartgrid('css', smartgridSettings);
});