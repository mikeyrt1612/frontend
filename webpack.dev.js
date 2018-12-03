const { HotModuleReplacementPlugin } = require('webpack')

const common = require('./webpack.common.js')

const config = {
  ...common,
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    ...common.module,
    rules: [
      ...common.module.rules,
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    ...common.plugins,
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 3000,
    publicPath: '/bundles/',
  },
}

module.exports = config
