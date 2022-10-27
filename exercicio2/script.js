const arrayNumero = [9,1,2,6,4,5,8]
const arrayString = ["miguel", "gica", "anime"]
const arrayVariado = ["one piece", 14, true]

console.log(arrayNumero)
console.log(arrayString)
console.log(arrayVariado)

console.log("quantidade 1 array:", arrayNumero.length)
console.log("quantidade 2 array:", arrayString.length)
console.log("quantidade 3 array:", arrayVariado.length)

console.log("primeiro item do 1 array:", arrayNumero[1])
console.log("segundo item do 2 array:", arrayString[2])
console.log("terceiro item do 3 array:", arrayVariado[3])

console.log(arrayNumero.includes(1))
console.log(arrayVariado.includes(20))