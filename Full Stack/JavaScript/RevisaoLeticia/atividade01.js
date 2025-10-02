// Atividade 01:
// Solicite dois números ao usuário e verifique se ambos são positivos, se pelo menos um é positivo, e se nenhum é positivo, exibindo os resultados no console. 
// Armazene-os em numero1 e numero2, e utilize operadores lógicos para as verificações.

// Objetivo: Aprender a utilizar operadores lógicos (&&, ||, !) para avaliar expressões e controlar o fluxo do código.


const numero1 = parseInt(prompt("Informe um número: "));
const numero2 = parseInt(prompt("Informe outro número: "));

console.log(`Números digitados: ${numero1} e ${numero2}`)
if ((numero1 > 0) && (numero2 > 0)) {
    console.log(`Os números ${numero1} e ${numero2} são positivos.`)
} else if ((numero1 > 0) || (numero2 > 0)) {
    if (numero1 > 0){
        console.log(`O número ${numero1} é positivo.`)
    } else if (numero2 > 0){
        console.log(`O número ${numero2} é positivo.`)
    }
} else {
    console.log(`Os números ${numero1} e ${numero2} são negativos.`)
}

