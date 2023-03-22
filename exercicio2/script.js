// # Exercício 2

// Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, 
// utilizando `console.log()`:

// a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).

// b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, 
// e o **terceiro item** do terceiro array.

// c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. 
// Imprima o resultado dessas verificações no `console.log()`. 
// A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.

// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.


const arrayNumber = [26, 29, 7, 6, 5, 4, 2]

const arrayStrings = ["chimia", "agnes" , "nico", "morceguita"]

const arrayNsb = [2, 800, "draculito", "edward" , false, true, true]

//a
console.log(arrayNumber.length)
console.log(arrayStrings.length)
console.log(arrayNsb.length)

//b
console.log(arrayNumber[0], arrayStrings[1], arrayNsb[2])

//c
console.log(arrayNumber.includes(5))
console.log(arrayNsb.includes(5))


