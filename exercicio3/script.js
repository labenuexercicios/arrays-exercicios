

const arrayNumeroOriginal = [2,4,6,8,10,12,14,16,18,20]
const arrayNumeroCopia = arrayNumeroOriginal


const arrayStringOriginal = ["verde","branco","grená"]
const arrayStringCopia = arrayStringOriginal


const arrayMistoOriginal =[1902,"time",true]
const arrayMistoCopia = arrayMistoOriginal


arrayNumeroOriginal.push(22)
console.log(arrayNumeroOriginal, arrayNumeroCopia)

arrayStringOriginal.pop()
console.log(arrayStringOriginal, arrayStringCopia)

arrayMistoOriginal.splice(1,1)
console.log(arrayMistoOriginal, arrayMistoCopia)