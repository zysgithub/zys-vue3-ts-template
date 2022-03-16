const resolve = require('path').resolve

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '#': resolve(__dirname, 'types/')
      }
    }
  }
}
