import { createGlobalStyle } from "styled-components"
import { theme } from "@theme"
import { prism } from "./prism"
import { variables } from "./variables"

const GlobalStyle = createGlobalStyle`
  ${prism}
  ${variables}

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::selection {
    background-color: ${theme.colors.selection.background};
    color: ${theme.colors.selection.color};
  }

  .focus-outline {
    &:focus {
      outline: 2px dashed ${theme.colors.dp};
      outline-offset: 3px;
    }
  }

  html {
    box-sizing: border-box;
    scrollbar-width: thin;
  }

  body {
    line-height: ${theme.lineHeights.default};
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.ui.background};
    font-size: ${theme.fontSizes.lg};
    font-family: ${theme.fonts.OpenSans};
    -webkit-font-smoothing: antialiased;
    transition: all ${theme.transition.default};
    overflow-x: hidden;

    @media (max-width: ${theme.breakpoints.phablet}) {
      font-size: ${theme.fontSizes.md};
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: all ${theme.transition.default};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
    min-height: 100vh;
  }

  #content {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .container {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }

    @media (max-width: 768px) {
      padding: 150px 50px;
    }

    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }

      @media (max-width: 768px) {
        padding: 0 50px;
      }

      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  a[href^="http"]:empty::before {
    content: attr(href);
  }

  a:link,
  a:visited {
    text-decoration: none;
  }

  a {
    text-decoration: none;
    transition-property: all;
    transition-duration: ${theme.transition.speed.fast};
    transition-timing-function: ${theme.transition.curve.default};
    color: ${theme.colors.link.color};
    border-bottom: 1px solid ${theme.colors.link.border};

    &:hover,
    &:focus,
    &:active {
      border-bottom-color: ${theme.colors.link.hoverBorder};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.colors.text.header};
    line-height: ${theme.lineHeights.heading};
  }

  video[autoplay]:not([muted]) {
    display: none;
  }

  input[type="text"],
  input[type="number"],
  select,
  textarea {
    font-size: 16px;
  }

  .button-disabled {
    opacity: .5;
    pointer-events: none;
  }

  br + br {
    display: none;
  }

  li,
  ul {
    list-style: none;
  }

  svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    color: ${theme.colors.svg.color};
    transition: all ${theme.transition.default};

    &:hover {
      color: ${theme.colors.svg.hover};
    }
  }

  /* For design page (MDX) */
  ._colors {
    svg {
      width: 44px;
      height: 44px;
    }
  }
`

export { GlobalStyle }
