// Crie um programa que receba 3 notas de 0 a 10, em seguida verifique qual das três notas é a maior
var nota1 = 8
, nota2 = 8
, nota3 = 10
, comparacao;

if (nota1 > nota2) {
    comparacao = nota1;
} else {
    comparacao = nota2;
}

if (comparacao < nota3) {
    comparacao = nota3;
}

console.log(`A maior nota foi: ${comparacao}`)

if (nota1 == nota2 && nota1 == nota3 && nota2 == nota3) {
    console.log("Aluno1, Aluno2 e Aluno3 colaram um do outro")
} else if (nota1 == nota2) {
    console.log("Aluno1 e Aluno2 colaram um do outro")
} else if (nota1 == nota3) {
    console.log("Aluno1 e Aluno3 colaram um do outro")
} else if (nota2 == nota3) {
    console.log("Aluno2 e Aluno3 colaram um do outro")
}