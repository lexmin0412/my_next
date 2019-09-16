// next.config.js
const withLess = require('@zeit/next-less')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withLess({
  assetPrefix: isProd ? '/my_next' : '',
  publicRuntimeConfig: {
    linkPrefix: isProd ? '/my_next' : ''
  }
})