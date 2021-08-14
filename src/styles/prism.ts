// https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/

import { css } from "styled-components"

const prism = css`
  code {
    font-family: ${({ theme }) => theme.fonts.FiraCode};

    /* Inline code */
    &.language-text {
      background: ${({ theme }) => theme.colors.code.bgInline};
      font-size: 90%;
      padding: 0.2em;
      border-radius: 3px;
    }
  }

  /**
   * Add back the container background-color, border-radius, padding, margin
   * and overflow that we removed from <pre>.
   */
  .gatsby-highlight {
    font-size: ${({ theme }) => theme.fontSizes.md};
    background-color: ${({ theme }) => theme.colors.code.bg};
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1.25em;
    overflow: auto;
    margin-bottom: 24px;
    position: relative;

    @media (max-width: 720px) {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }

  /**
   * Remove the default PrismJS theme background-color, border-radius, margin,
   * padding and overflow.
   * 1. Make the element just wide enough to fit its content.
   * 2. Always fill the visible space in .gatsby-highlight.
   * 3. Adjust the position of the line numbers
   */
  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0.75rem 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  /*****  Add code highlighting in code blocks  *****/

  .gatsby-highlight-code-line {
    background-color: ${({ theme }) =>
      theme.colors.code.lineHighlightBackground};
    display: block;
    margin-right: -1.25em;
    margin-left: -1.25em;
    padding-right: 1.25em;
    padding-left: 1em;
    border-left: 0.25em solid
      ${({ theme }) => theme.colors.code.lineHighlightBorder};
  }

  /*****  Add code titles  *****/

  .gatsby-remark-code-title {
    margin-top: 0.5rem;
    margin-bottom: -0.5rem;
    padding: 1.25rem 1.5rem 1rem;

    font-family: Consolas, "Fira Code", "Andale Mono WT", "Andale Mono",
      "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono",
      "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco,
      "Courier New", Courier, monospace;
    font-size: ${({ theme }) => theme.fontSizes.sm};

    background-color: ${({ theme }) => theme.colors.code.titleBackground};
    color: ${({ theme }) => theme.colors.code.title};
    border-bottom: 1px solid ${({ theme }) => theme.colors.code.titleBorder};

    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }

  /*****  Language badges  *****/

  .gatsby-highlight pre[class*="language-"]::before {
    border-radius: 0 0 4px 4px;
    background: black;
    color: white;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-family: ${({ theme }) => theme.fonts.FiraCode};
    letter-spacing: ${({ theme }) => theme.letterSpacings.tracked};
    line-height: ${({ theme }) => theme.lineHeights.solid};
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    position: absolute;
    top: 0;
    left: 1.25rem;
    text-align: right;
  }

  .gatsby-highlight pre[class="language-js"]::before,
  .gatsby-highlight pre[class="language-javascript"]::before {
    content: "js";
    background: ${({ theme }) => theme.colors.languageBadge.js.bg};
    color: ${({ theme }) => theme.colors.languageBadge.js.text};
  }

  .gatsby-highlight pre[class="language-jsx"]::before {
    content: "jsx";
    background: ${({ theme }) => theme.colors.languageBadge.jsx.bg};
    color: ${({ theme }) => theme.colors.languageBadge.jsx.text};
  }

  .gatsby-highlight pre[class="language-json"]::before {
    content: "json";
    background: ${({ theme }) => theme.colors.languageBadge.json.bg};
    color: ${({ theme }) => theme.colors.languageBadge.json.text};
  }

  .gatsby-highlight pre[class="language-c"]::before {
    content: "c";
    background: ${({ theme }) => theme.colors.languageBadge.c.bg};
    color: ${({ theme }) => theme.colors.languageBadge.c.text};
  }

  .gatsby-highlight pre[class="language-cpp"]::before,
  .gatsby-highlight pre[class="language-c++"]::before {
    content: "c++";
    background: ${({ theme }) => theme.colors.languageBadge.cpp.bg};
    color: ${({ theme }) => theme.colors.languageBadge.cpp.text};
  }

  .gatsby-highlight pre[class="language-rust"]::before {
    content: "rust";
    background: ${({ theme }) => theme.colors.languageBadge.rust.bg};
    color: ${({ theme }) => theme.colors.languageBadge.rust.text};
  }

  .gatsby-highlight pre[class="language-shell"]::before {
    content: "shell";
  }

  /*****  Add line numbering (currently not in use)  *****/

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }

  /*****  Add shell prompt  *****/

  .command-line-prompt > span:before {
    color: #999;
    content: " ";
    display: block;
    padding-right: 0.8em;
  }

  /* Prompt for all users */
  .command-line-prompt > span[data-user]:before {
    content: "[" attr(data-user) "@" attr(data-host) "] $";
  }

  /* Prompt for root */
  .command-line-prompt > span[data-user="root"]:before {
    content: "[" attr(data-user) "@" attr(data-host) "] #";
  }

  .command-line-prompt > span[data-prompt]:before {
    content: attr(data-prompt);
  }

  /*****  Tokens  *****/

  .token {
    &.keyword {
      color: ${({ theme }) => theme.colors.code.keyword};
    }

    &.comment {
      color: ${({ theme }) => theme.colors.code.comment};
    }

    &.punctuation {
      color: ${({ theme }) => theme.colors.code.punctuation};
    }

    &.selector,
    &.string {
      color: ${({ theme }) => theme.colors.code.selector};
    }

    &.tag,
    &.number {
      color: ${({ theme }) => theme.colors.code.tag};
    }
  }
`

export { prism }
