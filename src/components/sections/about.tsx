import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Icon } from "@components/icons"
import * as $ from "./about.styles"

const About: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      hero: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/_about/" } }
      ) {
        edges {
          node {
            html
          }
        }
      }
    }
  `)

  if (data.hero.edges.length === 0) {
    throw new Error("Markdown for about content not found")
  }

  const { html } = data.hero.edges[0].node

  const ResumeLink = (
    <a
      className="resume-button"
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume <Icon name="download" />
    </a>
  )

  return (
    <$.Section id="about">
      <h1>About me</h1>
      <$.Text dangerouslySetInnerHTML={{ __html: html }} />
      {ResumeLink}
    </$.Section>
  )
}

export { About }
