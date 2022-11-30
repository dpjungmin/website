const gatsbySourceFilesystem = require("./plugins/filesystem")
const gatsbyPluginPageCreator = require("./plugins/page-creator")
const gatsbyPluginMdx = require("./plugins/mdx")
const gatsbyTransformerRemark = require("./plugins/remark")
const gatsbyPluginFeed = require("./plugins/rss-feed")
const gatsbyPluginManifest = require("./plugins/pwa")
const gatsbyPluginGoogleTagManager = require("./plugins/google-tag-manager")

module.exports = {
  siteMetadata: {
    siteUrl: `https://dpjungmin.com`,
    title: `David Park`,
    description: `Software Engineer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-gatsby-cloud`,
    gatsbySourceFilesystem,
    gatsbyPluginPageCreator,
    gatsbyPluginMdx,
    gatsbyTransformerRemark,
    gatsbyPluginFeed,
    gatsbyPluginGoogleTagManager,
    gatsbyPluginManifest,
    `gatsby-plugin-offline`, // `gatsby-plugin-offline` must come after `gatsby-plugin-manifest`
  ],
  trailingSlash: `always`,
}
