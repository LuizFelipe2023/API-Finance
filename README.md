# Documentação da API Finance

Bem-vindo à documentação da API Finance, uma plataforma para gerenciamento de transações financeiras, metas de gastos mensais e controle de usuários.

## Visão Geral

A API Finance é desenvolvida utilizando tecnologias como Javascript, Express, MongoDB, Dotenv, JWT Tokens e Bcryptjs. Ela fornece endpoints para realizar operações relacionadas a usuários e transações financeiras.

### Base URL

A URL base para todos os endpoints é:

```http
http://localhost:3000


### Autenticação

Para acessar endpoints protegidos, é necessário incluir um token válido no cabeçalho Authorization nas requisições. Obtenha um token ao fazer login.

## Endpoints

1. **Registrar Usuário**

   - Endpoint: `/users/register`
   - Método: POST
   - Descrição: Registra um novo usuário.
   - Campos:
       - email (string): E-mail do usuário.
       - password (string): Senha do usuário.
       - role (string): Função do usuário (ex. "admin", "user").

2. **Login de Usuário**

   - Endpoint: `/users/login`
   - Método: POST
   - Descrição: Autentica um usuário existente.
   - Campos:
       - email (string): E-mail do usuário.
       - password (string): Senha do usuário.

3. **Criar Transação**

   - Endpoint: `/transactions/create`
   - Método: POST
   - Descrição: Cria uma nova transação.
   - Campos:
       - type (string): Tipo de transação ("income" ou "expense").
       - amount (number): Valor da transação.
       - category (string): Categoria da transação.
       - description (string): Descrição da transação.

4. **Listar Todas as Transações**

   - Endpoint: `/transactions/`
   - Método: GET
   - Descrição: Retorna todas as transações.

5. **Detalhes da Transação por ID**

   - Endpoint: `/transactions/:id`
   - Método: GET
   - Descrição: Retorna detalhes de uma transação específica com base no ID.

6. **Atualizar Transação por ID**

   - Endpoint: `/transactions/:id`
   - Método: PUT
   - Descrição: Atualiza uma transação existente com base no ID.
   - Campos:
       - type (string): Tipo de transação ("income" ou "expense").
       - amount (number): Valor da transação.
       - category (string): Categoria da transação.
       - description (string): Descrição da transação.

7. **Excluir Transação por ID**

   - Endpoint: `/transactions/:id`
   - Método: DELETE
   - Descrição: Exclui uma transação existente com base no ID.

8. **Obter Total de Receitas Menos Despesas**

   - Endpoint: `/transactions/totals`
   - Método: GET
   - Descrição: Retorna o total de receitas menos despesas.

9. **Obter Média Mensal de Despesas**

   - Endpoint: `/transactions/averages`
   - Método: GET
   - Descrição: Retorna a média mensal de despesas.

10. **Redefinir Senha do Usuário**

    - Endpoint: `/users/reset-password`
    - Método: POST
    - Descrição: Permite que um usuário redefina sua senha.

11. **Logout do Usuário**

    - Endpoint: `/users/logout`
    - Método: POST
    - Descrição: Desconecta o usuário, invalidando o token de acesso.

## Considerações Finais

Esta documentação fornece uma visão geral dos principais recursos e operações da API Finance. Para obter detalhes mais específicos sobre cada endpoint, consulte a documentação completa.

Fique Livre também pra fazer alterações no código através de pull requests.
