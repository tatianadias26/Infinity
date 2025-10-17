//Explicação do que são objetos literais em JavaScript
//Objetos Literais em JavaScript é a forma mais simples e direta de criar uma estrutura de dados, delimitada por chaves {}, que permite armazenar uma coleção flexível de pares chave-valor.
//Nessa estrutura, as chaves (ou propriedades) são strings que servem como identificadores, e seus valores podem ser de qualquer tipo de dado, incluindo outros objetos, arrays, ou funções (que, quando contidas em um objeto, são chamadas de métodos).

//Exemplo prático

const aluno = {
    nome: "Tatiana",
    notas: [8.5, 7.0, 9.0, 6.5],

    calcularMedia: function() {
        if (this.notas.length === 0) {
            return 0;
        }
        
        const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        
        return soma / this.notas.length;
    }
};

const { nome } = aluno;
console.log(`Acessando o nome via Desestruturação: ${nome}`);
console.log(`Notas iniciais de ${aluno.nome}: ${aluno.notas}`);

let mediaAtual = aluno.calcularMedia();
console.log(`Média inicial: ${mediaAtual.toFixed(2)}`);

const novaNota = 10.0;

const notasAposSpread = [...aluno.notas, novaNota];

aluno.notas = notasAposSpread; 

console.log(`Notas atualizadas (após Spread): ${aluno.notas}`);

let mediaAposSpread = aluno.calcularMedia();
console.log(`Média após inclusão da nota 10.0: ${mediaAposSpread.toFixed(2)}`);
