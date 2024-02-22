const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/:path*": {
        target: "https://openapi.naver.com",
        changeOrigin: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "X-Naver-Client-Id": "2Rql9F4A4qbEI2DhUe2i",
          "X-Naver-Client-Secret": "QGlM99Zhql",
        },
      },
    },
  },
});
