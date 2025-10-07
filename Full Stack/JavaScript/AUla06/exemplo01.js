function listarFilmes(filmePrincipal, ...outrosFilmes) {
    console.log(`Filme principal: ${filmePrincipal}`);
    console.log(`Outros filmes: ${outrosFilmes.join(", ")}`);
}

listarFilmes("Avatar", "Vingadores", "Matrix", "Interstellar");