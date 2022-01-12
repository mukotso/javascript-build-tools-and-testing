//load gulp functions 
const { src, dest, watch } = require("gulp")
const sass = require('gulp-sass')(require('sass'));


function copy(cb) {
    src('routes/*.js')
        .pipe(dest('copies'));
   //call back function to mark its completion or failure
        cb();
}

function generateCSS(cb) {
    src('/sass/*.scss')
        .pipe(dest('public/stylesheets'));
    cb();
}

function watchFiles(cb) {
    watch('routes/*.js', copy);
    watch('sass/**.scss', generateCSS);
}

exports.watch = watchFiles;
exports.css = generateCSS;
exports.copy = copy;