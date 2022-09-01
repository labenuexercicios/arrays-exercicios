const arrayNumero = [5,10,6,1,3]
const arrayString = ["mãe", "pai", "avô"]
const arrayBagunca = [5, "igor", false]
arrayNumero.push(500)
//const arraySemOUltimo = arrayString.pop()
arrayString.pop()


console.log(arrayNumero)
console.log(arrayString)
console.log(arrayBagunca.splice(0,1), arrayBagunca.splice(1,1))

const arrayNumeroCopia = [5,10,6,1,3]
const arrayStringCopia = ["mãe", "pai", "avô"]
const arrayBaguncaCopia = [5, "igor", false]

console.log(arrayNumeroCopia)
console.log(arrayStringCopia)
console.log(arrayBaguncaCopia)