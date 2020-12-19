const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	watch: true,
	target: "web",
	devServer: {
		port: 8080,
		hot: true,
		open: true,
		proxy: {
			"/": {
				target: "http://localhost:8000/",
			},
		},
	},
	mode: "development",
	entry: path.resolve(__dirname, "src", "public", "index.ts"),
	output: {
		path: path.resolve(__dirname, "dist", "public"),
		filename: "bundle.js",
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
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "src", "public", "index.html"),
		}),
	],
};
