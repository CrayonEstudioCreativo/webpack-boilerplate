var path = require("path");

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'dist/bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    open: true,
  },
};
