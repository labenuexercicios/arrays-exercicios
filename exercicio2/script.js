const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const arrayNumeros = [3,5,7,10,1]
const arrayStrings = ['Vitor','Manoel',"Lima","Santana"]
const arrayMisto =  ["Tudo nosso", 3 , 5 , true , false ]

//Quantidade de item
 console.log( minhaString.length )
console.log( arrayNumeros.length)
console.log( arrayStrings.length)
console.log( arrayMisto.length ) 

//Itens do arrays 1 ,2 e 3
const primeiroItem = arrayNumeros [0];
console.log( primeiroItem)

const segundoItem = arrayStrings [1];
console.log(segundoItem)

const terceiroItem = arrayMisto [2];
console.log(terceiroItem)

//Inclusão booleana Verdadeiro e falsa (true e false)
const inclusaoVerdadeira1Arrays = arrayNumeros.includes(10);
console.log(inclusaoVerdadeira1Arrays)

const inclusaoVerdadeira3Arrays = arrayMisto.includes('Barbosa');
console.log(inclusaoVerdadeira3Arrays)