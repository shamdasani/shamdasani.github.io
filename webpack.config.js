const path = require('path')

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: 'src/',
    historyApiFallback: true
  }
}
