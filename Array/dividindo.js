const nomes = ['Wollacy', 'Lilian', 'Augusto', 'Jackson', 'Juce', 'Deisy', 
'João', 'Thamy', 'Pablo', 'Nicole', 'Gustavo', 'Philipp', 'Sarah', 'Du', 
'Carol', 'Amanda', 'Deivid', 'Benjamim'];

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

//console.log(`Alunos sala 1: ${sala1}`);
//console.log(`Alunos sala 2: ${sala2}`);

// Atualizando Lista
//console.log(`Lista Anterior: ${sala1}`);
          //(param1, param2, param3)
                //param1: Remover a partir de qual posição?
                //param2: Quantos indices deseja remover?
                //param3: Colocar alguma outra informação nessa posição?
    //Obs: É possível apenas incluir alguma informação, passando '0' no segundo parâmetro.
            //Também é possível apenas excluir, sem adicionar nenhuma informação no lugar, basta passar o terceiro parâmetro vazio.
//sala1.splice(0,2,'Benjamim');
//console.log(`Lista Atualizada: ${sala1}`);

//Concatenando Listas
const salasUnificadas = sala1.concat(sala2);
//console.log(salasUnificadas);
