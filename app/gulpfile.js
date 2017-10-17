const gulp = require('gulp');
const del = require('del');
const watch = require('gulp-watch');
const include = require('gulp-replace-include');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', () =>
    del(['build']).then(paths => {
        console.log('Delete Target:\n', paths.join('\n'));
    })
);

gulp.task('html', function(){
  return gulp.src('src/html/**/*.html')
    .pipe(include({
        src: 'src/html/app'
        ,include: ['src/html/include/']
        ,prefix: '@@'
        ,global: {
            'smilepay': '장재원'
        }
    }))
    .pipe(gulp.dest('build/html'))
});

gulp.task('sass', () =>
    sass('src/scss/**/*.scss',{
        sourcemap: true
    })
    .on('error', sass.logError)
    .pipe(sourcemaps.write('maps', {
        includeContent: false,
        sourceRoot: 'src/scss'
    }))
    .pipe(gulp.dest('build/css'))
);

gulp.task('build', ['html', 'sass']);
gulp.task('default', ['clean'], () =>
    gulp.start('build')
);
/**
 * TODO
 * watch, merge, uglify, minify, html/scss/js lint, image sprite task
 */

 //   .pipe(watch('src/html/**/*.html'))
 // .pipe(watch('src/scss/**/*.scss'))
 // rm -rf node_modules
// rm package-lock.json yarn.lock
// npm cache clear --force
// npm install
