console.log(" - EXERCÍCIO 2 [ARRAYS] -")

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando console.log():
const arrNum = [521,63,380,17,24,187,498,36,147]
const arrStr = ["Brasil","batata","Maria","tesoura","filhos","suco","avós","cores"]
const arrMix = [248,"pneu",true,false,18,"carteira","dez",83,true]
// Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log("A quantidade de itens na arrNum é:",arrNum.length)
console.log("A quantidade de itens na arrStr é:",arrStr.length)
console.log("A quantidade de itens na arrMix é:",arrMix.length)

// Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log("O primeiro item da arrNum é:",arrNum[0])
console.log("O segundo item da arrStr é:",arrStr[1])
console.log("O terceiro item da arrMix é:",arrMix[2])

// Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.
console.log("A arrNum inclui 24.",arrNum.includes(24))
console.log("A arrMix inclui cafeteira.",arrMix.includes("cafeteira"))