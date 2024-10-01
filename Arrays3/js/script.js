//operadores = Spread - Espalha ... sempre 3 prontos 

const frutas = ['Pera', 'Goiaba', 'Abacaxi']
const legumes = ['Batata', 'Cenoura', 'Mandioca']

const feira = [...frutas, ...legumes , 'Couve', ' Alface']



console.log(feira)

// Subtituindo a marca 

let carro = {
    marca:'Fiat',
    cor:'Azul',
    ano: 2020
}

carro = {... carro, marca:'Ford'}

// adicionando modelo mesmo n tendo ele 

carro = {... carro, modelo:'Fiesta'}

console.log(carro)

// Rest Parameter

// Aqui só dois numeros
function somaSimples(n1,n2){
    return n1 + n2
}
// assim posso somar quantos numeros eu quiser
function soma(...numeros){
    return numeros.reduce((acc,item)=>acc += item)
}

console.log(soma(5,7,4,4,4,3,2,3,3,4,3,2,1,2,34,2,1,2,1,2,3,4,32,32))

// Destructuring

let alunos = ['Adriano', 'Bianca', 'Carolina']

let [ aluno1,aluno2,aluno3] = alunos

// é uma copia então se adicionar um novo valor vai printar mais n vai apagar  no caso o adriano ainda esta la 
aluno1 = 'Paulo'

console.log(aluno1)
console.log(aluno2)
console.log(aluno3)
console.log(alunos[0])

let car1,car2,car3,car4

// [car1,car2,car3,car4] = ['Civic', 'Cruze', 'Corolla', 'Uno']

[ car1 = 'X1', car2 = 'A4', car3 = 'Corvetti', car4 = 'Mustang'] = ['Civic', ,'Corolla']

console.log(car1)
console.log(car2)
console.log(car3)
console.log(car4)

// muito util ele vira atributos soltos 


const exemplosFilmes = {
    ficcao: 'Vingadores', 
    terror:'O Exorcista',
    comedia:'O Poderoso Chefão'

}

let{ficcao, terror}= exemplosFilmes

ficcao = 'Star Wars'

console.log(`O filme ${ficcao} está em cartaz!`)
console.log(`O filme ${exemplosFilmes.ficcao} está em cartaz!`)
console.log(`O filme ${terror} está em cartaz!`)

//CreatElement

const titulo = document.createElement('h1')
const texto = document.createTextNode('Titulo da Página')
titulo.appendChild(texto)

// esses dois funcionam tbm mas o melor é o de cima 
// titulo.textContent = 'Titulo da Página'

// titulo.innerHTML = 'Titulo da Página'

titulo.setAttribute('id', 'Titulo')
document.querySelector('body').appendChild(titulo)