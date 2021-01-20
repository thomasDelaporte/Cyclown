const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, args) => {

    return {
        
        context: path.resolve(__dirname),

        entry: './src/index.ts',

        output: {
            path: path.resolve(__dirname, './build'),
            filename: './ui.min.js',
        },

        resolve: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.ejs'  
            })
        ],
        
        module: {
            rules: [
				{
                    test: /\.([jt]s|[jt]sx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
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
                    use: [
                        {
                            loader: 'url-loader',
                            options: { 
                                limit: 8000,
                                name: 'web-gallery/[hash].[ext]'
                            } 
                        }
                    ]
                },
			]
        }
    }
}