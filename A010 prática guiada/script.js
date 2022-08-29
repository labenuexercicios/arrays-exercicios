// Prática Guiada

// const arrayNumbers = [2, 4, 8,]


// const arrayStrings = ["Uncharted", "FallGuys", "Sekiro"];


// const arrayMisto = ["AmongUs", "DevilMayCry", 15, 20, true, false];


// const arrayUmValor = [15];


// const arrayEmpty = []

// console.log(arrayNumbers.length)
// console.log(arrayNumbers[3])

// console.log(arrayMisto.includes(2))

// console.log(arrayUmValor)

//MANIPULAÇÃO DE ARRAYS

const arrayNumbers = [2, 4, 8,]

const arrayStrings = ["Uncharted", "FallGuys", "Sekiro"];

// const copiaArray = arrayNumbers

// const trueCopy = arrayNumbers
// trueCopy.push(10)

console.log("Old array", arrayNumbers)

const trueCopy = arrayNumbers.slice()//CRIA UM NOVO ARRAY  que é diferente do que criar uma referencia ao array original

trueCopy.push(10)
trueCopy.push(15)
console.log("True copy:  ", trueCopy)

//array  é uma lista de elementos


// trueCopy.splice(2, 2)
// console.log("True copy:  ", trueCopy)

//i => indice
//n => a quantidade de elementos

console.log(arrayStrings)
//sort() => forma aleátoria em ordem alfabetica se for uma string

//quero mostra o primeiro valor do array = shift()
//quero mostra somente o final do array : pop()