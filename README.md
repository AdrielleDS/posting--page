Projeto de Certificação 2: Postagem de blog

Este projeto tem como objetivo simular a criação e visualização imediata de um post em um blog ou rede social.
A aplicação demonstra a comunicação assíncrona com uma API externa (JSONPlaceholder) utilizando o método HTTP POST.

🎯 Objetivos do Projeto
Consolidar conceitos essenciais do desenvolvimento Front-end, incluindo:
- Estrutura de Aplicação: Interface em HTML/CSS com formulário para entrada de dados e card de pré-visualização para saída.
- Comunicação Assíncrona: Uso da Fetch API com async/await para requisições não bloqueantes.
- Método HTTP POST: Envio de dados formatados (title, body, userId) para o endpoint da API de testes.
- Manipulação do DOM: Captura de inputs e atualização dinâmica dos elementos de saída (#renderizador-titulo e #renderizador-conteudo) com a resposta da API.
- Tratamento de Eventos: Prevenção do comportamento padrão de envio do formulário com event.preventDefault().

🚀 Como funciona
- O usuário preenche o formulário com título e conteúdo.
- Ao enviar, os dados são enviados via POST para a API.
- A resposta da API é renderizada dinamicamente no card de pré-visualização.

🛠️Tecnologias Utilizadas

- HTML: Estrutura semântica e definição dos IDs de entrada e saída.
- CSS3: Estilização clean, com foco em layout de card para melhor experiência do usuário.
- JavaScript: Lógica da requisição POST e manipulação de eventos.
- JSONPlaceholder: API de testes utilizada para simular o endpoint de criação de posts.


📌 Observações
- Este projeto utiliza a API pública JSONPlaceholder, que não persiste os dados enviados.
- O foco é didático, para demonstrar conceitos de requisições assíncronas e manipulação do DOM.






