
let arrayDeNumeros = [45, 20, 35, 65, 80];
let arrayDeStrings = ["jessica", "maria", "fernanda"];
let arrayDeTodoTipo = [50, 80, "johnny", "paul", true, false];

console.log(arrayDeNumeros);
console.log(arrayDeStrings);
console.log(arrayDeTodoTipo);

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo,
// utilizando `console.log()`:

// Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log(arrayDeNumeros.length);
console.log(arrayDeStrings.length);
console.log(arrayDeTodoTipo.length);

// Imprima o primeiro item do primeiro array, o segundo item do segundo array,
// e o terceiro item do terceiro array;

console.log(arrayDeNumeros[0]);
console.log(arrayDeStrings[1]);
console.log(arrayDeTodoTipo[2]);

// Verifique se um item está incluído no primeiro array e depois no terceiro
// array e imprima o resultado destas verificações no console.log(). A primeira
// impressão deve retornar um booleano true e a segunda deve retornar um booleano false.

console.log(arrayDeNumeros.includes(20));
console.log(arrayDeTodoTipo.includes("dominic"));

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";