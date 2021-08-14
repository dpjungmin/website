import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as $ from "./hero.styles"

const Hero: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      hero: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/hero/" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              name
            }
          }
        }
      }
    }
  `)

  if (data.hero.edges.length === 0) {
    throw new Error("Markdown for hero content not found")
  }

  const { html, frontmatter } = data.hero.edges[0].node
  const { name } = frontmatter

  return (
    <$.Section>
      <h1>Hello.</h1>
      <h3>My name is {name}.</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </$.Section>
  )
}

export { Hero }
