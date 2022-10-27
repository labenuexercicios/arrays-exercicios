const arrayNumber = [2, 7, 1, 10, 0]
const arrayString = ["Miguel", "Meg", "Gorete"]
const arrayDiverso = ["Miguel", 2, true]

/* Agora, vamos manipular os arrays, adicionando ou removendo informações. 
Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais; */

const arrayNumberCopia = arrayNumber.slice()
const arrayStringCopia = arrayString.slice()
const arrayDiversoCopia = arrayDiverso.slice()

//console.log(arrayDiversoCopia)

// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;

arrayNumberCopia.unshift(3)
console.log(arrayNumberCopia)

//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

arrayStringCopia.pop()
console.log(arrayStringCopia)

// Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

arrayDiversoCopia.splice(1, 1)
console.log(arrayDiversoCopia)
