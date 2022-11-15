const path = require("path");

module.exports = {
  mode: "none",
  entry: "./app2.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader", // 바벨 로더를 추가한다.
      },
    ],
  },
  stats: "errors-only",
};
