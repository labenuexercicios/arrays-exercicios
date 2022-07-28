const arrayNumber = [12,52,32,14,81,99]
const arrayString = ["carro","moto","bicicleta","quadriciclo"]
const arrayTodos = [9,"aviao",false]

const copiaArrayNumber = arrayNumber.slice()
const copiaArrayString = arrayString.slice()
const copiaArrayTodos = arrayTodos.slice()

copiaArrayNumber.push(76)
console.log("original",arrayNumber)
console.log("copia",copiaArrayNumber)
copiaArrayString.pop()
console.log("original",arrayString)
console.log("copia",copiaArrayString)
copiaArrayTodos.splice(2,1)
console.log("original",arrayTodos)
console.log("copia",copiaArrayTodos)