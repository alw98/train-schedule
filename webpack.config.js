const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	target: 'electron-main',
	entry: {
		index: './src/index.tsx',
		main: './src/main.ts',
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.scss'],
		fallback: {
			'fs': false,
		},
		modules: [path.resolve('./src'), 'node_modules'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Train Schedule',
			chunks: ['index'],
		}),
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
};
