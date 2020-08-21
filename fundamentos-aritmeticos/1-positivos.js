let entrada = [7, -5, 6, -3.4, 4.6, 12]

let values = Array(6)
values[0] = entrada[0]//gets()
values[1] = entrada[1]//gets()
values[2] = entrada[2]//gets()
values[3] = entrada[3]//gets()
values[4] = entrada[4]//gets()
values[5] = entrada[5]//gets()

let totalValPos = values.reduce((total, value) => {
    if(value > 0)
    return total = total + 1

    return total
}, 0)

console.log(totalValPos + ' valores positivos')