const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config.js' );
const path = require( 'path' );
const postcssPresetEnv = require( 'postcss-preset-env' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const IgnoreEmitPlugin = require( 'ignore-emit-webpack-plugin' );
const tailwindcss = require('tailwindcss');

const production = process.env.NODE_ENV === '';

module.exports = {
	...defaultConfig,
	entry: {
		index: path.resolve( process.cwd(), 'src', 'index.js' ),
		blocks: path.resolve( process.cwd(), 'src', 'blocks.scss' ),
		editor: path.resolve(process.cwd(), 'src', 'editor.scss'),
		tailwind: path.resolve(process.cwd(), 'css', 'tailwind.css'),
		underscores: path.resolve( process.cwd(), 'css', 'underscores.css' ),
	},
	optimization: {
		...defaultConfig.optimization,
		splitChunks: {
			cacheGroups: {
				editor: {
					name: 'editor',
					test: /editor\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
				},
				blocks: {
					name: 'blocks',
					test: /blocks\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
				},
				tailwind: {
					name: 'tailwind',
					test: /tailwind\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
				},
				underscores: {
					name: 'underscores',
					test: /underscores\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
				},
				default: false,
			},
		},
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.(sc|sa|c)ss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: ! production,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: ! production,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								// tailwindcss('./css/tailwind.config.js'),
								tailwindcss('./css/tailwind.js'),
								require('autoprefixer'),
								postcssPresetEnv( {
									stage: 3,
									features: {
										'custom-media-queries': {
											preserve: false,
										},
										'custom-properties': {
											preserve: true,
										},
										'nesting-rules': true,
									},
								} ),
							],
						},
					},
				],
			},
		],
	},
	plugins: [
		...defaultConfig.plugins,
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} ),
		new IgnoreEmitPlugin( [ 'editor.js', 'style.js' ] ),
	],
};
