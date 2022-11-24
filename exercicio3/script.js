const array1Original = [15]
const array2Original = ["Brasil", "Ano de eleição"]
const array3Original = ["Copa", "São Paulo", "Sirr"]

const array1Copia = array1Original
const array2Copia = array2Original
const array3Copia = array3Original

const array1OriginalCopia = [array1Original, array1Copia]
const array2OriginalCopia = [array2Original, array2Copia]
const array3OriginalCopia = [array3Original, array3Copia]

console.table(array1OriginalCopia)
console.table(array2OriginalCopia)
array2Original.pop();
console.table(array2OriginalCopia)
console.table(array3OriginalCopia)
array3Original.splice(1,1)
console.table(array3OriginalCopia)
