import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
<<<<<<< HEAD
=======
import { socialMedia } from "@config"
import { Icon } from "@components/icons"
>>>>>>> 685038e8eda22dbf9feafb3267bcb25d083e2d51
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
<<<<<<< HEAD
      <div dangerouslySetInnerHTML={{ __html: html }} />
=======
      <$.Text dangerouslySetInnerHTML={{ __html: html }} />
      <$.SocialMediaList>
        {socialMedia &&
          socialMedia.map(({ name, url }, idx) => (
            <li key={idx}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))}
      </$.SocialMediaList>
>>>>>>> 685038e8eda22dbf9feafb3267bcb25d083e2d51
    </$.Section>
  )
}

export { Hero }
