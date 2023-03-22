// Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.

// Faça o que se pede abaixo nas **cópias** dos arrays originais:

// a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.

// b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.

// c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.


// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.


const arrayNumber = [26, 29, 7, 6, 5, 4, 2]
const arrayStrings = ["chimia", "agnes" , "nico", "morceguita"]
const arrayNsb = [2, 800, "draculito", "edward" , false, true, true]

const arrayNumberCopia = arrayNumber.slice();
const arrayStringsCopia = arrayStrings.slice();
const arrayNsbCopia = arrayNsb.slice();

//a
console.log(arrayNumber)
arrayNumberCopia.unshift(1)
console.log(arrayNumberCopia)

//b
console.log(arrayStrings)
arrayStringsCopia.pop()
console.log(arrayStringsCopia)

//c
console.log(arrayNsbCopia)
arrayNsbCopia.splice(1,1)
console.log(arrayNsbCopia)