//ARRAY NUMEROS

const arrayNumeros = [10,21,37,44,55,69]


//ARRAY STRINGS

const arrayStrings = ["leao","tigre", "onça"]
console.log(arrayStrings)

//ARRAY BOLEANOS

const arrayMisto = [1, 'Animais', false]
console.log(arrayMisto)

//ARRAYS COPIADOS

const arrayNumerosCopy = arrayNumeros.slice()
arrayNumeros.push (100)
console.log(arrayNumeros, arrayNumerosCopy)


const arrayStringsCopy = arrayStrings.slice()
arrayStringsCopy.pop()
console.log(arrayStrings, arrayStringsCopy)


const arrayMistoCopy = arrayMisto.slice()
arrayMisto.splice(1,1)
console.log(arrayMistoCopy, arrayMisto)


