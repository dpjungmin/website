import * as React from 'react'
import { WindowLocation } from '@reach/router'
import { Layout } from '@components'
import * as $ from '@styles/pages/404.styles'

interface NotFoundPageProps {
  readonly location: WindowLocation
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <$.Container>
        <$.Title>404</$.Title>
        <$.Subtitle>Not Found</$.Subtitle>
        <$.HomeButton to="/">Go Home</$.HomeButton>
      </$.Container>
    </Layout>
  )
}

export default NotFoundPage
