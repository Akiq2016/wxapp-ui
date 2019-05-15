const path = require('path');
const gulp = require('gulp');
const del = require('del');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('../tsconfig.json');

sass.compiler = require('sass');

gulp.task('clean:dist', done => del(['dist']));

gulp.task('build:js', done =>
  gulp
    .src(['src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('dist'))
);

gulp.task('build:ts', done => {
  const tsRes = gulp.src(['../wxAPI.d.ts', 'src/**/*.ts']).pipe(tsProject());
  return tsRes.js.pipe(gulp.dest('dist'));
});

gulp.task('build:wxss', done =>
  gulp
    .src('src/**/*.wxss')
    .pipe(
      sass({ includePaths: path.join(process.cwd(), '..', 'styles') }).on(
        'error',
        sass.logError
      )
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(rename({ extname: '.wxss' }))
    .pipe(gulp.dest('dist'))
);

gulp.task('build:copy', done =>
  gulp.src(['src/**/*.!(js|ts|wxss)']).pipe(gulp.dest('dist'))
);

gulp.task(
  'default',
  gulp.series('clean:dist', 'build:copy', 'build:ts', 'build:js', 'build:wxss')
);
