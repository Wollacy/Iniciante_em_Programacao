const nomes = ['Wollacy', 'Lilian', 'Augusto', 'Jackson', 'Juce', 'Deisy', 
'João', 'Thamy', 'Pablo', 'Nicole', 'Gustavo', 'Philipp', 'Sarah', 'Du', 
'Carol', 'Amanda', 'Deivid', 'Benjamim'];

//for (let i = 0; i < nomes.length; i++){
    //console.log(`${i}: ${nomes[i]}`);
//}

//Calculando Média
const notas = [10, 6.5, 8, 7.5];

//let somaDasNotas = 0;

//for (let i = 0; i < notas.length; i++){
//    somaDasNotas += notas[i];
//}

//let media = somaDasNotas/notas.length
//console.log(media)

//ForEach
let somaDasNotas = 0;

notas.forEach(nota =>{
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length
console.log(media)
