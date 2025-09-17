console.log("** Validando a idade por faixa etária **");

let idade = parseInt(prompt("Informe uma idade:"));

if (isNaN(idade)) {
    console.log("Erro: Por favor, informe um número válido.");
} else {
    console.log(`Idade: ${idade}`);
    if (idade < 18) {
        console.log("Você é menor de idade.");
    } else if (idade >= 18 && idade < 60) {
        console.log("Você é um adulto.");
    } else {
        console.log("Você é idoso.");
    }
}