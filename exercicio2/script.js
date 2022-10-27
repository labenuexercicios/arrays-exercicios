//# Exercício 1
/* 

1- No primeiro exercício vamos praticar a criação de arrays. Crie 3 arrays diferentes:
A - O primeiro deve possuir apenas **números**, e estes números não devem seguir nenhuma ordem específica;
B - O segundo array deve possuir apenas **strings**;
C - O terceiro array deve possuir **números**, **strings** e **booleanos**.
D - Imprima cada um dos arrays acima, utilizando `console.log()` */


const arrayApenasNumeros = [30, 22, 18, 40]
const arrayString = ["Nesuko", "lua", "house"]
const arrayNumeroStringBoleano = ["hashira", 10, true]

console.log(`Array Numeros: ${arrayApenasNumeros}`)
console.log(`ArrayString: ${arrayString}`)
console.log(`Array Numeros String Boleano: ${arrayNumeroStringBoleano}`)

/* 


2- Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
A - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
B - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
C - Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um    booleano true e a segunda deve retornar um booleano false.  */


console.log(`lenght Array Apenas Numeros:, ${arrayApenasNumeros.length}`)
console.log(`lenght Array String:, ${arrayString.length}`)
console.log(`lenght Array Numeros String Boleano:", ${arrayNumeroStringBoleano.length}`)

console.log(`O primeiro item do primeiro array é: ${arrayApenasNumeros}` [0])
console.log(`O segundo item do segundo array é: ${arrayApenasNumeros}` [1])
console.log(`O terceiro item do terceiro array é: ${arrayApenasNumeros}` [2])


console.log(`O Item a seguir esta incluso no primeiro array? ${arrayApenasNumeros.includes(30)}`)
console.log(`O item a seguir esta incluso no segundo array? ${arrayNumeroStringBoleano.includes(50)}`)