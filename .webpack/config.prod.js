const { merge } = require('webpack-merge')

const devConfig = require('./config.dev')

module.exports = merge(devConfig, {
  mode: 'production',

  devtool: false,
})
