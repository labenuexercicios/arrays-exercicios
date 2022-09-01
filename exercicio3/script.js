firstArrayOriginal = [2,3,5,1]
firstArrayCopia = firstArrayOriginal.slice()
secondArrayOriginal = ['Janela', 'Carro', 'Violão']
secondArrayCopia = secondArrayOriginal.slice()
thirdArrayOriginal = [6,true,'Mesa',7]
thirdArrayCopia = thirdArrayOriginal.slice()

firstArrayCopia.push(8)
console.log(firstArrayOriginal)
console.log(firstArrayCopia)
console.log("-----------------------")

secondArrayCopia.pop()
console.log(secondArrayOriginal)
console.log(secondArrayCopia)
console.log("-----------------------")

thirdArrayCopia.splice(1,1)
console.log(thirdArrayOriginal)
console.log(thirdArrayCopia)
console.log("-----------------------")