// CRIE UM PROGRAMA QUE PEÇA AS SEGUINTES INFORMAÇÕES PARA CRIAR UM LIVRO
// 	- titulo
// 	- quantidade de páginas
// 	- autor
// 	- genero
// UTILIZE UM OBJETO LITERAL PARA ARMAZENAR ESSAS INFORMAÇÕES
// EXIBA EM TELA O TITULO DO LIVRO
// ALTERE O AUTOR DO LIVRO PARA "Not"

// ====================================================
let titulo = prompt("Digite o títilo:")
let qtdeDePaginas = prompt("Digite a quantidade de páginas:")
let autor = prompt("Digite o nome do autor:")
let genero = prompt("Digite o gênero:")

let livro = {
  titulo: "titulo",
  qtdeDePaginas: "quantidadeDePaginas",
  autor: "autor",
  genero: "genero"
}

alert(livro.titulo)
livro.autor = "José de Alencar"
alert(livro.autor)

// ====================================================
// SOLUÇÃO 1
// const livro = {}

// livro.titulo = prompt("Digite o título do livro: ")
// livro.qntPaginas = parseInt(prompt("Digite a quantidade de páginas: "))
// livro.autor = prompt("Digite o autor: ")
// livro.genero = prompt("Digite o gênero do livro: ")
// ====================================================

// let livro = {
//   titulo: prompt("Digite o títilo:"),
//   qtdeDePaginas: prompt("Digite a quantidade de páginas:"),
//   autor: prompt("Digite o nome do autor:"),
//   genero: prompt("Digite o gênero:")
// }

// alert(livro.titulo)
// livro.autor = "José de Alencar"
// alert(livro.autor)

