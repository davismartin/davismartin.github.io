const path = require('path')

module.exports = {
  context: path.join(__dirname, '/react/'),
  entry: './js/ClientApp.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/react/build/'),
    filename: 'bundle.js'
  },
  devServer:{
    publicPath:  path.join(__dirname, '/react/build/'),
    contentBase: path.join(__dirname, '/react/'),
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
