const primeiroArrayOriginal = [1, 2, 3]
const segundoArrayOriginal = [1, 2, 3]
const terceiroArrayOriginal = [1, 2, 3]


const primeiroArrayOriginalCopia = [1, 2, 3]
const segundoArrayOriginalCopia = [1, 2, 3]
const terceiroArrayOriginalCopia = [1, 2, 3]

primeiroArrayOriginal.unshift("number")
console.log(primeiroArrayOriginal)
console.log(primeiroArrayOriginalCopia)

segundoArrayOriginal.pop()
console.log(segundoArrayOriginal)
console.log(segundoArrayOriginalCopia)

terceiroArrayOriginal.splice(1, 1)
console.log(terceiroArrayOriginal)
console.log(terceiroArrayOriginalCopia)