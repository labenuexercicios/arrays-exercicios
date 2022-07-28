let arrayNumberos = [ 7, 9, 1,]
let arrayString = [ "arroz", "feijao", "batata"]
let arrayTodos= [ "doce",  3, false]



console.log("Tamanho do primeiro array:", arrayNumberos.length)
console.log("Tamanho do segundo array:",arrayString.length)
console.log("Tamanho do terceiro array:",arrayTodos.length)

console.log("Primeiro item:", arrayNumberos[0])
console.log("Segundo item:", arrayString[1])
console.log("Terceiro item:", arrayTodos[2])


console.log("Existe 2 no primeiro array?", arrayNumberos.includes(2))
console.log("Existe 3 no terceiro array?", arrayTodos.includes(3))

//criando uma copia do array 
let arrayNumberosCopia = arrayNumberos.slice()
let arrayStringCopia = arrayString.slice()
let arrayTodosCopia = arrayTodos.slice()

//Adicionando "5" em arrayNumeros com .push
arrayNumberos.push(5)
console.log(arrayNumberos)
console.log(arrayNumberosCopia)

//removendo ultimo item do arraystring com .splice
arrayString.splice(2,1)
console.log(arrayString)
console.log(arrayStringCopia)

arrayTodos.splice(1,1)
console.log(arrayTodos)
console.log(arrayTodosCopia)


