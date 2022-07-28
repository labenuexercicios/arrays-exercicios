// EXERCÍCIO 3:

// MANIPULANDO AS ARRAYS:

const arrayNumbers = [2, 9, 6, 1, 4, 5]
const arrayStrings = ["uva", "goiaba", "banana", "maçã", "kiwi","ameixa", "abacaxi"]
const arrayMisto = [2, "banana", true, "uva", false, 5, 1]

const arrayNumbersCopia = arrayNumbers.slice()
const arrayStringsCopia = arrayStrings.slice()
const arrayMistoCopia = arrayMisto.slice()

console.log(arrayNumbers)
arrayNumbersCopia.push(8)
console.log(arrayNumbersCopia)

console.log(arrayStrings)
arrayStringsCopia.pop()
console.log(arrayStringsCopia)

console.log(arrayMisto)
arrayMistoCopia.splice(1, 1)
console.log(arrayMistoCopia)
