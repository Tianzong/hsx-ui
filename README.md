# hsy-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 目录结构

    |-- undefined
        |-- babel.config.js
        |-- package-lock.json
        |-- package.json
        |-- README.md
        |-- vue.config.js
        |-- examples                // 测试目录
        |   |-- App.vue
        |   |-- main.js
        |   |-- assets
        |   |   |-- logo.png
        |   |-- components
        |   |   |-- HelloWorld.vue
        |   |-- views
        |-- lib                    // 静态资源目录
        |   |-- default            // 默认主题
        |       |-- base.scss      
        |       |-- button.scss    
        |       |-- icon.scss     
        |       |-- index.scss     // 样式文件入口
        |       |-- common         // 变量， 动画
        |       |   |-- var.css
        |       |   |-- var.css.map
        |       |   |-- var.scss
        |       |-- fonts
        |       |   |-- element-icons.ttf
        |       |   |-- element-icons.woff
        |       |-- mixins         // sass混合函数
        |           |-- config.scss// css的一些配置字符
        |           |-- mixins.scss
        |-- packages               // 组件库
        |   |-- index.js           // 组件库入口
        |   |-- button
        |   |   |-- index.js       // 组件入口
        |   |   |-- src
        |   |       |-- button.vue
        |   |-- col
        |   |   |-- index.js
        |   |   |-- src
        |   |       |-- col.vue
        |   |-- row
        |   |   |-- index.js
        |   |   |-- src
        |   |       |-- row.vue
        |   |-- test
        |       |-- index.js
        |       |-- src
        |           |-- Test.vue
        |-- public
            |-- favicon.ico
            |-- index.html