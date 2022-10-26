const arrayNumber = [1, 12, 23, 15, 35]
const arrayNumberCOPIA = arrayNumber.slice()
arrayNumberCOPIA.push(11)
console.log(`Original: ${arrayNumber} \nCopia:${arrayNumberCOPIA}`)

const arrayStrings = ["arroz", "frango", "ovo", "whey"]
const stringsCopia = arrayStrings.slice()
arrayStrings.pop()
console.log(`Original:${arrayStrings} \nCopia: ${stringsCopia}`)

const aleatorio = [11, "pimenta", true]
const aleatorioCOPIA = aleatorio.slice()
aleatorio.splice(1,1)
console.log(`Original: ${aleatorio} \nCopia: ${aleatorioCOPIA}`)