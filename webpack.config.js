var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var autoprefixer = require("autoprefixer");
var ExtractTextPlugin = require( "extract-text-webpack-plugin");

var extractCSS = new ExtractTextPlugin({
  filename: "css/[name].bundle.css"
});

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
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "src"),
        use: extractCSS.extract({
          use: [
            "css-loader",
            "sass-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  autoprefixer({
                    browsers: ["last 3 versions"]
                  })
                ]
              }
            }
          ]
        })
      },
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      hash: true
    }),
    new CleanWebpackPlugin(["public"]),
    extractCSS,
  ]
};
