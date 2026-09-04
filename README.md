# 🧪 Automação de Testes E2E — Santos Store

![Playwright](https://img.shields.io/badge/Playwright-2E2E2E?logo=playwright\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js\&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubactions\&logoColor=white)

Projeto de **automação de testes E2E** desenvolvido com **Playwright e TypeScript**, criado como parte do meu portfólio de estudos em **Qualidade de Software e Automação de Testes**.

O projeto utiliza uma loja virtual como aplicação de estudo para demonstrar a implementação de cenários automatizados, organização de código utilizando **Page Object Model (POM)**, reutilização de componentes, tipagem com TypeScript e execução dos testes através de **GitHub Actions**.

> ⚠️ **Disclaimer**
>
> Este projeto não possui qualquer vínculo, parceria, patrocínio, autorização ou participação do Santos Futebol Clube, da Santos Store ou de seus representantes.
>
> A aplicação é utilizada exclusivamente para fins educacionais, estudo e demonstração técnica de automação de testes.

---

## 🎯 Objetivos do projeto

Este projeto tem como objetivo demonstrar conhecimentos práticos em:

* Automação de testes End-to-End
* Playwright
* TypeScript
* Page Object Model (POM)
* Assertions e validações
* Organização e reutilização de código
* Locators
* Tipagem e modelos com TypeScript
* Massa de dados para testes
* Testes positivos e negativos
* Automação de fluxos de e-commerce
* Integração contínua com GitHub Actions
* Geração de evidências e relatórios

---

## 🛠️ Tecnologias

| Tecnologia         | Utilização                    |
| ------------------ | ----------------------------- |
| **Playwright**     | Automação E2E                 |
| **TypeScript**     | Linguagem de programação      |
| **Node.js**        | Ambiente de execução          |
| **Yarn / npm**     | Gerenciamento de dependências |
| **GitHub Actions** | CI/CD                         |
| **Git**            | Controle de versão            |

O Playwright possui suporte nativo a TypeScript e fornece o Playwright Test como test runner para criação e execução de testes E2E.

---

## 🏗️ Estrutura do projeto

```text
santos-store-playwright-ts/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── e2e/
│   ├── busca.spec.ts
│   └── carrinho.spec.ts
│
├── support/
│   ├── pages/
│   │   └── lojas/
│   │       ├── homePage.ts
│   │       ├── searchPage.ts
│   │       └── cartPage.ts
│   │
│   ├── models/
│   │   ├── CamisaModel.ts
│   │   └── Camisa.json
│   │
│   └── helpers/
│
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── yarn.lock
```

### 📂 `e2e/`

Contém os cenários de teste automatizados.

Os arquivos `.spec.ts` representam os comportamentos que devem ser validados na aplicação.

### 📂 `support/pages/`

Contém os **Page Objects**, centralizando:

* Locators
* Ações da página
* Navegação
* Comportamentos reutilizáveis

Essa separação evita que a implementação dos elementos da aplicação fique diretamente dentro dos cenários.

### 📂 `support/models/`

Contém os modelos e estruturas utilizados para representar os dados dos testes.

Exemplo:

```typescript
CamisaModel
```

Também contém arquivos de dados utilizados como massa de teste.

### 📂 `support/helpers/`

Contém funções auxiliares e comportamentos reutilizáveis entre diferentes testes.

### 📂 `.github/workflows/`

Contém o pipeline de **GitHub Actions**, responsável pela execução automatizada dos testes.

---

# 🧪 Cenários automatizados

## 🔎 Busca de produtos

### Cenário 01 — Pesquisar produto existente

```text
Acessar a Santos Store
        ↓
Pesquisar produto
        ↓
Exibir resultado
        ↓
Validar produto encontrado
```

**Validações realizadas:**

* Pesquisa do produto
* Retorno do resultado
* Informações apresentadas

---

### Cenário 02 — Pesquisar produto inexistente

```text
Acessar a Santos Store
        ↓
Pesquisar produto inexistente
        ↓
Nenhum resultado encontrado
        ↓
Validar mensagem apresentada
```

O cenário também demonstra a utilização de **teste negativo**, validando o comportamento esperado da aplicação para uma entrada sem resultado.

---

# 🛒 Fluxo de carrinho

### Cenário 03 — Adicionar produto ao carrinho

```text
Pesquisar produto
        ↓
Selecionar produto
        ↓
Acessar página do produto
        ↓
Selecionar tamanho
        ↓
Adicionar ao carrinho
        ↓
Acessar carrinho
        ↓
Validar produto adicionado
```

Este fluxo representa um cenário E2E completo, passando por diferentes páginas e validando o resultado final da operação.

---

# 🧩 Arquitetura de testes

A automação utiliza o padrão **Page Object Model (POM)** para separar a implementação das páginas dos cenários de teste.

```text
                 Teste E2E
                    │
                    ▼
              busca.spec.ts
              carrinho.spec.ts
                    │
                    ▼
              Page Objects
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
       HomePage  SearchPage CartPage
          │         │         │
          └─────────┼─────────┘
                    ▼
                Aplicação
```

Por exemplo, o cenário pode trabalhar com uma abstração:

```typescript
await searchPage.pesquisarCamisa(camisa);
```

Em vez de concentrar diretamente os locators dentro do teste:

```typescript
await page.locator('...').fill(camisa.name);
```

### Benefícios

* Maior legibilidade dos testes
* Reutilização de código
* Manutenção centralizada dos locators
* Separação de responsabilidades
* Facilidade para evolução da automação

---

# 📊 Massa de dados

O projeto utiliza **models e arquivos de dados** para separar os dados de teste da implementação dos cenários.

Exemplo:

```text
support/
└── models/
    ├── CamisaModel.ts
    └── Camisa.json
```

Essa abordagem permite evoluir posteriormente para:

* Massa de dados dinâmica
* Testes parametrizados
* Data-driven testing
* Fixtures
* Geração automática de dados

---

# ⚙️ Instalação

### 1. Clonar o projeto

```bash
git clone https://github.com/gabrielcarneirodemelo/santos-store-playwright-ts.git
```

### 2. Acessar o diretório

```bash
cd santos-store-playwright-ts
```

### 3. Instalar as dependências

Utilizando Yarn:

```bash
yarn install
```

Ou npm:

```bash
npm install
```

### 4. Instalar os browsers do Playwright

```bash
npx playwright install
```

---

# ▶️ Execução dos testes

### Executar todos os testes

```bash
npx playwright test
```

### Executar com navegador visível

```bash
npx playwright test --headed
```

### Executar em modo Debug

```bash
npx playwright test --debug
```

### Executar um arquivo específico

```bash
npx playwright test e2e/carrinho.spec.ts
```

### Visualizar relatório HTML

```bash
npx playwright show-report
```

---

# 🌎 Variáveis de ambiente

A URL da aplicação é configurada através da variável:

```env
BASE_URL=https://www.santosstore.com.br/
```

O arquivo `.env` deve ser utilizado somente localmente e **não deve ser versionado**.

No GitHub Actions, a variável pode ser configurada através das variáveis do repositório/workflow.

---

# 🔄 CI/CD — GitHub Actions

O projeto possui integração com **GitHub Actions** para execução automatizada dos testes.

O workflow pode ser executado através de:

```text
Push
  ↓
GitHub Actions
  ↓
Checkout
  ↓
Setup Node.js
  ↓
Instalação das dependências
  ↓
Instalação dos browsers
  ↓
Execução dos testes
  ↓
Geração das evidências
  ↓
Relatório
```

Isso permite validar automaticamente a automação a cada alteração no código.

---

# 📸 Evidências de execução

Em caso de falha, o Playwright pode disponibilizar evidências para auxiliar na análise do problema:

* 📸 Screenshots
* 🎥 Vídeos
* 🔍 Traces
* 📊 HTML Report

Essas evidências facilitam a investigação de falhas durante a execução dos testes.

---

# 📈 Roadmap

Novos cenários e melhorias serão adicionados conforme a evolução do projeto.

### E-commerce

* [x] Pesquisa de produto existente
* [x] Pesquisa de produto inexistente
* [x] Adicionar produto ao carrinho
* [ ] Validar filtros de produtos
* [ ] Validar ordenação
* [ ] Validar detalhes do produto
* [ ] Alterar quantidade no carrinho
* [ ] Remover produto do carrinho
* [ ] Validar subtotal e total
* [ ] Testar login
* [ ] Testar checkout

### Automação

* [x] Page Object Model
* [x] Models
* [x] Helpers
* [x] Massa de dados
* [x] GitHub Actions
* [ ] Fixtures
* [ ] Testes parametrizados
* [ ] Massa de dados dinâmica
* [ ] Melhorias no pipeline CI/CD
* [ ] Relatórios avançados
* [ ] Execução cross-browser

---

# 🎓 Objetivo profissional

Este repositório faz parte do meu portfólio de estudos em **Qualidade de Software, Automação de Testes e Engenharia de QA**.

O foco é demonstrar não apenas a criação de scripts automatizados, mas também a aplicação de práticas utilizadas na construção de projetos de automação:

```text
Código organizado
       +
Page Object Model
       +
TypeScript
       +
Assertions
       +
Massa de dados
       +
CI/CD
       +
Evidências
       ↓
Automação E2E sustentável
```

---

# ⚠️ Considerações sobre o ambiente

Este projeto utiliza uma aplicação de terceiros como objeto de estudo.

Os testes possuem foco em funcionalidades não destrutivas e em demonstração de técnicas de automação.

Não são realizadas ações destinadas a causar indisponibilidade, impacto ou alteração indevida dos dados da aplicação.

---

# 📄 Licença

Este código é disponibilizado exclusivamente para fins de **estudo e demonstração técnica**.

A aplicação utilizada como objeto de testes, incluindo seus conteúdos, marcas, imagens e demais elementos, pertence aos seus respectivos proprietários.