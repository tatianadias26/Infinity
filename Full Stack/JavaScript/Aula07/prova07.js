const listaDeNomes = [];
let opcao = "";

while (opcao !== "6") { 
    
    opcao = prompt(
        "===== LISTA DE NOMES =====\n" +
        "1 - Adicionar\n" +
        "2 - Filtrar (Começa com Letra)\n" +
        "3 - Buscar (Nome Exato)\n" +
        "4 - Transformar (Maiúsculas)\n" +
        "5 - Verificar (Todos > 3 chars)\n" +
        "6 - Sair\n" +
        "Informe a opção desejada:"
    );

    switch (opcao) {
        case "1": {
            const nome = prompt(`Digite o ${listaDeNomes.length + 1}º nome: `);
            listaDeNomes.push(nome);          
            console.log("Lista Atual:", listaDeNomes);
            break;
        }

        case "2": {
            if (listaDeNomes.length === 0) {
                alert("A lista está vazia. Adicione nomes primeiro.");
                break;
            }
            
            const letra = prompt(`Digite uma letra para criar uma nova lista de nomes que começam com ela: `);

            const nomesFiltrados = listaDeNomes.filter((nome) => {     
                if (letra) {
                    const primeiraLetraDoNome = nome.charAt(0).toUpperCase();
                    const letraDeBusca = letra.charAt(0).toUpperCase();                         
                    return primeiraLetraDoNome === letraDeBusca;                         
                }
                return false;
            });

            console.log(`Nomes que começam com a letra '${letra.charAt(0).toUpperCase()}':`);
            console.log(nomesFiltrados);
            break;
        }

        case "3": {
            if (listaDeNomes.length === 0) {
                alert("A lista está vazia. Adicione nomes primeiro.");
                break;
            }
            
            const nomeBuscado = prompt(`Digite o nome que deseja buscar: `);

            const nomeEncontrado = listaDeNomes.find((nome) => {
                return nome.toLowerCase() === nomeBuscado.toLowerCase();
            });

            if (nomeEncontrado) {
                console.log(`Nome encontrado: ${nomeEncontrado}`);
            } else {
                console.log(`O nome '${nomeBuscado}' não foi encontrado na lista.`);
            }
            break;
        }

        case "4": {
            if (listaDeNomes.length === 0) {
                alert("A lista está vazia. Adicione nomes primeiro.");
                break;
            }
            
            const nomesEmMaiusculas = listaDeNomes.map(nome => nome.toUpperCase());

            console.log("Lista de Nomes em Maiúsculas:");
            console.log(nomesEmMaiusculas);
            break;
        }

        case "5":
            if (listaDeNomes.length === 0) {
                alert("A lista está vazia. Adicione nomes primeiro.");
                break;
            }
            
            const todosComMaisDeTres = listaDeNomes.every(nome => nome.length > 3);

            console.log(`Todos os nomes têm mais de 3 caracteres? ${todosComMaisDeTres}`);
            break;

        case "6":
            alert("Saindo do programa. Até mais!");
            break;
            
        default:
            if (opcao !== null) {
                alert("Opção inválida! Escolha um número de 1 a 6.");
            }
            break;
    }
}