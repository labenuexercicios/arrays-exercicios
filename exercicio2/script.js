// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

const arrayNumeros = [5,7,9,4]
const arrayStrings = ["férias","descanso","dormir"]
const arrayVariados = [13,"Lula",true]

//Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.  */

console.log(arrayNumeros.includes(7))
console.log(arrayVariados.includes("Lula"))

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(arrayNumeros.length)
console.log(arrayStrings.length)
console.log(arrayVariados.length)

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(arrayNumeros[0])
console.log(arrayStrings[1])
console.log(arrayVariados[2])