import { css } from 'styled-components'

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const theme = {
  [Theme.LIGHT]: css`
    :root {
      --color__background: white;
      --color__text: black;
    }
  `,

  [Theme.DARK]: css`
    :root {
      --color__background: black;
      --color__text: white;
    }
  `,
}

const variables = css`
  :root {
    --font-size__xxs: 12px;
    --font-size__xs: 13px;
    --font-size__sm: 14px;
    --font-size__md: 16px;
    --font-size__lg: 18px;
    --font-size__xl: 20px;
    --font-size__xxl: 22px;

    --font-size__heading-lg: 32px;

    --font-weight__thin: 100;
    --font-weight__light: 300;
    --font-weight__regular: 400;
    --font-weight__medium: 500;
    --font-weight__bold: 700;
    --font-weight__black: 900;
  }
`

export { variables, Theme, theme }
