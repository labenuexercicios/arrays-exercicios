//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

const numeros = [2 , 8 , 12]
const strings = ['viver' , 'melhor' , 'Deus']
const varios = [3 , "Help" , true]

//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

const numerosCopia = numeros.push(19)
console.log(numeros)

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

const stringsCopia = strings.pop()
console.log(strings)

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

const variosCopia = varios.splice(1, 1)
console.log(varios)