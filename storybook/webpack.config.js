const path = require("path")
const openBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx?)$/,
    include: path.resolve(__dirname, '..'),
    loader: require.resolve('ts-loader'),
  })

  defaultConfig.resolve.extensions.push('.ts', '.tsx')

  defaultConfig.resolve.alias = {
    ...defaultConfig.resolve.alias,
    '@components': path.resolve(__dirname, "../src/components"),
    '@store': path.resolve(__dirname, "../src/store"),
    '@services': path.resolve(__dirname, "../src/services"),
    '@config': path.resolve(__dirname, "../src/config"),
    '@modals': path.resolve(__dirname, "../src/modals"),
    '@story': path.resolve(__dirname, "../src/storybook"),
  }

  defaultConfig.plugins.push(new openBrowserPlugin({ url: 'http://localhost:9001' }))

  return defaultConfig;
}
