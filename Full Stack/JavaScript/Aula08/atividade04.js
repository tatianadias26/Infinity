let livros = [
    { titulo: "Ciência com Consciência", autor: "Edgar Morin" },
    { titulo: "Lições de um século de vida", autor: "Edgar Morin" }     
];

livros.forEach(livro => {
    console.log(livro.titulo);
});

livros.push({
    titulo: "Ensinar a viver", 
    autor: "Edgar Morin" 
});

console.log(livros);