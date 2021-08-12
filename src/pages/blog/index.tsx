import * as React from "react"
import { WindowLocation } from "@reach/router"
import { graphql, Link } from "gatsby"
import { Layout } from "@components"

interface BlogPageProps {
  readonly location: WindowLocation
  data: any
}

const BlogPage: React.FC<BlogPageProps> = ({ location, data }) => {
  const { totalCount, nodes } = data.allMarkdownRemark

  return (
    <Layout location={location}>
      <main>
        <h4 style={{ margin: "0" }}>{totalCount}</h4>
        {nodes.map(({ id, frontmatter: { title, slug } }) => {
          console.log(slug)
          return (
            <div key={id}>
              <h3>{title}</h3>
              <Link to={`/blog/${slug}`}>{slug}</Link>
            </div>
          )
        })}
      </main>
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
