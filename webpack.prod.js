const merge = require("webpack-merge")
const base = require("./webpack.dev")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = merge(base, {
  mode: "production",
  output: {
    filename: "bundle.min.js"
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // Use TerserPlugin as a minifier
        terserOptions: {
          compress: {    // Preserve directives
            directives: false,
          },
        },
      }),
    ],
  },
})
