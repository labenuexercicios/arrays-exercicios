//Essas const foram retiradas do exercicio 1.
// Continucação dos arrays.

const numbArrays = [15, 06, 96, 03, 10, 16]

const stringsArrays = ["Bolo", "Maça", "Banana" , "Cupuaçu"]

const numStriBoo = [15, 06 ,96 , "Bolo", "Banana", "Maça", true, false]

// Função da length para contar o tamanho. 
// array ele conta os itens ex: 1- item bolo, 2- item banana etc; 
// String ele conta os caracteres, ex: 1- item Bolo = 4 caracteres etc;

console.log(numbArrays.length())
console.log(stringsArrays.length())
console.log(numStriBoo.length())
console.log(numbArrays[0], stringsArrays[1], numStriBoo[2])

console.log(numbArrays.includes(06))                                                           
console.log(stringsArrays.includes("Jaca"))
console.log(numStriBoo.includes(15), numStriBoo.includes("Uva")) 
