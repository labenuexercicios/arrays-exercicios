// Criando novas arrays copias.

const numbArrays = [15, 06, 96, 03, 10, 16, ]

const stringsArrays = ["Bolo", "Maça", "Banana" , "Cupuaçu"]

const numStriBoo = [15, 06 ,96 , "Bolo", "Banana", "Maça", true, false]

const copiarH = numbArrays.slice(); // (slice) é assim que se copia
const copiarA = stringsArrays.slice()
const copiarC = numStriBoo.slice()

copiarH.push(1996);
console.log(numbArrays, copiarH);


copiarA.pop()
console.log(stringsArrays, copiarA)

copiarC.splice([1,1])
console.log(numStriBoo, copiarC)