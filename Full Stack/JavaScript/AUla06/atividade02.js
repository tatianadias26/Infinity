function calcularDesconto(preco, desconto) {
    const precoFinal = preco - (preco * (desconto / 100));
    return precoFinal;
}

const preco = 100;
const desconto = 15;
const resultado = calcularDesconto(preco, desconto);
console.log(`O preço final de um produto de R$${preco} com ${desconto}% de desconto é: R$${resultado}`);

