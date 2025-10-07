let tarefas = [
    { descricao: "Identificar o objeto de pesquisa", concluida: true },
    { descricao: "Definir o tema de pesquisa", concluida: false }
];

const adicionarTarefa = function(descricao) {
    if (descricao && descricao.trim() !== "") {
        tarefas.push({
            descricao: descricao.trim(),
            concluida: false
        });
        console.log("✅ Tarefa adicionada!");
    } else {
        console.log("❌ Adição cancelada. A descrição estava vazia.");
    }
};

const listarTarefas = () => {
    console.log("\n--- Tarefas Atuais ---");
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa na lista.");
    } else {
        tarefas.forEach((tarefa, indice) => {
            const status = tarefa.concluida ? "[x]" : "[ ]";
            console.log(`${indice}: ${status} ${tarefa.descricao}`);
        });
    }
    console.log("----------------------");
};

function processarTarefa(indice, operacaoCallback) {
    if (!isNaN(indice) && tarefas[indice]) {
        operacaoCallback(indice);
    } else {
        console.log("❌ Operação cancelada. Índice inválido.");
    }
}

const callbackDeRemocao = (indice) => {
    const removida = tarefas.splice(indice, 1);
    console.log(`🗑️ Tarefa "${removida[0].descricao}" foi removida.`);
};

const callbackDeAtualizacao = (indice) => {
    const tarefa = tarefas[indice];
    const novaDescricao = prompt(`Atualizando tarefa: "${tarefa.descricao}".\nDigite a nova descrição:`);
    if (novaDescricao && novaDescricao.trim() !== "") {
        tarefa.descricao = novaDescricao.trim();
        console.log("✏️ Tarefa atualizada com sucesso!");
    } else {
        console.log("❌ Atualização cancelada.");
    }
};

const callbackDeConclusao = (indice) => {
    const tarefa = tarefas[indice];
    tarefa.concluida = !tarefa.concluida;
    const statusFinal = tarefa.concluida ? "concluída" : "reaberta";
    console.log(`👍 Tarefa "${tarefa.descricao}" foi marcada como ${statusFinal}.`);
};

function iniciarMenu() {
    console.log("Bem-vindo ao Gerenciador de Tarefas!");

    while (true) {
        const menu = `
Escolha uma opção:
1: Adicionar Tarefa
2: Listar Tarefas
3: Atualizar Tarefa
4: Remover Tarefa
5: Concluir/Reabrir Tarefa
6: Sair
        `;

        const escolha = prompt(menu);

        if (escolha === null || escolha === '6') {
            console.log("Programa finalizado. Até logo!");
            break;
        }

        switch (escolha) {
            case '1':
                const descricao = prompt("Digite a descrição da nova tarefa:");
                adicionarTarefa(descricao);
                break;
            case '2':
                listarTarefas();
                break;
            case '3':
                listarTarefas();
                const indiceAtualizar = parseInt(prompt("Digite o número da tarefa para ATUALIZAR:"));
                processarTarefa(indiceAtualizar, callbackDeAtualizacao);
                break;
            case '4':
                listarTarefas();
                const indiceRemover = parseInt(prompt("Digite o número da tarefa para REMOVER:"));
                processarTarefa(indiceRemover, callbackDeRemocao);
                break;
            case '5':
                listarTarefas();
                const indiceConcluir = parseInt(prompt("Digite o número da tarefa para CONCLUIR ou REABRIR:"));
                processarTarefa(indiceConcluir, callbackDeConclusao);
                break;
            default:
                console.warn("Opção inválida. Por favor, escolha um número de 1 a 6.");
                break;
        }
    }
}

iniciarMenu();