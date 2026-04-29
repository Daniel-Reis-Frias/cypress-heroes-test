# 🦸 Cypress Heroes Test

Projeto de automação de testes E2E desenvolvido com **Cypress** e **TypeScript**, focado em testar uma aplicação de gerenciamento de heróis. Faz parte do meu portfólio em QA e demonstra boas práticas de automação com tipagem estática.

---

## 📌 Sobre o projeto

Este projeto automatiza os principais fluxos da aplicação **Heroes**, validando operações de listagem, criação, edição e remoção de heróis. O uso de TypeScript adiciona tipagem e maior confiabilidade aos scripts de teste.

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

---

## 📂 Estrutura do projeto

```
cypress-heroes-test/
├── cypress/
│   ├── e2e/          # Arquivos de teste (.cy.ts)
│   ├── fixtures/     # Dados de teste (JSON)
│   └── support/      # Comandos customizados e configurações
├── cypress.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## ▶️ Como executar

### Pré-requisitos

- Node.js instalado ([download aqui](https://nodejs.org/))

### Instalação

```bash
npm install
```

### Executar com interface gráfica (Cypress UI)

```bash
npx cypress open
```

### Executar via linha de comando (headless)

```bash
npx cypress run
```

---

## 🧠 Aprendizados

- Uso de TypeScript com Cypress para maior segurança nos testes
- Testes de CRUD completo em uma aplicação real
- Organização de specs por funcionalidade
- Uso de `fixtures` para dados reutilizáveis
- Aplicação do padrão Page Object (se aplicável)

---

## 👨‍💻 Autor

**Daniel Reis**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danielreisfrias/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/Daniel-Reis-Frias)

## 🧪 QA

Este projeto possui documentação de testes manuais.

📂 Acesse: /qa/test-cases
