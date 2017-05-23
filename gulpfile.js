var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var del = require('del');

//browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

// Watchers
gulp.task('watch', function() {
    gulp.watch(['src/*.html', 'src/views/*.html'], ['html']);
    gulp.watch(['src/js/*.js','src/views/js/*.js'], ['js']);
    gulp.watch(['src/css/*.css','src/views/css/*.css'], ['css']);
    gulp.watch(['src/img/*','src/views/img/*'], ['images']);
    gulp.watch(['src/*.html', 'src/views/*.html'], browserSync.reload);
    gulp.watch(['src/js/*.js','src/views/js/*.js'], browserSync.reload);
    gulp.watch(['src/css/*.css','src/views/css/*.css'], browserSync.reload);
    
});
//Optimization tasks
//---------------------

//minimizing html
gulp.task('html', ['html:src', 'html:views']);
gulp.task('html:src', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('html:views', function() {
  return gulp.src('src/views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/views'));
});

//minimizing css
gulp.task('css', ['css:src', 'css:views']);
gulp.task('css:src', function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('css:views', function() {
  return gulp.src('src/views/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/views/css'));
});

//minimizing javascripts
gulp.task('js', ['js:src', 'js:views']);
gulp.task('js:src', function() {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('js:views', function() {
    return gulp.src('src/views/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/views/js'));
});

//minimizing images
gulp.task('images', ['images:src', 'images:views']);
gulp.task('images:src', function(){
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});
gulp.task('images:views', function(){
    return gulp.src('src/views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/views/images'));
});

// Cleaning 
gulp.task('clean', function() {
  return del.sync('dist')
});

// default tasks
// ---------------
gulp.task('default', ['browser-sync', 'watch']);
gulp.task('build', ['clean','html','css','js','images']);