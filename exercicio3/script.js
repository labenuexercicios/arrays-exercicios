const arraysNumOriginal = [12, 11, 8, 666, 310]
const arraysStringOriginal = [`roxo`, `vermelho`, `azul`, `verde`, `amarelo`]
const arraysMistaOriginal = [`churrasco`, 13, true, 22, false, `arma`]

const arraysNumCopia = arraysNumOriginal.slice()
arraysNumCopia.unshift(13)

console.log(arraysNumOriginal)
console.log(arraysNumCopia) 

const arraysStringCopia = arraysStringOriginal.slice()
arraysStringCopia.pop()

console.log(arraysStringOriginal)
console.log(arraysStringCopia)

const arraysMistaCopia = arraysMistaOriginal.slice()
arraysMistaCopia.splice(1,1)

console.log(arraysMistaOriginal)
console.log(arraysMistaCopia)