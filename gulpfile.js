/**
 * Created by admin on 2017/5/16.
 */
var gulp = require('gulp'),
    livereload = require('gulp-livereload');



gulp.task('watch', function() {
    // 建立即时刷新，服务器端口号
    livereload.listen("8080");
    gulp.watch('../**/*.*',function(file){
        livereload.changed(file.path);
    });
});
