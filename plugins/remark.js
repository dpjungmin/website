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
        resolve: "gatsby-remark-code-buttons",
        options: {
          // Optional button container class name. Defaults
          // to 'gatsby-code-button-container'.
          buttonContainerClass: `gatsby-code-button-container`,
          // Optional button class name. Defaults to 'gatsby-code-button'.
          buttonClass: `gatsby-code-button`,
          // Optional button text. Defaults to ''.
          buttonText: `Copy`,
          // Optional svg icon class name. Defaults to 'gatsby-code-button-icon'.
          svgIconClass: `gatsby-code-button-icon`,
          // Optional svg icon. Defaults to svg string and can be
          // replaced with any other valid svg. Use custom classes
          // in the svg string and skip `iconClass` option.
          svgIcon: ``,
          // Optional tooltip text. Defaults to ''.
          tooltipText: ``,
          // Optional toaster class name. Defaults to ''.
          toasterClass: ``,
          // Optional toaster text class name. Defaults to ''.
          toasterTextClass: ``,
          // Optional toaster text. Defaults to ''.
          toasterText: "",
          // Optional toaster duration. Defaults to 3500.
          toasterDuration: 0,
        },
      },
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
          // This is used to allow setting a language for inline code
          // (i.e. single backticks) by creating a separator.
          // This separator is a string and will do no white-space
          // stripping.
          // A suggested value for English speakers is the non-ascii
          // character '›'.
          inlineCodeMarker: null,
          // This lets you set up language aliases.  For example,
          // setting this to '{ sh: "bash" }' will let you use
          // the language "sh" which will highlight using the
          // bash highlighter.
          aliases: {},
          // This toggles the display of line numbers globally alongside the code.
          // To use it, add the following line in gatsby-browser.js
          // right after importing the prism color scheme:
          //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
          // Defaults to false.
          // If you wish to only show line numbers on certain code blocks,
          // leave false and use the {numberLines: true} syntax below
          showLineNumbers: false,
          // If setting this to true, the parser won't handle and highlight inline
          // code used in markdown i.e. single backtick code like `this`.
          noInlineHighlight: false,
          // This adds a new language definition to Prism or extend an already
          // existing language definition. More details on this option can be
          // found under the header "Add new language definition or extend an
          // existing language" below.
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
          // Customize the prompt used in shell output
          // Values below are default
          prompt: {
            user: "root",
            host: "localhost",
            global: false,
          },
          // By default the HTML entities <>&'" are escaped.
          // Add additional HTML escapes by providing a mapping
          // of HTML entities and their escape value IE: { '}': '&#123;' }
          escapeEntities: {},
        },
      },
    ],
  },
}
