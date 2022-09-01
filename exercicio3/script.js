//EXERCÍCIO 3
//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

const numeros = ["6", "0", "2", "4", "3", "1", "5"]
const numerosCopia = numeros.slice()
numerosCopia.push(8)


console.log(numeros) //6, 0, 2, 4, 3, 1, 5]
console.log(numerosCopia) //6, 0, 2, 4, 3, 1, 5, 8]



//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

const checklistMala = ["blusa", "calça", "tênis"]
const checklistMalaCopia = checklistMala.pop()

console.log(checklistMala)
console.log(checklistMalaCopia)


//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

const tudoMisturado = [10, 12, "areia", "mar", "true", "false"]
const tudoMisturadoCopia = tudoMisturado.splice(1, 1)


console.log(tudoMisturado)
console.log(tudoMisturadoCopia)


