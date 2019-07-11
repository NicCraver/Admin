module.exports = {
  publicPath:'./',
  outputDir: "dist", //构建输出目录
  lintOnSave: false,
  devServer: {
    open: true,
    // host: "localhost",
    port: 9721,
    https: false,
    hotOnly: false
    // proxy: {
    //   //配置跨域
    //   "/api": {
    //     target: "http://localhost:5000/api/",
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   },
    //   before(app) {
    //     app.get("/api/goods", (req, res) => {
    //       res.json();
    //     });
    //   }
    // }
  }
};
