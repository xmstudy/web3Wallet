const { defineConfig } = require("@vue/cli-service");
const { VantResolver } = require("@vant/auto-import-resolver");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin(),
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
});

// const { VantResolver } = require("@vant/auto-import-resolver");
// const ComponentsPlugin = require("unplugin-vue-components/webpack");

// module.exports = {
//   configureWebpack: {
//     plugins: [
//       ComponentsPlugin({
//         resolvers: [VantResolver()],
//       }),
//     ],
//   },
// };
