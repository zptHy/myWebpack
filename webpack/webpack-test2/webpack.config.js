/**
 * Created by Administrator on 2017/8/24.
 */
const webpack = require('webpack');
module.exports = {
    devtool:'eval-source-map',//打包时候能生成source map方便调试
    entry:__dirname + "/app/main.js",//唯一文件入口
    output:{
        path:__dirname + "/public",//打包后文件存放位置
        filename:"shuchu.js"//打包之后输出的文件名称
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
            historyApiFallback: true,//不跳转
            inline: true//实时刷新
    },
    //下载完babel之后，经过下面的配置就能使用ES6以及JSX的语法
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        //内置插件如下
        new webpack.BannerPlugin('涛哥版权所有，翻版必究')
    ],
};