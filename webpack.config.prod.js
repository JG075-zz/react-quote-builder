var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/quoteBuilder'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel-loader?presets[]=es2015,presets[]=stage-2,presets[]=react,plugins[]=transform-runtime'],
      exclude: /(node_modules|bower_components)/,
      include: path.join(__dirname, 'client'),
    },
    // CSS
    {
      test: /\.scss$/,
      include: path.join(__dirname, 'client'),
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }
    ]
  }};
