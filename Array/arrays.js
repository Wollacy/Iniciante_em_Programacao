function calculaMedia(nota1 = 1, nota2 = 1, nota3 = 1, nota4 = 1, divisor = 4){
    return (nota1 + nota2 + nota3 + nota4)/divisor;
}

let nota1 = 10;
let nota2 = 8.5;
let nota3 = 9;
let nota4 = 7.5;

let media = calculaMedia(nota1, nota2, nota3, nota4, 4);

//console.log('Media sem array: ' + media);

const notas = [10, 6.5, 8, 7.5];

let medias = calculaMedia(notas[0], notas[1], notas[2], notas[3], notas.length);

//console.log('Media com array: ' + medias);

//Adicionando Elementos
const notas2 = [10, 6, 8];
notas2.push(7)

let media2 = calculaMedia(notas2[0], notas2[1], notas2[2], notas2[3], notas2.length);

//console.log('Media após adição: ' + media2);

//Deletando Elementos
const notas3 = [10, 7, 8, 5, 10];
notas3.pop();

let media3 = calculaMedia(notas3[0], notas3[1], notas3[2], notas3[3], notas3.length);
//console.log(media3);
