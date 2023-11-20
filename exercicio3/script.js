function adicionarItem(arrayNumber) {
    const arrayNumberCopia = arrayNumber.slice();
    arrayNumberCopia.unshift(3);
    console.log(arrayNumber);
    console.log(arrayNumberCopia);
}

function removerUltimoItem(arrayString) {
    const arrayStringCopia = arrayString.slice();
    arrayStringCopia.pop();
    console.log(arrayString);
    console.log(arrayStringCopia);
}

function removerSegundoItem(arrayDiversos) {
    const arrayDiversosCopia = arrayDiversos.slice();
    arrayDiversosCopia.splice(1, 1);
    console.log(arrayDiversos);
    console.log(arrayDiversosCopia);
}

const arrayNumber = [4, 1, 7, 2, 8, 9, 0, 5];
const arrayString = ["chocolate", "manga", "salada", "exercícios", "férias"];
const arrayDiversos = ["Rio Novo do Sul", 1982, true, "trabalho", false];

adicionarItem(arrayNumber);
removerUltimoItem(arrayString);
removerSegundoItem(arrayDiversos);