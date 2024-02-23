const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     "/api/:path*": {
  //       target: "https://openapi.naver.com/v1/:path*",
  //       changeOrigin: true,
  //       headers: {
  //         "X-Naver-Client-Id": "2Rql9F4A4qbEI2DhUe2i",
  //         "X-Naver-Client-Secret": "QGlM99Zhql",
  //       },
  //     },
  //   },
  // },
});
