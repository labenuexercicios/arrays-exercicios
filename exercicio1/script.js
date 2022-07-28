
const arrayNumbers = [35, 21, 18, 7, 94, 85];
console.log(arrayNumbers);

const arrayString = ["Leonardo", "Pereira", "Costa"];
console.log(arrayString);

const arrayMisto = ["Games", 22, true];
console.log(arrayMisto);

const primeiroItem = arrayNumbers[0];
console.log(primeiroItem);

const segundoItem = arrayString[2]
console.log(segundoItem);

const terceiroItem = arrayMisto[3]
console.log(terceiroItem);
//Undefined pois não existe terceiro indice, no arrayMisto

const inforcacao1 = arrayNumbers.includes(94);
console.log(inforcacao1);

const informacao2 = arrayMisto.includes("games");
console.log(informacao2);

const copiaArrayNumbers = arrayNumbers.slice();
const copiaArrayString = arrayString.slice();
const copiaArrayMisto = arrayMisto.slice();

arrayNumbers.push(44);
console.log(copiaArrayNumbers);
console.log(arrayNumbers);

arrayString.pop();
console.log(copiaArrayString);
console.log(arrayString);

arrayMisto.splice(1,1);
console.log(copiaArrayMisto);
console.log(arrayMisto);

