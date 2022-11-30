import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { socialMedia } from "@config"
import { Icon } from "@components/icons"
import * as $ from "./hero.styles"

const Hero: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      hero: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/_hero/" } }
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
    throw new Error("Markdown for hero content not found")
  }

  const { html } = data.hero.edges[0].node

  return (
    <$.Section>
      <$.Text dangerouslySetInnerHTML={{ __html: html }} />
      <$.SocialMediaList>
        {socialMedia &&
          socialMedia.map(({ name, url }, idx: number) => (
            <li key={idx}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))}
      </$.SocialMediaList>
    </$.Section>
  )
}

export { Hero }
