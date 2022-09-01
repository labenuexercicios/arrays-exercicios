const primeiroArray = [80, 5, 8, 12]
const segundoArray = ["peixe", "cachorro", "alpaca", "esquilo"]
const terceiroArray = [80, "gato", true, "lontra"]

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(primeiroArray.length)
console.log(segundoArray.length)
console.log(terceiroArray.length)
console.log("=========================")
//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(primeiroArray[0])
console.log(segundoArray[1])
console.log(terceiroArray[2])
console.log("=========================")
//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log(primeiroArray.includes(8))
console.log(terceiroArray.includes("peixe"))
