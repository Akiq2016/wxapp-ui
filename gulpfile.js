const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const clean = require('gulp-clean');

const config = require('./scripts/config');
const BuildTask = require('./scripts/build');

function collectId() {
  console.log(process.cwd(), path.resolve(process.cwd(), './package.json'));
  const curPackagePath = path.resolve(process.cwd(), './package.json');
  const hasPackageJson = fs.existsSync(curPackagePath);
  return hasPackageJson ? require(curPackagePath).name : null;
}

const id = collectId();

if (!id || id === 'root') throw new Error('当前目录没有package.json');

// // build task instance
// // eslint-disable-next-line no-new
new BuildTask(id, config.entry);

// clean the generated folders and files
gulp.task(
  'clean',
  gulp.series(
    () =>
      gulp
        .src(config.distPath, { read: false, allowEmpty: true })
        .pipe(clean()),
    done => {
      if (config.isDev) {
        return gulp
          .src(config.demoDist, { read: false, allowEmpty: true })
          .pipe(clean());
      }

      return done();
    }
  )
);
// watch files and build
gulp.task('watch', gulp.series(`${id}-watch`));
// build for develop
gulp.task('dev', gulp.series(`${id}-dev`));
// build for publish
gulp.task('default', gulp.series(`${id}-default`));
