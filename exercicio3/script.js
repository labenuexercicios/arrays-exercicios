// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
let arrayNumero = [1, 2, 3, 4, 5]

let arrayString = ["a", "b", "c", "d"]

let arrayMisto = [3, "c", false]
// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
let arrayNumeroCopia = arrayNumero.slice()
arrayNumeroCopia.push(6)
console.log(arrayNumero)
console.log(arrayNumeroCopia)

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
let arrayStringCopia = arrayString.slice()
arrayStringCopia.pop()
console.log(arrayString)
console.log(arrayStringCopia)
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
let arrayMistoCopia = arrayMisto.slice()
arrayMistoCopia.splice(1, 1)
console.log(arrayMisto)
console.log(arrayMistoCopia)
