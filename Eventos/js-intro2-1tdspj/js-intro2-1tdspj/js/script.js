
console.log("Primeira Saída");

console.log("Segunda Saída");

function exibir(){
    console.log("Nova Saída");
}

console.log("Terceira Saída");

exibir()

function somar(num1=0, num2=0){

    return num1 + num2

}
console.log(somar(5));


let somarVarios = function(...nums){ // spread
    let total = 0

    for(let num of nums){
        total += num
    }

    return total
}

console.log(somarVarios(5,2,7,9,12,56,76,34));

//window.document.write("Estou escrevendo no documento!!!")

let titulo = document.getElementById('titulo')
//titulo.style.color = 'red'
//console.log(titulo);
let novo = document.getElementById('idNome')

function mudar(){
    titulo.innerHTML = novo.value
}

//**************************************************************** */

let btns = document.getElementsByClassName('exemplo')

console.log(btns[1]);

function inserir(){
    let numero = document.getElementById("posicao").value -1
    let novo = document.getElementById('idnovo').value
    document.getElementsByClassName('corredor')[numero].innerHTML = novo

}

//******************************************************************* */

function mostrar(){
    let num = document.getElementById('numero').value -1
    let mes = document.getElementsByTagName('li')[num].innerHTML
    document.getElementById('resultado').innerHTML = mes
}


let cabecalho = document.querySelector('.exemplo') // retorna apenas a primeira ocorrência

console.log(cabecalho);

let elemento = document.querySelectorAll('button.exemplo')

console.log(elemento);












