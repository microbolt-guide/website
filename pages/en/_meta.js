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
      config: {
        title: "Configs",
        href: "/config",
        newWindow: true
      },
      l10n: {
        title: "Translate",
        href: "https://l10n.microbolt.guide",
        newWindow: true
      },
      blog: {
        title: "Blog",
        href: "https://bloc.microbolt.guide",
        newWindow: true
      },
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