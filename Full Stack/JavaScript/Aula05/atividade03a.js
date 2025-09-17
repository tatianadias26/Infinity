// --- PERFIL DA PESSOA ---
// Altere os valores abaixo para testar diferentes cenários.
// Deixe como 'false' ou 'null' as propriedades que não se aplicam.
const pessoa = {
  idade: 25,
  estudante: false,
  pcd: false,         // Pessoa com Deficiência
  idJovem: true
};

// Variável que armazenará o resultado final
let mensagem;

// --- INÍCIO DA LÓGICA CONDICIONAL ---

// Verificação de dados essenciais
if (!pessoa || typeof pessoa.idade !== 'number') {
  mensagem = "Dados inválidos. Por favor, forneça um objeto com a propriedade 'idade'.";
}
// Regra 1: Crianças de colo (prioridade máxima)
else if (pessoa.idade < 3) {
  mensagem = "Entrada isenta (criança de colo, não ocupa assento).";
}
// Regra 2: Idosos (Lei Federal)
else if (pessoa.idade >= 60) {
  mensagem = "Direito a MEIA-ENTRADA (Idoso).";
}
// Regra 3: Pessoas com Deficiência (Lei Federal)
else if (pessoa.pcd === true) {
  mensagem = "Direito a MEIA-ENTRADA (Pessoa com Deficiência).";
}
// Regra 4: Estudantes (Lei Federal)
else if (pessoa.estudante === true) {
  mensagem = "Direito a MEIA-ENTRADA (Estudante - mediante comprovação).";
}
// Regra 5: Jovens de Baixa Renda com ID Jovem (Lei Federal)
else if (pessoa.idJovem === true && pessoa.idade >= 15 && pessoa.idade <= 29) {
  mensagem = "Direito a MEIA-ENTRADA (ID Jovem - mediante comprovação).";
}
// Regra 6: Crianças (prática nacional consolidada)
else if (pessoa.idade >= 3 && pessoa.idade <= 12) {
  mensagem = "Direito a MEIA-ENTRADA (Infantil).";
}
// Regra 7: Sem desconto (nenhuma das regras acima foi atendida)
else {
  mensagem = "INGRESSO INTEIRO (Não se enquadra nas regras de meia-entrada).";
}

// Exibe o resultado final no console
console.log("Verificando o perfil:", pessoa);
console.log("Resultado:", mensagem);