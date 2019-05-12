const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	//mode: 'development',
	mode: 'production',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-webpack.js'
  },
 //  optimization: {
 //    minimizer: [new UglifyJsPlugin()],
 //  },
 //  module: {
 //    rules: [
 //        {
 //            test: /\.(js)$/,
 //            exclude: /(node_modules)/,
 //            use: {
 //                loader: 'babel-loader',
 //                options: {
 //                  presets: ['@babel/preset-env']
 //                }
 //            }
 //        }
 //    ]
	// }
};