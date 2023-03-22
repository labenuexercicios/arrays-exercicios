const arrayNumeros = [5, 8, 16, 2, 30]
const arrayStrings = ["Pizza", "Lucas ", "Apartamento"]
const arrayGeral = [15, "Maria", false, 10, "Maiara", true]

const arrayNumerosCopia = arrayNumeros.slice()
const arrayStringsCopia = arrayStrings.slice()
const arrayGeralCopia = arrayGeral.slice()

arrayNumeros.unshift(2)
console.log(arrayNumeros)
console.log(arrayNumerosCopia)

arrayStrings.pop()
console.log(arrayStrings)
console.log(arrayStringsCopia)

arrayGeral.splice(2, 1)
console.log(arrayGeral)
console.log(arrayGeralCopia)

