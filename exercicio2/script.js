// Exercício 2
const number = [5, 10, 15, 20]
const strings = ["caneta", "lápis", "borracha"]
const mista = [12, 15, "marca texto", "lapiseira", "true", "false"]

// a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).
console.log(number.length)
console.log(strings.length)
console.log(mista.length)

//b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.
console.log(number[0])
console.log(strings[1])
console.log(mista[3])

//c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. 
//Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.
number.includes(15)
mista.includes(15)
console.log("verificações", number.includes(15), mista.includes("caneta"))