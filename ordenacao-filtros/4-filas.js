
let index = 0
let saida = []
let semOrdem = []
let comOrdem = []
let entradaNumeros = [3, 3, 4, 4]
let entrada = ['100 80 90', '100 120 30 50', '100 90 30 25']
let casos = entradaNumeros[0] //gets()
entradaNumeros.shift() //apagar

while ( index < casos ) {
  pessoas = entradaNumeros[0] //gets()
  entradaNumeros.shift() //apagar
  semOrdem[index] = entrada[index].split(" ") //gets().split(" ")
  comOrdem[index] = entrada[index].split(" ") //gets().split(" ")
  index++
}

comOrdem.forEach( i => i.sort((a, b) => b - a))

//console.log(pessoas)
//console.log(semOrdem)
//console.log(comOrdem)

let it = 0
while( it < casos ) {
  saida[it] = comOrdem[it].filter((i, d) => d === semOrdem[it].indexOf(i))
  it++
}

saida.forEach(i => console.log(i.length))