const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: './src/webauth-helpers.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },
  output: {
    filename: 'webauth-helpers.min.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: 'WebAuthHelpers',
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  }
};
