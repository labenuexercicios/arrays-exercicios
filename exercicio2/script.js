// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

const numeros = [12,6,22,15,45,9,53]
const strings = ["oi","tudo bem?","bora assistir o jogo"]
const misto = [7,2,"Que horas são?",5==7,10<=25]

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log(numeros.length)
console.log(strings.length)
console.log(misto.length)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(numeros[0],strings[1],misto[2])

// - Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 

const verif = [numeros[0] === 12, misto[0] === 2]
console.log(verif)





