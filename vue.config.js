const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/nugbug/" : "/",
};
//npm run build
//npm install gh-pages --save-dev
//npm run deploy
