/**
 * These functions here are invoked during the build process
 * @createPages create static pages
 * @sourceNodes create nodes
 * @createSchemaCustomization create custom graphql types
 * @createResolvers create custom graphql resolvers
 * @onCreateWebpackConfig set custom webpack configurations
 */

const _ = require('lodash')
const path = require('path')
const chalk = require('chalk')
const axios = require('axios')

/**
 * Log build process
 */
const log = (msg) => console.log(chalk.white.bgMagenta.bold(`\n${msg}\n`))

exports.createPages = async ({ actions }) => {
  log('Creating pages...')

  // const { createPage } = actions
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  log('Creating nodes...')

  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const posts = res.data

  posts.forEach((post) => {
    const node = {
      title: post.title,
      body: post.body,
      // Node ID must be globally unique
      id: createNodeId(`post-${post.id}`),
      // ID to the parent node
      parent: null,
      // ID to the children nodes
      children: [],
      // Internal fields are important to Gatsby
      internal: {
        // Type must be globally unique (query all<type> will be created)
        type: 'Placeholder',
        // mediaType: 'json',
        content: JSON.stringify(post),
        contentDigest: createContentDigest(post.title),
      },
    }

    actions.createNode(node)
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  log('Creating custom schemas...')

  const typeDefs = `
    type Post {
      id: ID!
      title: String!
      body: String!
      wordCount: Int!
      isActive: Boolean!
      tags: [String]
    }

    input TitleFilter {
      eq: String
      in: String
    }
  `

  actions.createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  log('Creating custom resolvers...')

  const resolvers = {
    Query: {
      allPosts: {
        type: ['Post'],
        args: {
          filter: `input PostFilterInput { title: TitleFilter }`,
          limit: 'Int',
        },
        resolve(source, args, context, info) {
          const { filter, limit } = args
          const {
            title: { eq },
          } = filter || {}

          let posts = [
            {
              id: '1',
              title: 'post1',
              body: 'post1',
              wordCount: 200,
              isActive: true,
              tags: ['one', 'two'],
            },
            {
              id: '2',
              title: 'post2',
              body: 'post2',
              wordCount: 300,
              isActive: false,
              tags: ['three', 'four'],
            },
          ]

          if (eq) {
            posts = posts.filter((post) => post.title === eq)
          }

          return posts
        },
      },
    },
  }

  createResolvers(resolvers)
}

exports.onCreateWebpackConfig = ({ actions }) => {
  log('Setting custom webpack configurations...')

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@lib': path.resolve(__dirname, './src/lib'),
      },
    },
  })
}
