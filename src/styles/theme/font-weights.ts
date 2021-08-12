type FontWeightToken = "body" | "semiBold" | "bold" | "extraBold" | "heading"

type FontWeights = Record<FontWeightToken, number>

const fontWeights: FontWeights = {
  body: 400,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  heading: 700,
}

export { fontWeights }
