console.log("Usando um loop for, exiba no console todos os números de 1 a 10.");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("=================================");

console.log("Usando um loop while, exiba no console todos os números pares de 2 a 20.");

let j = 2;
while (j <= 20) {
    console.log(j);
    j += 2;
}

console.log("=================================");
console.log("Usando um loop for, crie uma variável chamada soma que acumule a soma dos números de 1 a 5 e exiba o resultado no final.");

let soma = 0;
for (let i = 1; i <= 5; i++) {
    soma += i;
}
console.log(`A soma dos números de 1 a 5 é ${soma}`);