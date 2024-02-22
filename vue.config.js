const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api/:path*": {
        target: "https://openapi.naver.com",
        changeOrigin: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    },
  },
});
