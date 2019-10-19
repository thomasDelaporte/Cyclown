const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {

    return {
        target: 'web',

        context: Path.resolve(__dirname),

        entry: './source/index.js',

        output: {
            filename: 'ui.min.js',
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
			contentBase: Path.resolve(__dirname, './web-gallery'),
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
	                use: [
						'file-loader'
					]
	            }
			]
        }
    }
}
