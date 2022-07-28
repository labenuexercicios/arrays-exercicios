const arrayNumbers = [50, 21, 23, 8, 4, 7]
const arrayStrings = ["Bruna", "Paiani", "Nasser", "Spaniol"]
const arrayMisto = ["Salvador", 2022, true]

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

const arrayNumbersCopia = arrayNumbers.slice();
const arrayStringsCopia = arrayStrings.slice();
const arrayMistoCopia = arrayMisto.slice();

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayNumbersCopia.push(87);
console.log("Array original", arrayNumbers);
console.log("Array Cópia", arrayNumbersCopia);


// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

arrayStringsCopia.pop();
console.log("Array original", arrayStrings );
console.log("Array Cópia", arrayStringsCopia);


// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayMistoCopia.splice(1, 1);
console.log("Array original", arrayMisto);
console.log("Array Cópia", arrayMistoCopia);