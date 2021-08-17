import { css } from "styled-components"
import { colors } from "@theme/colors"
import { fontSizes } from "@theme/font-sizes"
import { lineHeights } from "./theme/line-heights"
import { transition } from "./theme/transition"

const button = css`
  color: ${colors.button.color};
  background-color: ${colors.button.background};
  border: 1px solid ${colors.button.border};
  border-radius: 4px;
  font-size: ${fontSizes.xs};
  font-family: var(--font-mono);
  line-height: ${lineHeights.solid};
  text-decoration: none;
  cursor: pointer;
  transition: all ${transition.default};
  padding: 1.25rem, 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.button.hoverBackground};
    outline: none;
  }

  &:after {
    display: none !important;
  }
`

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

  button,

  smallButton: css`
    ${button}
    padding: 0.75rem 1rem;
  `,

  bigButton: css`
    ${button}
    padding: 1.25rem 1.75rem;
  `,
}

export { mixins }
