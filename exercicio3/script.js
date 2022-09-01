// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, 
// e faça o que se pede abaixo nas cópias dos arrays originais;

const arrayNum = [9, 12, 15, 25, 10]
const arrayNomes = ["juliana", "lucas", "victoria", "andre", "bob"]
const arrayBooleanos = [9 === 12, 12 > 18, 15 < 10, 25 === 25, 10 > 8]
const arrayNumCopia = arrayNum.slice()
const arrayNomesCopia = arrayNomes.slice()
const arrayBooleanosCopia = arrayBooleanos.slice()

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayNum.push(50)
console.log(arrayNum)
console.log(arrayNumCopia)

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arrayNomes.pop()
console.log(arrayNomes)
console.log(arrayNomesCopia)

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayBooleanos.splice(1, 1)
console.log(arrayBooleanos)
console.log(arrayBooleanosCopia)

