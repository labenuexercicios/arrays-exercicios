// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
 
let arrayNumber = [1, 5, 4, 8, 2];
let arrayString = ["Joao", "Carlos", "Antonio", "Vitor"];
let arrayStringNumberBool = ["Joao", 3, true];

let arrayNumberCopia = arrayNumber.slice()
let arrayStringCopia = arrayString.slice()
let arrayStringNumberBoolCopia = arrayStringNumberBool.slice()

arrayNumberCopia.push(9)
console.log(`ArrayNumber Original:  (${arrayNumber})
ArrayNumber Copia apos add um numero 9:  (${arrayNumberCopia})`)

arrayStringCopia.pop([3])
console.log(`arrayString Original:  (${arrayString})
arrayStringCopia após remover o ultimo item que seria "Vitor":  (${arrayStringCopia})`)

arrayStringNumberBoolCopia.splice(1,1)
console.log(`arrayStringNumberBool Original:  (${arrayStringNumberBool})
arrayStringNumberBoolCopia após remover o segundo item que seria "3":  (${arrayStringNumberBoolCopia})`)