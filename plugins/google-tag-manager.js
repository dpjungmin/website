module.exports = {
  resolve: "gatsby-plugin-google-tagmanager",
  options: {
    id: "GTM-T3LHXPC",

    // Include GTM in development.
    //
    // Defaults to false meaning GTM will only be loaded in production.
    includeInDevelopment: false,

    // Name of the event that is triggered
    // on every Gatsby route change.
    //
    // Defaults to gatsby-route-change
    routeChangeEventName: "gatsby-route-change",
    // Defaults to false
    enableWebVitalsTracking: true,
  },
}
