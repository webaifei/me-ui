## 手机端UI





目标：
1. 统一基础样式 输出通用ui组件 √
2. 通用组件复用 √
3. 通过组合达到自由扩展 √
4. 提供在线选择模块打包

技术选型：
1. rem
2. flex
3. icons
3. sass

参考：
1. [weui](https://weui.io)
2. [Yo](http://blog.doyoe.com/Yo/demo/)
3. [bootstrap.css](http://www.bootcss.com/)


文件夹结构：
```
├── README.md             //说明文档
├── dist                  //产出文件目录
│   └── styles
├── gulpfile.js
├── package.json
├── src                   // 源代码目录
│   ├── css               // demo引用的css样式
│   ├── examples          // demo所在文件夹
│   ├── fonts             // icon 所需的字体文件
│   ├── mixin             // sass mixin
│   ├── note.md           // 注意点总结
│   ├── reset.scss        // reset
│   ├── scripts           // demo中引用的脚本
│   ├── variables         // 变量
│   ├── wallet-ui.scss    // sass 编译入口文件
│   └── widgets           // 组件的sass文件
└── test                  // 测试文件
    └── border.html

```

## 查看项目demo
```
  gulp server
```

## 构建目标文件

```
  gulp build
```
