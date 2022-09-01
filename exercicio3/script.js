const nomeDoArrayOriginal01 = ['morango', 'manga', 'abacate']
const nomeDoArrayOriginal02 = ['uva', 'tomate', 'abacaxi']
const nomeDoArrayOriginal03 = ['alface', 'cebola', 'batata']

//const nomeDoArrayOriginalCopia = [...nomeDoArrayOriginal01]
const nomeDoArrayOriginalCopia = nomeDoArrayOriginal01.slice()

const nomeDoArrayOriginal02Copia = [...nomeDoArrayOriginal02]

const nomeDoArrayOriginal03Copia = [...nomeDoArrayOriginal03]

nomeDoArrayOriginalCopia.push(6)

nomeDoArrayOriginal02Copia.pop()

nomeDoArrayOriginal03Copia.splice(1,1)

console.log('Primeiro Array')
//=====================
console.log('Primairo: ' + nomeDoArrayOriginal01)
console.log('CopiaPrimeiro: ' + nomeDoArrayOriginalCopia)

console.log('Segundo Array')
//=======================
console.log('Segundo: '+ nomeDoArrayOriginal02)
console.log('CopiaSegundo: ' + nomeDoArrayOriginal02Copia)

console.log('Terceiro Array')
//=======================
console.log('Segundo: '+ nomeDoArrayOriginal03)
console.log('CopiaSegundo: ' + nomeDoArrayOriginal03Copia)