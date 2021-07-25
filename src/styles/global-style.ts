import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'
import { variables, Theme, theme } from './variables'

const GlobalStyle = createGlobalStyle`
  ${fonts}
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
    -webkit-font-smoothing: antialiased;
  }

  html[data-theme=${Theme.LIGHT}] {
    ${theme[Theme.LIGHT]} 
  }

  html[data-theme=${Theme.DARK}] {
    ${theme[Theme.DARK]}
  }

  body {
    line-height: 1.5;
    font: 1rem/1.6 sans-serif;    
    background-color: var(--color__background, white);
    color: var(--color__text, black);

   /** 
    * Responsive layout to adjust with each viewport. 
    * This is only applied to elements that does not explicitly have a font-size defined.
    */
    font-size: calc(1vw + 1vh + 0.5vmin);
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  a[href^="http"]:empty::before {
    content: attr(href);
  }

  a:link,
  a:visited {
    text-decoration: none;
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
