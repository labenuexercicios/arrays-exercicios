// Exercício 3
//Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. 
//Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
const number = [5, 10, 15, 20]
const strings = ["caneta", "lápis", "borracha"]
const mista = [12, 15, "marca texto", "lapiseira", "true", "false"]

//Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.
const numberCopia = number.slice()
const stringsCopia = strings.slice()
const mistaCopia = mista.slice()

//a) Adicione um item `number` ao **início** do primeiro array. 
//Utilize `console.log()` para exibir o original e a cópia.
numberCopia.unshift(5)
console.log("original", number)
console.log("cópia", numberCopia)

//b) Remova o **último item** do segundo array. 
//Utilize `console.log()` para exibir o original e a cópia.
stringsCopia.pop()
console.log("original", strings)
console.log("cópia", stringsCopia)

//c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.
mistaCopia.splice(1,1)
console.log("original", mista)
console.log("cópia", mistaCopia)
