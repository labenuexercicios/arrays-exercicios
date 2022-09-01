//Com os arrays criados, agora vamos observar os arrays. 
//Faça o que se pede abaixo, utilizando `console.log()`:

const arrayNum = [1,4,6,7,2]
const arrayString = ["banana","abacate", "maça"]
const arraySortidos = ["olá!",10, true]
console.log(arrayNum)
console.log(arrayString)
console.log(arraySortidos)

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log("Quantidade de ítens:",arrayNum.length)
console.log("Quantidade de ítens:",arrayString.length)
console.log("Quantidade de ítens:",arraySortidos.length)

//- Imprima o primeiro item do primeiro array
const primeiroItemprimeiroArray = arrayNum[0]  
console.log(primeiroItemprimeiroArray)

//- Imprima o primeiro item do primeiro array
const segundoItemsegundoArray = arrayString[1]
console.log(segundoItemsegundoArray)

//e o terceiro item do terceiro array;
const terceiroItemterceiroArray = arraySortidos[2]
console.log(terceiroItemterceiroArray)

//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array
console.log("Existe?",arrayNum.includes(6))
//e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log("Existe?",arrayNum.includes(10))

/*
arrayNum.includes(6)
console.log(arrayNum)
*/





