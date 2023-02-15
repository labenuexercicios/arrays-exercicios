const arrayNum = [1,2,3,4]
const arrayString = ["Livan", "Bea", "Kesz", "Samu"]
const arrayMisto = [20, "Will", true]

console.log("A)")
console.log(`A quatindade de itens nesse array é: ${arrayNum.length}`)
console.log(`A quatindade de itens nesse array é: ${arrayString.length}`)
console.log(`A quatindade de itens nesse array é: ${arrayMisto.length}`)

console.log("B)")
console.log(arrayNum[0])
console.log(arrayString[1])
console.log(arrayMisto[2])

console.log("C)")
const check1 = arrayNum.includes(1)
const check2 = arrayMisto.includes("Bea")
console.log(check1,check2)