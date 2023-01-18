const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual);
    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);
console.log(`O livro mais barato é:
${livros[maisBarato].titulo} - R$ ${livros[maisBarato].preco.toFixed(2)}`);