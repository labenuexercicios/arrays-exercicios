// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const arrayNumber = [1, 5, 12]
const arrayString = ['Brooklyn 99', 'The Office', 'Parks and Recreation']
const arrayMista = [2, 'Olá', false, 7, true]
const arrayNumberCopia = arrayNumber.slice()
const arrayStringCopia = arrayString.slice()
const arrayMistaCopia = arrayMista.slice()

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayNumberCopia.push(18)
console.log('Original: ' + arrayNumber)
console.log('Cópia: ' + arrayNumberCopia)
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arrayStringCopia.pop()
console.log('Original: ' + arrayString)
console.log('Cópia: ' + arrayStringCopia)
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayMistaCopia.splice(1, 1)
console.log('Original: ' + arrayMista)
console.log('Cópia: ' + arrayMistaCopia)
