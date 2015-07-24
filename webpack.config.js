var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var path = require('path');
var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);

module.exports = {
  devtool: 'source-map',
  // devtool: 'eval',
  debug: true,
  cache: false,
  // our Development Server configs
  devServer: {
    inline: true,
    colors: true,
    historyApiFallback: true,
    contentBase: 'src/public',
    publicPath: '/__build__'
  },
  entry: {
    'app': [
      './src/app/index.module'
    ]
  },

  // Config for our build files
  output: {
    path: root('__build__'),
    filename: '[name].js',
    // filename: '[name].[hash].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
    // publicPath: 'http://mycdn.com/'
  },

  resolve: {
    root: __dirname,
    extensions: ['','.js','.json'],
    alias: {
      'app': 'src/app',
      'common': 'src/common',
      'components': 'src/app/components'
    }
  },

  node: {
    __filename: true
  },

  module: {
    preLoaders: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader'
      // }
    ],
    loaders: [
      // Support for *.json files.
      { test: /\.json$/,  loader: 'json' },

      // Support for CSS
      { test: /\.css$/,   loader: 'style!css' },

      // Support for sass files
      { test: /\.scss$/, loader: 'style!css!sass?' +
        'includePaths[]=' + (path.resolve(__dirname, './src/common/styles'))
      },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw' },

      // support for .jade as html
      { test: /\.jade$/,  loader: 'jade' },

      // support for .png files as inline base64
      { test: /\.png$/, loader: 'url-loader?limit=100000' },

      // support for .jpg files
      { test: /\.jpg$/, loader: 'file-loader' },

      // support for ES6 files
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          stage: 0
        }
      }
    ],
    noParse: [
      /rtts_assert\/src\/rtts_assert/
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    }),
    new webpack.DefinePlugin({
      'ENV': {
        'type': JSON.stringify(process.env.NODE_ENV),
        'debug': true
      }
    }),

    new ngAnnotatePlugin({
      add: true
    }),

    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: './src/index.html',
    //   filename: './src/public/index.html',
    //   // chunks: ['shared']
    // }),

    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_debugger: false
    //   }
    // beautify: false
    // }),

    // new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.BannerPlugin(getBanner())
  ],

  context: __dirname,
  stats: { colors: true, reasons: true }
};

function getBanner() {
  return '';
}

function root(args) {
  args = sliceArgs(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
function rootNode(args) {
  args = sliceArgs(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}

