const numeros = [10, -5, 0, 8, -1, 42];

console.log(`Lista de números: [${numeros.join(", ")}]`);

const todosSaoPositivos = numeros.every((numero) => {
    return numero > 0;
});

if (todosSaoPositivos) {
    console.log("\nConclusão: Sim, todos os números no array são positivos.");
} else {
    console.log("\nConclusão: Não, o array contém pelo menos um número negativo ou zero.");
}