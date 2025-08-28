// Crie um programa que peça um número ao usuário e exiba se ele é par ou ímpar.

const numero = parseFloat(prompt("Digite um número:"));

if (isNaN(numero)) {
    alert("Valor inválido")
} else if (numero == 0) {
    alert(`${numero} é neutro.`)
} else if (numero % 2 == 0) {
    alert(`${numero} é par.`)
} else {
    alert(`${numero} é ímpar.`)
}