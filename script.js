// Interações dos artigos do Hippop Wave

const botoes = document.querySelectorAll(".botao-interacao");

botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const tipo = botao.dataset.tipo;

        const contador = document.querySelector(
            "#contador-" + tipo
        );

        let valorAtual = Number(contador.textContent);

        valorAtual++;

        contador.textContent = valorAtual;

        botao.classList.add("clicado");

        botao.disabled = true;

        botao.setAttribute("aria-pressed", "true");

    });

});
