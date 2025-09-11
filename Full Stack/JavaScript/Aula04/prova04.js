const listaCompras = [];
let opcao = "";

while (opcao !== "5") {    
       
    opcao = prompt(
        "===== LISTA DE COMPRAS =====\n\n" +
        "1 - Adicionar\n" +
        "2 - Remover\n" +
        "3 - Listar\n" +
        "4 - Atualizar\n" +
        "5 - Sair\n\n" +
        "Informe a opção desejada:"
    );

    switch (opcao) {
        case "1": {
            const item = prompt(`Digite o nome do ${listaCompras.length + 1}º item: `);
            if (item) {
                listaCompras.push(item);
                alert(`"${item}" foi adicionado com sucesso!`);
            }
            break;
        }

        case "2": {
            if (listaCompras.length === 0) {
                alert("A lista está vazia, não há itens para remover.");
                break;
            }
            
            const indice = parseInt(prompt("Digite o índice do item que deseja remover:"));

            if (!isNaN(indice) && indice >= 0 && indice < listaCompras.length) {
                const [itemRemovido] = listaCompras.splice(indice, 1);
                alert(`"${itemRemovido}" foi removido com sucesso.`);
            } else {
                alert("Índice inválido!");
            }
            break;
        }

        case "3": {
            if (listaCompras.length === 0) {
                alert("A lista de compras está vazia.");
            } else {
                const mensagemLista = listaCompras
                    .map((item, index) => `${index}: ${item}`)
                    .join("\n");
                alert("===== Itens na Lista =====\n" + mensagemLista);
            }
            break;
        }

        case "4": {
            if (listaCompras.length === 0) {
                alert("A lista está vazia, não há itens para atualizar.");
                break;
            }

            const indice = parseInt(prompt("Digite o índice do item que deseja atualizar:"));

            if (!isNaN(indice) && indice >= 0 && indice < listaCompras.length) {
                const itemAntigo = listaCompras[indice];
                const novoItem = prompt(`Digite o novo nome para "${itemAntigo}":`);
                if (novoItem) {
                    listaCompras[indice] = novoItem;
                    alert(`"${itemAntigo}" foi atualizado para "${novoItem}".`);
                }
            } else {
                alert("Índice inválido!");
            }
            break;
        }

        case "5":
            alert("Programa encerrado.");
            break;

        default:
            if (opcao !== null) {
                alert("Opção inválida!");
            }
            break;
    }
}

console.log("Lista final de compras:", listaCompras);