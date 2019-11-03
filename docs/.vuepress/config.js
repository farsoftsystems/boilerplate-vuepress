module.exports = {
  title: 'Documentação',
  description: 'Documentação',  
  markdown: {
    lineNumbers: true,
    extractHeaders: [ 'h2', 'h3', 'h4' ]
  },
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  themeConfig: {
    repo: 'farnetani/boilerplate-vuepress',
    docsRepo: 'farnetani/boilerplate-vuepress',
    docsDir: 'docs',
    pages: 'docs',
    docsBranch: 'master',
    editLinks: true,
    nextLinks: true,
    prevLinks: true,
    editLinkText: 'Ajude a manter atualizado essa documentação!',
    lastUpdated: 'Última Atualização',
    searchPlaceholder: 'Pesquisar...',
    search: true,
    searchMaxSuggestions: 30,
    smoothScroll: true,
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Manual', link: '/manual/' },
      { text: 'Opções', 
        items: [
          { text: 'Farsoft Systems', link: 'http://www.farsoft.com.br' },
          { text: 'Github', link: 'https://github.com/farsoftsystems/' }
        ] 
      }
    ],
     displayAllHeaders: true, // Default: false     
     sidebar: [
       '/',
       ['/manual/Plugins.md', 'Plugins'],
       ['/manual/Tutorial.md', 'Tutorial'],
       '/dicas/dicas.md',
     ]
  }
}