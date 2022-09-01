//EXERCÍCIO 2
//Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:


//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

const numeros = [6, 0, 2, 4, 3, 1, 5]

const checklistMala = ["blusa", "calça", "tênis"]

const tudoMisturado = [10, 12, "areia", "mar", "true", "false"]

console.log(numeros.length)
console.log(checklistMala.length)
console.log(tudoMisturado.length)



//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(numeros[0])
console.log(checklistMala[1])
console.log(tudoMisturado[2])



//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.


numeros.includes(6) //true
console.log(`Existe o número 6 no array? `+ numeros.includes(6))


tudoMisturado.includes("terno") //false
console.log(`Existe a palavra "terno" no array? `+ tudoMisturado.includes("terno"))
