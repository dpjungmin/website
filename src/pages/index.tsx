import * as React from 'react'
import { WindowLocation } from '@reach/router'
import { Layout } from '@components'
import * as $ from '@styles/pages/index.styles'

interface IndexPageProps {
  readonly location: WindowLocation
}

const IndexPage: React.FC<IndexPageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <$.Container>
        <h1>Hello!</h1>
      </$.Container>
    </Layout>
  )
}

export default IndexPage
