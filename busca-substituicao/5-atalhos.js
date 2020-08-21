let entrada = ['Você _deveria_ ver a8 foca _no zoologico!', 'ÁÚîÊÔÕõü Marque - % a -conta *a receber* para *paga*.', '_ _ __ _ yabba dabba _ * dooooo * ****', 'áàâãéèêíïóôõöÇúçñ 58 áàâãéèêíïóôõöÇúçñ  áàâãéèêíïóôõöÇúçñ  áàâãéèêíïóôõöÇúçñ  áàâãéèêíïóôõöÇúçñ  áàâãéèêíïóôõöÇúçñ  áàâãéèêíïóôõöÇúçñ  áàâãéèêíïóôõöÇúçñ  áàâãéèêíïóôõöÇúçñ  áàâãéèêíïóôõöÇúçñ  áàâãéèêíïóôõöÇúçñ  áàâãéèêíïóôõöÇúçñ']

while(true) {
    let texto = entrada[0] //gets()
    entrada.shift() //apagar
    if (!texto) { break }
    //console.log(texto)
    substitui(texto)
}

function substitui(texto) {
    
    let regex = /[^a-zà-ú| |_|*|,|;|.|!|?|(|)|-]/gi
    texto = texto.replace(regex, "")

    if (texto.length > 50) {
        texto = texto.slice(0 , 50)
    }

    while ( texto.includes('_') ) {
        texto = texto.replace('_', '<i>')
        texto = texto.replace('_', '</i>')
    }

    while (texto.includes('*')) {
        texto = texto.replace('*', '<b>')
        texto = texto.replace('*', '</b>')
    }

   console.log(texto, texto.length)
}