const path = require(`path`)

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const techsAndTools = [
    {
      name: "Languages",
      values: ["Python", "Node.js", "SASS", "SQL"],
    },
    {
      name: "Frameworks",
      values: ["Django", "Flask", "Express", "ReactJS"],
    },
    {
      name: "Servers",
      values: ["Linux", "Docker", "DigitalOcean", "NginX"],
    },
    {
      name: "Data",
      values: ["PostgreSQL", "MongoDB", "ElasticSearch", "Pandas"],
    },
    {
      name: "Also Worked With",
      values: ["Angular", "Typescript", "PHP", "AWS"],
    },
    {
      name: "Currently Exploring",
      values: [
        "C",
        "DevOps",
        "Domain Driven Design",
        "Network Programming",
        "Flutter",
      ],
    },
  ]

  const jobs = [
    {
      date: "2019/Present",
      position: "Founder",
      company: "Himitsu.co",
      about:
        "Himitsu is a private and secure online journal. I built the entire product on my own, front to back, from the initial design to the deployment strategy.",
      location: "Paris",
      stack: [
        "Django",
        "PyTest",
        "React",
        "Docker",
        "PostgreSQL",
        "ElasticSearch",
        "Gitlab CI",
      ],
    },
    {
      date: "2018/2019",
      position: "Consultant",
      company: "LinkValue",
      about:
        "While consulting at LinkValue, I had the opportunity to work on a wide variety of projects from traditional web applications to embedded programming, mostly in startups.",
      location: "Paris",
      stack: [
        "Python",
        "Pandas",
        "Node.js",
        "Express.js",
        "Angular",
        "PostgreSQL",
        "Linux",
      ],
    },
    {
      date: "2016/2017",
      position: "Django Developer / Server Admin",
      company: "SuperTesteur (RIP)",
      about:
        "SuperTesteur was a UX testing tool aimed at web agencies. I was in charge of the Back-end and DevOps side of the equation while my friend (the founder) managed the front-end. It was a super fun and rewarding first experience in entrepreneurship.",
      location: "Paris",
      stack: ["Python", "React", "Django 1.8", "NginX", "PostgreSQL", "Linux"],
    },
    {
      date: "2016",
      position: "Volunteer",
      company: "Codebar.io",
      about:
        "Codebar is non-profit whose goal is to empower under-represented groups learn software development through free workshops and meetups. For the brief time I spent there, I helped students with the lessons and their projects.",
      location: "Brighton, UK",
      stack: ["HTML", "CSS", "SASS", "Javascript", "Git", "Node.js", "MacOS"],
    },
    {
      date: "2015",
      position: "Front-end Developer",
      company: "BozBoz",
      about: "Same as Neptik, but in a bigger team and with larger clients.",
      location: "Brighton, UK",
      stack: ["HTML", "SASS", "Gulp", "PHP", "Laravel", "MySQL/MariaDB"],
    },
    {
      date: "2015",
      position: "Front-end Developer Internship",
      company: "Neptik",
      about:
        "Neptik is a digital agency based in the North Laines area of Brighton. As an intern, I was paired with a senior developer and a designer and was tasked with developing responsive websites for the agency's clients.",
      location: "Brighton, UK",
      stack: [
        "HTML",
        "SASS",
        "Gulp",
        "PHP",
        "Wordpress",
        "Vagrant",
        "MySQL/MariaDB",
      ],
    },
  ]

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
      stack: ["Python 3", "CLI", "D-Bus", "Linux"],
      openSource: true,
    },
  ]

  jobs.forEach((job, idx) => {
    const node = {
      date: job.date,
      about: job.about,
      position: job.position,
      company: job.company,
      location: job.location,
      stack: job.stack,
      id: createNodeId(idx),
      internal: {
        type: "Job",
        contentDigest: createContentDigest(job),
      },
    }
    actions.createNode(node)
  })

  techsAndTools.forEach((category, idx) => {
    const node = {
      name: category.name,
      values: category.values,
      id: createNodeId(idx),
      internal: {
        type: "Technology",
        contentDigest: createContentDigest(category),
      },
    }
    actions.createNode(node)
  })

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
