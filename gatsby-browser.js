require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")

import * as React from "react"
import { EntryLayout } from "@components"

export const wrapRootElement = ({ element }) => {
  return <EntryLayout>{element}</EntryLayout>
}
