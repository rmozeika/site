var webpack = require('webpack');

PROD = JSON.parse(process.env.PROD_ENV || '0');
var PATHS = '../fonts/'
module.exports = {

    entry: './entry.js',
    devtool: 'source-map',
    output: {
        path: './dist',
        filename: PROD ? 'bundle.min.js' : 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: "style-loader!css-loader"
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

        ]
    },

    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ] : [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
