# Como criar uma documentação em Markdown

## Instalação do Boilerplate

1. Entrar no endereço abaixo:

[Link do boilerplate da Farsoft-Systems](https://github.com/farsoftsystems/boilerplate-vuepress)

2. Copiar o link para clonar:

```
https://github.com/farsoftsystems/boilerplate-vuepress.git
```

3. Criar o diretório raiz para guardar as documentações. Exemplo: `c:\documentacoes`

```
Entrar no prompt do windows: INICIAR > EXECUTAR > DIGITE: cmd
cd\
mkdir documentacoes
cd\documentacoes
git clone https://github.com/farsoftsystems/boilerplate-vuepress.git nomedadocumentacao
```

4. Entrar no diretório criado e rodar os seguintes comandos:

```
cd nomedadocumentacao
npm i
npm run dev
Abrir no navegador o endereço: http://localhost:8080
```

## Como usar o boilerplate

1. Criar um arquivo com a extensão `.md` dentro do seguinte diretório: `docs\manual\`.
Exemplo:

`docs\manual\Exemplo.md`

2. Referenciar o arquivo **markdown** no seguinte arquivo de configuração:
`.vuepress\config.js` conforme o código abaixo:

```js{42,43}
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
       '/manual/Markdown.md',
       '/manual/Exemplo.md',
       ['/manual/Plugins.md', 'Plugins'],
       ['/manual/Tutorial.md', 'Tutorial'],
       '/dicas/dicas.md',
     ]
  }
}
```
