let texto = document.querySelector('#idTexto')
let resultado = document.querySelector('#res')

texto.addEventListener('keydown', ()=>{
    resultado.innerHTML = ''
    texto.value = ''
})

texto.addEventListener('keyup', (e)=>{
    resultado.innerHTML = `A tecla ${texto.value} = ${e.keyCode} `
})

// texto.addEventListener('keydown', ()=>{
//     resultado.innerHTML = texto.value
// })

// texto.addEventListener('keyup', (e)=>{
//     resultado.innerHTML = texto.value
// })

