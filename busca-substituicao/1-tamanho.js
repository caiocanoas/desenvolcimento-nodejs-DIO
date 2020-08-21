var entrada = ['One three four mond at midnight', 'one three five']

let testes = 2 //gets()
let index = 0
let palavras = []

while ( index < testes) {
    palavras[index] = entrada[index].split(" ") //gets().split(" ")
    index++
}

palavras.forEach(i => i.sort())
palavras.forEach(i => i.sort((a, b) => b.length - a.length))

palavras.forEach(i => console.log(i.join(" ")))