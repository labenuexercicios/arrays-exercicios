// # Exercício 2

// Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, utilizando `console.log()`:

// a) Crie uma função que recebe os 3 arrays por parâmetro  e imprima a **quantidade de itens** de cada array (utilize o `console.log()` para cada impressão).

// b) Crie outra função que recebe os 3 arrays por parâmetro e  imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.

// c) Na mesma função **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve ser um booleano **true** e a segunda deve ser um booleano **false**.

// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.



const arraynumeros = [1,18,3,209,56.5,11]
const arraystrings = ["Labenu", "Miranda"]
const arraytudo = [3,8,"Ludmila", true, "Gica",17.5]



function osTresArreys (numero, string, tudo) {
//    quer dizer que estou dando um nome só?

console.log(numero);

console.log(numero.length);
console.log(string.length);
console.log(tudo.length);
    
    console.log (numero[0]);
    console.log (string[1]);
    console.log (tudo[2]);
    console.log (numero.includes[3]);

} 

osTresArreys(arraynumeros,arraystrings, arraytudo)