console.log(" - EXERCÍCIO 3 [ARRAYS] -")

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie três novos arrays, chamados nomeDoArrayOriginalCopia, e faça o que se pede abaixo nas cópias dos arrays originais;
const originFir = ["balão",37,10,true,"leão","boleto", false,false,"fim"]
const originSec = [1000,"chimarrão",7,false,"orquídea",true,603]
const originThi = [false,"origami","férias",3,27,true,98,101,17]

const copyFir = originFir.slice()
const copySec = originSec.slice()
const copyThi = originThi.slice()

// Adicione um item number ao início do primeiro array. Utilize console.log() para exibir o original e a cópia;
copyFir.unshift(111)
console.log("A Primeira Array Original é:",originFir)
console.log("A Primeira Array Cópia é:",copyFir)

// Remova o último item do segundo array. Utilize console.log() para exibir o original e a cópia;
copySec.pop()
console.log("A Segunda Array Original é:",originSec)
console.log("A Segunda Array Cópia é:",copySec)

// Remova o segundo item do terceiro array. Utilize console.log() para exibir o original e a cópia;
copyThi.splice(1,1)
console.log("A Terceira Array Original é:",originThi)
console.log("A Terceira Array Cópia é:",copyThi)
