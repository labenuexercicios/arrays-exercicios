// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;



// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
const arreyOriginal =[15,9,4]
const arreyCopia =[arreyOriginal]
console.log(arreyOriginal)
console.log(arreyCopia)
const arreyOriginalCopia = [arreyCopia]

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arreyCopia.splice(3,1)
console.log(arreyCopia)
console.log(arreyOriginal)
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arreyOriginalCopia.splice(1,1)
console.log(arreyOriginalCopia)