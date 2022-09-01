//Exercicio 1
const arrayNumeros = [1, 5, 3, 6, 8]
const arrayStrings = ['Bruno', 'Giovane', 'Marcelo', 'Elza']
const arrayMesclado = ['Bruno', 12, 50, 'Maschietto', true]

//Exercicio 2
// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(arrayNumeros.length);
console.log(arrayStrings.length);
console.log(arrayMesclado.length);

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(arrayNumeros[0], arrayStrings[1], arrayMesclado[2]);
// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log(arrayNumeros.includes(1), arrayMesclado.includes('Maria'));


