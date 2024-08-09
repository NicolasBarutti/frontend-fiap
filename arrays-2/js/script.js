const carros = ['Gol', 'Celta', 'Palio', 'Fiesta']

// Splice para inserir novo item

carros.splice(1, 0, 'Uno')

//  ['Gol', 'Uno', 'Celta', 'Palio', 'Fiesta']

// Splice = substitiu um ou mais elementos 
const retirado = carros.splice(2, 1, 'Corsa')

// Printa o nome reirado 
// console.log(retirado);

//  ['Gol', 'Uno', 'Corsa', Palio', 'Fiesta']

// Splice = apaga um ou mais itens do array
carros.splice(3, 1)

// ['Gol', 'Uno', 'Corsa', 'Fiesta']

// Map

const alunos = [
    { nome: 'Lucas', idade: '17', nota: '7' },
    { nome: 'Alan', idade: '15', nota: '6' },
    { nome: 'Ricardo', idade: '18', nota: '4' },
    { nome: 'Ana', idade: '17', nota: '3' },
    { nome: 'Maria', idade: '17', nota: '9' }
]

const nomeAlunos = alunos.map(aluno => aluno.nome)

// const nomeAlunos = alunos.map((aluno) => {return aluno.nome})

const listaAluno = alunos.map((aluno, i) => `${i + 1}° aluno - ${aluno.nome}`)

// Filter

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6).map(aluno => `O aluno ${aluno.nome} foi aprovado com media ${aluno.nota}`)


console.log(alunosAprovados)

// Reduce
const vendedores = [
    { nome: 'Janaina', idade: 21, vendas: 5 },
    { nome: 'Vitoria', idade: 19, vendas: 7 },
    { nome: 'Marcelo', idade: 23, vendas: 3 },
    { nome: 'Henrique', idade: 22, vendas: 9 }
]

const totalVendas = vendedores.reduce((acumulado, item) => acumulado + item.vendas, 0)

console.log(totalVendas)

const dadosVendas = vendedores.reduce((acc, item) => {
    const maisNovo = acc.maisNovo < item.idade ? acc.maisNovo : item.idade
    const maisVelho = acc.maisVelho > item.idade ? acc.maisVelho : item.idade

    return {
        totalVendas: acc.totalVendas + item.vendas,
        maisNovo, // Como os nomes são igauis o JS entende e atribui de forma automática
        maisVelho: maisVelho
    }

}, { totalVendas: 0, maisNovo: undefined, maisVelho: undefined })

console.log(dadosVendas)

const filaBrinquedo = [
    { nome: 'Sara', idade: 16, altura: 1.50 },
    { nome: 'Luciana', idade: 17, altura: 1.70 },
    { nome: 'Kleber', idade: 15, altura: 1.65 },
    { nome: 'Anderson', idade: 18, altura: 1.80 }
]

const totalFilaPode = filaBrinquedo.every(pessoa => pessoa.altura >= 1.60)

console.log(totalFilaPode ? "Vamos lá" : "Nem todos podem!");

const verifIdade = filaBrinquedo.some(pessoa => pessoa.idade >= 18)

console.log(verifIdade ? "podem iniciar a trilha" : "Não temos responsável");

// Só mostra 1 mesmo tento 2 ou mais 
const responsável = filaBrinquedo.find(pessoa => pessoa.idade >= 18);

console.log(responsável)

// Mostrar apenas os professores 
const convidados = ['Luciana', 'Carlos', 'Miguel', 'prof Luis', 'prof Guilherme']

const profConvidado = convidados.filter(conv => conv.includes('prof'))

console.log(profConvidado)

const frutas = ['maça', 'banana', 'uva']
const verduras = ['couve', 'alface', 'agrião']

// spread espalha ...

const feira = [...frutas, ...verduras, 'rucula']
console.log(feira)

let pessoa = {
    nome: 'André',
    idade: 21,
    altura: 1.80
}

pessoa = { ...pessoa, idade: 25 }

console.log(pessoa);