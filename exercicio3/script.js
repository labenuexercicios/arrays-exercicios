/* # Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

*/

const arrayNumeros = [5,7,9,4]
const arrayStrings = ["férias","descanso","dormir"]
const arrayVariados = [13,"Lula",true]

const copiaArrayNumeros = arrayNumeros. slice()
const copiaArrayStrings = arrayStrings. slice()
const copiaArrayVariados = arrayVariados.slice()

//- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;

copiaArrayNumeros.unshift(3)
console.log(arrayNumeros)
console.log(copiaArrayNumeros)

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

copiaArrayStrings.pop()
console.log(arrayStrings)
console.log(copiaArrayStrings)
//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;


copiaArrayVariados.splice (1,1)
console.log(arrayVariados)
console.log(copiaArrayVariados)