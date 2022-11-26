const arrayDeNumeros = [800,2,599]
const arrayDeStrings = [`bananinha`, `maçã`, `pelucia`]
const arrayMista = [`maça`, 2, false]


// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados  
// `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

const arrayDeNumerosCopia = arrayDeNumeros.slice()
const arrayDeStringsCopia = arrayDeStrings.slice()
const arrayMistaCopia = arrayMista.slice()

// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayDeNumerosCopia.unshift(0)
console.log(arrayDeNumeros, arrayDeNumerosCopia)

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arrayDeStringsCopia.splice(2,1)
console.log(arrayDeStrings, arrayDeStringsCopia)

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayMistaCopia.splice(1,1)
console.log(arrayMista, arrayMistaCopia) 