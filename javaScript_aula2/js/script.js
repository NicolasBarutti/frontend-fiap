
console.log("Primeira Saida");
console.log("segunda saida");

function exibir(){
    console.log("Nova saida");
}



console.log("Terceira saida");

exibir()

function somar (num1=0, num2=0){
    return num1 + num2
}

console.log(somar(5));


let somarVarios = function (...nums){// spread
    let total = 0

    for(let num of nums){
        total += num
    }
    
    return total
}

console.log(somarVarios(5,3,7,8,12,32,45,43,76,3,2));



// window.document.write("Estou escrevendo no documento")

let titulo = document.getElementById('titulo')

// titulo.style.color = 'red'
// console.log(titulo);
let novo = document.getElementById('idNome')
function mudar(){
    titulo.innerHTML = novo.value
}

let btns = document.getElementsByClassName('exemplo')

console.log(btns[1]);

function inserir(){
    let numero = document.getElementById('posicao').value -1 
    console.log(numero);
    let novo = document.getElementById('idnovo').value
    document.getElementsByClassName('corredor')[numero].innerHTML = novo
}


function mostrar(){
    let num =document.getElementById('numero').value -1
    let mes = document.getElementsByName('li')[num].innerHTML
    document.getElementById('resultado').innerHTML = mes
}



let cabecalho = document.querySelector('#titulo') // retorna apenas a primeira ocorrência

console.log(cabecalho)






