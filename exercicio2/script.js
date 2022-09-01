const num = [27,41,15,13,7,100,83,91,74]
const strings = ["batata", "pera", "chuchu", "café"]
const varios = [15,"cahcorro", true]

console.log("Quantidade de itens array1:",num.length)
console.log("Quantidade de itens array2:",strings.length)
console.log("Quantidade de itens array3:",varios.length)

//IMPRIMIR O 1º ITEM DO 1º ARRAY
console.log("Primeiro item do primeiro array:",num[0])

//IMPRIMIR O 2º ITEM DO 2º ARRAY
console.log("Segundo item do segundo array:",strings[1])

//IMPRIMIR O 3º ITEM DO 3º ARRAY
console.log("Terceiro item do terceiro array:",varios[2])

//Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log(num.includes(13))
console.log(strings.includes("oleo"))