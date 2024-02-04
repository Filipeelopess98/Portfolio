const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var textoContainer = document.getElementById('texto-escrito');
    var textos = ['Texto 1', 'Texto 2', 'Texto 3']; // Adicione os textos que deseja exibir aqui
    var index = 0;

    function escreverTexto() {
        textoContainer.textContent = ''; // Limpa o conteúdo anterior

        // Adiciona caracteres um por um
        for (var i = 0; i < textos[index].length; i++) {
            setTimeout(function (caractere) {
                textoContainer.textContent += caractere;
            }, i * 100, textos[index][i]);
        }

        // Incrementa o índice ou reinicia se atingir o último texto
        index = (index + 1) % textos.length;

        // Chama recursivamente após um intervalo
        setTimeout(escreverTexto, textos[index].length * 100 + 2000); // Ajuste o tempo conforme necessário
    }

    // Inicia a animação
    escreverTexto();
});