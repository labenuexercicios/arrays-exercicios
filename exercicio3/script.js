//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const numero = [5, 2, 4, 8, 6, 1, 7, 9, 3]
const texto = ["A", "B", "C", "D", "E", "F"]
const mista = [5000, "game of thrones", true]
const numeroCopia = numero.slice()
const textoCopia = texto.slice()
const mistaCopia = mista.slice()

//Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
numero.push(10)
console.log(numero)
console.log(numeroCopia)

//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
texto.pop()
console.log(texto)
console.log(textoCopia)

//Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
mista.splice(1, 1)
console.log(mista)
console.log(mistaCopia)
