console.log("** Validando a Abertura da Bilheteria **");
let idade = 52;
let estudante = false;
let pcd = false;

console.log(`Idade: ${idade}`);
console.log(`Estudante: ${estudante}`);
console.log(`PCD: ${pcd}`);

if (idade < 3) {
    console.log("Tem direito à gratuidade no ingresso.");
} else if ((idade >= 3 && idade <= 12) || (idade >= 60) || estudante === true || pcd === true) {
    console.log("Tem direito à meia-entrada.");
} else {
    console.log("Não tem direito à meia-entrada (ingresso inteiro).");
}

console.log("=================================");

console.log("** Validando a Abertura da Bilheteria **");
const horaDeAbertura = 13;
const horaDeFechamento = 22;

const agora = new Date();
const horaAtual = agora.getHours();

console.log(`Agora são ${horaAtual} horas.`);

if (horaAtual >= horaDeAbertura && horaAtual < horaDeFechamento) {
  console.log("A bilheteria está aberta!");
} else {
  console.log("A bilheteria está fechada.");
}

console.log("=================================");

console.log("** Determinando o Status de Exibição do Filme **");
const inicioDoFilme = 9;
const terminoDoFilme = 11;

const agoraA = new Date();
const horaAtualA = agora.getHours();

console.log(`Agora são ${horaAtualA} horas.`);

if (horaAtualA < inicioDoFilme) {
  console.log("A sessão ainda não começou. O filme começa às " + inicioDoFilme + "h.");
} else if (horaAtualA >= inicioDoFilme && horaAtualA < terminoDoFilme) {
  console.log("O filme está em exibição!");
} else {
  console.log("A exibição do filme já terminou.");
}

console.log("=================================");
