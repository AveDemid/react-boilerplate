import path from "path";
import { CheckerPlugin } from "awesome-typescript-loader";

export default {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "react-code-field.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
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
  plugins: [new CheckerPlugin()]
};
