// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
const arrayNumber = [1, 5, 12]
const arrayString = ['Brooklyn 99', 'The Office', 'Parks and Recreation']
const arrayMista = [2, 'Olá', false, 7, true]
console.log(arrayNumber)
console.log(arrayString)
console.log(arrayMista)
// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(
  'Quantidade de itens array 1: ' +
    arrayNumber.length +
    '\nQuantidade de itens array 2: ' +
    arrayString.length +
    '\nQuantidade de itens array 3: ' +
    arrayMista.length
)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(
  'Primeiro item do primeiro array: ' +
    arrayNumber[0] +
    '\nSegundo item do segundo array: ' +
    arrayString[1] +
    '\nTerceiro item do terceiro array: ' +
    arrayMista[2]
)
// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log(
  'Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array: ' +
    arrayNumber.includes(1) +
    '\nImprima uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array: ' +
    arrayMista.includes('3')
)
