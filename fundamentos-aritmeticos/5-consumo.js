let entrada = [2254, 124.4]

function consumo(x,y) {
    return x/y
}

let x = entrada[0] //gets()
let y = entrada[1] //gets()

console.log(consumo(x,y).toFixed(3), 'km/l')