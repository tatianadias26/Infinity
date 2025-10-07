const numeros = [10, -5, 0, 8, -1, 42];

console.log(`Lista: ${numeros}`);

numeros.forEach((numero) => {
    if (numero > 0) {
        console.log(`O número ${numero} é POSITIVO.`);
    } else if (numero < 0) {
        console.log(`O número ${numero} é NEGATIVO.`);
    } else {
        console.log(`O número ${numero} é ZERO.`);
    }
});