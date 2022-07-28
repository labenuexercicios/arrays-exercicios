const arraynumeros = [50,13,98,42,7]
const arraynomeszoo = ['leão, macaco, jacaré, capivara']
const arraymisturada = ["microondas", 20, true]

console.log("Array números", arraynumeros)
console.log("Array nomes", arraynomeszoo)
console.log("Array Mista", arraymisturada)

arraynumerosCopia = arraynumeros.slice()
console.log(arraynumeros)
console.log("Cópia com slice", arraynumerosCopia)

arraynumerosCopia = arraynumeros.push(10)
console.log("Adição de item com push", arraynumeros)
console.log("Adição de item com push", arraynumerosCopia)

arraynomeszooCopia = arraynomeszoo.slice()
console.log(arraynomeszoo)
console.log("Cópia com slice", arraynomeszooCopia)

arraynomeszooCopia = arraynomeszooCopia.pop()
console.log("Exclusão do último item copiado com pop", arraynomeszooCopia)

arraymisturadaCopia = arraymisturada.slice()
console.log(arraymisturada)
console.log("Cópia com slice", arraymisturadaCopia)

arraymisturadaCopia.splice(1,1)
console.log(arraymisturada)
console.log("Remoção de item com splice", arraymisturadaCopia)


