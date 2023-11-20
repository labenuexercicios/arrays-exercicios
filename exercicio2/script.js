function ImprimirQtdeItem(arrayNumber, arrayString, arrayDiversos) {
    console.log(`Função para Imprimir a Quantidade de Item em cada array`)
    console.log(`ArrayNumber: ${arrayNumber.length}`);
    console.log(`ArrayString: ${arrayString.length}`);
    console.log(`ArrayDiversos: ${arrayDiversos.length}`);
}

function ImprimirItem(arrayNumber, arrayString, arrayDiversos) {
    console.log(`Função para Imprimir os itens de acordo como se pede`)
    console.log(`arrayNumber: ${arrayNumber[0]}`);
    console.log(`arrayString: ${arrayString[1]}`);
    console.log(`arrayDiversos: ${arrayDiversos[2]}`);

    console.log(`O item 8 está no ArrayNumber? ${arrayNumber.includes(8)}`)
    console.log(`O item "sobremesa" está no arrayString? ${arrayString.includes("sobremesa")}`);
}

const arrayNumber = [4, 1, 7, 2, 8, 9, 0, 5];
const arrayString = ["chocolate", "manga", "salada", "exercícios", "férias"];
const arrayDiversos = ["Rio Novo do Sul", 1982, true, "trabalho", false];

ImprimirQtdeItem(arrayNumber, arrayString, arrayDiversos);
ImprimirItem(arrayNumber, arrayString, arrayDiversos);