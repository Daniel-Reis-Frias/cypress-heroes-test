# 🦸 Cypress Heroes Test

Projeto de automação de testes E2E desenvolvido com **Cypress** e **TypeScript**, focado em testar a aplicação [Cypress Heroes](https://github.com/cypress-io/cypress-heroes) — um app fullstack de gerenciamento de heróis criado pela equipe do Cypress para fins educacionais.

---

## 📌 Sobre o projeto

Este projeto automatiza os principais fluxos da aplicação **Cypress Heroes**, validando operações de listagem, criação, edição e remoção de heróis. O uso de TypeScript adiciona tipagem e maior confiabilidade aos scripts de teste.

A aplicação base é um projeto fullstack composto por:
- **Frontend:** React + Vite (pasta `client/`)
- **Backend:** NestJS + Prisma ORM (pasta `server/`)

> ⚠️ **Importante:** os testes requerem que tanto o servidor quanto o cliente estejam rodando localmente antes da execução. Veja as instruções abaixo.

---

## ✅ Cenários testados

- Listagem de heróis
- Busca de herói por nome
- Criação de novo herói
- Edição de herói existente
- Exclusão de herói
- Validações de campos obrigatórios

---

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) — Framework de testes E2E
- TypeScript — Tipagem estática nos scripts de teste
- Node.js — Ambiente de execução
- NestJS — Backend da aplicação testada
- Prisma — ORM do banco de dados

---

## 📂 Estrutura do projeto

```
cypress-heroes-test/
├── client/                  # Frontend React
│   ├── cypress/
│   │   ├── e2e/             # Arquivos de teste (.cy.ts)
│   │   ├── fixtures/        # Dados de teste (JSON)
│   │   └── support/         # Comandos customizados e tasks
│   └── cypress.config.ts
├── server/                  # Backend NestJS
│   └── prisma/              # Schema e seed do banco de dados
└── README.md
```

---

## ▶️ Como executar

### Pré-requisitos

- Node.js instalado ([download aqui](https://nodejs.org/))
- Banco de dados configurado conforme instruções do projeto base

### 1. Subir o servidor (backend)

```bash
cd server
npm run start:dev
```

### 2. Subir o cliente (frontend) — em outro terminal

```bash
cd client
npm run dev
```

### 3. Executar os testes — em outro terminal

**Com interface gráfica (Cypress UI):**
```bash
cd client
npx cypress open
```

**Via linha de comando (headless):**
```bash
cd client
npx cypress run
```

---

## 🧠 Aprendizados

- Uso de TypeScript com Cypress para maior segurança nos testes
- Testes de CRUD completo em uma aplicação fullstack real
- Organização de specs por funcionalidade
- Uso de `fixtures` para dados reutilizáveis

---

## 👨‍💻 Autor

**Daniel Reis**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danielreisfrias/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/Daniel-Reis-Frias)
