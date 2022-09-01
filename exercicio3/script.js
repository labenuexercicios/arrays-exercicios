//# Exercício 3

//Agora, vamos manipular os arrays, adicionando ou removendo informações. 
//Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, 
//e faça o que se pede abaixo nas cópias dos arrays originais;

const batata1 = [ 1, 2, 3, 4, 5]
const batata2 = batata1.slice()
batata1.push(32313)

const banana1 = [ 13, 32, 43, 43]
const banana2 = banana1.slice()
banana1.pop()

const maca = [342, 4232, 43432, 4322]
const maca2 = maca.slice()
maca.splice(1, 1)



//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

batata1.push(134)
console.log(batata1, batata2, banana1, banana2, maca, maca2)

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;



//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

