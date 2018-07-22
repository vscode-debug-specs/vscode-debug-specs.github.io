const path = require('path');

let exclude = [path.resolve(__dirname, "html")];
console.log(exclude);

module.exports = {
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "html", "js"),
		filename: "webpack.js",
	},
	resolve: {
		extensions: [".ts", ".js"]
	},
	module: {
		rules: [
			{ test: /\.ts$/, loader: "awesome-typescript-loader", exclude },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader", exclude }
		]
	},
	devServer: {
		contentBase: "html/"
	},
};
