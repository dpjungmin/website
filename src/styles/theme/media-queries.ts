import { breakpoints } from "./breakpoints"

const mq = {}

for (const breakpoint in breakpoints) {
  mq[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`
}

export { mq as mediaQueries }
