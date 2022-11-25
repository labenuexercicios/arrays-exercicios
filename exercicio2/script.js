
// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
const minhaLista = [ "gato","cachorro","pássaro" ]
// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(minhaLista.length)
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(`item 1 ${minhaLista[0]}`)
console.log(`item 2 ${minhaLista[1]}`)
console.log(`item 3 ${minhaLista[2]}`)
// - Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 
console.log(minhaLista.includes("avestruz"))
console.log(minhaLista.includes("gato"))

