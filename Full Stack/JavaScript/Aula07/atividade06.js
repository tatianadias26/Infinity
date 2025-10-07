const numeros = [10, 2, -3, 4, 5, 6, 7, -8, 9, 10];

const numeroImpar = numeros.find((numero) => {
    return numero % 2 !== 0;
});

console.log(`Lista: ${numeros}`);
console.log(`Primeiro número ímpar da lista: ${numeroImpar}`);
