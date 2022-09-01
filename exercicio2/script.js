//const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const listaMxConvite = [20, 25, 30, 35, 45];
const listaTotal = ["banana", "maçã", "laranja", "uva", "caju"];
const listaFinal = [23, "maçã", 27, "uva", true];
console.log(listaFinal)
//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(listaMxConvite.length)
console.log(listaTotal.length)
console.log(listaFinal.length)
//- Imprima o primeiro item do primeiro array, 
//o segundo item do segundo array, e o terceiro item do terceiro array;
console.log("modo impressão em única variável:")
console.log(listaMxConvite[0], listaTotal[1], listaFinal[2])
//Outro modo de imprimir ex1:
console.log("Modo impressão separada:")
console.log(listaMxConvite[0])
console.log(listaTotal[1])
console.log(listaFinal[2])
//Outro modo de imprimir ex2:
console.log("modo slice:")
console.log(listaMxConvite.slice(0,1))
console.log(listaTotal.slice(1,2))
console.log(listaFinal.slice(2,3))
//console.log("modo splice:")EVITE!Pois o Splice altera a Array original.
//console.log(listaMxConvite.splice(0,1))
//console.log(listaTotal.splice(1,1))
//console.log(listaFinal.splice(2,1))

//- Imprima uma informação booleana verdadeira sobre a **inclusão** 
//de um item do primeiro array, e uma informação booleana 
//falsa sobre a **inclusão** de um item ao terceiro array. 
//Isto é, um `includes()` verdadeiro, e outro falso.
console.log(listaMxConvite.includes(25))
console.log(listaFinal.includes("caju"))