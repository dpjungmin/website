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

  html {    
    box-sizing: border-box;
    /* scrollbar-width: thin; */
    /* scrollbar-color: pink; */
  }

  /* body::-webkit-scrollbar {
    width: 12px;
  } */
  
  /* body::-webkit-scrollbar-track {
    background: blue;
  } */

  /* body::-webkit-scrollbar-thumb {
    background-color: green;
    border: 3px solid purple;
    border-radius: 10px;
  } */

  body {
    line-height: ${theme.lineHeights.default};
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.ui.background};
    font-size: calc(10px + 0.33vw);
    font-family: ${theme.fonts.OpenSans}; 
    -webkit-font-smoothing: antialiased;
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
    min-height: 100vh;
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
    transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    color: ${theme.colors.link.color};
    border-bottom: 1px solid ${theme.colors.link.border};

    &:hover {
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
`

export { GlobalStyle }
