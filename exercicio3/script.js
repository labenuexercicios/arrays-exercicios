const arrayNum = [27, 35, 12, 9, 30, 3, 14]
const arrayNomes = ["Karoline", "Camila", "Catarina", "Cecilia", "Lucca"]
const arrayMix = ["Hello", 18, false]

const arrayNumCopia = arrayNum.slice()
const arrayNomesCopia = arrayNomes.slice()
const arrayMixCopia = arrayMix.slice()

arrayNumCopia.push(90)
console.log(arrayNum, arrayNumCopia)

arrayNomesCopia.pop()
console.log(arrayNomes, arrayNomesCopia)

arrayMixCopia.splice(1, 1)
console.log(arrayMix, arrayMixCopia)

