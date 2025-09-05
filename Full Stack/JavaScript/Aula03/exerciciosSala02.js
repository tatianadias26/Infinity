// CRIE UM PROGRAMA QUE PEÇA UM TEXTO AO USUÁRIO E EXIBA A QUANTIDADE DE VOGAIS PRESENTES NESSE TEXTO

const texto = prompt("Digite um texto: ")
const vogais = "aeiou"
let quantidadeVogais = 0

for (let caracetere of texto) {
    if (vogais.includes(caracetere.toLowerCase())) {
        quantidadeVogais++
    }
}

alert(quantidadeVogais)