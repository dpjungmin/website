module.exports = {
  resolve: `gatsby-transformer-remark`,
  options: {
    // Footnotes mode (default: true)
    footnotes: true,
    // GitHub Flavored Markdown mode (default: true)
    gfm: true,
    // Plugins configs
    plugins: [
      {
        resolve: `gatsby-remark-images`,
        options: {
          // It's important to specify the maxWidth (in pixels) of
          // the content container as this plugin uses this as the
          // base for generating different widths of each image.
          maxWidth: 590,
        },
      },
    ],
  },
}
