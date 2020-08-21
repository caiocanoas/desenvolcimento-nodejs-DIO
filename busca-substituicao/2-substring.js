let entrada = ['abcdef', 'cdofhij', 'TWO', 'FOUR', 'abracadabra', 'open', 'Hey This java is hot', 'Java is a new paradigm']

let contador = 0

while(true) {
    let palavra1 = entrada[0] //gets()
    entrada.shift() //apagar
    let palavra2 = entrada[0] //gets()
    entrada.shift() //apagar
    if (!palavra1 && !palavra2) { break }
    contaSubstring(palavra1, palavra2)
  }

function contaSubstring(palavra1, palavra2) {
    palavra1.length >= palavra2.length ? comparaStrings(palavra2, palavra1) : comparaStrings(palavra1, palavra2)
    console.log(contador)
    contador = 0
}

function comparaStrings(palavra1, palavra2) {
    for (let i = 0 ; i <= palavra1.length ; i++) {
        for (let j = 0 ; j <= palavra1.length ; j++) {
            let stringDeComparacao = palavra1.substring(i, j)
            if (palavra2.includes(stringDeComparacao)) {
                if (stringDeComparacao.length > contador) contador = stringDeComparacao.length
            }
        }
    }
}
