const linhaNumber = [3,65,128]
const linhaString = ["notebook","caneca","celular"]
const linhaMista = [2019,"Best year",true]
console.log(linhaNumber,linhaString,linhaMista)

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log("Quantidade de items de cada linha:",linhaNumber.length)

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log("Primeiro item:",linhaNumber[0],"\nSegundo item:",linhaString[1],"\nTerceiro item:",linhaMista[2])

//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log("Verifica se 1ª linha inclui 65:",linhaNumber.includes(65))
console.log("Verifica se 3ª linha inclui My year:",linhaMista.includes("My year"))