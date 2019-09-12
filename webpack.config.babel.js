import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { CheckerPlugin } from "awesome-typescript-loader";

export default {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle_[hash].min.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "awesome-typescript-loader"
          },
          {
            loader: "eslint-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@features": path.resolve(__dirname, "src/features"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@lib": path.resolve(__dirname, "src/lib")
    }
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new CheckerPlugin()
  ]
};
