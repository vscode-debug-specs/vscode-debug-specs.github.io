const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/ts/index_ts.tsx',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: './js/index_ts.js',
		path: path.resolve(__dirname, 'html')
	}
};