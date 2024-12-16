export default {
  index: {
    type: "page",
    title: "Microbolt",
    display: "hidden",
    theme: {
      layout: "raw"
    }
  },
  docs: {
    type: "page",
    title: "Documentation"
  },
  ansible: {
    type: "page",
    title: "Ansible"
  },
  resources: {
    type: "menu",
    title: "Resources",
    items: {
      blog: {
        type: "page",
        title: "Blog \u2197",
        href: "https://bloc.microbolt.guide",
        newWindow: true
      },
      config: {
        title: "Configs",
        href: "/config",
        newWindow: true
      }
    }
  },
  about: {
    type: "page",
    title: "About",
    theme: {
      typesetting: "article"
    }
  },
  faq: {
    type: "page",
    title: "FAQ"
  }
}