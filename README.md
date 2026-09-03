# 🧪 Automação de Testes E2E — Santos Store

Projeto pessoal desenvolvido para **estudo e demonstração de conhecimentos em automação de testes de software**, utilizando **Playwright + TypeScript**.

A aplicação utilizada como objeto de estudo é a **Santos Store**.

> ⚠️ **Aviso / Disclaimer**
>
> Este projeto **não possui qualquer vínculo, parceria, patrocínio, autorização ou participação do Santos Futebol Clube, da Santos Store ou de seus representantes**.
>
> A utilização do site neste projeto ocorre **exclusivamente para fins educacionais, de estudo e demonstração técnica** de automação de testes.
>
> Este repositório não representa a opinião, os sistemas ou os processos oficiais do Santos FC ou da Santos Store.

---

## 📌 Objetivo

O objetivo deste projeto é demonstrar, na prática, conhecimentos relacionados a:

* Automação de testes E2E
* Playwright
* TypeScript
* Page Object Model (POM)
* Organização e reutilização de código
* Assertions e validações
* Modelos e tipagem com TypeScript
* Massa de dados para testes
* Testes positivos e negativos
* Integração contínua com GitHub Actions
* Geração de relatórios de testes

---

## 🛠️ Tecnologias utilizadas

| Tecnologia                                    | Utilização                            |
| --------------------------------------------- | ------------------------------------- |
| [Playwright](https://playwright.dev/)         | Automação de testes E2E               |
| [TypeScript](https://www.typescriptlang.org/) | Linguagem principal                   |
| Node.js                                       | Ambiente de execução                  |
| Yarn                                          | Gerenciamento de dependências         |
| GitHub Actions                                | CI/CD                                 |
| GitHub                                        | Versionamento e hospedagem do projeto |

---

## 🏗️ Estrutura do projeto

```text
santos-store-playwright-ts/
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
│   │   └── CamisaModel.ts
|   |   |
|   |   └── Camisa.json
│   │
│   └── helpers/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.ts
├── package.json
├── yarn.lock
├── tsconfig.json
└── .gitignore
```

### Organização

**`e2e/`**

Contém os cenários de teste automatizados. Os arquivos `.spec.ts` representam os comportamentos que devem ser validados.

**`support/pages/`**

Contém as implementações das páginas utilizando o padrão **Page Object Model**, centralizando os locators e ações realizadas na aplicação.

**`support/models/`**

Contém interfaces e modelos utilizados para representar os dados utilizados nos testes.

**`support/helpers/`**

Contém funções auxiliares e comportamentos reutilizáveis.

**`.github/workflows/`**

Contém a configuração do pipeline de **GitHub Actions**, responsável pela execução automatizada dos testes.

---

## 🧪 Cenários automatizados

### 🔎 Busca de produtos

**Cenário 01 — Pesquisar item existente**

```text
Acessar a Santos Store
↓
Pesquisar um produto existente
↓
Exibir o resultado
↓
Validar as informações do produto
```

**Cenário 02 — Pesquisar item inexistente**

```text
Acessar a Santos Store
↓
Pesquisar um produto inexistente
↓
Validar a mensagem apresentada pela aplicação
```

### 🛒 Carrinho

**Cenário 03 — Adicionar produto ao carrinho**

```text
Pesquisar produto
↓
Acessar produto
↓
Selecionar tamanho
↓
Adicionar ao carrinho
↓
Acessar carrinho
↓
Validar produto adicionado
```

Novos cenários serão adicionados conforme a evolução do projeto.

---

## 🧩 Arquitetura de testes

A automação utiliza **Page Object Model (POM)** para separar os cenários de teste da implementação dos elementos da aplicação.

De forma simplificada:

```text
.spec.ts
   │
   │  Cenário / comportamento a validar
   ↓
Page Object
   │
   │  Locators + ações da página
   ↓
Aplicação
```

Exemplo:

```typescript
await searchPage.pesquisarCamisa(camisa);
```

Em vez de manter diretamente o locator dentro do teste:

```typescript
await page.locator('...').fill(camisa.name);
```

Essa abordagem facilita manutenção, reutilização e organização da automação.

---

## ⚙️ Configuração

### Instalar dependências

```bash
yarn install
```

### Instalar browsers do Playwright

```bash
npx playwright install
```

### Executar os testes

```bash
npx playwright test
```

### Executar em modo debug

```bash
yarn playwright test --debug
```

### Executar com interface

```bash
npx playwright test --headed
```

### Visualizar relatório

```bash
npx playwright show-report
```

---

## 🌎 Variáveis de ambiente

A URL da aplicação é configurada através da variável:

```env
BASE_URL=https://www.santosstore.com.br/
```

O arquivo `.env` é utilizado apenas localmente e **não deve ser versionado**.

No GitHub Actions, a variável é disponibilizada através das **GitHub Actions Variables**.

---

## 🔄 CI/CD — GitHub Actions

O projeto possui um pipeline de integração contínua que executa os testes automaticamente.

O workflow é acionado em:

```text
Push → main/master
Pull Request → main/master
Execução manual → workflow_dispatch
```

Fluxo:

```text
Git Push
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
Geração do relatório
```

O relatório HTML do Playwright é disponibilizado como **Artifact** ao final da execução.

---

## 📊 Evidências

Em caso de falha, o Playwright pode gerar evidências como:

* Screenshots
* Vídeos
* Traces
* HTML Report

Esses recursos permitem analisar o comportamento da aplicação durante a execução dos testes.

---

## 🎯 Objetivos de evolução

Alguns dos próximos cenários planejados:

```text
□ Validar filtros de produtos
□ Validar ordenação
□ Validar informações do produto
□ Validar alteração de quantidade no carrinho
□ Validar remoção de produtos
□ Testes de login
□ Testes de checkout
□ Testes parametrizados
□ Massa de dados dinâmica
□ Fixtures
□ Melhorias no pipeline CI/CD
```

---

## ⚠️ Considerações sobre o ambiente

Este projeto utiliza um **site real e de terceiros** como objeto de estudo.

Os testes são desenvolvidos com foco em **funcionalidades não destrutivas e em demonstração de técnicas de automação**.

Não são realizadas, como parte deste projeto, ações destinadas a causar impacto, indisponibilidade ou alteração indevida dos dados da aplicação.

---

## 👨‍💻 Sobre este projeto

Este repositório faz parte do meu portfólio de estudos em **Qualidade de Software e Automação de Testes**.

O foco principal é demonstrar a aplicação prática de conceitos de automação utilizando **Playwright e TypeScript**, juntamente com práticas de organização de código e integração contínua.

---

## 📄 Licença

Este código é disponibilizado para fins de **estudo e demonstração técnica**.

A aplicação utilizada como objeto de testes, seus conteúdos, marcas, imagens e demais elementos pertencem aos seus respectivos proprietários.
