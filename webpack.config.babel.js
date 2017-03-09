const path = require('path')

module.exports = {
  context: __dirname,
  entry: './react/js/ClientApp.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/react/build'),
    filename: 'bundle.js'
  },
  devServer:{
    publicPath: './react/public',
    contentBase: './react/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {enforce: 'pre',test: /\.js$/,loader:'eslint-loader',exclude:/node_modules/},
      {test: /\.json$/,loader: 'json-loader', exclude: /node_modules/},
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, use: ['style-loader', {loader: 'css-loader', options: {url: false}}]}
    ]
  }
}
