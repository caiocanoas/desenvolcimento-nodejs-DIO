let entrada = ['carne laranja suco picles laranja picles', 'laranja pera laranja pera pera']
let lines = 0
let index = 0

lines = entrada.length //gets()
list = Array(lines)
setList = Array(lines)

while( index < lines ) {
  item = entrada[index].split(" ") //gets().split(" ")
  list[index] = item
  index++
}

list.map((a, b) => setList[b] = [...new Set(a)])
setList.forEach( i => i.sort())
setList.forEach( i => console.log(i.join(" ")))