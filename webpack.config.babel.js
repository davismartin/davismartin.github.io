const path = require('path')

module.exports = {
  context: __dirname,
  entry:'./react/js/ClientApp.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname,'/react/build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js','.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  }
}
