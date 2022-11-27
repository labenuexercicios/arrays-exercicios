// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

const arrayOriginal = [1,2,3,4,5]
const arrayCopia = [1,2,3,4,5]
const arrayCopia2 = [1,2,3,4,5]

// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayOriginal.push(6)
console.log(arrayOriginal, arrayCopia)
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia
arrayCopia.pop();
console.log(arrayOriginal,arrayCopia)
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayCopia2.splice(1,1)
console.log(arrayOriginal,arrayCopia2)
console.log(arrayCopia2.splice(1,1))