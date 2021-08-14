type FontToken = "OpenSans" | "FiraCode"

type Fonts = Record<FontToken, string>

const fonts: Fonts = {
  OpenSans: "Open Sans",
  FiraCode: "Fira Code",
}

export { fonts }
