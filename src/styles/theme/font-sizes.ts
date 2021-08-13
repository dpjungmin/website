type FontSizeToken =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "heading"
  | "hero"

type FontSizes = Record<FontSizeToken, string>

const fontSizes: FontSizes = {
  xxs: "12px",
  xs: "13px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  xxl: "22px",
  heading: "32px",
  hero: "36px",
}

export { fontSizes }
