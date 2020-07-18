const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const del = require('del')
const htmlmin = require('gulp-htmlmin')
const webserver = require('gulp-webserver')
const filInclude = require('gulp-file-include')
//打包方法 
const cssHandler = ()=>{
    return gulp
               .src('./src/css/*.css')
               .pipe(cssmin())
               .pipe(autoprefixer({
                   browsers:['last 2 versions']
               }))
               .pipe(gulp.dest('./dist/css'))
}

//此处打包的是第三方插件
const jsHandler = ()=>{
    return gulp
               .src('./src/js/**')
               .pipe(gulp.dest('./dist/js'))
}


//此处打包的是js
const jqueryHandler = ()=>{
    return gulp
            .src('./src/jquery/**')
            .pipe(gulp.dest('./dist/jquery'))
}

const imgHandler = ()=>{
    return gulp
               .src('./src/image/**')
               .pipe(gulp.dest('./dist/image'))
}
const iconHandler = ()=>{
  return gulp
             .src('./src/iconfont/**')
             .pipe(gulp.dest('./dist/iconfont'))
}
const htmlHandler = ()=>{
    return gulp    
               .src('./src/views/*.html')
               .pipe(filInclude({ // 导入指定的 html 片段
                prefix: '@-@',
                basepath: './src/views'
              }))
              .pipe(filInclude({ // 导入指定的 html 片段
                prefix: 'QaQ',
                basepath: './src/views'
              }))
               .pipe(htmlmin({
                   removeAttributeQuotes:true,
                   removeScriptTypeAttributes:true,
                   removeStyleLinkTypeAttributes:true,
                   minifyCSS:true,
                   minifyJS:true,
                   collapseBooleanAttributes:true,
                   collapseWhitespace:true,
               }))
               .pipe(gulp.dest('./dist/views'))
}

const delHandler = ()=>{
    return del(['./dist'])
}

const browserHandler = ()=>{
    return gulp
              .src('./dist')
              .pipe(webserver({
                  host:'localhost',
                  port:8080,
                  open:'views/index.html',
                  livereload: true,
                  proxies:[
                      {
                        source:'/pj' ,
                        target:'http://localhost/VIPShop/src/server/login.php' 
                      },
                      {
                        source:'/dq' ,
                        target:'http://localhost/VIPShop/src/server/register.php' 
                      }
                     ]
                //https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=32097,1446,31325,32140,31253,32046,32230,32296,26350,22159&wd=aa&req=2&csor=2&pwd=a&cb=jQuery110204176920671015534_1594554666327&_=1594554666330
              }))
}

const watchHandler = () => {
  gulp.watch('./src/css/*.css', cssHandler)
  gulp.watch('./src/js/*.js', jsHandler)
  gulp.watch('./src/views/*.html', htmlHandler)
  gulp.watch('./src/components/*.html', htmlHandler)
  gulp.watch('./src/jquery/**',jqueryHandler)
  gulp.watch('./src/image/**',imgHandler)
}


module.exports.default=gulp.series(
    delHandler,
    gulp.parallel(cssHandler,jsHandler,htmlHandler,jqueryHandler,imgHandler,iconHandler),
    browserHandler,
    watchHandler
)