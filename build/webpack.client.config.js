const { resolve, join } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeModulesPath = resolve(__dirname, '../../node_modules')
const CLIENT_FOLDER = resolve(__dirname, '../')
const SERVER_FOLDER = resolve(__dirname, '../../server')
const productionEnv = process.env.NODE_ENV === 'production' ? true : false
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')

let config = merge(base, {
    target: 'web', // <=== can be om
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 开启全局的模块热替换(HMR)

        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息,

        new HtmlWebpackPlugin({
            filename: 'front.html',
            template: CLIENT_FOLDER + '/client/index.html',
            //inject: 'body',
            //inject: false,
            chunks: productionEnv ? ['modules/manifest_front', 'modules/vendor_front', 'modules/front'] : ['modules/front','vendor'],
            minify: { // 压缩的方式
                //removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
            //chunksSortMode: 'dependency'
        }),
        // 配置提取出的样式文件
        new ExtractTextPlugin('css/[name].[contenthash].css'),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"client"'
        }),
    ]
})
config.entry['modules/front'].unshift('webpack-hot-middleware/client?reload=true')
console.log(config)
module.exports = config