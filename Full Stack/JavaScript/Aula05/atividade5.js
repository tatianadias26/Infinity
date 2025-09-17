let n = parseInt(prompt("Digite um número para gerar o triângulo:"));

if (isNaN(n) || n <= 0) {
    console.log("Por favor, digite um número inteiro positivo.");
} else {
    console.log(`\nGerando triângulo para n = ${n}:\n`);

    for (let i = n; i >= 1; i--) {
        let linha = '';

        for (let j = 1; j <= i; j++) {
            linha += j + ' ';
        }

        console.log(linha);
    }
}