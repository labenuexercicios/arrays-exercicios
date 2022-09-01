let nomeDoArrayOriginal= [1, 2, 3]
let nomeDoArrayOriginalCopia= nomeDoArrayOriginal.slice()
let nomeDoArrayOriginalCopiaDois= nomeDoArrayOriginal.slice()
nomeDoArrayOriginal.push(10)


console.log("original", nomeDoArrayOriginal)
console.log("primeira copia" , nomeDoArrayOriginalCopia)
console.log("segunda copia" , nomeDoArrayOriginalCopiaDois)

nomeDoArrayOriginalCopia.pop()
// console.log(nomeDoArrayOriginalCopia.pop())
console.log(nomeDoArrayOriginalCopia)

console.log("a", nomeDoArrayOriginalCopiaDois)
nomeDoArrayOriginalCopiaDois.splice(1,1)
console.log(nomeDoArrayOriginalCopiaDois)
