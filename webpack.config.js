const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: { 
	main: './src/js/main.js', 
	prophylaxy: './src/js/prophylaxy.js', 
	about: './src/js/about.js',
	shedule: './src/js/shedule.js',
	writetous: './src/js/writetous.js',
	paidservices: './src/js/paidservices.js',
	corruption: './src/js/corruption.js',
	vacancy: './src/js/vacancy.js',
	contacts: './src/js/contacts.js',
	activities: './src/js/activities.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name]/[name].[chunkhash].js',
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
		use: [
         (isDev ? { loader: 'style-loader' } : { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } }),
         'css-loader', 
         'postcss-loader'
		]
      },
	  {
		test: /\.(eot|ttf|woff|woff2)$/,
		loader: 'file-loader?name=./vendor/[name].[ext]'
	  },
	  {
		test: /\.(png|jpg|gif|ico|svg)$/,
		use: [
			'file-loader?name=./images/[name].[ext]',
			{
				loader: 'image-webpack-loader',
				options: {}
			}
		]
	  }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ 
      filename: '[name]/[name].[contenthash].css',
    }),
	new OptimizeCssAssetsPlugin({
     assetNameRegExp: /\.css$/g,
     cssProcessor: require('cssnano'),
     cssProcessorPluginOptions: {
             preset: ['default'],
     },
     canPrint: true
	}),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/main.html',
      filename: 'index.html'
    }),
	new HtmlWebpackPlugin({
      inject: false,
      template: './src/prophylaxy.html',
      filename: './prophylaxy/index.html'
    }),
	new HtmlWebpackPlugin({
      inject: false,
      template: './src/about.html',
      filename: './about/index.html'
    }),
	new HtmlWebpackPlugin({
      inject: false,
      template: './src/shedule.html',
      filename: './shedule/index.html'
    }),
	new HtmlWebpackPlugin({
      inject: false,
      template: './src/writetous.html',
      filename: './writetous/index.html'
    }),
	new HtmlWebpackPlugin({
      inject: false,
      template: './src/paidservices.html',
      filename: './paidservices/index.html'
    }),
	new HtmlWebpackPlugin({
      inject: false,
      template: './src/corruption.html',
      filename: './corruption/index.html'
    }),
	new HtmlWebpackPlugin({
      inject: false,
      template: './src/vacancy.html',
      filename: './vacancy/index.html'
    }),
	new HtmlWebpackPlugin({
      inject: false,
      template: './src/contacts.html',
      filename: './contacts/index.html'
    }),
	new HtmlWebpackPlugin({
      inject: false,
      template: './src/activities.html',
      filename: './activities/index.html'
    }),
    new WebpackMd5Hash(),
	new webpack.DefinePlugin({
     'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	})
  ]
};