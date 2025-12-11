Projeto de Certificação: Simulador de Postagem (Requisição POST com Fetch API)
Este projeto simula a criação e visualização imediata de um post de blog/rede social, demonstrando a comunicação assíncrona com uma API externa (JSONPlaceholder) usando o método POST.

O objetivo principal deste projeto de certificação foi aplicar e consolidar os seguintes conceitos essenciais do desenvolvimento Front-end:

Estrutura de Aplicação: Criação de uma interface de usuário (HTML/CSS) com um formulário dedicado à entrada de dados e um card de prévia dedicado à saída (renderização).

Comunicação Assíncrona: Utilização do fetch API combinado com async/await para realizar requisições não bloqueantes.

Método HTTP POST: Envio de dados formatados (title, body, userId) para um endpoint da API de testes.

Manipulação do DOM (Document Object Model): Captura de inputs e atualização dinâmica dos elementos de saída (#renderizador-titulo e #renderizador-conteudo) com a resposta da API.

Tratamento de Eventos: Prevenção do comportamento padrão de submit do formulário (event.preventDefault()).

Tecnologias UtilizadasTecnologiaFunção PrincipalHTML5Estrutura semântica e definição dos ids de entrada e saída.CSS3Estilização clean focada no layout de card para melhor UX.JavaScript (ES6+)Lógica de requisição POST e manipulação de eventos.JSONPlaceholderAPI de testes utilizada para simular o endpoint de criação de posts.
