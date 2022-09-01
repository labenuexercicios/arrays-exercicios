const arrayNum = [15 , 22, 30, 42]
const arrayStrings = ["banana", "maça", 'mamão']
const arrayTudo = [20, "milena", true]


const arrayNumCopia = arrayNum.slice()
arrayNum.push(9)
console.log( arrayNum, 
arrayNumCopia )

const arrayStringsCopia = arrayStrings.slice()
arrayStrings.pop()
console.log( arrayStrings, 
arrayStringsCopia )


const arrayTudoCopia = arrayTudo.slice()
arrayTudo.splice(1,1)
console.log( arrayTudo, 
arrayTudoCopia)

