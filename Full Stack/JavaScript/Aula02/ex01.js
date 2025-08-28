// Crie um programa que peça o nome e o ano de nacimento do usuário. 
// Exiba com uma mensagem personalizada o nome e a idade do usuário.

const nome = prompt("Informe o nome do usuário: ");
const anoNascimento = parseInt(prompt("Informe o ano de nascimento do usuário: "));

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

const idade = anoAtual - anoNascimento;

alert(`${nome}, você tem ${idade} anos.`)


