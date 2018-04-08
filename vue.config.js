const fs = require("fs");

module.exports = {
  baseUrl: "/aui",
  productionSourceMap: false,
  css: {
    sourceMap: false,
    loaderOptions: {
      less: {}
    }
  }
};