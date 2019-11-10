const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {

    return {
        target: 'web',

        context: path.resolve(__dirname),

        entry: './source/index.js',

        output: {
            path: path.resolve(__dirname, './public'),
            filename: './ui.min.js',
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './source/index.html',
                inject: false
            })
        ],
        

        devServer: {
            compress: true,
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, 'public'),
			port: 8083
		},
		
        module: {
            rules: [
				{
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
				},
				{
                    test: /\.scss$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
				{
                    test: /\.(woff(2)?|ttf|eot)$/,
                    exclude: /(node_modules|bower_components)/,
	                use: {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'url-loader'
                    }
                },
			]
        }
    }
}

/*,
                        options: {
                            outputPath: 'images'
                        }*/
