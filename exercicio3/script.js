const arrayNum = [1,2,3,4]
const arrayString = ["Livan", "Bea", "Kesz", "Samu"]
const arrayMisto = [20, "Will", true]

const arrayNumCopia = arrayNum.slice()
const arrayStringCopia = arrayString.slice()
const arrayMistoCopia = arrayMisto.slice()

console.log(`
${arrayNumCopia}
${arrayStringCopia}
${arrayMistoCopia}
`)

//a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.
arrayNumCopia.unshift(10)

console.log(`
Array original: ${arrayNum}
Array cópia: ${arrayNumCopia}
`)


//b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.
arrayStringCopia.pop()

console.log(`
Array original: ${arrayString}
Array cópia: ${arrayStringCopia}
`)

//c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.
arrayMistoCopia.splice(1,1)

console.log(`
Array original: ${arrayMisto}
Array cópia: ${arrayMistoCopia}
`)
