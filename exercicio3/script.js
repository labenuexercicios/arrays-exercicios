/**
Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie três novos arrays, chamados nomeDoArrayOriginalCopia, e faça o que se pede abaixo nas cópias dos arrays originais;

         . Utilize console.log() para exibir o original e a cópia;
    Remova o último item do segundo array. Utilize console.log() para exibir o original e a cópia;
    Remova o segundo item do terceiro array. Utilize console.log() para exibir o original e a cópia;
  
  
Ejercicio 3

Ahora, manipulemos las matrices, agregando o eliminando información. Para hacerlo, cree tres nuevos arreglos, llamados nomeDoArrayOriginalCopia,
y haga lo que se le pide a continuación en las copias de los arreglos originales;

     Agregue un número de artículo al comienzo de la primera matriz. Usa console.log() para mostrar el original y la copia;
     Elimina el último elemento de la segunda matriz. Usa console.log() para mostrar el original y la copia;
     Retire el segundo elemento de la tercera matriz. Usa console.log() para mostrar el original y la copia; */
//array com tres itens numero
const arrayNumero = [37, 25 , 25]
console.log(arrayNumero)

//array com tres itens string
const arrayString = ["maria", "martin", "santiago"]
console.log(arrayString)

//array com tres itens booleano
const arrayBooleano = [true, false, true]
console.log(arrayBooleano)

const nomeDoArrayOriginalCopiaUm = arrayNumero.slice()//copia del array
const nomeDoArrayOriginalCopiaDois = arrayString.slice()//copia del array
const nomeDoArrayOriginalCopiaTres = arrayBooleano.slice()//copia del array

console.log(nomeDoArrayOriginalCopiaUm)
console.log(nomeDoArrayOriginalCopiaDois)
console.log(nomeDoArrayOriginalCopiaTres)

/// Adicione um item number ao início do primeiro array

nomeDoArrayOriginalCopiaUm.splice(0,0,"4500")// agrega
console.log(nomeDoArrayOriginalCopiaUm)

// Remova o último item do segundo array.

nomeDoArrayOriginalCopiaDois.pop()
console.log(nomeDoArrayOriginalCopiaDois)

// Remova o segundo item do terceiro array
const res = nomeDoArrayOriginalCopiaTres.filter(sacarFalse);

function sacarFalse (value){
    return value == true  
}

console.log(res)