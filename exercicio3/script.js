// exercicio 1
console.log("exercicio 1")
const arrayNumb = [25, 72, 45]
const arrayString = ["celular", "notebook", "tablet"]
const arraySortido = [39, "Rafael", true]
console.log(arrayNumb)
console.log(arrayString)
console.log(arraySortido)

// exercicio 2
console.log("exercicio 2")
console.log("quantidade itens arrayNumb", arrayNumb.length)
console.log("quantidade itens arrayString", arrayString.length)
console.log("quantidade itens arraySortido", arraySortido.length)
console.log("1º item - 1ª array", arrayNumb[0])
console.log("2º item - 2º array", arrayString[1])
console.log("3º item - 3º array", arraySortido[2])
console.log("item 25 consta?", arrayNumb.includes(25))
console.log("item false consta?", arraySortido.includes(false))

// exercicio 3
console.log("exercicio 3")

const arrayCopia1 = arrayNumb.slice()
console.log("original", arrayNumb)
console.log("copia", arrayCopia1)
// adicione um item 'number' no inicio da copia.
arrayCopia1.unshift(90)
console.log("original", arrayNumb)
console.log("copia", arrayCopia1)
const arrayCopia2 = arrayString.slice()
// remova o ultimo item 
arrayCopia2.splice(2, 1)
console.log("original 2", arrayString)
console.log("copia 2", arrayCopia2)
const arrayCopia3 = arraySortido.slice()
// remova o segundo item 
arrayCopia3.splice(1, 1)
console.log("original 3", arraySortido)
console.log("copia 3", arrayCopia3)


