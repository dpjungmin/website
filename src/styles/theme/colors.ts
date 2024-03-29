const palette = {
  purple: {
    90: "#362066",
    80: "#452475",
    70: "#542c85",
    60: "#663399",
    50: "#8a4baf",
    40: "#b17acc",
    30: "#d9bae8",
    20: "#f1defa",
    10: "#f6edfa",
    5: "#fcfaff",
  },
  orange: {
    90: "#992c00",
    80: "#cc3b00",
    70: "#f06200",
    60: "#fb8400",
    50: "#ffb238",
    40: "#ffd280",
    30: "#ffe4a1",
    20: "#ffedbf",
    10: "#fff4db",
    5: "#fffcf7",
  },
  yellow: {
    90: "#644926",
    80: "#8a6534",
    70: "#bf9141",
    60: "#e3a617",
    50: "#fed038",
    40: "#ffdf37",
    30: "#ffeb99",
    20: "#fff2a8",
    10: "#fff5bf",
    5: "#fffdf7",
  },
  red: {
    90: "#75000a",
    80: "#a8000f",
    70: "#c20011",
    60: "#ec1818",
    50: "#fa2915",
    40: "#ff5a54",
    30: "#ff8885",
    20: "#ffbab8",
    10: "#fde7e7",
    5: "#fffafa",
  },
  magenta: {
    90: "#690147",
    80: "#7d0e59",
    70: "#940159",
    60: "#a6026a",
    50: "#bc027f",
    40: "#d459ab",
    30: "#e899ce",
    20: "#f2c4e3",
    10: "#ffe6f6",
    5: "#fffafd",
  },
  blue: {
    90: "#004ca3",
    80: "#006ac1",
    70: "#047bd3",
    60: "#0e8de6",
    50: "#159BF3",
    40: "#3fa9f5",
    30: "#63b8f6",
    20: "#90cdf9",
    10: "#dbf0ff",
    5: "#f5fcff",
  },
  teal: {
    90: "#00574e",
    80: "#00756a",
    70: "#10A39e",
    60: "#00bdb6",
    50: "#2de3da",
    40: "#73fff7",
    30: "#a6fffa",
    20: "#ccfffc",
    10: "#dcfffd",
    5: "#f7ffff",
  },
  green: {
    90: "#003d00",
    80: "#006500",
    70: "#088413",
    60: "#2ca72c",
    50: "#37b635",
    40: "#59c156",
    30: "#79cd75",
    20: "#a1da9e",
    10: "#def5dc",
    5: "#f7fdf7",
  },
  grey: {
    90: "#232129",
    80: "#36313d",
    70: "#48434f",
    60: "#635e69",
    50: "#78757a",
    40: "#b7b5bd",
    30: "#d9d7e0",
    20: "#f0f0f2",
    10: "#f5f5f5",
    5: "#fbfbfb",
  },
  lime: {
    90: "#3c4e09",
    80: "#5c770d",
    70: "#759711",
    60: "#8eb814",
    50: "#a7d818",
    40: "#bce939",
    30: "#ccee68",
    20: "#dbf396",
    10: "#ebf8c3",
    5: "#fafdf1",
  },
  white: "#ffffff",
  black: "#000000",
}

const blackRGB = "35, 33, 41" // grey.90
const whiteRGB = "255, 255, 255"

