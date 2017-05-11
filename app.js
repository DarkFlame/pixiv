import Koa from 'koa'
import convert from 'koa-convert'
import error from 'koa-error'
import cors from 'koa-cors'
import koaBody from 'koa-body'
import logger from 'koa-logger'
import util from 'util'
import http from 'http'
import serve from 'koa-static'
import path from 'path'
const app = new Koa()
import historyApiFallback from './middleware/historyApiFallback'
import {createBundleRenderer} from 'vue-server-renderer'
const isProd = process.env.NODE_ENV === 'production'


function createRenderer(bundle,template) {
    return createBundleRenderer(bundle,{
        template,
        cache: require('lru-cache')({
            max: 1000,
            maxAge: 1000 * 60 * 15
        }),
        runInNewContext: false
    })
}

if (isProd) {
    // 生产环境下直接读取构造渲染器
    // const bundle = require('../client/dist/vue-ssr-server-bundle.json')
    // const template = fs.readFileSync(resolve('../client/dist/front.html'), 'utf-8')
    // renderer = createRenderer(bundle, template)
    // app.use(serve('./client/dist'));
} else {
    // 开发环境下使用hot/dev middleware拿到bundle与template
    require('./build/setup-dev-server')(app,(bundle,template) => {
        renderer = createRenderer(bundle,template)
    })
}

app.use(serve(path.resolve(__dirname,'client')))


//输出错误日志 开发环境使用
if (!isProd) {
    app.use(convert(logger()))
    app.use(convert(error()))
} else {
    app.on('error',function (err,ctx) {
        ctx.status = err.status || 500
        ctx.body = err.message
    })
}

const router = require('koa-router')()
const routerInfo = require('koa-router')()
let renderer

// 提示webpack还在工作
routerInfo.get('*',async (ctx,next) => {
    ctx.type = 'html'
    console.log('routinfo')
    if (!renderer) {
        ctx.type = 'html'
        return ctx.body = 'waiting for compilation... refresh in a moment.'
    }
    return next()
})

app.use(routerInfo.routes())

app.use(convert(historyApiFallback({
    verbose: true,
    index: '/index.html',
    rewrites: [
        {
            from: /^\/index/,
            to: '/index.html'
        }
    ],
    path: /^\/index/
})))


// 流式渲染
router.get('*',async (ctx,next) => {
    let res = ctx.res
    let req = ctx.req
    console.log('req url ',req.url)
    // 由于koa内有处理type，此处需要额外修改content-type
    ctx.type = 'html'
    const s = Date.now()
    let context = {url: req.url}

    function renderToStringPromise() {
        return new Promise((resolve,reject) => {
            renderer.renderToString(context,(err,html) => {
                if (err) {
                    console.log(err)
                }
                if (!isProd) {
                    console.log(`whole request: ${Date.now() - s}ms`)
                }
                console.log('html',html)
                resolve(html)
            })
        })
    }

    ctx.body = await renderToStringPromise()
})

app
    .use(router.routes())
    .use(router.allowedMethods())

export default app