import * as React from "react"
import { WindowLocation } from "@reach/router"
import { graphql, Link } from "gatsby"
import { Layout, SEO } from "@components"
import * as $ from "@styles/pages/blog/index.styles"

interface BlogPageProps {
  readonly location: WindowLocation
  data: any
}

const BlogPage: React.FC<BlogPageProps> = ({ location, data }) => {
  const { nodes } = data.allMarkdownRemark

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <$.Container>
        <$.Hero>
          <h1>Hi I'm David, and this is my blog.</h1>
        </$.Hero>
        <$.Articles>
          <h1>Articles</h1>
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
