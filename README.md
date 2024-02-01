# Clean Architecture Node.js TypeScript API

## Descrição

Este é um projeto de API Node.js desenvolvido em TypeScript, seguindo os princípios da Clean Architecture. A Clean Architecture é uma abordagem de design de software que promove a separação de preocupações e a escalabilidade do código.

## Requisitos

- Node.js (v18.13.0 ou superior)
- npm ou yarn
- Banco de dados (Mysql, mongoDb)


## Configuração

Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias:

```
PORT=3000
DATABASE_URL=mongodb://localhost:27017/seu-banco-de-dados
```

## Scripts Disponíveis

* npm run dev: Inicia o servidor de desenvolvimento com o ts-node-dev.
* npm run build: Compila o código TypeScript para JavaScript.
* npm start: Inicia o servidor em ambiente de produção.

## Estrutura do projeto

```
src/
|-- domain/
|   |-- entities/
|   |-- usecases/
|-- infra/
|   |-- database/
|   |-- http/
|-- presentation/
|   |-- controllers/
|   |-- routes/
|-- index.ts
|-- server.ts
```

* domain: Contém as entidades de negócio e casos de uso da aplicação.
* infra: Responsável pela implementação de detalhes técnicos, como acesso a banco de dados e comunicação HTTP.
* presentation: Lida com a comunicação entre a aplicação e o mundo exterior, incluindo controladores e rotas.