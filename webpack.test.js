const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const prod = require('./webpack.prod.js')

const config = {
  ...prod,
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          // --- Required for TestCafe ReactSelectors ---
          keep_classnames: true,
          keep_fnames: true,
          // --------------------------------------------
        },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },
}

module.exports = config
