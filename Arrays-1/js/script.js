

//const aluno1 = 'João'
//const aluno2 = 'Carlos'
//const aluno3 = 'Maria'



// const grupos = [['João', 'Maria', 'Carlos'],['Igor','Felipe','Carlos' ]]

// const carros =[
//     {modelo:'Civic', marca:'Honda'},
//     {modelo:'Fusca', marca:'Volkswagen'},
//     {modelo:'Uno', marca:'Fiap'}
// ]
//console.log(grupos[0][1]);
// console.log(carros[0].marca)

const alunos = ['João', 'Maria', 'Carlos']

// alunos[3] = 'Barbara'

alunos[alunos.length] = 'Barbara'

alunos.push('Lucas') // insere um item no final do array 

// alunos.pop() //Apaga o ultimo item 

let alunoExcluido = alunos.pop() // retira o ultimo item do array e armazena na variavel

// ['João', 'Maria', 'Carlos']

alunos.sort() // coloca os item em ordem crecente tanto numeros como palavras 

alunos.sort().reverse() // coloca na ordem decrecente 

alunos.unshift('Israel') // insere um item no inicio do array

alunos.shift() //apaga o primeiro item do array

// ['Maria', 'João', 'Carlos', 'Barbara']

alunos.splice(1,0,'Junior','Julio') //insere i ou mais itens na posiçãoescolhida do array

//['Maria', 'Junior', 'Julio', 'João', 'Carlos', 'Barbara'

alunos.splice(2,1,'Juliana') // Substitui um ou mais itens do array

//['Maria', 'Junior', 'Juliana', 'João', 'Carlos', 'Barbara']

alunos.splice(1,1) // apaga um ou mais itens na posição escolhida no array 

// console.log(alunos);

//********************************************************************************** */

const cursos = [
    {nome: 'HTML5', duracao: '3 meses'},
    {nome: 'CSS3', duracao: '4 meses'},
    {nome: 'JavaScript', duracao: '5 meses'}
]

// const nomeCursos = cursos.map((curso)=>{
//     return curso.nome
// })

const nomeCursos = cursos.map(curso => curso.nome)//Percorre todo o array criando um novo com as alterações 

const propCursos = cursos.map(curso=> `O curso ${curso.nome} só dura ${curso.duracao}`)

const ordemCurso = cursos.map((curso,i)=> `O curso ${curso.nome} deve ser o ${i+1} a ser feito.`)

// console.log(ordemCurso);

//**************************************************************************** */

const notasAlunos = [
    {nome:'Lucas', nota: 6},
    {nome:'João', nota: 8},
    {nome:'Maria', nota: 7},
    {nome:'Barbara', nota: 5},
    {nome:'Junior', nota: 4}
]

const alunosAprovados = notasAlunos.filter(aluno => aluno.nota >= 6) // filtra os alunos 

console.log(alunosAprovados);

const frutas = ['maça', 'banana', 'pera', 'maça', 'goiaba', 'banana', 'uva', 'morango', 'uva ']

const frutasSelecionadas = frutas .filter()