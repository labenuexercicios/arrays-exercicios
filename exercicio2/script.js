const arraynumeros = [50,13,98,42,7]
console.log("Array números", arraynumeros)

const arraynomeszoo = ['leão, macaco, jacaré, capivara']
console.log("Array nomes", arraynomeszoo)
const arraymisturada = ["microondas", 20, true]
console.log("Array mista", arraymisturada)

//1-Imprima a quantidade de itens de cada array 
//(utilize um console.log() para cada impressão);

console.log("Itens array números", arraynumeros.length)
console.log("Itens array nomes", arraynomeszoo.length)
console.log("Itens array mista", arraymisturada.length)


//2-Imprima o primeiro item do primeiro array, 
//o segundo item do segundo array, 
//e o terceiro item do terceiro array;

console.log("Impressão 1º ítem do arraynumeros", arraynumeros[0])
console.log("Impressão 2º ítem do arraynomeszoo", arraynomeszoo[1])
console.log("Impressão 3º ítem do arraymisturada", arraymisturada[2])

//3-Imprima uma informação booleana verdadeira sobre a inclusão de um item
//do primeiro array, e uma informação booleana falsa sobre a inclusão de um
//item ao terceiro array. Isto é, um includes() verdadeiro, e outro falso.

console.log("Tem o número 13?", arraynumeros.includes(13))
console.log("Quantos minutos no microondas?", arraymisturada.includes(30))

