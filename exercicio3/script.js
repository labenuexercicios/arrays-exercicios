// EXERCÍCIO 1 CRIANDO OS ARRAYS
console.log("EXERCÍCIO 1");

const array1 = [9, 3, 11, 6];
const array2 = ["uva", "goiaba", "laranja"];
const array3 = ["frutas", 2, true];
console.log("Array1: ", array1);
console.log("Array2: ", array2);
console.log("Array3: ", array3);

// EXERCÍCIO 2 OBSERVANDO OS ARRAYS
console.log("EXERCÍCIO 2");

console.log("Imprima, respectivamente, a quantidade de ítens de cada array:");
console.log("Array1: ", array1.length);
console.log("Array2: ", array2.length);
console.log("Array3: ", array3.length);

//console.log("Imprima o primeiro ítem do primeiro array: ", array1.splice(0,1));
//console.log("Imprima o segundo ítem do segundo array:", array2.splice(1,1));
//console.log("Imprima o terceiro ítem do terceiro array:", array3.splice(2,1));

console.log("O primeiro array inclui o número 11?", array1.includes(11));
console.log("O terceiro array inclui a palavra banana?", array3.includes("banana"));

// EXERCÍCIO 3 MANIPULANDO OS ARRAYS
console.log("EXERCÍCIO 3");

const array1Copia = array1.slice(); //cortar o vínculo entre o array1 e sua cópia
const array2Copia = array2.slice();
const array3Copia = array3.slice();
array1Copia.push(5);
console.log("Array1: ", array1);
console.log("Adicione mais um número ao array1: ", array1Copia);
array2Copia.pop();
console.log("Array2: ", array2);
console.log("Remova o último ítem do segundo array: ", array2Copia);
array3Copia.splice(1,1);
console.log("Array3: ", array3);
console.log("Remova o segundo ítem do terceiro array: ", array3Copia);