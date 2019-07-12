module.exports = {
  publicPath: '/',
  outputDir: "dist", //构建输出目录
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    open: true,
    // host: "localhost",
    port: 9721,
    https: false,
    hotOnly: false
  }
};
