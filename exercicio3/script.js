const quartosDisponiveisCopia = [101,302,310]
   
const listaBrindesCopia = ['caneca', 'Chaveiro', 'Bottom']

const listaMistaCopia = [123, 'caneca', false]

console.log(quartosDisponiveisCopia)
console.log(listaBrindesCopia)
console.log(listaMistaCopia)


// a) Adicione um item `number` ao **início** do primeiro array.
//  Utilize `console.log()` para exibir o original e a cópia.
quartosDisponiveisCopia.push(422)

console.log(quartosDisponiveisCopia)

// b) Remova o **último item** do segundo array. 
// Utilize `console.log()` para exibir o original e a cópia.

listaBrindesCopia.pop()
console.log(listaBrindesCopia)

// Remova o **segundo item** do terceiro array.
//  Utilize `console.log()` para exibir o original e a cópia.

listaMistaCopia.splice(1,1)
console.log(listaMistaCopia)

