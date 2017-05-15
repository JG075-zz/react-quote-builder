var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/quoteBuilder'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
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
  }
};
