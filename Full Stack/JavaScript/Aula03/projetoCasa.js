// CRIE UM PROGRAMA QUE PEÇA UMA FRASE AO USUÁRIO E VERIFIQUE SE ELA É UM PALÍNDROMO

const frase = prompt("Digite uma frase: ")

let fraseInversa = ""

for (let caractere of frase.toLowerCase().replaceAll(" ", "")) {
    fraseInversa = caractere + fraseInversa
}

if (fraseInversa === frase.toLowerCase().replaceAll(" ", "")) {
    alert("É um palíndromo!")
} else {
    alert("Não é um palíndromo!")
}