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
var uglify = require("gulp-uglify");
var usemin = require("gulp-usemin");
var minifyCss = require('gulp-minify-css');
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

gulp.task("copy", ["clean", "ngTemplates", "less-prod"], function () {
  return gulp.src(["index.html", "app.yaml", "robots.txt", "sitemap.xml", "team/**", "speakers/**", "schedule/**", "cod/**", "logistics/**", "js/**", "img/**", "css/**", "custo/**","assets/**"], { "base" : "." })
    .pipe(gulp.dest("dist"));
});

gulp.task("inject", ["clean", "copy", "ngTemplates"], function () {
  process.chdir(path.join(__dirname, "dist"));
  //return gulp.src("./**/index.html")
  //  .pipe(gulp.dest("."));
});

gulp.task("rev_index", ["inject"], function () {
  process.chdir(path.join(__dirname, "dist"));
  return gulp.src("./index.html")
    .pipe(inject(gulp.src(["./js/ngTemplates-*.js"], {read: false, relative: true})))// add ngTemplates.js in index.html
    .pipe(usemin({
      css: [
        minifyCss(),
        rev()
      ],
      html: [
        minifyHtml({empty: true})
      ],
      jsdefault: [
        uglify(),
        rev()
      ],
      jsscripts: [
        uglify(),
        rev()
      ]
    }))
    .pipe(gulp.dest("."));
});

gulp.task("rev_team", ["rev_index"], function () {
  return gulp.src("./team/index.html")
    .pipe(inject(gulp.src(["./js/ngTemplates-*.js"], {read: false, relative: true})))// add ngTemplates.js in index.html
    .pipe(usemin({
      css: [
        minifyCss(),
        rev()
      ],
      html: [
        minifyHtml({empty: true})
      ],
      jsdefault: [
        uglify(),
        rev()
      ],
      jsscripts: [
        uglify(),
        rev()
      ]
    }))
    .pipe(gulp.dest("./team"))
});

gulp.task("rev_speakers", ["rev_team"], function () {
  return gulp.src("./speakers/index.html")
    .pipe(inject(gulp.src(["./js/ngTemplates-*.js"], {read: false, relative: true})))// add ngTemplates.js in index.html
    .pipe(usemin({
      css: [
        minifyCss(),
        rev()
      ],
      html: [
        minifyHtml({empty: true})
      ],
      jsdefault: [
        uglify(),
        rev()
      ],
      jsscripts: [
        uglify(),
        rev()
      ]
    }))
    .pipe(gulp.dest("./speakers"))
});

gulp.task("rev_schedule", ["rev_speakers"], function () {
  return gulp.src("./schedule/index.html")
    .pipe(inject(gulp.src(["./js/ngTemplates-*.js"], {read: false, relative: true})))// add ngTemplates.js in index.html
    .pipe(usemin({
      css: [
        minifyCss(),
        rev()
      ],
      html: [
        minifyHtml({empty: true})
      ],
      jsdefault: [
        uglify(),
        rev()
      ],
      jsscripts: [
        uglify(),
        rev()
      ]
    }))
    .pipe(gulp.dest("./schedule"))
});

gulp.task("rev_logistics", ["rev_schedule"], function () {
  return gulp.src("./logistics/index.html")
    .pipe(inject(gulp.src(["./js/ngTemplates-*.js"], {read: false, relative: true})))// add ngTemplates.js in index.html
    .pipe(usemin({
      css: [
        minifyCss(),
        rev()
      ],
      html: [
        minifyHtml({empty: true})
      ],
      jsdefault: [
        uglify(),
        rev()
      ],
      jsscripts: [
        uglify(),
        rev()
      ]
    }))
    .pipe(gulp.dest("./logistics"))
});

gulp.task("rev_cod", ["rev_logistics"], function () {
  return gulp.src("./cod/index.html")
    .pipe(inject(gulp.src(["./js/ngTemplates-*.js"], {read: false, relative: true})))// add ngTemplates.js in index.html
    .pipe(usemin({
      css: [
        minifyCss(),
        rev()
      ],
      html: [
        minifyHtml({empty: true})
      ],
      jsdefault: [
        uglify(),
        rev()
      ],
      jsscripts: [
        uglify(),
        rev()
      ]
    }))
    .pipe(gulp.dest("./cod"))
});

gulp.task("cleanAfter", ["rev_cod"], function () {
  return del.sync([
    "custo/custo.css", "custo/main.css", "custo/loader.css",
    "js/default.js",
    "js/scripts.js"
  ]);
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

gulp.task('less-prod',function(){
  return gulp.src('less/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./custo'))
    .pipe(reload({stream:true}));
});

/* Default task */
gulp.task("default", ["cleanAfter"]);