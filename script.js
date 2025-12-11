
const postForm = document.querySelector('#post-form');
const tituloInput = document.querySelector('#titulo-input');
const conteudoTextarea = document.querySelector('#conteudo-textarea');

//Elementos de Renderização (para exibir a resposta da API)
const renderizadorTitulo = document.querySelector('#renderizador-titulo');
const renderizadorConteudo = document.querySelector('#renderizador-conteudo');

//URL da API de Testes
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

postForm.addEventListener('submit', async (event) => {
    //Impedir que a página recarregue
    event.preventDefault();

    //Capturar os valores
    const titulo = tituloInput.value;
    const conteudo = conteudoTextarea.value;

    const dadosParaEnviar = {
        title: titulo,
        body: conteudo,
        userId: 1
    };

    renderizadorTitulo.innerHTML = 'Enviando... ⏳';
    renderizadorConteudo.innerHTML = 'Aguardando resposta da API...';

    try {
        //REALIZAR A REQUISIÇÃO POST
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(dadosParaEnviar),
        });

        if (!response.ok) {
            throw new Error(`Erro: Status ${response.status} ao tentar postar.`);
        }

        //Converte a resposta JSON da API (que contém o post criado)
        const postRetornado = await response.json();
        renderizadorTitulo.innerHTML = postRetornado.title;
        renderizadorConteudo.innerHTML = postRetornado.body;

        postForm.reset();

    } catch (error) {
        console.error('Falha ao enviar o post:', error);
        renderizadorTitulo.innerHTML = 'ERRO DE PUBLICAÇÃO';
        renderizadorConteudo.innerHTML = `Falha na conexão ou API. Detalhes: ${error.message}`;
    }
});

renderizadorTitulo.innerHTML = 'Bem-vindo(a)!';
renderizadorConteudo.innerHTML = 'O conteúdo do seu post aparecerá aqui após a publicação.';