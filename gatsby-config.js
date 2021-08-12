const gatsbySourceFilesystem = require("./plugins/filesystem")
const gatsbyPluginPageCreator = require("./plugins/page-creator")
const gatsbyPluginMdx = require("./plugins/mdx")
const gatsbyTransformerRemark = require("./plugins/remark")
const gatsbyPluginFeed = require("./plugins/rss-feed")
const gatsbyPluginManifest = require("./plugins/pwa")

module.exports = {
  siteMetadata: {
    siteUrl: "https://dpjungmin.com",
    title: "David Park",
    description: "MS student @ USC CS",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    gatsbySourceFilesystem,
    gatsbyPluginPageCreator,
    gatsbyPluginMdx,
    gatsbyTransformerRemark,
    gatsbyPluginFeed,
    gatsbyPluginManifest,
    // `gatsby-plugin-offline` must come after `gatsby-plugin-manifest`
    "gatsby-plugin-offline",
  ],
}
