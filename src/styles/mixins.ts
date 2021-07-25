import { css } from 'styled-components'

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  size: (width: number, height: number) => css`
    width: ${width};
    height: ${height};
  `,
}

export { mixins }
