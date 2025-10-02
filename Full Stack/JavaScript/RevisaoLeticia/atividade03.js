
const numero1 = parseInt(prompt("Informe um número: "));

console.log(`Número digitado: ${numero1}`)
if (numero1 > 0) {
    console.log(`O número digitado é maior que zero.`)
} else if ((numero1 < 0) || (numero1 > 0)) {
    console.log(`O número digitado é menor que zero.`)
} else {
    console.log(`O número digitado é zero.`)
}
