// redirect.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona o botão pelo ID
    const entrarButton = document.getElementById('entrar-button');

    // Adiciona um listener para o evento de clique
    entrarButton.addEventListener('click', () => {
        // Redireciona para a nova página de login
        window.location.href = 'login.html'; // Substitua 'login.html' pelo caminho da sua página de login
    });
});
