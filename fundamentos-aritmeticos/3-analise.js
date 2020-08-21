let entrada = [-5, 0, -3, -4, 12]

values = Array(5)
values[0] = entrada[0] //gets()
values[1] = entrada[1] //gets()
values[2] = entrada[2] //gets()
values[3] = entrada[3] //gets()
values[4] = entrada[4] //gets()

const valPar = values.reduce((total, value) => {
  if(value%2 === 0) return total = total + 1
  
  return total
}, 0)

 const valIm = values.reduce((total, value) => {
    if (value%2 !== 0) return total = total + 1
    
    return total
  }, 0)
  
  const valPos = values.reduce((total, value) => {
      if(value > 0) return total = total + 1
  
      return total
  }, 0)
  
  const valNeg = values.reduce((total, value) => {
      if(value < 0) return total = total + 1
  
      return total
  }, 0)

console.log(valPar + " valor(es) par(es)")
console.log(valIm + " valor(es) impar(es)")
console.log(valPos + " valor(es) positivo(s)")
console.log(valNeg + " valor(es) negativo(s)")