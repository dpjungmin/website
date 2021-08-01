const gatsbySourceFilesystem = require('./plugins/filesystem')
const gatsbyTransformerRemark = require('./plugins/remark')
const gatsbyPluginFeed = require('./plugins/rss-feed')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://dpjungmin.com',
    title: 'David Park',
    description: 'MS student @ USC CS',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    gatsbySourceFilesystem,
    gatsbyTransformerRemark,
    gatsbyPluginFeed,
  ],
}
