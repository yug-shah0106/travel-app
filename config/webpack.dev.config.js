// webpack.dev.config.js
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.config.js");

const devConfig = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ]
  },
  devServer: {
    port: 8888,
    publicPath: "/",
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});

module.exports = devConfig;