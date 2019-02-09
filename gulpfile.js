const { task, src, dest, series } = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const clean = require('gulp-clean')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')

task(
    'clean', 
    () => src('./dist', { read: false, allowEmpty: true })
        .pipe(clean())
)

task(
    'minify-js', 
    () => src('./src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('./dist/'))
)

task(
    'minify-css', 
    () => src('./src/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(dest('./dist/'))
)
