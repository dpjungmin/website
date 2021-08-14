type BreakpointToken =
  | "mobile"
  | "phablet"
  | "tablet"
  | "desktop"
  | "hd"
  | "post"

type Breakpoints = Record<BreakpointToken, string>

const breakpoints: Breakpoints = {
  mobile: "360px",
  phablet: "550px",
  tablet: "750px",
  desktop: "1000px",
  hd: "1300px",
  // page specific breakpoints
  post: "720px",
}

export { breakpoints }
