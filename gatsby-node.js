const path = require(`path`)

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const projects = [
    {
      title: "Himitsu.co",
      description:
        "is a secure online journal built with django and react. You should try it.",
      url: "https://himitsu.co",
      stack: [
        "Python 3",
        "Django",
        "GitlabCI",
        "React",
        "Docker",
        "PostgreSQL",
      ],
      openSource: false,
    },
    {
      title: "Hakka-Nyusu.xyz",
      description:
        "is what HackerNews would look like if it was run by a cyberpunk nerd who knows ReactJS.",
      url: "https://hakka-nyusu.xyz",
      stack: ["React", "SASS"],
      openSource: false,
    },
    {
      title: "Chevette",
      description: "is a python 3 static site generator I'm working on.",
      url: "https://github.com/Zabanaa/chevette",
      stack: ["Python 3", "Jinja2", "CLI"],
      openSource: true,
    },
    {
      title: "Molly",
      description:
        "is a multithreaded tcp port scanner that I wrote in python 3.",
      url: "https://github.com/Zabanaa/molly",
      stack: ["Python 3", "CLI", "Sockets", "Multi-Threading"],
      openSource: true,
    },
    {
      title: "WyPy",
      description:
        "is a d-bus command line interface for NetworkManager. Can you guess the language ?",
      url: "https://github.com/Zabanaa/wypy",
      stack: ["Python 3", "CLI", "D-Bus"],
      openSource: true,
    },
  ]

  projects.forEach((project, idx) => {
    const node = {
      title: project.title,
      stack: project.stack,
      openSource: project.openSource,
      description: project.description,
      url: project.url,
      id: createNodeId(idx),
      internal: {
        type: "Project",
        contentDigest: createContentDigest(project),
      },
    }
    actions.createNode(node)
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/Post.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
