const { task, src, dest, series } = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const clean = require('gulp-clean')

task('clean', () => {
    return src('./dist', { read: false, allowEmpty: true })
        .pipe(clean())
})

task('minify-js', () => {
    return src('./src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('./dist/'))
})

task('js', () => {
    return series([
        'clean',
        'minify-js'
    ])
})