var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
PROD = JSON.parse(process.env.PROD_ENV || '0');
var PATHS = '../fonts/';
const mainDir = path.resolve(__dirname);
const srcDir = path.resolve(mainDir, 'src');
const entryFile = path.resolve(__dirname, 'src', 'index.js');
// const cssDir = path.resolve(__dirname, 'css');
const distDir = path.resolve(__dirname, 'dist');
module.exports = {
    mode: 'development',
    entry: entryFile,
    devtool: 'source-map',
    output: {
        path: distDir,
        filename: PROD ? 'bundle.min.js' : 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: srcDir,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
            { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
            { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
            { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
            { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
            },
        ]
    },

    plugins: [
        // config.optimization.minimize
        // new webpack.optimize.UglifyJsPlugin({
        //     minimize: true
        // }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin()
    ],
    // PROD ? [
    //     new webpack.optimize.UglifyJsPlugin({
    //         minimize: true
    //     }),
    //     new webpack.ProvidePlugin({
    //         $: "jquery",
    //         jQuery: "jquery"
    //     })
    // ] : [
    //     new webpack.ProvidePlugin({
    //         $: "jquery",
    //         jQuery: "jquery"
    //     })
    // ],
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
      }
};
