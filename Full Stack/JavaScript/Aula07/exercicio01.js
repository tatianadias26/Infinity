function quantidadeDeVogais(texto) {

    let vogais = 0;
    
    for (let caractere of texto.toLowerCase()) {
        
        //if ((caractere === "a") || (caractere === "e") || (caractere === "i") || (caractere === "o") || (caractere === "u")) {
        if ("aeiou".includes(caractere.toLowerCase())) {
            vogais ++;
        }       
    }    

    return vogais;
}

const frase = prompt("Digite uma frase: ");

const totalVogais = quantidadeDeVogais(frase);

console.log(`O número de vogais na frase ${frase} é: ${totalVogais}.`);