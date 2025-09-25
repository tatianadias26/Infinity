// MODIFIQUE A FUNÇÃO "gerarNumeroAleatorio" PARA QUE ELA POSSA GERAR UM NÚMERO EM QUALQUER INTERVALO

// function gerarNumeroAleatorio(max, min = 0) {
//     const numero = Math.round((Math.random() * (max - min))) + min
//     alert(numero)
// }

// gerarNumeroAleatorio(2)

function gerarNumeroAleatorio(minimo,maximo) {
    const resultado = Math.round(Math.random() * (maximo - minimo) + minimo)
    return resultado
}

const valorMinimo = parseInt(prompt("Informe o valor mínimo do intervalo para gerar um número aleatório:"))
const valorMaximo = parseInt(prompt("Informe o valor máximo do intervalo para gerar um número aleatório:"))

const resultado = gerarNumeroAleatorio(valorMinimo,valorMaximo)

alert(`O número aleatório gerado é ${resultado}`)