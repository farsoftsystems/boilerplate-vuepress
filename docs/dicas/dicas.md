---
title: Dicas
---

## Formatação do Código

https://github.com/sheerun/prettier-standard

```
npm install -g prettier-standard
```

Criar o arquivo `.prettierrc`

```json
{
  "semi": false
}
```

Deixar o `package.json` na parte de scripts conforme o código de exemplo abaixo:

```json
{
  "name": "api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/index.ts",
    "format": "prettier-standard --format",
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "linters": {
      "**/*": ["prettier-standard --lint", "git add"]
    }
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "nodemon": "^1.19.4",
    "sucrase": "^3.10.1",
    "typescript": "^3.6.4"
  },
  "dependencies": {
    "graphql-yoga": "^1.18.3"
  }
}
```
