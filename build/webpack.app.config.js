const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.base.config");

module.exports = env => {
  return merge(base(env), {
    entry: {
      mainProcess: "./src/mainProcess.js",
      simpleCalculator: "./src/simpleCalculator.js",
      scientificCalculator: "./src/scientificCalculator.js",
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "../app")
    }
  });
};
