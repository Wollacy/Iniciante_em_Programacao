const nomes = ['Wollacy', 'Lilian', 'Augusto', 'Jackson'];

//nomes.forEach(imprimeNomes)

//function imprimeNomes(nome){
    //console.log(nome);
//}

//Adicionando Ponto Extra
const notas = [10, 6.5, 8, 7];

//const notasAtualizadas = notas.map(nota => nota >= 9 ? nota = 10 : ++nota);

//console.log(notasAtualizadas);

//Padronizando Nomes
let listaNomes = ['wollacY', 'lilian', 'Augusto henriQUE', 'JACKSon'];

//const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

//console.log(nomesAtualizados);

//Reprovados
const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)

//console.log(reprovados)

//Media Geral
const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum,0)
    return somaDasNotas/notasDaSala.length
}

//console.log(`Media da sala de JavaScript: ${mediaSala(salaJs)}`);
//console.log(`Media da sala de Java: ${mediaSala(salaJava)}`);
//console.log(`Media da sala de Python: ${mediaSala(salaPython)}`);

// Formas de escrever a função reduce
const media = notas.reduce((acum, atual) => atual + acum,0) / notas.length

console.log(media)

function operacaoNumerica(acum, atual) {
    return atual + acum
   }
   
const media1 = notas.reduce(operacaoNumerica, 0)/notas.length

console.log(media1)

const media2 = notas.reduce(function (acum, atual) {
    return atual + acum
   }, 0) / notas.length

console.log(media2)
