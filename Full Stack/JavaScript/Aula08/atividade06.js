const aluno = {
    nome: "Tatiana",
    notas: [8.5, 7.0, 9.0, 6.5],

    calcularMedia: function() {
        if (this.notas.length === 0) {
            return 0;
        }
        
        const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        
        return soma / this.notas.length;
    },

    adicionarNota: function(nota) {
        this.notas.push(nota);
        console.log(`${nota} adicionada às notas de ${this.nome}.`);
    }
};

console.log(`Notas iniciais de ${aluno.nome}: ${aluno.notas}`);

let mediaInicial = aluno.calcularMedia();
console.log(`Média inicial: ${mediaInicial.toFixed(2)}`);

aluno.adicionarNota(10.0);

let novaMedia = aluno.calcularMedia();
console.log(`Notas após adição: ${aluno.notas}`);
console.log(`Nova média: ${novaMedia.toFixed(2)}`);