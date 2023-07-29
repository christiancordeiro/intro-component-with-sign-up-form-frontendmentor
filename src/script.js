
botao = document.getElementById('botao')
form = document.getElementById('form')


function checkValidity(){
    itens = document.querySelectorAll('.itens')
    const primeiroNome = document.getElementById('first-name')
    const ultimoNome = document.getElementById('last-name')
    const email = document.getElementById('email')
    const pw = document.getElementById('pw')


    const inputPrimeiroNome = primeiroNome.value.trim()
    const inputUltimoNome = ultimoNome.value.trim()
    const inputEmail = email.value.trim()
    const inputPw = pw.value.trim()


    if(inputPrimeiroNome === '') {
        itens[0].classList.add('erro', 'erro-texto', 'erro-img')
    }else{
        itens[0].classList.remove('erro', 'erro-texto')
    }

    if(inputUltimoNome === '') {
        itens[1].classList.add('erro', 'erro-texto')
    }else{
        itens[1].classList.remove('erro', 'erro-texto')
    }

    
    if(inputEmail === '' || !inputEmail.includes('@')) {
        itens[2].classList.add('erro', 'erro-texto')
    }else{
        itens[2].classList.remove('erro', 'erro-texto')
    }

    if(inputPw === '' || inputPw.length <= 9) {
        itens[3].classList.add('erro', 'erro-texto')
    }
    else{
        itens[3].classList.remove('erro', 'erro-texto')
    }

}


botao.addEventListener('click', (e) => {
    e.preventDefault()
    checkValidity()
})