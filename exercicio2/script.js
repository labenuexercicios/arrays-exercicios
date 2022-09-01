//Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
const numero = [5, 2, 4, 8, 6, 1, 7, 9, 3]
const texto = ["A", "B", "C", "D", "E", "F"]
const mista = [5000, "game of thrones", true]

//Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(numero.length)
console.log(texto.length)
console.log(mista.length)

//Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(numero[0])
console.log(texto[1])
console.log(mista[2])

//Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log(numero.includes(1))
console.log(mista.includes("game"))
    