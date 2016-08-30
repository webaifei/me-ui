## ui框架遇到的问题总结

1. font-family
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
