const arrayNumero = [9,1,2,6,4,5,8]
const arrayString = ["miguel", "gica", "anime"]
const arrayVariado = ["one piece", 14, true]

const arrayNumeroCopia = arrayNumero.slice()
const arrayStringCopia = arrayString.slice()
const arrayVariadoCopia = arrayVariado.slice()

arrayNumeroCopia.unshift(27)

console.log("original:", arrayNumero)
console.log("copia:", arrayNumeroCopia)

arrayStringCopia.pop()

console.log("original:", arrayString)
console.log("copia:", arrayStringCopia)

arrayVariadoCopia.splice(1, 1)

console.log("original:", arrayVariado)
console.log("copia:", arrayVariadoCopia)




