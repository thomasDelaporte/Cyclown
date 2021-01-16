const path = require('path');
const { merge } = require('webpack-merge');
const defaultConfiguration = require('./webpack.config');

module.exports = (env, args) =>  merge(defaultConfiguration(env, args), {

    mode: 'development',

    devtool: 'eval-cheap-source-map',

    devServer: {
        compress: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'public'),
        port: 8080
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
});