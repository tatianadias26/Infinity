function verificarPar(numero) {
    if (numero % 2 === 0) {
        return "O número é par!"
    } else {
        return "O número é impar!"
    }
}


const num = parseFloat(prompt("Digite um número: "))


alert(verificarPar(num))


verificarPar(num)

const resultado = verificarPar(num)
console.log(resultado)
