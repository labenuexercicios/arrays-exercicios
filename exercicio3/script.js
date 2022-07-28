const numero = [5, 4, 8]
const numeroCopia = numero.slice();
const comida = ['lasanha', 'empada']
const comidaCopia = comida.slice();
const arrayMisto = [22, 'Essa é minha idade?', true]  
const arrayMistoCopia = arrayMisto.slice();

numeroCopia.push(6)
console.log(numero)
console.log(numeroCopia)

comidaCopia.pop()
console.log(comida)
console.log(comidaCopia)

arrayMistoCopia.splice(1,1)
console.log(arrayMisto)
console.log(arrayMistoCopia)
