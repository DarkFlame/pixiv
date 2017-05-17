const devMiddleware = require('webpack-dev-middleware')

module.exports = (compiler,opts) => {
    const expressMiddleware = devMiddleware(compiler,opts)

    function devFn(ctx,next) {
        return new Promise((resolve,reject) => {
            expressMiddleware(ctx.req,{
                end: (content) => {
                    ctx.body = content;
                    resolve();
                },
                setHeader: (name,value) => {
                    ctx.set(name,value);
                },
            },reject);
        }).catch(next);
    }
    devFn.fileSystem = expressMiddleware.fileSystem
    return devFn
    // let nextFlag = false
    //
    // function nextFn() {
    //     nextFlag = true
    // }
    //
    // function devFn(ctx,next) {
    //     let res = expressMiddleware(ctx.req,{
    //         end: (content) => {
    //             ctx.body = content
    //         },
    //         setHeader: (name,value) => {
    //             ctx.headers[name] = value
    //         }
    //     },nextFn)
    //     if (nextFlag) {
    //         nextFlag = false
    //         return next()
    //     }
    // }
    //
    // devFn.fileSystem = expressMiddleware.fileSystem
    // return devFn
}
