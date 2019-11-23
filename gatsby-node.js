exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const projects = [
    {
      title: "Himitsu.co",
      description:
        "is a secure online journal built with django and react. You should try it.",
      url: "https://himitsu.co",
    },
    {
      title: "Hakka-Nyusu.xyz",
      description:
        "is what HackerNews would look like if it was run by a cyberpunk nerd who knows ReactJS.",
      url: "https://hakka-nyusu.xyz",
    },
    {
      title: "Chevette",
      description: "is a python 3 static site generator I'm working on.",
      url: "https://github.com/Zabanaa/chevette",
    },
    {
      title: "Molly",
      description:
        "is a multithreaded tcp port scanner that I wrote in python 3.",
      url: "https://github.com/Zabanaa/molly",
    },
    {
      title: "WyPy",
      description:
        "is a d-bus command line interface for NetworkManager. Can you guess the language ?",
      url: "https://github.com/Zabanaa/wypy",
    },
  ]

  projects.forEach((project, idx) => {
    const node = {
      title: project.title,
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
