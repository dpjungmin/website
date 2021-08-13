import { breakpoints } from "./breakpoints"

const mq = {}

for (const bp in breakpoints) {
  mq[bp] = `@media (min-width: ${breakpoints[bp]})`
}

export { mq as mediaQueries }
