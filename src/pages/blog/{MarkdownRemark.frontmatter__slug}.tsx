import * as React from "react"
import { WindowLocation } from "@reach/router"
import { graphql } from "gatsby"
import { Layout } from "@components"
import * as $ from "@styles/pages/blog/post.styles"

interface PostTemplateProps {
  readonly location: WindowLocation
  pageContext: any
  data: any
}

const PostTemplate: React.FC<PostTemplateProps> = ({
  location,
  pageContext,
  data,
}) => {
  console.log("pageContext", pageContext)
  console.log("data", data)

  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark

  return (
    <Layout location={location}>
      <$.Container>
        <$.Title>{title}</$.Title>
        <$.Article dangerouslySetInnerHTML={{ __html: html }} />
      </$.Container>
    </Layout>
  )
}

const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export { PostTemplate as default, query }
