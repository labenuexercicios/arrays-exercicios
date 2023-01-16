/**Exercício 2

Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando console.log():

    Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
    Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
    Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações 
    no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.

    Con las matrices creadas, ahora veamos las matrices. Haz lo que se te pide a continuación, usando console.log():

     Imprima la cantidad de elementos en cada matriz (utilice un archivo console.log() para cada impresión);
     Imprima el primer elemento de la primera matriz, el segundo elemento de la segunda matriz y el tercer elemento de la tercera matriz;
     Verifique si un elemento está incluido en la primera matriz y luego en la tercera matriz e imprima el resultado de estas comprobaciones
     en consola.log(). La primera impresión debe devolver un booleano verdadero y la segunda debe devolver un booleano falso.

*/

//array com tres itens numero
const arrayNumero = [37, 25 , 25]

//array com tres itens string
const arrayString = ["maria", "martin", "santiago"]

//array com tres itens booleano
const arrayBooleano = [true, false, true]

//array variado
/*
const nome = "Mariana";
const idade = 37;
const trabalhando = true;
const arrayVariado = [nome,idade,trabalhando];
console.table(arrayVariado)
*/

//imprima quantidade de intens
//const arrayItens = [1,2,3,4,5,6,7,8,9,10]
console.log(arrayNumero)
console.log(arrayString)
console.log(arrayBooleano)
//imprima primeiro, segundo,terceiro item
console.log(arrayNumero.indexOf(37))
console.log(arrayString.indexOf("maria"))
console.log(arrayBooleano.indexOf(true))
//verifique se um item esta incluido no primeiro array e no terceiro deve retornar true o primeiro false o segundo
console.log(arrayNumero.includes(37))
console.log(arrayBooleano.includes(11)) 

