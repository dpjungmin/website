import * as React from "react"
import { WindowLocation } from "@reach/router"
import { graphql, Link } from "gatsby"
import { Layout, SEO } from "@components"
import * as $ from "@styles/pages/blog/index.styles"

interface BlogPageProps {
  readonly location: WindowLocation
  data: {
    allMarkdownRemark: {
      nodes: {
        id: string
        frontmatter: {
          date: string
          title: string
          slug: string
        }
      }[]
    }
  }
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
          <$.Wrapper>
            {nodes.map(({ id, frontmatter: { title, slug, date } }) => {
              return (
                <$.Article key={id}>
                  <Link to={`/blog/${slug}`}>{title}</Link>
                  <span>{date}</span>
                </$.Article>
              )
            })}
          </$.Wrapper>
        </$.Articles>
      </$.Container>
    </Layout>
  )
}

const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      nodes {
        id
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          slug
        }
      }
    }
  }
`

export { BlogPage as default, query }
