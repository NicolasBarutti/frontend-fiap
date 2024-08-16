let nomes = [];

function adicionarNome() {
    const nome = document.getElementById('nomeInput').value;
    nomes.push(nome);
    console.log(nomes);
    result.innerHTML = `${nomes}`

}

function ordenarNomes() {
    nomes.sort();
    result.innerHTML = `${nomes}`

}

function reverterNomes() {
    nomes.reverse();
    result.innerHTML = `${nomes}`

}

function removerItem(){
    const nome = document.getElementById('nomeInput').value;
    nomes.splice(nomes.indexOf(nome), 1)
    console.log(nomes);

    result.innerHTML = `${nomes}`
}