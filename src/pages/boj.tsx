import * as React from "react"
import { WindowLocation } from "@reach/router"
import { graphql } from "gatsby"
import { Layout, SEO } from "@components"
import { Icon } from "@components/icons"
import * as $ from "@styles/pages/blog/index.styles"

interface BojPageProps {
  readonly location: WindowLocation
  data: {
    allMdx: {
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

const BojPage: React.FC<BojPageProps> = ({ location, data }) => {
  const { nodes } = data.allMdx

  return (
    <Layout location={location}>
      <SEO title="BOJ" />
      <$.Container>
        <$.Articles>
          <$.ArticleWrapper>
            {nodes.map(({ id, frontmatter: { title, slug, date } }) => {
              return (
                <$.Article key={id} to={`${slug}`}>
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
    allMdx(
      filter: { frontmatter: { slug: { regex: "/boj/" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      totalCount
      nodes {
        id
        frontmatter {
          date(formatString: "YYYY년 MM월 DD일")
          slug
          title
        }
      }
    }
  }
`

export { BojPage as default, query }
