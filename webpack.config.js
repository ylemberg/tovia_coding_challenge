const path = require('path')
const webpack = require('webpack')
const DotenvPlugin = require('webpack-dotenv-plugin')

const SRC_DIR = path.resolve(__dirname, 'public/src')
const BUILD_DIR = path.resolve(__dirname, 'public/app/build')

const settings = {
  entry: {
    bundle: [
      "react-hot-loader/patch",
      "./public/src/index.js"
    ]
  },
  output: {
    filename: "[name].js",
    publicPath: "/",
    path: BUILD_DIR
  },
  resolve: {
    extensions: [".js", ".json", ".css"]
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ["es2015", { modules: false }],
            "stage-2",
            "react"
          ],
          plugins: [
            "transform-node-env-inline"
          ],
          env: {
            development: {
              plugins: ["react-hot-loader/babel"]
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader" // has separate config, see postcss.config.js nearby
        ]
      },
    ]
  },
  devServer: {
    contentBase: path.resolve("src/www"),
    publicPath: "http://localhost:8080/", // full URL is necessary for Hot Module Replacement if additional path will be added.
    quiet: false,
    hot: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new DotenvPlugin({
      sample: './.env.example',
      path: './.env'
    })
  ],
  watch: true
}

module.exports = settings