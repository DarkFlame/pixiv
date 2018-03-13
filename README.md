# Pixiv

> A Vue.js project search pixiv
一个使用vue2、koa2、mongodb搭建的对p站图片搜索展示
线上地址: http://123.206.184.165/
[github地址](https://github.com/sunyue1992/pixiv/)

## 快速开始
- 需要Node.js 8+版本
- 需要安装mongodb,并且运行mongodb服务,在`server/configs/config.development.js`(由config.default.js改名)中设置链接
- 如果自己开发，需要在config文件中配置自己p站的账号

## npm run

``` bash
# 安装依赖，可以使用yarn/npm
npm install

# 前端开发环境，带有HMR
npm run dev

# 后端开发环境
npm run startServer

# 生产环境打包前后端代码统一到dist下
npm run build

# 生产环境启动服务
npm run deploy


```
## 目录结构
```
  |--READMD.md //说明文件
  |--bin //项目启动脚本入口
  |--build //vue-cli生成
  |--config //vue-cli生成
  |--dist //执行npm run build生成 //前后端所有文件打包到一起
      |--bin //编译后项目启动脚本
      |--index.html //入口页
      |--static //静态资源
      |--server //后端文件
  |--server
      |--config //后端数据库配置文件
      |--models //数据库表结构
      |--modules //接口模块
      |--router //后端接口路由
      |--spider //后端爬虫
      |--util //工具方法
      app.js //后端入口页面
  |--src
      |--api //前端调用接口
      |--assets //静态资源
      |--components //单文件组件
      |--directive //单文件指令
      |--mixins //单文件mixins
      |--router //前端router路由配置
      |--store //vuex相关模块配置
  |--spec //集成测试



```
![](test.gif)
## 参考资料
1. [Vuejs项目的Webpack2构建优化](https://molunerfinn.com/Webpack-Optimize/)
2. [一个使用vue2、koa2、mongodb搭建的单用户博客](https://github.com/BUPT-HJM/vue-blog/)
3. [p站接口爬虫](https://github.com/akameco/pixiv-app-api/)
4. [vue-cli](https://github.com/vuejs/vue-cli/)


