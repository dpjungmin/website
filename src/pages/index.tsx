import * as React from "react"
import { WindowLocation } from "@reach/router"
import { Layout, SEO } from "@components"
import { Hero, About } from "@components/sections"
import * as $ from "@styles/pages/index.styles"

interface IndexPageProps {
  readonly location: WindowLocation
}

const IndexPage: React.FC<IndexPageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO />
      <$.Container className="container fillHeight">
        <Hero />
        <About />
      </$.Container>
    </Layout>
  )
}

export default IndexPage
