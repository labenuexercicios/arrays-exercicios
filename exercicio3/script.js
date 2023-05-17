// # Exercício 3

// Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.

// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.

// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.

const arrayNumber = [3, 12, 45]
const arrayString = ["tenis", "bola", "picole"]
const arrayMix = ["boneca", 23, true]

const arrayNumberCopia = arrayNumber.slice()
const arrayStringCopia = arrayString.slice()
const arrayMixCopia = arrayMix.slice()

// Faça o que se pede abaixo nas **cópias** dos arrays originais:

// a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.

arrayNumberCopia.unshift(89)
console.log(arrayNumber);
console.log(arrayNumberCopia);

// b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.

arrayStringCopia.pop()
console.log(arrayString);
console.log(arrayStringCopia);

// c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.

arrayMixCopia.splice(1,1)
console.log(arrayMix);
console.log(arrayMixCopia);