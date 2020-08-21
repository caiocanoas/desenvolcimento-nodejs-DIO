let entrada = ['Digital Innovation One', 'AbcdEfgh99', 'DigitalInnovationOne123', 'Digital Innovation One 123', 'Aass9', 'Aassd9']

while(true) {
    let senha = entrada[0] //gets()
    entrada.shift() //apagar
    if (!senha) { break }
    validador(senha)
    //console.log(senha)
}

function validador(senha) {
    let resposta = 'Senha invalida.'
    let letrasMaiusculas = /[A-Z]/
    let letrasMinusculuas = /[a-z]/
    let numeros = /[0-9]/
    let proibido = /[^a-zA-Z0-9]/

    if(senha.length < 6) {
        console.log(resposta)
    }
    if(senha.length > 32) {
        console.log(resposta)
    }
    if(senha.length >= 6 && senha.length <= 32) {
    let contaMai = 0
    let contaMin = 0
    let contaNum = 0
    let contaPro = 0

    for (let i = 0; i<senha.length; i++) {
        if(letrasMaiusculas.test(senha[i])) contaMai++
        if(letrasMinusculuas.test(senha[i])) contaMin++
        if(numeros.test(senha[i])) contaNum++
        if(proibido.test(senha[i])) contaPro++
    }

    if (contaMai > 0 && contaMin > 0 && contaNum > 0 && contaPro === 0) {
        console.log('Senha valida.')
    } else {
        console.log(resposta)
    }
    }
}