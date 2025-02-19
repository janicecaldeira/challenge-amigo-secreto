let amigos = [];

function adicionarAmigo() {
    const nomeAmigoInput = document.getElementById('amigo');
    const nomeAmigo = nomeAmigoInput.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    nomeAmigoInput.value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(function (amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indice];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
