//const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// EXERCÍCIO 1 CRIANDO OS ARRAYS

const array1 = [9, 3, 11, 6];
const array2 = ["uva", "goiaba", "laranja"];
const array3 = ["frutas", 2, true];
console.log(array1);
console.log(array2);
console.log(array3);

// EXERCÍCIO 2 OBSERVANDO OS ARRAYS

console.log("Imprima, respectivamente, a quantidade de ítens de cada array:");
console.log("Array1: ", array1.length);
console.log("Array2: ", array2.length);
console.log("Array3: ", array3.length);

console.log("Imprima o primeiro ítem do primeiro array: ", array1.splice(0,1));
console.log("Imprima o segundo ítem do segundo array:", array2.splice(1,1));
console.log("Imprima o terceiro ítem do terceiro array:", array3.splice(2,1));

console.log("O primeiro array inclui o número 11?", array1.includes(11));
console.log("O terceiro array inclui a palavra banana?", array3.includes("banana"));