const colors = {
  ...palette,
  dp: palette.purple[60],
  lilac: palette.purple[50],
  lavender: palette.purple[20],
  accent: palette.orange[50],
  warning: palette.red[70],
  // semi-transparent colors
  blackFade: {
    90: "rgba(" + blackRGB + ", 0.9)",
    80: "rgba(" + blackRGB + ", 0.8)",
    70: "rgba(" + blackRGB + ", 0.7)",
    60: "rgba(" + blackRGB + ", 0.6)",
    50: "rgba(" + blackRGB + ", 0.5)",
    40: "rgba(" + blackRGB + ", 0.4)",
    30: "rgba(" + blackRGB + ", 0.3)",
    20: "rgba(" + blackRGB + ", 0.2)",
    10: "rgba(" + blackRGB + ", 0.1)",
    5: "rgba(" + blackRGB + ", 0.05)",
  },
  whiteFade: {
    90: "rgba(" + whiteRGB + ", 0.9)",
    80: "rgba(" + whiteRGB + ", 0.8)",
    70: "rgba(" + whiteRGB + ", 0.7)",
    60: "rgba(" + whiteRGB + ", 0.6)",
    50: "rgba(" + whiteRGB + ", 0.5)",
    40: "rgba(" + whiteRGB + ", 0.4)",
    30: "rgba(" + whiteRGB + ", 0.3)",
    20: "rgba(" + whiteRGB + ", 0.2)",
    10: "rgba(" + whiteRGB + ", 0.1)",
    5: "rgba(" + whiteRGB + ", 0.05)",
  },
  // role-based tokens
  ui: {
    background: palette.grey[5],
    hover: palette.purple[5],
    border: {
      subtle: palette.grey[20],
    },
  },
  selection: {
    background: palette.purple[40],
    color: palette.purple[5],
  },
  logo: {
    color: palette.purple[60],
    hoverFill: "rgba(102, 51, 153, 0.1)",
  },
  socialMediaIcon: {
    fill: palette.orange[10],
    color: palette.orange[50],
    colorHover: palette.orange[60],
  },
  link: {
    color: palette.purple[50],
    border: palette.purple[30],
    hoverBorder: palette.purple[50],
  },
  text: {
    header: palette.black,
    primary: palette.grey[80],
    secondary: palette.grey[50],
    placeholder: palette.grey[40],
    underline: palette.grey[40],
  },
  button: {
    color: palette.white,
    background: palette.purple[60],
    border: palette.purple[60],
    hoverBackground: palette.purple[70],
  },
  input: {
    border: palette.grey[30],
    focusBorder: palette.orange[40],
    focusBoxShadow: palette.orange[20],
  },
  svg: {
    color: palette.purple[40],
    hover: palette.purple[50],
  },
  footer: {
    border: palette.purple[10],
    text: palette.grey[50],
    rss: palette.orange[60],
    rssBorder: palette.orange[50],
    rssBorderHover: palette.orange[70],
  },
  blockquote: {
    background: palette.orange[10],
    border: palette.orange[30],
    text: palette.grey[60],
  },
  code: {
    bgInline: "#434846",
    bg: "#2d302f",
    border: "#faede5",
    text: "#e0f0ef",
    remove: palette.red[70],
    add: palette.green[80],
    selector: "#b94185",
    tag: "#c38a61",
    keyword: "#8ac361",
    comment: "#9da8a3",
    punctuation: "#e0f0ef",
    macro: "#f0c239",
    function: "#f69d50",
    string: "#ff938a",
    regex: "#dc0437",
    cssString: "#a2466c",
    invisibles: "#e0d7d1",
    scrollbarThumb: "#f4d1c6",
    lineHighlightBorder: "#434846",
    copyButton: palette.grey[40],
    lineHighlightBackground: "#434846",
    scrollbarTrack: "#faede5",
    titleBackground: palette.grey[5],
    title: "#866c5b",
    titleBorder: palette.grey[5],
  },
  languageBadge: {
    js: {
      bg: palette.yellow[40],
      text: palette.grey[90],
    },
    jsx: {
      bg: palette.blue[20],
      text: palette.grey[90],
    },
    json: {
      bg: palette.lime[40],
      text: palette.grey[90],
    },
    c: {
      bg: palette.magenta[20],
      text: palette.grey[90],
    },
    cpp: {
      bg: palette.blue[80],
      text: palette.grey[5],
    },
    rust: {
      bg: palette.yellow[70],
      text: palette.grey[5],
    },
    toml: {
      bg: "#fffaf0",
      text: "#9c4221",
    },
  },
}

export { colors }
