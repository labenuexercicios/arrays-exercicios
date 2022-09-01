// Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
// Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
/*Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana
 falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.*/


 const arrayNumero = [2,4,6,8,10,12,14,16,18,20]
 const arrayString = ["verde","branco","grená"]
 const arrayMisto =[1902,"time",true]
 
 
 console.log(arrayNumero.length)
 console.log(arrayString.length)
 console.log(arrayMisto.length)
 
 console.log(arrayNumero[0], arrayString[1], arrayMisto[2])
 console.log.apply(arrayNumero.includes(5), arrayMisto.includes(5)) //includes: imprime true or false