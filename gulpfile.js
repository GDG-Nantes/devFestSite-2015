"use strict";
// Include gulp
var gulp = require("gulp");

var rev = require("gulp-rev");
var inject = require("gulp-inject");
var usemin = require("gulp-usemin");
var templateCache = require("gulp-angular-templatecache");
var minifyHtml = require("gulp-minify-html");
var del = require("del");

gulp.task("ngTemplates", ["clean"], function () {
  gulp.src("partials/*.html")
    .pipe(templateCache("ngTemplates.js", {module: "devfest2015"}))
    .pipe(gulp.dest("js"));
});

gulp.task("clean", function () {
  del([
    ".tmp",
    "dist"
  ]);
});

gulp.task("copy", ["clean", "ngTemplates"], function () {
  gulp.src(["index.html", "app.yaml", "partials/**", "team/**", "speakers/**", "schedule/**", "cod/**", "logistics/**", "js/**", "img/**", "css/**"], { "base" : "." })
    .pipe(gulp.dest("dist"));
});

gulp.task("usemin", ["clean", "copy", "ngTemplates"], function () {
  return gulp.src("dist/index.html")
    .pipe(inject(gulp.src(["js/ngTemplates.js"], {cwd: "dist", read: false, relative: true})))// add templates.js in index.html
    .pipe(usemin({
      css: [
        rev()
      ],
      html: [
        minifyHtml({empty: true})
      ],
      js: [
        rev()
      ]
    }))
    .pipe(gulp.dest("dist"));
});

/* Default task */
gulp.task("default", ["usemin"]);