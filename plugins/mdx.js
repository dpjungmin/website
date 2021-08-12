module.exports = {
  resolve: "gatsby-plugin-mdx",
  options: {
    defaultLayouts: {
      default: require.resolve("../src/components/layout/mdx-layout.tsx"),
    },
    gatsbyRemarkPlugins: [
      {
        resolve: "gatsby-remark-images",
        options: {
          maxWidth: 590,
        },
      },
    ],
  },
}
