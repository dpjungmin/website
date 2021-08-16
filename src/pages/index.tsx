import * as React from "react"
import { WindowLocation } from "@reach/router"
import { Layout, SEO } from "@components"
import { Hero } from "@components/sections"
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
        {/* <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.feedspot.com/infiniterss.php?q=site:https://dpjungmin.gatsbyjs.io/rss.xml"
        >
          Follow RSS
        </a>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a> */}
      </$.Container>
    </Layout>
  )
}

export default IndexPage
