const entrada = [4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98]

let lines = 0
let index = 0

lines = entrada.length //gets()
let list = Array(lines)

while (index < lines) {
  number = entrada[index] //gets()
  if (number >= 0) {
    list[index] = number
    index++
  }  
}

even = list.filter(value => value % 2 === 0)
even.sort((a, b) => a - b)
odd = list.filter(value => value % 2 !== 0)
odd.sort((a, b) => b - a)

even.forEach( i => console.log(i))
odd.forEach( i => console.log(i))