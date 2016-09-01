## ui框架遇到的问题总结

1. font-family
  字体基本上分为四大类： serif(衬线字体) sans-serif(无衬线字体) monospace（等款）fantasy(梦幻) cuisive（草体）
  一般网页排版中大多使用sans-serif 无衬线字体 常见的有： Helvetica Arial Lucida Family Verdana Tahoma

  * Arial， Helvetica 等是不支持中文的
  * 设置的字体不支持中文的话 就会使用系统默认的中文字体
  * 设置的字体不支持英文的话 就会使用系统默认的英文字体
  * 在设置字体的最后一般加上一个类型的字体 如：sans-serif 这样的话 即使我们前面声明的字体都没有也会找一个无衬线的字体 

  各大网站m站的设置：
  1. jd.com      font-family: PingFangSC-Regular,Helvetica,"Droid Sans",Arial,sans-serif;
  2. qq.com      font-family: Helvetica,STHeiti,Droid Sans Fallback;
  3. baidu.com   font-family: Arial, Helvetica, sans-serif;
  4. taobao.com  font-family: sans-serif; （牛逼）
  5. tmall.com   font-family: Helvetica,sans-serif; (一家的啊)
  6. touch.qunar.com font-family: arial; (这个有点淡定！)
  
2. 使用rem的时候，html上的font-size基础值在安卓上 不能小于12px
3. ios上的a:active 样式不显示  在body上添加ontouchstart

  ```
  <body ontouchstart>
  ...

  ```
4. 高清屏1px实现方法

  ```
  //使用伪类元素
  .bd{
    position:relative;
  }
  .bd:after{
    content:'';
    width:200%;
    height: 200%;
    position:absolute;
    top:0;left:0;
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform: scale(0.5);
    -webkit-transform: scale(0.5);

  }
  ```
5. img, a, button 等元素点击有阴影

  ```
  img, input, button,a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);//transparent
  }
  ```
6. icons 使用了阿里的[iconfont](http://www.iconfont.cn/)
7. flex布局

  ```
  .flex-container {
    display: -webkit-box; /* 09年规范 兼容uc */
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;        /* 最新规范 */
    /* 垂直居中 */
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }

  .flex-container .flex-item {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    display: block; /* 解决某些机型 设置flex属性的元素没有设置block的bug 已知uc有此问题 */
    width: 0;
    max-width: 100%;
  }
  ```
