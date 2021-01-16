const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssNanoPlugin = require('cssnano-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { merge } = require('webpack-merge');
const defaultConfiguration = require('./webpack.config');

module.exports = (env, args) => merge(defaultConfiguration(env, args), {

    mode: 'production',

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'ui.min.css'
        })
    ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },

    optimization: {
        minimizer: [
            new CssNanoPlugin()
        ]
    }

});