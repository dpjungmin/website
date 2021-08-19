import * as React from "react"
import { WindowLocation } from "@reach/router"
import { graphql } from "gatsby"
import { Layout, SEO } from "@components"
import * as $ from "@styles/pages/blog/post.styles"

interface PostTemplateProps {
  readonly location: WindowLocation
  pageContext: any
  data: {
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        date: string
        title: string
        description: string
      }
    }
  }
}

const PostTemplate: React.FC<PostTemplateProps> = ({
  location,
  pageContext,
  data,
}) => {
  // console.log("pageContext", pageContext)
  // console.log("data", data)

  const {
    html,
    excerpt,
    frontmatter: { title, description, date },
  } = data.markdownRemark

  return (
    <Layout location={location}>
      <SEO title={title} description={description || excerpt} />
      <$.Container>
        <$.Title>
          {title} <span>{date}</span>
        </$.Title>
        <$.Article dangerouslySetInnerHTML={{ __html: html }} />
      </$.Container>
    </Layout>
  )
}

const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      tableOfContents(absolute: false, maxDepth: 2)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`

export { PostTemplate as default, query }
