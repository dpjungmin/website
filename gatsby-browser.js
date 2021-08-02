import * as React from 'react'
import { EntryLayout } from '@components'

export const wrapRootElement = ({ element }) => {
  return <EntryLayout>{element}</EntryLayout>
}
