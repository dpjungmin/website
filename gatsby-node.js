const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@context": path.resolve(__dirname, "./src/context"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@theme": path.resolve(__dirname, "./src/styles/theme"),
        "@lib": path.resolve(__dirname, "./src/lib"),
      },
    },
  })
}
