# Brechó D&D Moda circular

Site institucional e catálogo para um brechó fictício, desenvolvido como parte do
**Projeto Integrador em Tecnologia da Informação II — Módulo 2** (UFMS Digital).

O projeto cumpre os requisitos do módulo: uso de um framework web (Angular), estruturação
semântica com HTML, estilização responsiva com CSS (Bootstrap 5 + SCSS) e documentação
das principais decisões de desenvolvimento.

## Stack

- **Angular 21** (standalone components, sem NgModules) + **TypeScript**
- **Bootstrap 5** (grid, componentes e utilitários) para responsividade
- **SCSS** para a paleta de cores e tipografia customizadas
- **Signals** (`signal`, `computed`, `input`) para estado reativo das páginas

## Estrutura

```
src/app/
├── core/                 # Modelo e serviço de dados (Produto, ProdutoService)
├── components/           # Navbar, Footer e ProdutoCard (componentes reutilizáveis)
│   └── <nome>/
│       ├── <nome>.ts
│       ├── <nome>.html
│       └── <nome>.scss
├── pages/
│   ├── home/             # Página inicial (hero, como funciona, destaques)
│   ├── catalogo/         # Catálogo com filtro por categoria e busca por nome
│   ├── sobre/             # História e valores do brechó
│   └── contato/           # Formulário de contato (Angular Forms)
├── app.routes.ts         # Rotas da aplicação
└── app.ts / app.html      # Shell (navbar + router-outlet + footer)
```

## Decisões de desenvolvimento

- **Framework**: Angular foi escolhido por oferecer roteamento, componentização e
  reatividade (signals) nativos, sem necessidade de bibliotecas externas de estado.
  Standalone components foram usados no lugar de NgModules, seguindo a abordagem atual
  recomendada pela documentação oficial.
- **Responsividade**: Bootstrap 5 foi integrado via SCSS (não apenas CSS compilado), para
  permitir sobrescrever as variáveis de cor, tipografia e raio de borda do próprio
  Bootstrap (`$primary`, `$border-radius`, `$font-family-base` etc.) e manter a
  identidade visual consistente em qualquer breakpoint.
- **Identidade visual**: a paleta (creme, bege, ocre, terracota, marrom-barro,
  cinza-concreto, verde-oliva) e o motivo recorrente de arcos foram inspirados na
  **D&D Store**, projeto de interiores da Babbie Arquitetura e Interiores — sem
  qualquer vínculo comercial com a marca (ver aviso na página "Sobre").
- **Dados**: como não há back-end nesta etapa, o catálogo usa dados mockados em
  `core/produto.ts`, isolados em um serviço Angular (`ProdutoService`) para facilitar a
  futura substituição por uma API real sem alterar os componentes de página.
- **Acessibilidade e semântica**: uso de `<nav>`, `<main>`, `<footer>`, `<article>`,
  labels associadas a inputs e atributos `aria-label`/`aria-hidden` onde pertinente.

## Como rodar localmente

```bash
npm install --legacy-peer-deps
ng serve
```

> Nota: no Windows, a instalação de dependências pode falhar com o erro
> `Cannot read properties of null (reading 'edgesOut')`, um bug conhecido do npm 10.x ao
> resolver peer dependencies do Vitest. A flag `--legacy-peer-deps` contorna o problema.

Acesse `http://localhost:4200/`.

## Build de produção

```bash
ng build
```

Os artefatos são gerados em `dist/brecho`.

## Banco de dados (Módulo 3)

A modelagem e os scripts SQL do sistema (categoria, produto, cliente, pedido e
item_pedido) estão em [`database/`](database/README.md), com schema, dados de
exemplo, consultas e um script que executa tudo via SQLite.
