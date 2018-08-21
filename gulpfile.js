var gulp = require('gulp'),
    sass = require('gulp-sass'),
    less = require('gulp-less'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create();

var config = {
    paths: {
        src: {
            scss: './src/scss/',
            less: './src/less/',
            scripts: './src/scripts/',
        },
        dest: './docs/',
    },
    serve: {
        proxy: '',
        server: './docs/'
    }
};

gulp.task('sass', function() {
    return gulp.src(config.paths.src.scss + '*.scss')
        .pipe(plumber({ 
            errorHandler: function(err) {
                notify.onError({
                    title: "SCSS Compiler Failure",
                    subtitle: "GulpJS Failure",
                    message: "<%= error.message %>",
                    sound: "Beep"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(plumber.stop())
        .pipe(sourcemaps.write({includeContent: false}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.dest + 'css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(config.paths.dest + 'css'))
        .pipe(browserSync.reload({ stream: true }));
});
gulp.task('less', function(){
    return gulp.src(config.paths.src.less + '*.less')
        .pipe(plumber({ 
            errorHandler: function(err) {
                notify.onError({
                    title: "LESS Compiler Failure",
                    subtitle: "GulpJS Failure",
                    message: "<%= error.message %>",
                    sound: "Beep"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(plumber.stop())
        .pipe(sourcemaps.write({includeContent: false}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.dest + 'css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(config.paths.dest + 'css'))
        .pipe(browserSync.reload({ stream: true }));
});
gulp.task('script', function() {
    return gulp.src(config.paths.src.scripts + '*.js')
        .pipe(plumber({ 
            errorHandler: function(err) {
                notify.onError({
                    title: "JavaScript Syntax Error",
                    subtitle: "GulpJS Failure",
                    message: "<%= error.message %>",
                    sound: "Beep"
                })(err);
                this.emit('end');
            } 
        }))
        .pipe(jshint())
        .pipe(jshint.reporter("jshint-stylish"))
        .pipe(jshint.reporter("fail"))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.paths.dest + 'js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.dest + 'js'))
        .pipe(plumber.stop())
        .pipe(browserSync.reload({ stream: true }));
});
gulp.task('serve', function() {
    browserSync.init(config.serve);
    gulp.watch(config.paths.dest + '*.html').on('change', browserSync.reload);
    gulp.watch(config.paths.src.less + '**/*.less', ['less']);
    gulp.watch(config.paths.src.scss + '**/*.scss', ['sass']);
    gulp.watch(config.paths.src.scripts + '*.js', ['script']);
});
gulp.task('default', ['serve']);