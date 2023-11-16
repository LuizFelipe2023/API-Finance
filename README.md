# API-Finance
Título: Finance API

Descrição:
Esta API fornece serviços para gerenciar transações financeiras, metas de gastos mensais e controle de usuários.

Tecnologias Usadas:
Javascript, Express, Mongodb,Dotenv, JWT Tokens e Bcryptjs.

## Configuração do Banco de Dados

Certifique-se de criar um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```dotenv
db_user=seu_usuario_do_banco
db_password=sua_senha_do_banco

Configuração do JWT

Certifique-se de adicionar a seguinte variável de ambiente ao seu arquivo .env para a assinatura e verificação do token JWT:

dotenv

JWT_SECRET=sua_chave_secreta_jwt

Como Executar

    Instale as dependências:

    bash

npm install

Inicie o servidor:

bash

    npm start

O servidor será iniciado em http://localhost:3000 por padrão.
Esquema de Usuário

O arquivo userModel.js contém o esquema para os usuários. O esquema define a estrutura dos usuários e é usado pelo Mongoose para interagir com o MongoDB.

javascript

// userModel.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
      email: {type: String, required: true, unique:true},
      password: {type: String, required: true},
      role: {type: String, required: true}
});

const User = mongoose.model('User', userSchema);

export default User;

Esquema de Transação

O arquivo transactionModel.js contém o esquema para as transações financeiras. O esquema define a estrutura das transações e é usado pelo Mongoose para interagir com o MongoDB.

javascript

// transactionModel.js

import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
      type: {type: String, required: true, enum :['income','expense']},
      amount: {type: Number, required: true},
      category: {type: String, required: true},
      description: {type: String},
      date: {type: Date, default: Date.now},
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;


Endpoints:

    Registrar Usuário:
        Endpoint: /users/register
        Método: POST
        Descrição: Registra um novo usuário.
        Campos:
            email (string): E-mail do usuário.
            password (string): Senha do usuário.
            role (string): Função do usuário (ex. "admin", "user").

    Login de Usuário:
        Endpoint: /users/login
        Método: POST
        Descrição: Autentica um usuário existente.
        Campos:
            email (string): E-mail do usuário.
            password (string): Senha do usuário.

    Criar Transação:
        Endpoint: /transactions/create
        Método: POST
        Descrição: Cria uma nova transação.
        Campos:
            type (string): Tipo de transação ("income" ou "expense").
            amount (number): Valor da transação.
            category (string): Categoria da transação.
            description (string): Descrição da transação.

    Listar Todas as Transações:
        Endpoint: /transactions/
        Método: GET
        Descrição: Retorna todas as transações.

    Detalhes da Transação por ID:
        Endpoint: /transactions/:id
        Método: GET
        Descrição: Retorna detalhes de uma transação específica com base no ID.

    Atualizar Transação por ID:
        Endpoint: /transactions/:id
        Método: PUT
        Descrição: Atualiza uma transação existente com base no ID.
        Campos:
            type (string): Tipo de transação ("income" ou "expense").
            amount (number): Valor da transação.
            category (string): Categoria da transação.
            description (string): Descrição da transação.

    Excluir Transação por ID:
        Endpoint: /transactions/:id
        Método: DELETE
        Descrição: Exclui uma transação existente com base no ID.

    Obter Total de Receitas Menos Despesas:
        Endpoint: /transactions/totals
        Método: GET
        Descrição: Retorna o total de receitas menos despesas.

    Obter Média Mensal de Despesas:
        Endpoint: /transactions/averages
        Método: GET
        Descrição: Retorna a média mensal de despesas.
    Autenticação:

    Todos os endpoints, exceto /users/register e /users/login, requerem autenticação. Certifique-se de incluir um token válido no cabeçalho Authorization para acessar esses recursos.

Recursos Adicionais:

    Consulte a documentação completa para obter informações detalhadas sobre cada endpoint, campos necessários e respostas esperadas.
