// Require Gulp & Plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
//var gp_rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var gp_concat = require('gulp-concat');
var gp_uglify = require('gulp-uglify');


// ** enter prefix for all project files **
var projectPrefix = 'portfolio';
//

// Process SASS
// Auto-Prefix and Generate CSS
// For minified CSS remove 'outputStyle'
var buildstyles = './assets/build/sass/**/*.scss';
var productionstyles = './assets/production/css';
var sassOptions = {
	outputStyle: 'compressed',
	errLogToConsole: true
};
var autoprefixerOptions = {
  browsers: ['last 3 versions', '> 2%', 'Firefox ESR']
};

gulp.task('sass-minify', function () {
	return gulp
	    .src(buildstyles)
	    .pipe(sass(sassOptions).on('error', sass.logError))
	    .pipe(autoprefixer(autoprefixerOptions))
	    //.pipe(gp_rename( projectPrefix + '-main.min.css'))
	    .pipe(gulp.dest(productionstyles));
});

// Concatenate & Uglify JS
// General js libraries First
var buildlib = './assets/build/js/libraries/*.js';
var buildlibroot = './assets/build/js/libraries/compiled';
var productionjs = './assets/production/js';

gulp.task('uglify-lib', function(){
	return gulp
	    .src(buildlib)
        .pipe(gp_concat( projectPrefix + '-libraries.js'))
        .pipe(gulp.dest(buildlibroot))
        //.pipe(gp_rename( projectPrefix + '-libraries.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest(productionjs));
});

// Then IE specifc js
var buildielib = './assets/build/js/ie-libraries/*.js';
var buildielibroot = './assets/build/js/ie-libraries/compiled';

gulp.task('uglify-ie-lib', function(){
	return gulp
	    .src(buildielib)
        .pipe(gp_concat( projectPrefix + '-ie-libraries.js'))
        .pipe(gulp.dest(buildielibroot))
        //.pipe(gp_rename( projectPrefix + '-ie-libraries.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest(productionjs));
});

// Then the shit we wrote
var buildmain = './assets/build/js/authored/*.js';
var buildmainroot = './assets/build/js/authored/compiled';

gulp.task('uglify-main', function(){
	return gulp
	    .src(buildmain)
        .pipe(gp_concat( projectPrefix + '-main.js'))
        .pipe(gulp.dest(buildmainroot))
        //.pipe(gp_rename( projectPrefix + '-main.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest(productionjs));
});

// Optimize images
var buildimg = ['./assets/build/images/*'];
var productionimg = './assets/production/images';
gulp.task('image-optimize', function(cb) {
    gulp.src(buildimg)
    .pipe(imagemin())
    .pipe(gulp.dest(productionimg))
});

// Watch for changes
gulp.task('watch', function() {
  gulp.watch(buildstyles, ['sass-minify']);
  gulp.watch(buildlib, ['uglify-lib']);
  gulp.watch(buildielib, ['uglify-ie-lib']);
  gulp.watch(buildmain, ['uglify-main']);
  gulp.watch(buildimg, ['image-optimize']);
});

// Default 'gulp' task
gulp.task('default', ['sass-minify', 'uglify-lib', 'uglify-ie-lib', 'uglify-main', 'image-optimize', 'watch']);
