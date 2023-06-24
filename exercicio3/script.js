// # Exercício 3

// Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.
const arrayNumeros = [1,2,3,4,5]
const arrayStrings = ['Ana', 'Orci', 'Arthur']
const arrayMisto = ['Orci', 46, true]
// Faça o que se pede abaixo nas **cópias** dos arrays originais:
console.log('a -=-')
const arrayNumerosCopia = arrayNumeros.slice()
const arrayStringsCopia = arrayStrings.slice()
const arrayMistoCopia = arrayMisto.slice()

// a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.
arrayNumerosCopia.unshift('Number')
console.log(arrayNumeros)
console.log(arrayNumerosCopia)

console.log('b -=-')

// b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.
console.log(arrayStrings)
arrayStringsCopia.pop()
console.log(arrayStringsCopia)

console.log('c -=-')

// c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.
console.log(arrayMistoCopia)
arrayMistoCopia.splice(1,1)
console.log(arrayMistoCopia)


// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.
