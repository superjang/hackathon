const gulp = require('gulp');
const clean = require('gulp-clean');
// const filter = require('gulp-filter');

const include = require('gulp-replace-include');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', () =>
    gulp.src('build')
    .pipe(clean({force: true}))
);

gulp.task('html', function(){
  return gulp.src('src/html/**/*.html')
    .pipe(include({
        src: 'src/html/app/'
        ,include: ['src/html/include/']
        ,prefix: '@@'
        // ,global: {
        //     'smilepay': '장재원'
        // }
    }))
    // .pipe(filter(['!src/html/include/']))
    .pipe(gulp.dest('build/html'))
});

gulp.task('sass', () =>
    sass('src/scss/**/*.scss',{
        // sourcemap: true
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
