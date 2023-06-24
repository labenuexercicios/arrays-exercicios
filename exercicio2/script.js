// # Exercício 2

// Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, utilizando `console.log()`:

// a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).

// b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.

// c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.

// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.
const arrayNumeros = [1,2,3,4,5]
const arrayStrings = ['Ana', 'Orci', 'Arthur']
const arrayMisto = ['Orci', 46, true]
console.log(arrayNumeros.length)
console.log(arrayStrings.length)
console.log(arrayMisto.length)
console.log(arrayNumeros[0],arrayStrings[1],arrayMisto[2])
console.log(arrayNumeros.includes(1))
console.log(arrayMisto.includes(1))