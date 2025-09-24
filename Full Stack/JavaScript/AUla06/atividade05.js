const somar = function(a, b) {
    return a + b;
};

const subtrair = function(a, b) {
    return a - b;
};

const multiplicar = function(a, b) {
    return a * b;
};

let resultadoSoma = somar(10, 5);
let resultadoSubtracao = subtrair(10, 5);
let resultadoMultiplicacao = multiplicar(10, 5);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Subtração: ${resultadoSubtracao}`);
console.log(`Multiplicação: ${resultadoMultiplicacao}`);

