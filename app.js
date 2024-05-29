var jogoAlugados = [];
var contadorCliques = 0;

function alterarStatus(id) {
    var jogoClicado = document.getElementById(`game-${id}`);
    var imagem = jogoClicado.querySelector('.dashboard__item__img');
    var botao = jogoClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        alert("Jogo Devolvido");
        contadorCliques++;
    }

    return alugados();
}

function alugados() {
    jogoAlugados.push(contadorCliques);
    alert(`Foram alugados ${contadorCliques} jogos`);
}
