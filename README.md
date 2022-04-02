ES6  环境搭建：
1 安装 node 
2 初始化 node环境  npm init
3 安装配置 webpack 基础版
 3.1 安装 webpack webpack-cli    --registry=https://registry.npmmirror.com
 3.2 新建 webpack.dev.config.js 配置webpack
 3.3 修改 package.json 新建启动命令
4 安装配置 webpack 升级版
 4.1 安装 webpack-dev-server html-webpack-plugin 
5 安装babel
 5.1安装 @babel/core @babel/cli @babel/preset-env -D
 5.2新建 bable.config.json 配置babel
 5.3安装 @babel/polyfill -S
 5.4安装 babel-loader -D
 5.5修改 webpack.dev.config.js 加上rules支持es6
6 安装glob 
 6.1把SPA 变成 MPA


注意事项： 
1 --registry=https://registry.npmmirror.com
2 webpack-dev-server 4.0.0 后，配置项 devServer中的 contentBase已经不用了，换成了static下的directory
3 > babel7.8.0 配置文件为 babel.config.json, 反之babel.config.js
4 babel从babel7开始使用@babel作为冠名
5 @babel/core @babel/cli @babel/preset-env  使用 --save-dev
6 @babel/polyfill 使用 --save
7 npx 利用npm@5.2.0 所自带的 npm 包运行器将 ./node_modules/.bin/babel 命令缩短为 npx babel