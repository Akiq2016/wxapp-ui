const gulp = require('gulp');
const del = require('del');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('../tsconfig.json');

gulp.task('clean:dist', done => del(['dist']));

gulp.task('build:js', done =>
  gulp
    .src(['src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('dist'))
);

gulp.task('build:ts', done => {
  const tsRes = gulp.src(['src/**/*.ts']).pipe(tsProject());

  return tsRes.js.pipe(gulp.dest('dist'));
});

gulp.task('build:wxss', done =>
  gulp
    .src('src/**/*.wxss')
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('dist'))
);

gulp.task('build:copy', done =>
  gulp.src(['src/**/*.!(js|ts|wxss)']).pipe(gulp.dest('dist'))
);

gulp.task(
  'default',
  gulp.series('clean:dist', 'build:copy', 'build:ts', 'build:js', 'build:wxss')
);
