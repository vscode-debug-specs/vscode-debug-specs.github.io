module.exports = {
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".js"]
	},
	module: {
		rules: [
			{ test: /\.ts$/, loader: "awesome-typescript-loader" },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	},
	devServer: {
		contentBase: "html/"
	}
};