//arrays
const arrayNumbers = [8, 12, 52, 47]
const arrayStrings = ["john", "paul", "george"]
const arraySort = [71, "revolver", true]

/* //impressões
console.log(arrayNumbers)
console.log(arrayStrings)
console.log(arraySort)

//length
console.log("length", arrayNumbers.length)
console.log("length", arrayStrings.length)
console.log("length", arraySort.length)

//itens
console.log("item", arrayNumbers[0])
console.log("item", arrayStrings[1])
console.log("item", arraySort[2])

//includes

console.log("includes", arrayNumbers.includes(52))
console.log("includes", arrayNumbers.includes(false)) */

//cópias

const copyArrayNumbers = arrayNumbers.slice()
const copyArrayStrings = arrayStrings.slice()
const copyArraySort = arraySort.slice()


//manipulação

copyArrayNumbers.push(69)
console.log("cópia numbers", copyArrayNumbers)
console.log("original numbers", arrayNumbers)

copyArrayStrings.pop()
console.log("cópia strings", copyArrayStrings)
console.log("original strings", arrayStrings)

copyArraySort.splice(1, 1)
console.log("cópia sort", copyArraySort)
console.log("original sort", arraySort)


