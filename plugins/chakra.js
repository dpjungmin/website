module.exports = {
  resolve: "@chakra-ui/gatsby-plugin",
  options: {
    /**
     * @property {boolean} [resetCSS=true]
     * if `false`, this plugin will not use `<CSSReset />
     */
    resetCSS: false,
    /**
     * @property {number} [portalZIndex=40]
     * The z-index to apply to all portal nodes. This is useful
     * if your app uses a lot z-index to position elements.
     */
    portalZIndex: 40,
  },
}
