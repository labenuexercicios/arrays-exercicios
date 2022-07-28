// # Exercício 2
const array1 =[9,7,5,3,1,2,4,6,8]
const array2 =["um","dois","tres","quatro","cinco"]
const array3 =[15,"kelvin",true]

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(array1.length)
console.log(array2.length)
console.log(array3.length)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(array1[0])
console.log(array2[1])
console.log(array3[2])
// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log(array1.includes(9))
console.log(array2.includes(1))
console.log(array3.includes("kelvin"),array3.includes(false))