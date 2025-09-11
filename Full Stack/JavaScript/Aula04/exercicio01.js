// CRIE UM PROGRAMA QUE PEÇA 5 NOMES AO USUÁRIO.
// ARMAZENE ESSES NOMES EM UM ARRAY.
// MOSTRE O ÚLTIMO NOME.
// REMOVA O PRIMEIRO NOME.
// PEÇA UM NOVO NOME E SUBSTITUA O NOME DE INDICE 3.

const listaNomes = []

for (let contador = 0; contador < 5; contador++) {
    const nome = prompt(`Digite o ${contador + 1}º nome: `)

    listaNomes.push(nome)
}

console.log(listaNomes.at(-1))

listaNomes.shift()

listaNomes[3] = prompt("Digite o novo nome do indice 3: ")

console.log(listaNomes)