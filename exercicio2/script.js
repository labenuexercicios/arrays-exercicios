const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//# Exercício 2

//Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
const numeros = [01, 15, 35, 07, 42];
const strings = ["gabriel", "vincent", "mayana"];
const arraymix = ["lula", 13, true, "bozo", false, 22];

console.log("A quantidade de itens no primeiro array é", numeros.length);
console.log("A quantidade de itens no segundo array é", strings.length);
console.log("A quantidade de itens no terceiro array é", arraymix.length);

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log("O primeiro item do primeiro array é", numeros[0]);
console.log("O segundo item do segundo array é", strings[1]);
console.log("O terceiro item do terceiro array é", arraymix[2]);
//- Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 
console.log("O primeiro array possui o item 01?", numeros.includes(01))
console.log("O terceiro array possui o item 40?", arraymix.includes(40))
