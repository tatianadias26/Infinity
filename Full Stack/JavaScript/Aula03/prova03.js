const nomes = [];

while (true) {
  const entrada = prompt("Digite um nome ou 'sair' para finalizar:");

  if (entrada === null || entrada === "") {
    alert("Nenhum nome foi inserido. O programa será encerrado.");
    break;
  }

  if (entrada.toLowerCase() === 'sair') {
    break;
  }

  nomes.push(entrada);
}

if (nomes.length > 0) {

  console.log("\n--- Lista de Nomes com Índices ---");
  for (let i = 0; i < nomes.length; i++) {
    console.log(`${i + 1}: ${nomes[i]}`);
  }

  console.log("\n--- Mensagens de Boas-Vindas ---");
  for (const nome of nomes) {
    console.log(`Bem-vindo(a), ${nome}!`);
  }
  
  alert("Processamento concluído! Verifique o console para ver os resultados.");

} else {
//   alert("Nenhum nome foi inserido. O programa será encerrado.");
  console.log("Nenhum nome foi inserido.");
}