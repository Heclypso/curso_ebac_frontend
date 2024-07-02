const alunos = [
    { nome: 'Marcos', nota: 9.0 },
    { nome: 'Gabriel', nota: 10.0 },
    { nome: 'Lucas', nota: 0 },
];

function retornaNotas(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

const retornaNotasArray = retornaNotas(alunos);
console.log(retornaNotasArray);
