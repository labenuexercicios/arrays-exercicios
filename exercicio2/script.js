
const arrayNum = [27, 35, 12, 9, 30, 3, 14]
const arrayNomes = ["Karoline", "Camila", "Catarina", "Cecilia", "Lucca"]
const arrayMix = ["Hello", 18, false]
//I mprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(arrayNum.length, arrayNomes.length, arrayMix.length)
//Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(arrayNum[0], arrayNomes[1], arrayMix[2])
//Imprima uma informação booleana verdadeira sobre a inclusão de um item do primeiro array, 
//e uma informação booleana falsa sobre a inclusão de um item ao terceiro array. 
// Isto é, um includes() verdadeiro, e outro falso.
arrayNum.push(4)
console.log(arrayNum.includes(4), arrayNomes.includes("Rafa"))




