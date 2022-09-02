const number = [ 10 , 20 , 30]
const word = [ " ab " , " cd " , " ef " ]
const boole = [ 15 , " mc " , false ]

const number1 = number.slice()
number.push(" number ")

console.log(`${number}\n${number1}`)

const word1 = word.slice()
word1.pop()
console.log(`${word}
${word1}`)

const boole1 = boole.slice()
boole1.splice(1,1)
console.log(`${boole}
${boole1}`)