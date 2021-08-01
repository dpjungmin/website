import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  title?: string
  description?: string
  slug?: string
  meta?: []
}

const SEO: React.FC<SEOProps> = ({ title, description, slug, meta = [] }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          title
          description
        }
      }
    }
  `)

  const defaultUrl = site.siteMetadata.siteUrl
  const defaultTitle = site.siteMetadata.title
  const defaultDescription = site.siteMetadata.description

  if (slug?.charAt(0) === '/') {
    slug = slug.substring(1)
  }

  const _url = `${defaultUrl}/${slug}`
  const _title = title ? `${title} | ${defaultTitle}` : defaultTitle
  const _description = description || defaultDescription

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={_title}
      meta={[
        { name: 'description', content: _description },

        { property: 'og:title', content: _title },
        { property: 'og:description', content: _description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: _url },
        // { property: 'og:image', content: `${defaultUrl}/logo.png` },

        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:title', content: _title },
        { property: 'twitter:description', content: _description },
        // { property: 'twitter:image', content: `${defaultUrl}/logo.png` },
      ].concat(meta)}
    />
  )
}

export { SEO }
