"use strict";
// Include gulp
var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps")
var path = require("path");
var browserSync = require("browser-sync").create();
var less = require("gulp-less");
var reload = browserSync.reload;

var rev = require("gulp-rev");
var inject = require("gulp-inject");
var usemin = require("gulp-usemin");
var templateCache = require("gulp-angular-templatecache");
var minifyHtml = require("gulp-minify-html");
var del = require("del");

gulp.task("ngTemplates", ["clean"], function () {
  return gulp.src("./partials*/**.html")
    .pipe(templateCache("ngTemplates.js", {module: "devfest2015", root: "/"}))
    .pipe(rev())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("clean", function () {
  return del.sync([
    ".tmp",
    "dist/**"
  ]);
});

gulp.task("copy", ["clean", "ngTemplates", "less"], function () {
  return gulp.src(["index.html", "app.yaml", "robots.txt", "sitemap.xml", "team/**", "speakers/**", "schedule/**", "cod/**", "logistics/**", "js/**", "img/**", "css/**", "custo/**"], { "base" : "." })
    .pipe(gulp.dest("dist"));
});

gulp.task("rev", ["clean", "copy", "ngTemplates"], function () {
  process.chdir(path.join(__dirname, "dist"));
  return gulp.src("./**/index.html")
    .pipe(inject(gulp.src(["./js/ngTemplates-*.js"], {read: false, relative: true})))// add ngTemplates.js in index.html
    /*.pipe(usemin({
      css: [
        rev()
      ],
      html: [
        minifyHtml({empty: true})
      ],
      js: [
        rev()
      ]
    }))*/
    .pipe(gulp.dest("."));
});

gulp.task("cleanAfter", ["rev"], function () {
  /*return del.sync([
    "js/default.js",
    "js/scripts.min.js",
    "js/typed.min.js",
    "js/ngTemplates**.js",
    "css/main.css"
  ]);*/
});

gulp.task('serve',  ['less'], function(){
  browserSync.init({
    server:'./'
  });
  gulp.watch("less/**/*.less", ['less']);
  gulp.watch("./**/*.html").on('change', reload);
  gulp.watch("./js/*.js").on('change', reload);
});

gulp.task('less',function(){
  return gulp.src('less/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./custo'))
    .pipe(reload({stream:true}));
});

/* Default task */
gulp.task("default", ["cleanAfter"]);