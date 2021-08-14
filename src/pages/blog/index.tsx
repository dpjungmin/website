import * as React from "react"
import { WindowLocation } from "@reach/router"
import { graphql, Link } from "gatsby"
import { Layout } from "@components"
import * as $ from "@styles/pages/blog/index.styles"

interface BlogPageProps {
  readonly location: WindowLocation
  data: any
}

const BlogPage: React.FC<BlogPageProps> = ({ location, data }) => {
  const { nodes } = data.allMarkdownRemark

  return (
    <Layout location={location}>
      <$.Container className="container fillHeight">
        <$.Hero>
          <h1>Hi I'm David, and this is my blog.</h1>
          <p>This website is under construction.</p>
        </$.Hero>
        <$.Articles>
          <h1>
            Articles <span>(markdown copied from gatsby for testing)</span>
          </h1>
          {nodes.map(({ id, frontmatter: { title, slug } }) => {
            console.log(slug)
            return (
              <div key={id}>
                <Link to={`/blog/${slug}`}>{title}</Link>
              </div>
            )
          })}
        </$.Articles>
      </$.Container>
    </Layout>
  )
}

const query = graphql`
  {
    allMarkdownRemark {
      totalCount
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

export { BlogPage as default, query }
