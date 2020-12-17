const path = require("path");

module.exports = {
	watch: true,
	target: "node",
	devServer: {
		hot: true,
	},
	mode: "development",
	entry: path.resolve(__dirname, "src", "server", "server.ts"),
	output: {
		path: path.resolve(__dirname, "dist", "server"),
		filename: "serverBundle.js",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				exclude: path.resolve(__dirname, "node_modules"),
			},
		],
	},
};
