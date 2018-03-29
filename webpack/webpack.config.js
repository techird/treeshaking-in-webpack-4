const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    one: './entry-one.js', 
    two: './entry-two.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  resolve: {
    modules: [
      path.resolve('.'),
    ],
    extensions: ['.js'],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new Visualizer({
      filename: './statistics.html'
    }),
  ],
}