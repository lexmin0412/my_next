// next.config.js
const withLess = require('@zeit/next-less')
module.exports = withLess({
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my_next/' : '',
})