const listaNumeros = [1, 2, 3, 4, 5]
const listaStrigs = ['nome', 'sobrenome', 'profissao']
const misturados = [1, 'nome', true]
// criar uma cópia de cada variavel
const listaNumerosCopia = listaNumeros.slice()
const listaStrigsCopia = listaStrigs.slice()
const misturadosCopia = misturados.slice()

// a) Adicione um item `number` ao **início** do primeiro array. 
listaNumerosCopia.unshift(100)

console.log(listaNumerosCopia)
console.log(listaNumeros)
// b) Remova o **último item** do segundo array.
listaStrigsCopia.pop()

console.log(listaStrigsCopia)
console.log(listaStrigs)

// c) Remova o **segundo item** do terceiro array.
misturadosCopia.splice(1,1)
console.log(misturadosCopia)
console.log(misturados)

