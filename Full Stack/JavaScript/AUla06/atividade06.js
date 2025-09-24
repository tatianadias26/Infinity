function dobrarNumero(numero) {
    return numero * 2;
}

function raizQuadrada(numero) {
    return Math.sqrt(numero);
}

function processarArray(arrayDeNumeros, callback) {
    const novoArray = [];

    for (const numero of arrayDeNumeros) {
        const resultado = callback(numero);
        novoArray.push(resultado);
    }

    return novoArray;
}

const numeros = [1, 4, 9, 16, 25];

const numerosDobrados = processarArray(numeros, dobrarNumero);

const raizesDosNumeros = processarArray(numeros, raizQuadrada);

console.log("Array Original:", numeros);
console.log("-----------------------------------------");
console.log("Resultado dobrando os números:", numerosDobrados);
console.log("Resultado calculando a raiz quadrada:", raizesDosNumeros);