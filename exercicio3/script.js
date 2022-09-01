const arrayNumeros = [3, 6, 9, 1, 7]
const arrayStrings = ["Giulia", "Guilherme", "Otávio", "Victória"]
const arrayMisto = [7, 9, "Giulia", "Otávio", true, false]

const arrayNumerosCopia = arrayNumeros.slice()
const arrayStringsCopia = arrayStrings.slice()
const arrayMistoCopia = arrayMisto.slice()

arrayNumerosCopia.push(2)
console.log (`Adicione um item number ao primeiro array:
ORIGINAL 
${arrayNumeros}
COPIA
${arrayNumerosCopia}
`)

arrayStringsCopia.pop()
console.log (`Remova o último item do segundo array:
ORIGINAL
${arrayStrings}

COPIA
${arrayStringsCopia}
`)

arrayMistoCopia.splice(1,1)
console.log (`Remova o segundo item do terceiro array:
ORIGINAL
${arrayMisto}

COPIA
${arrayMistoCopia}
`)

