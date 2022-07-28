const numero = [4,18,28]
const carro = ['celta']
const arrayMisto = [240, 'Essa é minha velocidade?', true]

console.log(numero)
console.log(carro)
console.log(arrayMisto)

const numeroCopia = numero.slice()
numeroCopia.push(89)
console.log(numero)
console.log("Copia de numero com SLICE, usando PUSH", numeroCopia)

const carroCopia = carro.slice()
carroCopia.pop()
console.log(carro)
console.log("Copia de carro com SLICE, usando POP", carroCopia)

const arrayMistoCopia = arrayMisto.slice()
arrayMistoCopia.splice(1,1)
console.log(arrayMisto)
console.log("Copia de  com SLICE, usando SPLICE", arrayMistoCopia)
