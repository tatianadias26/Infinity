// CRIE UM PROGRAMA QUE PAÇA 5 NOMES AO USUÁRIO.
// ARMAZENE ESSES NOMES EM UM ARRAY.
// MOSTRE O NOME DO ÚLIMO NOME.
// REMOVA O PRIMEIRO NOME.
// PEÇA UM NOVO NOME E SUBSTITUA O NOME DOÍNDICE 3.

let listaNomes = [];

for (let contador = 0; contador < 5; contador++) {
    const nome = prompt(`Digite o ${contador} nome:`);

    listaNomes.push(nome)
}
console.log(listaNomes)

console.log(listaNomes.at(-1))
console.log(listaNomes)


listaNomes.shift()
console.log(listaNomes)

listaNomes[3] = prompt("Digite novo nome do índice 3:")
console.log(listaNomes)
