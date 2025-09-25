function verificarPar (numero) {
    if (numero % 2 == 0) {
        return "par" 
    } else {
        return "ímpar"
    }
}

const num = parseInt(prompt("Informe um número:"))
const resultado = verificarPar(num)
alert(`O número ${num} é ${resultado}`)

