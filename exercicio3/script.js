//# Exercício 3

//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const nomeDoArrayOriginalCopia = [1, 2, 3, 4, 5, 6];
const nomeDoArrayOriginalCopia1 = nomeDoArrayOriginalCopia.slice();
const nomeDoArrayOriginalCopia2 = nomeDoArrayOriginalCopia.slice();

//- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
nomeDoArrayOriginalCopia.unshift(0);
console.log(nomeDoArrayOriginalCopia);
console.log(nomeDoArrayOriginalCopia1);

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
nomeDoArrayOriginalCopia2.splice(1,1);
console.log(nomeDoArrayOriginalCopia);
console.log(nomeDoArrayOriginalCopia2);
//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
nomeDoArrayOriginalCopia1.pop();
console.log(nomeDoArrayOriginalCopia);
console.log(nomeDoArrayOriginalCopia1);