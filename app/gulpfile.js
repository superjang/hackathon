const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const del = require('del');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const include = require('gulp-replace-include');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');

const path = {
    src: {
        root: 'src'
        ,html: 'src\/html\/**\/*.html'
        ,style: 'src\/scss\/**\/*.scss'
        ,image: 'src\/image\/independence\/**'
    },
    build: {
        root: 'build'
        ,html: 'build\/html'
        ,style: 'build\/css'
        ,image: 'build\/image\/independence\/'
    }
};

gulp.task('clean', () =>
    del([path.build.root]).then(paths => {
        console.log('Deleted Target =>\n', paths.join('\n') + '\\');
    })
);

gulp.task('copy', () =>
    gulp.src(path.src.image)
        .pipe(gulp.dest(path.build.image))
);

gulp.task('html', function(){
  return gulp.src(path.src.html)
    .pipe(include({
        src: 'src\/html\/app'
        ,include: ['src\/html\/include\/']
        ,prefix: '@@'
        ,global: {
            'smilepay': '장재원'
        }
    }))
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.reload({ stream : true }))
});

gulp.task('sass', () =>
    sass(path.src.style,{
        sourcemap: true
    })
    // .pipe('src\/scss\/**\/*.scss')
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
        gulp.start('html', done);
    }));
    watch(path.src.style, batch(function (events, done) {
        gulp.start('sass', done);
    }));
    watch(path.src.image, batch(function (events, done) {
        gulp.start('copy', done);
    }));
    // watch([
    //         path.src.html
    //         ,path.src.style
    //         ,path.src.image
    //     ], batch(function (events, done) {
    //     gulp.start('build', done);
    // }));
});

gulp.task('browserSync', ['html', 'sass', 'copy'], function () {
    return browserSync.init({
        port : 0518,
        server: {
            baseDir: 'build/',
            directory: true
        }
    });
});

gulp.task('build', ['clean'], function(){
    gulp.start(['browserSync', 'watch'])
});

/**
 * TODO
 * watch, merge, uglify, minify, html/scss/js lint, image sprite task
 * gulp-copy
 */

 //   .pipe(watch('src/html/**/*.html'))
 // .pipe(watch('src/scss/**/*.scss'))
 // rm -rf node_modules
// rm package-lock.json yarn.lock
// npm cache clear --force
// npm install
