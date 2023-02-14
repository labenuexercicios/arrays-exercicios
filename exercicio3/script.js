const meusNumeros = [32, 8, 729, 46, 216]

const minhasStrings = ['cachorro', 'gato', 'coelho', 'ovelha', 'cavalo']

const minhaListaNumerosStringsEBooleanos = ['macaco', 10, false, 348, 'camelo', true]

const meusNumerosCopia = meusNumeros.slice()
const minhasStringsCopia = minhasStrings.slice()
const minhaListaNumerosStringsEBooleanosCopia = minhaListaNumerosStringsEBooleanos.slice()

meusNumerosCopia.unshift(22)
console.log(meusNumeros)
console.log(meusNumerosCopia)

minhasStringsCopia.pop()
console.log(minhasStrings)
console.log(minhasStringsCopia)

minhaListaNumerosStringsEBooleanosCopia.splice(1, 1)
console.log(minhaListaNumerosStringsEBooleanos)
console.log(minhaListaNumerosStringsEBooleanosCopia)



