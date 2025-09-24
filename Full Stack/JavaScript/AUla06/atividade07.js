const filtrarPares = (arrayDeNumeros) => {
  return arrayDeNumeros.filter(numero => numero % 2 === 0);
};

const calcularMedia = (arrayDeNumeros) => {
  if (arrayDeNumeros.length === 0) {
    return 0;
  }
  
  const somaTotal = arrayDeNumeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
  return somaTotal / arrayDeNumeros.length;
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const numerosPares = filtrarPares(numeros);

const mediaDosPares = calcularMedia(numerosPares);

console.log("Array original:", numeros);
console.log("-------------------------------------");
console.log("Array filtrado (apenas pares):", numerosPares);
console.log("Média dos números pares:", mediaDosPares);