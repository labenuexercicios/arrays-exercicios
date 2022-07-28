//EXERCICIO 1

const numero = [8, 6, 9, 1]
console.log(numero)
const string = ['marcos', 'jose', 'carmem']
console.log(string)
const mista = [15, 'paula', true]
console.log(mista)

//exercicio 2

console.log(numero.length)
console.log(string.length)
console.log(mista.length) 
console.log('Primeiro número:', numero[0])
console.log('Primeiro array', numero.includes(8))
console.log('Terceiro array', mista.includes(16))

//EXERCICIO 3

const numeroCopia = numero.slice()
const stringCopia = string.slice()
const mistaCopia = mista.slice()

numeroCopia.unshift(2)
console.log('Original', numero)
console.log('Cópia',numeroCopia)

stringCopia.pop()
console.log('Original', string)
console.log('Cópia', stringCopia)

mistaCopia.splice(1,1)
console.log('Original', mista)
console.log('Cópia', mistaCopia)