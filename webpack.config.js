const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
    // publicPath: "http://localhost:8080/", // Development Server
    // publicPath: "http://example.com/", // Production Server
  },
  watch: true,
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'sass-loader'
        ]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('css/mystyles.css'),
  ]
};