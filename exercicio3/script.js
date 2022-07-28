let numeros= [5,7,2]
let string= ["luana", "Alice", "Ranulfo"]
let diversos= [8, "Luana", false]


let numerosCopia= numeros
let stringCopia= string
let diversosCopia= diversos
console.log(numerosCopia)
console.log(stringCopia)
console.log(diversosCopia)
numerosCopia.push(8)
console.log(numerosCopia)
console.log(numeros)
string.pop()
console.log(string)
console.log(stringCopia)
diversos.splice(1,1)
console.log(diversos)
console.log(diversosCopia)
