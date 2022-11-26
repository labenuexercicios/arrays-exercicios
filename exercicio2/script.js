const arrayDeNumeros = [800,2,599]
const arrayDeStrings = [`bananinha`, `maçã`, `pelucia`]
const arrayMista = [`maça`, 2, false]

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão)
console.log(arrayDeNumeros.length)
console.log(arrayDeStrings.length)
console.log(arrayMista.length)


// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(arrayDeNumeros[0])
console.log(arrayDeStrings[1])
console.log(arrayMista[2])

// - Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). 
// A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.

console.log(arrayMista.includes(arrayDeNumeros[1]), arrayDeStrings.includes(arrayDeNumeros[1]))
