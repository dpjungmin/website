type LineHeightToken =
  | "solid"
  | "dense"
  | "heading"
  | "default"
  | "body"
  | "loose"

type LineHeights = Record<LineHeightToken, number>

const lineHeights: LineHeights = {
  solid: 1,
  dense: 1.25,
  heading: 1.25,
  default: 1.5,
  body: 1.5,
  loose: 1.75,
}

export { lineHeights }
