const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	target: isProd ? 'browserslist' : 'web',
  entry: [
		'@babel/polyfill', 
		path.resolve(__dirname, './src/js/index.js')
	],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: isProd ? 'bundle.[contenthash].js' : 'bundle.js',
    clean: true,
  },
	resolve: {
		extensions: ['.js']
	},
	plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
		new CopyPlugin({
      patterns: [
				{ from: path.resolve(__dirname, './src/assets'), to: path.resolve(__dirname, './dist/assets') },
				{ from: path.resolve(__dirname, './src/layouts'), to: path.resolve(__dirname, './dist/layouts') }
			],
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? 'style.[contenthash].css' : 'style.css',
    })
  ],
	module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },
			{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
	optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
	devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
		watchContentBase: true,
    port: 9000,
		hot: true
  },
	devtool: isProd ? false : 'source-map'
};