import * as React from 'react'
import { WindowLocation } from '@reach/router'
import { graphql } from 'gatsby'
import { Layout } from '@components'

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
  console.log('pageContext', pageContext)
  console.log('data', data)

  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark

  return (
    <Layout location={location}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
