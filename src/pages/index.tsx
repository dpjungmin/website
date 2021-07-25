import * as React from 'react'
import { WindowLocation } from '@reach/router'
import { Layout } from '@components'
import { themeManager } from '@lib'
import * as $ from './index.styles'

interface IndexPageProps {
  readonly location: WindowLocation
}

const IndexPage: React.FC<IndexPageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <$.Container>
        <div onClick={themeManager.toggle}>Toggle</div>
      </$.Container>
    </Layout>
  )
}

export default IndexPage
