type BreakpointToken = "mobile" | "phablet" | "tablet" | "desktop" | "hd"

type Breakpoints = Record<BreakpointToken, number>

const breakpoints: Breakpoints = {
  mobile: 360,
  phablet: 550,
  tablet: 750,
  desktop: 1000,
  hd: 1300,
}

export { breakpoints }
