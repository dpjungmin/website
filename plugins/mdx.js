module.exports = {
  resolve: "gatsby-plugin-mdx",
  options: {
    extensions: [".mdx"],
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
          classPrefix: "language-",
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: false,
          noInlineHighlight: false,
          languageExtensions: [
            {
              language: "superscript",
              extend: "javascript",
              definition: {
                superscript_types: /(SuperType)/,
              },
              insertBefore: {
                function: {
                  superscript_keywords: /(superif|superelse)/,
                },
              },
            },
          ],
          prompt: {
            user: "root",
            host: "localhost",
            global: false,
          },
          escapeEntities: {},
        },
      },
    ],
    mdxOptions: {
      // defaultLayouts: {
      //   default: require.resolve("../src/components/layout/mdx-layout.tsx"),
      // },
    },
  },
}
