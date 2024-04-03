# Testes _end-to-end_ com Cypress

👋 Seja bem vindo(a)!

É muito bom tê-lo(a) aqui. Tenho certeza que você vai adorar este curso. ❤️

## O que você vai aprender

Durante o curso de testes _end-to-end_ (e2e) com Cypress, você vai aprender:

- Como fazer o _setup_ de um projeto Cypress
- Como analisar estaticamente o código de teste para garantir o uso de convenções definidas pela comunidade
- Como criar testes e2e para diferentes funcionalidades de uma aplicação web, tais como _Sign up_, _Login_, CRUD, etc.
- Como testar recebimento de _e-mails_
- Como testar _upload_ de arquivos
- Como interagir com componentes renderizados dentro de iFrames
- Como interceptar requisições para tornar os testes mais robustos
- Como proteger dados sensíveis
- Como testar a responsividade da aplicação simulando seu uso em um dispositivo móvel
- Como armazenar a sessão do usuário no cache para otimizar o processo de autenticação
- Como criar e documentar comandos customizados
- Como configurar um _workflow_ de integração contínua com múltiplas fases e paralelização
- Como integrar os testes com o Cypress Cloud
- Como categorizar os testes e executá-los por suas _tags_
- Como documentar um projeto de testes e2e

## Pre-requirements

To clone and run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.34.1` while writing this doc)
- [Node.js](https://nodejs.org/en/) (I've used version `v18.15.0` while writing this doc)
- npm (I've used version `9.5.0` while writing this doc)

**Note:** When installing Node.js, npm is automatically installed. 🚀

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Configuring the environment variables

Before running the tests, some environment variables need to be set up.

Make a copy of the [`cypress.env.example.json`](./cypress.env.example.json) file as `cypress.env.json`, and set the appropriate values for all the variables.

**Note:** The `cypress.env.json` file is not tracked by git since it's listed in the `.gitignore` file.

## Running the tests

In this project, you can run tests in interactive and headless modes, both on desktop and tablet viewports.

### Headless mode

Run `npm test` (or `npm t` for short) to run all tests in headless mode using a desktop viewport.

Run `npm run test:tablet` to run the appropriate tests in headless mode using a tablet viewport.

### Interactive mode

Run `npm run cy:open` to open the __Cypress App__ to run tests in interactive mode using a desktop viewport.

Run `npm run cy:open:tablet` to open the __Cypress App__ to run tests in interactive mode using a tablet viewport.

___

Made with ❤️ by [Israel Faioli](https://github.com/israfaioli?tab=repositories).

