const arrayNumeros = [5, 8, 16, 2, 30]
const arrayStrings = ["Pizza", "Lucas ", "Apartamento"]
const arrayGeral = [15, "Maria", false, 10, "Maiara", true]

console.log(arrayNumeros.length)
console.log(arrayStrings.length)
console.log(arrayGeral.length)

console.log(arrayNumeros[0])
console.log(arrayStrings[1])
console.log(arrayGeral[2])

const temNo1 = arrayNumeros.includes(5)
const naoTemNo3 = arrayGeral.includes(5)

console.log(`O número ${arrayNumeros[0]} tem no primeiro array? ${temNo1}. E no terceiro? ${naoTemNo3}`)