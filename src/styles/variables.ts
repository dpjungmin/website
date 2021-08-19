import { css } from "styled-components"
import { theme } from "@theme"

const variables = css`
  :root {
    /* Fonts  */
    --font-sans: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
    --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;

    /* Common */
    --border-radius: 4px;
    --footer-height: 80px;

    /* Navigation bar */
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --nav-scroll-up-bg: ${theme.colors.purple[5]};
    --nav-box-shadow: 0 10px 30px -10px ${theme.colors.purple[10]};

    /* Hamburger  */
    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;

    /* Sidebar  */
    --sidebar-background: ${theme.colors.purple[20]};
    --sidebar-box-shadow: -10px 0px 30px -15px ${theme.colors.purple[30]};
  }
`

export { variables }
