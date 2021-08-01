module.exports = {
  resolve: `gatsby-plugin-feed`,
  options: {
    query: `
      {
        site {
          siteMetadata {
            siteUrl
            title
            description
          }
        }
      }
    `,
    feeds: [
      {
        serialize: ({ query: { site, allMarkdownRemark } }) => {
          return allMarkdownRemark.edges.map(({ node }) => {
            const _url = `${site.siteMetadata.siteUrl}/blog/${node.frontmatter.slug}`
            return Object.assign({}, node.frontmatter, {
              date: node.frontmatter.date,
              url: _url,
              guid: _url,
              custom_elements: [{ 'content:encoded': node.html }],
            })
          })
        },
        query: `
          {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] },
            ) {
              edges {
                node {
                  html
                  frontmatter {
                    date
                    title
                    slug
                  }
                }
              }
            }
          }
        `,
        output: '/rss.xml',
        title: 'RSS Feed',
        // // optional configuration to insert feed reference in pages:
        // // if `string` is used, it will be used to create RegExp and then test if pathname of
        // // current page satisfied this regular expression;
        // // if not provided or `undefined`, all pages will have feed reference inserted
        // match: '^/blog/',
        // // optional configuration to specify external rss feed, such as feedburner
        // link: 'https://feeds.feedburner.com/gatsby/blog',
      },
    ],
  },
}
