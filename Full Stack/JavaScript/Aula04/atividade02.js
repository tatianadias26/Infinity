// Atividade 02
// Crie um array chamado animais contendo os seguintes elementos:Cachorro, Gato, Papagaio. Em seguida:
// 1. Adicione o elemento Tartaruga ao final do array.
// 2. Remova o primeiro elemento e adicione o elemento Coelho no início.
// 3. Depois, substitua o elemento na posição 2 por Hamster.
// 4. Exiba o comprimento atual do array.
// 5. Acesse e exiba no console o elemento na posição 1.
// 6. Finalmente, exiba o array final no console.
// Objetivo:Praticar operações básicas de criação, acesso e modificação de elementosem arrays.

let animais = ['Cachorro', 'Gato', 'Papagaio'];

animais.push('Tartaruga');
animais.shift();
animais.unshift('Coelho');
animais[2] = 'Hamster';

console.log(animais.length);
console.log(animais[1]);
console.log(animais);