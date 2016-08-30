const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const wiredep = require('wiredep').stream;

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('styles', () => {
  return gulp.src('src/wallet-ui.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({stream: true}));
});

//压缩css文件
gulp.task('cssmin', ()=>{
  return gulp.src('src/wallet-ui.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/styles'))
    .pipe($.cssnano())
    .pipe($.rename('wallet-ui.min.css'))
    .pipe(gulp.dest('dist/styles'))
})
gulp.task('clean', del.bind(null, ['dist']));

// 开发环境
// 1. css和js在dist中 修改了=>stream
// 2. images 和html在src中 修改=>reload
gulp.task('server', ['styles'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['src', 'dist']
    },
    startPath:'/examples/index.html'
  });

  gulp.watch([
    'src/**/*.html',
    'src/images/**/*'
  ]).on('change', reload);

  gulp.watch('src/**/*.scss', ['styles']);
  // gulp.watch('src/scripts/**/*.js', ['scripts']);
});
//复制字体文件到dist目录下
gulp.task('cp-font', ()=>{
  return gulp.src('src/fonts/**/*').pipe(gulp.dest('dist/styles/fonts'))
})
// 构建production包 显示gzip压缩之后的文件大小
gulp.task('build',['cp-font', 'cssmin'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true, showFiles: true}));
});
