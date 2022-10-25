const alunos = ['Wollacy', 'Lilian', 'Augusto', 'Jackson'];
const mediaAlunos = [10,7,9,6];

let notasEAlunos = [alunos, mediaAlunos];


//lista[param1][param2]
//lista: nome da lista(array) que desejo acessar
//param1: índice da lista que desejo buscar as informações
//param2: índice do dado que desejo acessar dentro da lista
//console.log(`Aluno: ${notasEAlunos[0][0]}
//Media: ${notasEAlunos[1][0]}`);

//Localizando Índices
const exibeNomeNota = (nomeDoAluno) => {
    if(notasEAlunos[0].includes(nomeDoAluno)){
        let indice = notasEAlunos[0].indexOf(nomeDoAluno)
        return `${notasEAlunos[0][indice]}, sua media é ${notasEAlunos[1][indice]}!`
    } else {
        return `Aluno '${nomeDoAluno}' não cadastrado!`
    }
}

console.log(exibeNomeNota('Augusto'))
console.log(exibeNomeNota('José'))
