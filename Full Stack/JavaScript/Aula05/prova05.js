const listaTarefas = [];
let opcao = "";

while (opcao !== "5") {
    opcao = prompt(`
        ===== MENU DE TAREFAS =====
        [1] Adicionar Tarefa
        [2] Remover Tarefa
        [3] Listar Tarefas
        [4] Concluir Tarefa
        [5] Sair
        Informe a opção desejada:
    `);

    switch (opcao) {
        case "1": {
            const novaTarefa = prompt("Digite a descrição da nova tarefa:");
            if (novaTarefa) {
                listaTarefas.push(novaTarefa);
                alert(`Tarefa "${novaTarefa}" adicionada com sucesso!`);
            }
            break;
        }

        case "2": {
            if (listaTarefas.length === 0) {
                alert("A lista de tarefas está vazia.");
                break;
            }

            const indiceStr = prompt("Digite o índice da tarefa que deseja remover:");
            const indice = parseInt(indiceStr);

            if (!isNaN(indice) && indice >= 0 && indice < listaTarefas.length) {
                const tarefaRemovida = listaTarefas.splice(indice, 1);
                alert(`Tarefa "${tarefaRemovida[0]}" foi removida com sucesso!`);
            } else {
                alert("Índice inválido. Por favor, tente novamente.");
            }
            break;
        }

        case "3": {
            if (listaTarefas.length === 0) {
                alert("A lista de tarefas está vazia.");
                break;
            }

            let tarefasParaListar = "===== LISTA DE TAREFAS =====\n\n";
            for (let i = 0; i < listaTarefas.length; i++) {
                tarefasParaListar += `Índice ${i}: ${listaTarefas[i]}\n`;
            }
            alert(tarefasParaListar);
            break;
        }

        case "4": {
            if (listaTarefas.length === 0) {
                alert("A lista de tarefas está vazia.");
                break;
            }

            const indiceStr = prompt("Digite o índice da tarefa que deseja concluir:");
            const indice = parseInt(indiceStr);

            if (!isNaN(indice) && indice >= 0 && indice < listaTarefas.length) {
                if (listaTarefas[indice].includes("(Concluída)")) {
                    alert("Esta tarefa já foi marcada como concluída.");
                } else {
                    listaTarefas[indice] += " (Concluída)";
                    alert("Tarefa marcada como concluída!");
                }
            } else {
                alert("Índice inválido. Por favor, tente novamente.");
            }
            break;
        }

        case "5":
            alert("Programa encerrado.");
            break;

        case null:
            opcao = "5";
            alert("Programa encerrado.");
            break;

        default:
            alert("Opção inválida! Por favor, escolha uma opção de 1 a 5.");
            break;
    }
}

console.log("Lista final de tarefas:", listaTarefas);