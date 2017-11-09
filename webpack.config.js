var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "dist/bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    open: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      hash: true
    }),
    new CleanWebpackPlugin(["public"])
  ]
};
