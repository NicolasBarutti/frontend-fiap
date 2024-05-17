let data = new Date()

console.log(data);

console.log(data.getDate()) // o dia

console.log(('0'+data.getDate()).slice(-2))

console.log(data.getMonth()+1)//mes

console.log(data.getFullYear()) // ano


let diasSemana= [ // tem que ser [] chaves { é um objeto}
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado'
]

console.log(diasSemana[data.getDay()])

//Aqui mudamos a data adicionando 5 dia e 5 anos 
data.setDate(data.getDate()+5)

console.log(('0'+data.getDate()).slice(-2))

data.setMonth(data.getMonth()+5)

console.log(data)

data.setFullYear(data.getFullYear()+5)

console.log(data.toDateString())
console.log(data.toLocaleDateString())


let data2 = new Date()

let dia = ('0'+data.getDate()).slice(-2)
let mes = data2.getMonth()
let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

let ano = data2.getFullYear()

console.log(`${dia} de ${meses} de ${ano}`)

//-------------------------------------------------------//

console.log(data2.getHours()) // retorna as horas 

console.log(data2.getMinutes()) // retorna minuts

console.log(data.getSeconds())// retorna segundos

data2.setHours(data2.getHours() + 4)//muda hora

console.log(data2);

data2.setMinutes(data2.getMinutes()+ 20) // muda minutos

console.log(data2);

data2.setSeconds(data2.getSeconds()+ 20) // muda segundos

//----------------------------------------------------------------//


// function ola(){
//     alert('olá pessoal, demorei?')
// }


// setTimeout(ola, 4000) // especificar um tempo para a execução da função

function tempo(){
    
    let relogio = document.querySelector('#div1')

    let hora = new Date()
    
    relogio.innerHTML = (hora.toLocaleString()).slice(-11)
}

document.querySelector('#ligar').addEventListener('click', ()=>{
    tmp = setInterval(tempo, 1000)
})

document.querySelector('#desligar').addEventListener('click', ()=>{
    clearInterval(tmp)
})



