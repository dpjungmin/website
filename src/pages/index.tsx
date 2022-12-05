import * as React from "react"
import { WindowLocation } from "@reach/router"
import { Layout, SEO } from "@components"
import { Hero, About, Jobs } from "@components/sections"
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
        <Jobs />
      </$.Container>
    </Layout>
  )
}

export default IndexPage
