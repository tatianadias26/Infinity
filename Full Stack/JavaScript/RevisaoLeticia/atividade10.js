let cores = ["Vermelho", "Verde", "Azul"];

cores.push("Amarelo","Roxo");

cores.pop();

cores.splice(1,1,"Laranja","Marrom");

const novasCore = cores.slice(0, 2);

console.log(cores);