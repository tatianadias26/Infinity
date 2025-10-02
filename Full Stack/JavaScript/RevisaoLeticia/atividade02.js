const numero1 = parseInt(prompt("Informe um número: "));
const numero2 = parseInt(prompt("Informe outro número: "));

console.log(`Análises das expressões:`)
console.log(`========================`)

const resposta1=((numero1>0) && (numero2>0))
console.log(`${numero1} && ${numero2} são positivos: ${resposta1}`)

const resposta2=((numero1>0) || (numero2>0))
console.log(`${numero1} || ${numero2} são positivos: ${resposta2}`)

const resposta3=((numero1<0) && (numero2<0))
console.log(`${numero1} && ${numero2} são negativos: ${resposta3}`)