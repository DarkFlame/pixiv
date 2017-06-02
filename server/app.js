import Koa from 'koa'
import convert from 'koa-convert'
import error from 'koa-error'
import cors from 'koa-cors'
import config from './config'
import clientConfig from '../config'
import router from './router'
import koaBody from 'koa-body'
import logger from 'koa-logger'
import util from 'util'
import http from 'http'
import serve from 'koa-static'
import path from 'path'

const app = new Koa()

/**
 * body解析
 */
app.use(convert(koaBody({
  formidable: {
    uploadDir: config.uploadDir
  },
  multipart: true
})))
/**
 *跨域支持
 */
app.use(convert(cors({
  origin: function (req) {
    let origin = req.header.origin
    if (origin && config.allowOrigins.indexOf(origin) != -1) {
      return origin
    }
    return config.allowOrigins[0]
  },
  credentials: true,
  headers: ["X-Token","Content-Type"]
})))

//禁止缓存
if (config.env === 'development') {
  app.use(function (ctx,next) {
    ctx.set('Cache-Control','no-cache, no-store, must-revalidate') // HTTP 1.1.
    ctx.set('Pragma','no-cache') // HTTP 1.0.
    ctx.set('Expires','0') // Proxies.
    return next()
  })
}

//输出错误日志 开发环境使用
if (config.env == 'development') {
  app.use(convert(logger()))
  app.use(convert(error()))
} else {
  app.on('error',function (err,ctx) {
    ctx.status = err.status || 500
    ctx.body = err.message
  })
}

router(app)
/**
 * 把webpack build好的文件设置为koa的静态文件目录 实现生产环境下的前后端端口一致
 */

app.use(serve(clientConfig.build.assetsRoot))

module.exports = function createServerApp(){
  console.log(config)
  return http.createServer(app.callback()).listen(config.port, function(){
    console.info('listen on', config.port)
  })
}
