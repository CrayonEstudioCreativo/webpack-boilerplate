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
      {
        test: /\.(png|jpg|svg)$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules")
        ],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000, // Convert images < 10k to base64 strings
              name: "images/[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules")
        ],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[hash].[ext]",
              limit: 10000
            }
          }
        ]
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
