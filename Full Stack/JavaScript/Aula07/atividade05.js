const numeros = [1, 2, -3, 4, 5, 6, 7, -8, 9, 10];

const temNumerosNegativos = numeros.some((numero) => {
    return numero < 0;
});

console.log(`Lista: ${numeros}`);
console.log(`O array contém números negativos? ${temNumerosNegativos}`);
