import { mixins } from "./mixins"

const palette = {
  white: "#ffffff",
  blue: "#5ccfe6",
  purple: "#c3a6ff",
  green: "#bae67e",
  yellow: "#ffd580",
  orange: "#ffae57",
  red: "#ef6b73",
  grey: "#a2aabc",
  comment: "#8695b799",
}

const bp = {
  mobileS: `max-width: 330px`,
  mobileM: `max-width: 400px`,
  mobileL: `max-width: 480px`,
  tabletS: `max-width: 600px`,
  tabletL: `max-width: 768px`,
  desktopXS: `max-width: 900px`,
  desktopS: `max-width: 1080px`,
  desktopM: `max-width: 1200px`,
  desktopL: `max-width: 1400px`,
}

const theme = {
  palette,
  bp,
  mixins,
}

export { theme }
