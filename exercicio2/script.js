// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const arrayNumber = [2, 7, 1, 10, 0]
const arrayString = ["Miguel", "Maggie", "Gorete"]
const arrayDiverso = ["Miguel", 2, true]

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log(arrayNumber.length)
console.log(arrayString.length)
console.log(arrayDiverso.length)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(arrayNumber[0])
console.log(arrayString[1])
console.log(arrayDiverso[2])

/*Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). 
A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.  */

console.log(arrayNumber.includes(7))
console.log(arrayDiverso.includes(false))
