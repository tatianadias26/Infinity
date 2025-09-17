const numeros = [];

for (let i = 0; i < 20; i++) {
  numeros.push(Math.floor(Math.random() * 100) + 1);
}

const pares = numeros.filter(num => num % 2 === 0);

const quadrados = pares.map(par => par * par);

const somaFinal = quadrados.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log("Array Original:");
console.log(numeros);
console.log("-----------------------------------------");

console.log("Array de Números Pares (filtrado):");
console.log(pares);
console.log("-----------------------------------------");

console.log("Array com Pares ao Quadrado (transformado):");
console.log(quadrados);
console.log("-----------------------------------------");

console.log("Soma Final dos Quadrados:");
console.log(somaFinal);