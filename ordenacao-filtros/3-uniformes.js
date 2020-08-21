let entrada = [9, 'Maria Jose', 'branco P', 'Mangojata Mancuda', 'vermelho P', 'Cezar Torres Mo', 'branco P', 'Baka Lhau', 'vermelho P', 'JuJu Mentina', 'branco M', 'Amaro Dinha', 'vermelho P', 'Adabi Finho', 'branco G', 'Severina Rigudinha', 'branco G', 'Carlos Chade Losna', 'vermelho P', 0]

let lines = entrada[0] //gets()
entrada.shift()
let uniform = Array(lines)
let index = 0

while ( index < lines ) {
  nam = entrada[0] //gets()
  entrada.shift() //apagar
  info = entrada[0].split(" ") //gets().split(" ")
  entrada.shift() //apagar
  uniform[index] = {
    color: info[0],
    size: info[1],
    name: nam
  }
  index++
}

uniform.sort((a,b) => a.name > b.name ? 1 : -1)
uniform.sort((a, b) => a.size > b.size ? 1 : -1)
uniform.sort((a, b) => a.color > b.color ? 1 : -1)

uniform.forEach(i => console.log(Object.values(i).join(" ")))