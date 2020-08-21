let entrada = 576

let notas = [100, 50, 20, 10, 5, 2, 1]
let qtds = [0, 0, 0, 0, 0, 0, 0]
let valor = entrada //gets()
let resto = valor

while( resto > 0) {
    nota = notas.findIndex(value => value <= resto)
    qtds[nota] = Math.trunc(resto / notas[nota])
    resto = resto % notas[nota]
}

console.log(valor)
console.log(qtds[0] + " nota(s) de R$ 100,00")
console.log(qtds[1] + " nota(s) de R$ 50,00")
console.log(qtds[2] + " nota(s) de R$ 20,00")
console.log(qtds[3] + " nota(s) de R$ 10,00")
console.log(qtds[4] + " nota(s) de R$ 5,00")
console.log(qtds[5] + " nota(s) de R$ 2,00")
console.log(qtds[6] + " nota(s) de R$ 1,00")