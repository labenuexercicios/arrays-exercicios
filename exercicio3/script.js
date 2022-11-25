// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const nomeDoArrayOriginalCopia1 = ["sol", "estrela", "ruas", "estradas"]
const nomeDoArrayOriginalCopia2 = nomeDoArrayOriginalCopia1.slice()
const nomeDoArrayOriginalCopia3 = [1, 2, 3, 4]

// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
nomeDoArrayOriginalCopia1.unshift(0)
console.log(nomeDoArrayOriginalCopia1)
console.log(nomeDoArrayOriginalCopia2)

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
nomeDoArrayOriginalCopia2.splice(3,1)
console.log(nomeDoArrayOriginalCopia1)
console.log(nomeDoArrayOriginalCopia2)

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
nomeDoArrayOriginalCopia3.splice(2,1) 
console.log(nomeDoArrayOriginalCopia3)
