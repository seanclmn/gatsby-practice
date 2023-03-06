const path = require("path")
const postTemplate = path.resolve(`./src/templates/post.tsx`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query blogs {
      allMdx(sort: {frontmatter: {date: DESC}}) {
        nodes {
          id
          body
          frontmatter {
            title
            date
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  posts.forEach(node => {
    console.log("content file path:")
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: `blogs/${node.frontmatter.date}`,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: `${postTemplate}?__contentFilePath=path/${node.frontmatter.date}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}