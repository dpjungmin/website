module.exports = {
  resolve: "gatsby-source-filesystem",
  options: {
    name: "content",
    // __dirname is the path to this folder
    path: `${__dirname}/../content/`,
    ignore: [`**/\.*`], // ignore files starting with a dot
  },
}
