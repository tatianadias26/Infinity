// CRIE UM PROGRAMA QUE PEÇA UMA FRASE AO USUÁRIO E VERIFIQUE SE ELA É UM PALINDROMO

const palavra = prompt("Digite uma palavra para verificar se é um palíndromo:");

if (palavra) {
  let palavraInvertida = '';

  for (let letra of palavra) {
    palavraInvertida = letra + palavraInvertida;
  }

  if (palavra === palavraInvertida) {
    alert(`"${palavra}" é um palíndromo!`);
  } else {
    alert(`"${palavra}" não é um palíndromo.`);
  }
} else {
  alert("Nenhuma palavra fornecida.");
}