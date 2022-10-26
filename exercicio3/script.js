/* # Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;


 */


const arrayOriginal = [5, 2, 8, 7, 6,]
const arrayOriginalCopia = arrayOriginal
console.log(arrayOriginal)

arrayOriginalCopia.unshift(3)
console.log(arrayOriginalCopia)

const array2 = [7, 9, 4, 2, 4]
const array2copia = array2
console.log(array2)

array2copia.splice(4, 1)
console.log(array2copia)

const array3 = [8, 5, 7, 1, 3]
const array3Copia = array3
console.log(array3)

array3Copia.splice(2, 1)
console.log(array3Copia)
