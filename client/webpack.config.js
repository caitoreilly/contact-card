const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

// the entry indicates the file webpack will use to start the dependency graph (entry point)
// entry point set to ./src/js/index.js
// output - where the bundled files will be generated
// path - sets the directory where the bundled files will be outputed
