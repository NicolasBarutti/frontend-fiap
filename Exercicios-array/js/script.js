let nomes = [];

function adicionarNome() {
    const nome = document.getElementById('nomeInput').value;
    nomes.push(nome); // Adiciona o nome ao array
    atualizarLista();
    
}
function ordenarNomes() {
    nomes.sort(); // Ordena o array
    atualizarLista();
}

function reverterNomes() {
    nomes.reverse(); // Reverte a ordem do array
    atualizarLista();
}





