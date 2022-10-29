let arrayNumeros = [1, 4, 5, 6, 8]
let arrayString = ["labenu", "dev"]
let arrayTudo = [2, 5, "array", true]

let arrayNumerosCopia = [1, 4, 5, 6, 8]
let arrayStringCopia = ["labenu", "dev"]
let arrayTudoCopia = [2, 5, "array", true]


arrayNumerosCopia.push(9)

console.log(arrayNumeros)
console.log(arrayNumerosCopia)

arrayStringCopia.pop()

console.log(arrayString)
console.log(arrayStringCopia)

arrayTudoCopia.splice(1,1)

console.log(arrayTudo)
console.log(arrayTudoCopia)