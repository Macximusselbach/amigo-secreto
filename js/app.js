let listaAmigos = [];
let listaOriginal = [];
let listaSorteio = document.getElementById('lista-sorteio');

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;

    if (verificaNome(nomeAmigo) == true) {
        listaAmigos.push(nomeAmigo);
        listaOriginal.push(` ${nomeAmigo}`);

        atualizaListaTela();
        limparCampoNome();

    } else {
        alert('O campo está vazio ou o nome informado já foi adicionado!');

    }

}

function sortear() {
    if (verificaLista() == true) {
        embaralharAmigos(listaAmigos);

        for (let i = 0; i < listaAmigos.length; i++) {
            if (i == listaAmigos.length - 1) {
                listaSorteio.innerHTML += listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br>';

            } else {
                listaSorteio.innerHTML += listaAmigos[i] + ' --> ' + listaAmigos[i + 1] + '<br>';

            }
        }

        atualizaListaTela();

    } else {
        alert('Não é possível fazer o sorteio com menos de 3 participantes!');

    }


}

function reiniciar() {
    listaAmigos = [];
    listaOriginal = [];
    listaSorteio.innerHTML = '';
    atualizaListaTela();

}

function atualizaListaTela() {
    document.getElementById('lista-amigos').textContent = listaOriginal;
    document.getElementById('lista-sorteio').innerHTML = listaSorteio.innerHTML;

}

function limparCampoNome() {
    document.getElementById('nome-amigo').value = '';

}

function embaralharAmigos(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];

    }
}

function verificaNome(nome) {
    if (nome == '' || listaAmigos.includes(nome)) {
        return false;

    } else {
        return true;

    }

}

function verificaLista() {
    if (listaAmigos.length < 3) {
        return false;

    } else {
        return true;

    }

}


