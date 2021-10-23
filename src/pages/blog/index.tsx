import * as React from "react"
import { WindowLocation } from "@reach/router"
import { graphql } from "gatsby"
import { Layout, SEO } from "@components"
import { Icon } from "@components/icons"
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
          <$.ArticleWrapper>
            {nodes.map(({ id, frontmatter: { title, slug, date } }) => {
              return (
                <$.Article key={id} to={`/blog/${slug}`}>
                  <p>{title}</p>
                  <span>{date}</span>
                </$.Article>
              )
            })}
          </$.ArticleWrapper>
        </$.Articles>
        <$.Flex>
          <Icon name="jellyppi2" />
        </$.Flex>
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
