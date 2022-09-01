const arrayApenasNumeros = [1,5,19,45, 68, 12, 03, 10]
const arrayApenasStrings = ["Ola", "Sempre", "Hello", "World", "!!!"]
const arrayTudo          = ["Hello", 3, true, 15, false, "World"]

// console.log(
// `${arrayApenasNumeros}
// ${arrayApenasStrings}
// ${arrayTudo}`
// )
// console.log("Exercioco 2")
// console.log(arrayApenasNumeros.length)
// console.log(arrayApenasStrings.length)
// console.log(arrayTudo.length)
// console.log("")
// console.log(arrayApenasNumeros[0])
// console.log(arrayApenasStrings[1])
// console.log(arrayTudo[2])
// console.log("")
// const lenghtArrayNumeros = arrayApenasNumeros.length
// const lengthArrayTudo = arrayTudo.length
arrayApenasNumeros.push(15)
//console.log(arrayApenasNumeros.length !== lenghtArrayNumeros)
//console.log(arrayTudo.length !== lengthArrayTudo)


console.log("")
console.log("Exerciocio 3")
const arrayApenasNumerosCopia = arrayApenasNumeros.slice()
const arrayApenasStringsCopia = arrayApenasStrings.slice()
const arrayTudoCopia          = arrayTudo.slice()
arrayApenasNumerosCopia.push(11)
console.log(arrayApenasNumeros)
console.log(arrayApenasNumerosCopia)
arrayApenasStringsCopia.pop()
console.log(arrayApenasStrings)
console.log(arrayApenasStringsCopia)
arrayTudoCopia.splice(1,1)
console.log(arrayTudo)
console.log(arrayTudoCopia)
