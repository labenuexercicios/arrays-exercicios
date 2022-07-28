const arraysNumber = [1, 3, 2, 4]
console.log(arraysNumber)

const arrayStrnigs = ["nami","senna","sona"] 
console.log(arrayStrnigs)

const arraysVariados = ["leona", 2, true]
console.log(arraysVariados)

//////////////////////////////////////////////////////////////////////////

let arraysNumberCopia = arraysNumber.slice()
console.log(arraysNumberCopia)
arraysNumberCopia.push(5)
console.log(arraysNumberCopia)

let arrayStrnigsCopia = arrayStrnigs.slice()
console.log(arrayStrnigsCopia)
arrayStrnigsCopia.pop()
console.log(arrayStrnigsCopia)

let arraysVariadosCopia = arraysVariados.slice()
console.log(arraysVariados)
arraysVariadosCopia.splice(2, 3)
console.log(arraysVariadosCopia)