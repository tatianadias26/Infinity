// Elegibilidade para Desconto no Cinema: 
// No Brasil, as regras mais comuns para "meia-entrada" no cinema são para: 
// Menores de idade (geralmente até 17 anos).
// Idosos (a partir de 60 anos).

console.log("No Brasil, as regras mais comuns para meia-entrada no cinema são para menores de idade (geralmente até 17 anos) e idosos (a partir de 60 anos.");

let idade = 60;

if (idade < 18 || idade >= 60) {
    console.log(`O cliente com ${idade} anos tem desconto na entrada do cinema.`);
} else {
    console.log(`O cliente com ${idade} anos não tem desconto na entrada do cinema.`);
}



// Validando a Abertura da Bilheteria:


// Determinando o Status de Exibição do Filme: