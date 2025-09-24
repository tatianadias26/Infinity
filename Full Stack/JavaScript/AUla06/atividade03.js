function calcularSoma(...numeros) {
    let soma = 0;

    for (const numero of numeros) {
        soma += numero;
    }

    console.log(`O resultado da soma é: ${soma}.`);
}

calcularSoma(1, 2, 3, 4, 5);
calcularSoma(10, 20, 30);
calcularSoma(2, 8, 10, 15, 25, 30);
calcularSoma(100);