import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as $ from "./jobs.styles"

const Jobs: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `)

  if (data.jobs.edges.length === 0) {
    throw new Error("Markdown for `jobs` section not found")
  }

  const jobs = data.jobs.edges

  return (
    <$.Section id="jobs">
      <h1>Professional Experience</h1>
      <$.JobList>
        {jobs &&
          jobs.map(({ node }, i: number) => {
            const { frontmatter, html } = node
            const { title, url, company, range, location } = frontmatter

            return (
              <$.Job id={`job-${i}`}>
                <h3>
                  <span>{title}</span>
                  <span className="company">
                    &nbsp;@&nbsp;
                    <a href={url}>{company}</a>
                  </span>
                </h3>

                <p className="range">{range}</p>
                <p className="location">{location}</p>

                <$.Text dangerouslySetInnerHTML={{ __html: html }} />
              </$.Job>
            )
          })}
      </$.JobList>
    </$.Section>
  )
}

export { Jobs }
