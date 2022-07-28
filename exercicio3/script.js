const arrayOriginal1 = ['Não', 'entendi', 'o enunciado ','do exercico', 3 ];
const arrayOriginal2 = ['Então coloquei', 'qualquer', 'coisa']
const arrayOriginal3 = ['Beijos', 'Labenu']

// Adicionando um item `number` ao array
console.log(arrayOriginal1)
arrayOriginal1.push('number')
console.log(arrayOriginal1)

console.log(arrayOriginal2)

//Removendo o ultimo item do Segundo array
const removed = arrayOriginal2.pop()
console.log(arrayOriginal2)

//Removendo o Segundo item do Terceiro array
console.log(arrayOriginal3)
const removed2Item = arrayOriginal3.splice(0,1)
console.log(removed2Item)



 

