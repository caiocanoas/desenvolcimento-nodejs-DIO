let entrada = ['spock spock', 'tesoura spock', 'lagarto spock']

let casos = 3 //gets()
index = 0
let jogo = []

while(index < casos) {
    jogo[index] = entrada[index].split(" ") //gets().split(" ")
    index++
}

//console.log(jogo)

let i = 0
let resultado = []

while( i < casos ) {
    let vencedor = 'empate'
    if (jogo[i][0] === 'tesoura') {
        if (jogo[i][1] === 'papel' || jogo[i][1] === 'lagarto') {
            vencedor = 'fernanda'
        }
        if (jogo[i][1] === 'pedra' || jogo[i][1] === 'spock') {
            vencedor = 'marcia'
        }
    }
    if (jogo[i][0] === 'papel') {
        if (jogo[i][1] === 'pedra' || jogo[i][1] === 'spock') {
            vencedor = 'fernanda'
        }
        if (jogo[i][1] === 'tesoura' || jogo[i][1] === 'lagarto') {
            vencedor = 'marcia'
        }
    }
    if (jogo[i][0] === 'pedra') {
        if (jogo[i][1] === 'tesoura' || jogo[i][1] === 'lagarto') {
            vencedor = 'fernanda'
        }
        if (jogo[i][1] === 'papel' || jogo[i][1] === 'spock') {
            vencedor = 'marcia'
        }
    }
    if (jogo[i][0] === 'lagarto') {
        if (jogo[i][1] === 'spock' || jogo[i][1] === 'papel') {
            vencedor = 'fernanda'
        }
        if (jogo[i][1] === 'pedra' || jogo[i][1] === 'tesoura') {
            vencedor = 'marcia'
        }
    }
    if (jogo[i][0] === 'spock') {
        if (jogo[i][1] === 'tesoura' || jogo[i][1] === 'pedra') {
            vencedor = 'fernanda'
        }
        if (jogo[i][1] === 'lagarto' || jogo[i][1] === 'papel') {
            vencedor = 'marcia'
        }
    }

    console.log(vencedor)
    i++
}