const numeros = [15,23,65,42]
const strings = ["pneu", "torta", "caneta", "mesa"]
const aleatoria = [24,true, "celular", false]

console.log("original", numeros)
const copiaArray = numeros
copiaArray.unshift(100)
console.log("copia", copiaArray)

console.log("original", strings)
const copia2 = strings
copia2.pop()
console.log("retira o ultimo", copia2)

console.log("original", aleatoria)
const copia3 = aleatoria
copia3.splice(1,1)
console.log("copia", copia3)
