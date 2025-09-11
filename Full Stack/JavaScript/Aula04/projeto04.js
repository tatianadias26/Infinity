// CRIE UM PROGRAMA QUE EXIBA UM MENU NO ALERTA PARA USUÁRIO COM AS SEGUINTES OPÇÕES:
// 	- Adicionar nome
// 	- Remover nome
// 	- Editar nome
// 	- Parar

const listaNomes = [];
let opcao = "";

while (opcao !== "5") {
    
    opcao = prompt(
        "===== MENU =====\n\n" +
        "1 - Adicionar nome\n" +
        "2 - Remover nome\n" +
        "3 - Editar nome\n" +
        "4 - Listar nomes\n" +
        "5 - Parar\n\n" +
        "Informe a opção desejada:"
    );

    switch (opcao) {
        case "1":
            const nomeAdicionar = prompt(`Digite o ${listaNomes.length + 1}º nome: `);
            if (nomeAdicionar) {
                listaNomes.push(nomeAdicionar);
                alert(`Nome "${nomeAdicionar}" adicionado com sucesso!`);
            }
            break;

        case "2":
            if (listaNomes.length > 0) {
                const nomeRemover = prompt("Digite o nome que deseja remover:");
                const indiceNome = listaNomes.indexOf(nomeRemover);

                if (indiceNome !== -1) {
                    listaNomes.splice(indiceNome, 1);
                    alert(`Nome "${nomeRemover}" foi removido.`);
                } else {
                    alert(`O nome "${nomeRemover}" não foi encontrado na lista.`);
                }
            } else {
                alert("A lista está vazia, não há nomes para remover.");
            }
            break;

        case "3":
            const nomeEditar = prompt("Digite o nome que deseja editar:");
            
            const indiceNomeEditar = listaNomes.indexOf(nomeEditar);

            if (indiceNomeEditar !== -1) {
                const novoNome = prompt(`Digite o novo nome para substituir "${nomeEditar}":`);
                if (novoNome) {
                    listaNomes[indiceNomeEditar] = novoNome;
                    alert(`"${nomeEditar}" foi alterado para "${novoNome}".`);
                }
            } else {
                alert(`O nome "${nomeEditar}" não foi encontrado na lista.`);
            }
            break;

        case "4":
            if (listaNomes.length > 0) {
                alert("Nomes na lista:\n" + listaNomes.join("\n"));
            } else {                
                alert("A lista está vazia, não há nomes para listar.");
            }
            break;

        case "5":
            alert("Programa encerrado.");
            break;

        default:
            if (opcao !== null) { 
                alert("Opção inválida! Por favor, escolha uma opção de 1 a 5.");
            }
            break;
    }
}

console.log("Lista final de nomes:", listaNomes);