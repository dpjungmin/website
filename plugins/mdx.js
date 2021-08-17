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
      {
        resolve: "gatsby-remark-external-links",
        options: {
          target: "_blank",
          rel: "noreferrer",
        },
      },
      {
        resolve: "gatsby-remark-code-titles",
        options: {
          className: "gatsby-remark-code-title",
        },
      }, // IMPORTANT: this must be ahead of other plugins that use code blocks
      {
        resolve: `gatsby-remark-prismjs`,
        options: {
          // Class prefix for <pre> tags containing syntax highlighting;
          // defaults to 'language-' (e.g. <pre class="language-js">).
          // If your site loads Prism into the browser at runtime,
          // (e.g. for use with libraries like react-live),
          // you may use this to prevent Prism from re-processing syntax.
          // This is an uncommon use-case though;
          // If you're unsure, it's best to use the default value.
          classPrefix: "language-",
          // This is used to a
        },
      },
    ],
  },
}
