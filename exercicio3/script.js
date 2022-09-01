//VARIÁVEIS

const num = [27,41,15,13,7,100,83,91,74]
const strings = ["batata", "pera", "chuchu", "café"]
const varios = [15,"cahcorro", true]

//NOVOS ARRAYS

const numCopia = num.slice()
const stringsCopia = strings.slice()
const variosCopia = varios.slice()

//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
numCopia.push(10000)
console.log("Original:", num)
console.log("Cópia:", numCopia)

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
stringsCopia.pop()
console.log("Original:",strings)
console.log("Cópia:",stringsCopia)

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
variosCopia.splice(1,1)
console.log("Original:",varios)
console.log("Cópia:",variosCopia)