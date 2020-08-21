// Utilizando como entrada o teste #2
const entradaNumeros = [5, 5, 6, 5, 0]
const entrada = [['Maria 5', 'Pedro 2', 'Joao 5', 'Isabel 12', 'Luana 8'], ['Maria 7', 'Pedro 9', 'Joao_Vitor 5', 'Isabel 12', 'Laura 8'], ['Maria 5', 'Kaio 4', 'Pedro 8', 'Joao 1', 'Isabel 2', 'Luana 10'], ['Maria 5', 'Pedro 2', 'Joao 5', 'Isabel 2', 'Luana 8']]

let num = 0
let index = 0
let filas = Array()

while (true) {
 
  num = entradaNumeros[0] //parseInt(gets())
  entradaNumeros.shift()

  if (num === 0) {break}
  let fila = Array(num)
  for (let i = 0; i < num; i++) {
    fila[i] = entrada[index][i].split(" ") //gets().split(" ")
    }
  filas[index] = fila
  index++
}

let y = 0
while (y < filas.length) {
  
  pos = 0
  posimpar = 0
  nota = filas[y][pos][1]
  
  while (true) {
    tam = filas[y].length
    if (tam === 1) {break}
    hor = filas[y].map((i,d) => d)
    hor = hor.concat(hor.concat(hor))
    arco = nota % tam
    pos += tam
    
    if (nota % 2 === 0) {
      pos = hor[pos - arco]
    }
    else {
      pos += posimpar
      pos = hor[pos + arco]
    }
    
    posimpar = -1
    saiu = filas[y].splice(pos,1)
    nota = saiu[0][1]
  }
  y++
}

filas.forEach(i => console.log("Vencedor(a): " + i[0][0]))
