const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const del = require('del');
const filter = require('gulp-filter');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const fileinclude = require('gulp-file-include');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');

const path = {
    src: {
        root: 'src'
        ,html: 'src\/html\/**\/*.html'
        ,style: 'src\/scss\/**\/*.scss'
        ,image: 'src\/image\/single\/**'
        ,js: 'src\/js\/**\/*.js'
    },
    build: {
        root: 'build'
        ,html: 'build\/html'
        ,style: 'build\/css'
        ,image: 'build\/image\/single\/'
        ,js: 'build\/js\/'
    }
};

gulp.task('clean', () =>
    del([path.build.root]).then(paths => {
        console.log('Deleted Target =>\n', paths.join('\n') + '\\');
    })
);

gulp.task('copy:image', () =>
    gulp.src(path.src.image)
        .pipe(gulp.dest(path.build.image))
);

gulp.task('copy:js', () =>
// https://github.com/craigjennings11/gulp-uglifyjs
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.build.js))
);

gulp.task('fileinclude', function(){
    gulp.src(path.src.html)
    .pipe(fileinclude({
        prefix: '@@'
        ,basepath: 'src\/html\/include\/'
        ,context: {
            'image_single': '/image/single'
            ,'image_sprite': '/image/sprite'
            ,'js': '/js'
            ,'css': '/css'
            ,'html': '/html'
        }
    }))
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.reload({ stream : true }))
});

gulp.task('sass', () =>
    sass(path.src.style,{
        sourcemap: true
    })
    .on('error', sass.logError)
    .pipe(sourcemaps.write('maps', {
        includeContent: false,
        sourceRoot: 'src\/scss'
    }))
    .pipe(gulp.dest(path.build.style))
    .pipe(browserSync.reload({ stream : true }))
);

gulp.task('watch', function () {
    watch(path.src.html, batch(function (events, done) {
        gulp.start('fileinclude', done);
    }));
    watch(path.src.style, batch(function (events, done) {
        gulp.start('sass', done);
    }));
    watch(path.src.image, batch(function (events, done) {
        gulp.start('copy:image', done);
    }));
    watch(path.src.js, batch(function (events, done) {
        gulp.start('copy:js', done);
    }));
});

gulp.task('browserSync', ['fileinclude', 'sass', 'copy:image', 'copy:js'], function () {
    return browserSync.init({
        port : 8888,
        server: {
            baseDir: 'build/',
            index: 'build/html/',
            directory: true
        }
    });
});

gulp.task('build', ['clean'], function(){
    gulp.start(['browserSync', 'watch'])
});

/**
 * TODO
 * minify, merge, uglify, html/scss/js lint, image sprite task
 */

 //   .pipe(watch('src/html/**/*.html'))
 // .pipe(watch('src/scss/**/*.scss'))
 // rm -rf node_modules
// rm package-lock.json yarn.lock
// npm cache clear --force
// npm install
