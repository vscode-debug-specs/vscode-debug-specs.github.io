const path = require('path');

let exclude = [path.resolve(__dirname, "html")];

module.exports = {
	mode: "development",
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "awesome-typescript-loader",
				exclude
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
				exclude
			}
		]
	},
	devServer: {
		contentBase: "html/"
	},
};
