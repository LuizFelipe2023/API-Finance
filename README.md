# API-Finance
Título: Finance API

Descrição:
Esta API fornece serviços para gerenciar transações financeiras, metas de gastos mensais e controle de usuários.
Tecnologias Usadas:
Javascript, Express, Mongodb, JWT Tokens e Bcryptjs
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
