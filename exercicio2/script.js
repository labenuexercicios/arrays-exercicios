//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

const numeros = [2 , 8 , 12]
const strings = ['viver' , 'melhor' , 'Deus']
const varios = [3 , "Help" , true]

console.log(numeros)
console.log((numeros).length)
console.log(strings)
console.log((strings).length)
console.log(varios)
console.log((varios).length)


//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log("primeiro item do primeiro array:", numeros[0])
console.log("segundo item do segundo array:", strings[1])
console.log("terceiro item do terceiro array:", varios[2])


//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

console.log(numeros.includes(2))
console.log(varios.includes(4))

//Obrigado meu Deus!