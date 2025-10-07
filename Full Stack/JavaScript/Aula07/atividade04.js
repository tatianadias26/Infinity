const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const soma = numeros.reduce((acumulador, numeroATual) => {
    return acumulador + numeroATual;
})

console.log(`Lista: ${numeros}`);
console.log(soma);